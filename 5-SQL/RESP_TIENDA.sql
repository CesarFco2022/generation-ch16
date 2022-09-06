CREATE DATABASE zulibb;
USE zulibb;
CREATE TABLE wuapa(
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
telefono CHAR(50) NOT NULL,
direccion VARCHAR(40) NOT NULL
);

INSERT INTO wuapa (nombre, apellido, telefono, direccion)
VALUES('Pedro', 'Paramo', '5576231829', 'Comala'),
('Raul', 'Sanchez', '5576231239', 'Comala'),
('Victor', 'Fernandez', '5576231845', 'Comala');

SELECT * FROM zulibb.wuapa;

DELETE FROM wuapa
WHERE cliente_id =2;

DELETE FROM wuapa
WHERE nombre ='Pedro';


