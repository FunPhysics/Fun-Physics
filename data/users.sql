create table users (
  id serial primary key,
  email varchar(100) unique not null,
  password varchar(1000) not null,
  first_name varchar(50) not null,
  last_name varchar(50) not null
);
