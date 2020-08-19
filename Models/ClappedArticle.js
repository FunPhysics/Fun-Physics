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

ClappedArticle.prototype.remove = function () {
  const params = [this.article_id, this.user_id];
  return doQuery("delete from clapped_articles where article_id=$1 and user_id=$2", params);
};

ClappedArticle.findByUserId = function (id) {
  const params = [id];
  return doQuery("select * from clapped_articles inner join articles on clapped_articles.article_id = articles.id where user_id = $1; ", params);
};

ClappedArticle.findMostClappedArticle = function () {
  const params = [];
  return doQuery("select users.first_name as author_first_name, users.last_name  author_last_name,articles.*, count from articles inner join users on articles.author_id = users.id inner join (select article_id, count(*) as count from clapped_articles group by article_id order by count desc limit 1) as clappedArticle on clappedArticle.article_id = articles.id;", params);
};

exports.default = ClappedArticle;
