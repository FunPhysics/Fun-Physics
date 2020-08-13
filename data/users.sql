create table users (
  id int(11) serial primary key,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  email varchar(100) not null,
  password varchar(1000) not null
)
