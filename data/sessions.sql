create table sessions(
  sid character varying NOT NULL primary key,
  sess json NOT NULL,
  expire timestamp without time zone NOT NULL
);
