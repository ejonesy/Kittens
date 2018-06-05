CREATE DATABASE kittens_db;
USE kittens_db;

CREATE TABLE kittens
(
	id int NOT NULL AUTO_INCREMENT,
	kitten_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
