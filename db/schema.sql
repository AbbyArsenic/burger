/* Create and use the burger db */
CREATE DATABASE  `burgers_db`;
USE `burgers_db`;

/* Create a table for all your burgers */
CREATE TABLE `burgers` (
  `id` INT auto_increment,
  `burger_name` VARCHAR(255),
  `devoured` boolean default false,
  `date` TIMESTAMP,
  PRIMARY KEY ( `id` ) );