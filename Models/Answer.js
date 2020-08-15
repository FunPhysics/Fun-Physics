/* eslint-disable camelcase */
const { doQuery } = global;

function Answer({
  id, content, user_id, question_id,
}) {
  this.id = id;
  this.content = content;
  this.user_id = user_id;
  this.question_id = question_id;
}

Answer.prototype.save = function () {
  const params = [this.content, this.user_id, this.question_id];
  return doQuery("INSERT INTO answers(content, user_id, question_id) values($1,$2, $3) returning id;", params);
};

Answer.findByQuestionId = function (id) {
  const params = [id];
  return doQuery("select * from answers where question_id = $1; ", params);
};

exports.default = Answer;
