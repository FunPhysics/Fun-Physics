/* eslint-disable camelcase */
const { doQuery } = global;

function Article({
  id, title, description, author_id,
}) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.author_id = author_id;
}

Article.prototype.save = function () {
  const params = [this.title, this.description, this.author_id];
  return doQuery("INSERT INTO articles(title, description, author_id) values($1,$2, $3) returning id;", params);
};

Article.find = function () {
  return doQuery("select * from articles;");
};

Article.findById = function (id) {
  const params = [id];
  return doQuery("select * from articles where id = $1; ", params);
};

Article.findByAuthorId = function (id) {
  const params = [id];
  return doQuery("select * from articles where author_id = $1; ", params);
};

Article.findRecentBooks = function () {
  const params = [];
  return doQuery("select * from articles order by id desc limit 2;", params);
};

exports.default = Article;
