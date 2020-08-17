create table clapped_articles (
  user_id int,
  foreign key (user_id) references users(id) on delete cascade,
  article_id int,
  foreign key (article_id) references articles(id) on delete cascade,
  primary key(user_id, article_id)
);
