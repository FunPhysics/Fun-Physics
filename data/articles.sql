create table articles (
  id serial primary key,
  title varchar(1000) not null,
  description text not null,
  reference varchar(1000),
  author_id int,
  foreign key (author_id) references users(id) on delete cascade
);
