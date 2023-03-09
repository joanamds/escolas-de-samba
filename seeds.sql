DROP DATABASE IF EXISTS EscolasDeSamba;

CREATE DATABASE EscolasDeSamba;

USE EscolasDeSamba;

CREATE TABLE grupos (
	id INT NOT NULL AUTO_INCREMENT,
    grupo VARCHAR(30) NOT NULL, 
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE cidades (
	id INT NOT NULL AUTO_INCREMENT,
    cidade VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE escolas_rj (
	escola_id INT NOT NULL AUTO_INCREMENT,
    grupo_id INT NOT NULL,
    cidade_id INT NOT NULL,
    nome_escola VARCHAR(50) NOT NULL, 
    fundacao YEAR NOT NULL,
    PRIMARY KEY(escola_id),
    FOREIGN KEY (grupo_id) REFERENCES grupos (id),
    FOREIGN KEY(cidade_id) REFERENCES cidades(id)
) ENGINE=INNODB;

CREATE TABLE escolas_sp (
	escola_id INT NOT NULL AUTO_INCREMENT,
    grupo_id INT NOT NULL,
    cidade_id INT NOT NULL,
    nome_escola VARCHAR(50) NOT NULL, 
    fundacao YEAR NOT NULL,
    PRIMARY KEY(escola_id),
    FOREIGN KEY (grupo_id) REFERENCES grupos (id),
    FOREIGN KEY(cidade_id) REFERENCES cidades (id)
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;
