/*
======================================
CATEGORY
======================================
*/

DROP TABLE IF EXISTS category;
CREATE TABLE category (
    category_id INT NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL, 
    PRIMARY KEY(category_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO category VALUES 
(NULL,'SOFÁ CAMA',now(),now()),
(NULL,'SOFÁ',now(),now()),
(NULL,'SOFA L',now(),now()),
(NULL,'CAMAS',now(),now()),
(NULL,'JUEGO DE COMEDORES',now(),now()),
(NULL,'MESAS',now(),now()),
(NULL,'SILLAS',now(),now()),
(NULL,'BIFFES',now(),now());


UPDATE category SET category_name = convert(cast(convert(category_name using latin1) as binary) using utf8);