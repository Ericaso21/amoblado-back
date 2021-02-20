/*
======================================
DOCUMENT_TYPE
======================================
*/

DROP TABLE IF EXISTS document_type;
CREATE TABLE document_type (
    document_type_id INT NOT NULL AUTO_INCREMENT,
    document_type_name VARCHAR(30) NOT NULL,
    acronym VARCHAR(2) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY(document_type_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO document_type VALUES
(NULL,'Cedula de ciudadania','CC',now()),
(NULL,'Cedula de extranjeria','CE',now()),
(NULL,'Tarjeta de identidad','TI',now()),
(NULL,'Pasaporte','PA',now());