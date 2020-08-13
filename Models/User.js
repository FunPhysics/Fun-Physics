/* eslint-disable camelcase */
function User({
  id, username, password, email, first_name, last_name,
}) {
  this.id = id;
  this.username = username;
  this.password = password;
  this.email = email;
  this.first_name = first_name;
  this.last_name = last_name;
}

exports.default = User;
