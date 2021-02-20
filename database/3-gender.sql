/*
======================================
Gender
======================================
*/

DROP TABLE IF EXISTS gender;
CREATE TABLE gender (
    gender_id INT NOT NULL AUTO_INCREMENT,
    gender_name VARCHAR(25) NOT NULL,
    gender_acronym VARCHAR(2) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY(gender_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO gender VALUES
(NULL,'Masculino','M',now()),
(NULL,'Femenino','F',now()),
(NULL,'Otro','O',now());