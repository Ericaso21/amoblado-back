/*
======================================
PRODUCT
======================================
*/

DROP TABLE IF EXISTS product;
CREATE TABLE product (
    product_id INT NOT NULL AUTO_INCREMENT,
    category_id INT NOT NULL,
    product_name VARCHAR(80) NOT NULL,
    stock INT NOT NULL,
    product_price FLOAT NOT NULL,
    product_image MEDIUMTEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
    PRIMARY KEY(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE product ADD CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES category(category_id) ON DELETE RESTRICT ON UPDATE CASCADE;

INSERT INTO product VALUES 
(NULL,1,'Sofa cama mauro cuero sintetico',5,399.000,'/assets/PRODUCTOS/SALAS/SOFA CAMA/SOFACAMA MAURO CUERO SINTETICO.PNG',now(),now()),
(NULL,1,'Silla cama angela cuero sintetico',2,599.000,'/assets/PRODUCTOS/SALAS/SOFA CAMA/SILLACAMA ANGELA CUERO SINTETICO.PNG',now(),now()),
(NULL,2,'Sofa vivir cuero sintetico',10,499.000,'/assets/PRODUCTOS/SALAS/SOFA/SOFA VIVIR CUERO SINTETICO.PNG',now(),now()),
(NULL,2,'Sofa JOEL cuero sintetico',11,599.000,'/assets/PRODUCTOS/SALAS/SOFA/SOFÁ JOEL CUERO SINTÉTICO.PNG',now(),now()),
(NULL,3,'Sala modular sofia mauro cuero sintetico',8,599.000,'/assets/PRODUCTOS/SALAS/SOFA L/SALA MODULAR SOFÍA CUERO SINTÉTICO.PNG',now(),now()),
(NULL,4,'Cama roma micro fibra',10,499.000,'/assets/PRODUCTOS/ALCOBAS/CAMAS/CAMA ROMA MICROFIBRA.PNG',now(),now()),
(NULL,4,'Sala cama sterimberg micro fibra',2,1799.000,'/assets/PRODUCTOS/ALCOBAS/CAMAS/SALA CAMA STERIMBERG MICROFIBRA.PNG',now(),now()),
(NULL,5,'Juego de comedores dina 4 puesto',20,1099.000,'/assets/PRODUCTOS/COMEDORES/JUEGOS DE COMEDOR/JUEGO DE COMEDOR DINA 4 PUESTOS.PNG',now(),now()),
(NULL,5,'Juego de comedores dina 6 puesto',17,1399.000,'/assets/PRODUCTOS/COMEDORES/JUEGOS DE COMEDOR/JUEGO DE COMEDOR DINA 6 PUESTOS.PNG',now(),now()),
(NULL,6,'Mesa de comedor italia 4 puestos',9,499.000,'/assets/PRODUCTOS/COMEDORES/MESAS/MESA DE COMEDOR ITALIA 4 PUESTOS.PNG',now(),now()),
(NULL,7,'Pack 2 sillas dina',33,398.000,'/assets/PRODUCTOS/COMEDORES/SILLAS/PACK 2 SILLAS DINA.PNG',now(),now()),
(NULL,8,'Biffe Loft',7,704.000,'/assets/PRODUCTOS/COMEDORES/BIFFES/BIFFE LOFT.PNG',now(),now());

UPDATE product SET product_image = convert(cast(convert(product_image using latin1) as binary) using utf8);

