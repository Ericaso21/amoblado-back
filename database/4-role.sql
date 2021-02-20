/*
======================================
Role
======================================
*/

DROP TABLE IF EXISTS role;
CREATE TABLE role (
    role_id INT NOT NULL AUTO_INCREMENT,
    role_name VARCHAR(25) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY(role_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO role VALUES
(NULL,'Empleado',now()),
(NULL,'Cliente',now());