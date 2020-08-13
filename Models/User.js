/* eslint-disable camelcase */
const { doQuery } = global;

const bcrypt = require("bcrypt");

const saltRounds = 10;

function User({
  id, email, password, first_name, last_name,
}) {
  this.id = id;
  this.email = email;
  this.password = password;
  this.first_name = first_name;
  this.last_name = last_name;
}

User.prototype.save = function () {
  const params = [this.email, this.password, this.first_name, this.last_name];
  return doQuery("INSERT INTO users(email, password, first_name, last_name) values($1,$2,$3,$4) returning id;", params);
};

User.findUserByEmail = function (email) {
  const params = [email];
  return doQuery("select * from users where email = $1; ", params);
};

User.register = function (email, password, first_name, last_name) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        const newUser = new User({
          email, password: hash, first_name, last_name,
        });
        newUser.save()
          .then((result) => {
            resolve(result);
          }).catch((e) => reject(e));
      }
    });
  });
};

User.login = function (email, password) {
  return new Promise((resolve, reject) => {
    User.findUserByEmail(email)
      .then((result) => {
        if (!result.rows || !result.rows.length) {
          reject(new Error("username or password not correct!"));
        } else {
          const user = result.rows[0];
          bcrypt.compare(password, user.password, (err, loginResult) => {
            if (err) {
              reject(err);
            } else if (!loginResult) {
              reject(new Error("username or password not correct!"));
            } else {
              resolve(user);
            }
          });
        }
      }).catch((e) => reject(e));
  });
};

exports.default = User;
