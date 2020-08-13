/* eslint-disable camelcase */
const { doQuery } = global;

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

exports.default = User;
