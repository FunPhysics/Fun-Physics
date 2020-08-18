create table answers (
  id serial primary key,
  content varchar(1000) not null,
  user_id int not null,
  question_id int not null,
  foreign key (user_id) references users(id) on delete cascade,
  foreign key (question_id) references questions(id) on delete cascade
);
