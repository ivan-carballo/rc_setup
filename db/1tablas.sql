-- MySQL Script generated by MySQL Workbench
-- vie 10 may 2024 17:27:59
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema rc_setup
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema rc_setup
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rc_setup` ;
USE `rc_setup` ;

-- -----------------------------------------------------
-- Table `rc_setup`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rc_setup`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(15) NOT NULL,
  `name` VARCHAR(15) NOT NULL,
  `password` VARCHAR(8) NOT NULL,
  `rol` VARCHAR(15) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rc_setup`.`chasis`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rc_setup`.`chasis` (
  `chasis_id` INT NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`chasis_id`),
  UNIQUE INDEX `chasis_id_UNIQUE` (`chasis_id` ASC) VISIBLE,
  UNIQUE INDEX `model_UNIQUE` (`model` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rc_setup`.`style`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rc_setup`.`style` (
  `style_id` INT NOT NULL AUTO_INCREMENT,
  `style` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`style_id`),
  UNIQUE INDEX `style_id_UNIQUE` (`style_id` ASC) VISIBLE,
  UNIQUE INDEX `style_UNIQUE` (`style` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rc_setup`.`surface`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rc_setup`.`surface` (
  `surface_id` INT NOT NULL AUTO_INCREMENT,
  `surface` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`surface_id`),
  UNIQUE INDEX `surface_id_UNIQUE` (`surface_id` ASC) VISIBLE,
  UNIQUE INDEX `surface_UNIQUE` (`surface` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rc_setup`.`setup`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rc_setup`.`setup` (
  `setup_id` INT NOT NULL AUTO_INCREMENT,
  `style_id` INT NOT NULL,
  `chasis_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `surface_id` INT NOT NULL,
  `differential_rear` INT NULL,
  `differential_front` INT NULL,
  `height_rear` DECIMAL(5,2) NULL,
  `height_front` DECIMAL(5,2) NULL,
  `camber_front` DECIMAL(5,2) NULL,
  `camber_rear` DECIMAL(5,2) NULL,
  `divergence_front` DECIMAL(5,2) NULL,
  `divergence_rear` DECIMAL(5,2) NULL,
  PRIMARY KEY (`setup_id`, `style_id`, `chasis_id`, `user_id`, `surface_id`),
  UNIQUE INDEX `setup_id_UNIQUE` (`setup_id` ASC) VISIBLE,
  INDEX `fk_setup_style_idx` (`style_id` ASC) VISIBLE,
  INDEX `fk_setup_chasis1_idx` (`chasis_id` ASC) VISIBLE,
  INDEX `fk_setup_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_setup_surface1_idx` (`surface_id` ASC) VISIBLE,
  CONSTRAINT `fk_setup_style`
    FOREIGN KEY (`style_id`)
    REFERENCES `rc_setup`.`style` (`style_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_setup_chasis1`
    FOREIGN KEY (`chasis_id`)
    REFERENCES `rc_setup`.`chasis` (`chasis_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_setup_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `rc_setup`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_setup_surface1`
    FOREIGN KEY (`surface_id`)
    REFERENCES `rc_setup`.`surface` (`surface_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rc_setup`.`fav`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rc_setup`.`fav` (
  `user_id` INT NOT NULL,
  `setup_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `setup_id`),
  INDEX `fk_user_has_setup_setup1_idx` (`setup_id` ASC) VISIBLE,
  INDEX `fk_user_has_setup_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_setup_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `rc_setup`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_setup_setup1`
    FOREIGN KEY (`setup_id`)
    REFERENCES `rc_setup`.`setup` (`setup_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
