/* eslint-disable camelcase */
const { doQuery } = global;

function Question({
  id, content, user_id,
}) {
  this.id = id;
  this.content = content;
  this.user_id = user_id;
}

Question.prototype.save = function () {
  const params = [this.content, this.user_id];
  return doQuery("INSERT INTO questions(content, user_id) values($1,$2) returning id;", params);
};

Question.find = function () {
  return doQuery("select * from questions;");
};

Question.findById = function (id) {
  const params = [id];
  return doQuery("select * from questions where id = $1; ", params);
};

exports.default = Question;
