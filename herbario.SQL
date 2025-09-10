CREATE SCHEMA herbario;

USE herbario;

CREATE TABLE plantas(
	id INT AUTO_INCREMENT PRIMARY KEY,
    foto TEXT,
    nome VARCHAR(255) NOT NULL,
    dominio VARCHAR(255) NOT NULL
);

INSERT INTO plantas (foto, nome, dominio) 
VALUES ()