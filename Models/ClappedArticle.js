/* eslint-disable camelcase */
const { doQuery } = global;

function ClappedArticle({ article_id, user_id }) {
  this.article_id = article_id;
  this.user_id = user_id;
}

ClappedArticle.prototype.save = function () {
  const params = [this.article_id, this.user_id];
  return doQuery("INSERT INTO clapped_articles(article_id, user_id) values($1,$2)", params);
};

ClappedArticle.findByUserId = function (id) {
  const params = [id];
  return doQuery("select * from clapped_articles inner join articles on clapped_articles.article_id = articles.id where user_id = $1; ", params);
};

exports.default = ClappedArticle;
