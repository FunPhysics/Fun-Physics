create table articles (
  id serial primary key,
  title varchar(1000) not null,
  description text not null,
  reference varchar(1000) null,
  img_url varchar(1000) not null default 'https://www.reachivy.com/wp-content/uploads/2017/12/SOP.png',
  author_id int not null,
  foreign key (author_id) references users(id) on delete cascade
);
