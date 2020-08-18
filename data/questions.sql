create table questions (
  id serial primary key,
  content varchar(1000) not null,
  user_id int not null,
  foreign key (user_id) references users(id) on delete cascade
);
