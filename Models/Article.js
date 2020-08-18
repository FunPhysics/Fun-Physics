/* eslint-disable camelcase */
const { doQuery } = global;

function Article({
  id, title, description, author_id, img_url,
}) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.img_url = img_url;
  this.author_id = author_id;
}

Article.prototype.save = function () {
  const params = [this.title, this.description, this.img_url, this.author_id];
  return doQuery("INSERT INTO articles(title, description, img_url, author_id) values($1,$2,$3,$4) returning id;", params);
};

Article.find = function () {
  return doQuery("select * from articles inner join users on articles.author_id = users.id order by articles.id desc;");
};

Article.findById = function (id) {
  const params = [id];
  return doQuery("select * from articles where id = $1; ", params);
};

Article.findByAuthorId = function (id) {
  const params = [id];
  return doQuery("select * from articles where author_id = $1; ", params);
};

Article.findRecentArticles = function () {
  const params = [];
  return doQuery("select * from articles order by id desc limit 4;", params);
};

exports.default = Article;
