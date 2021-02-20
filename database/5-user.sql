/*
======================================
User
======================================
*/

DROP TABLE IF EXISTS user;
CREATE TABLE user (
    user_id INT NOT NULL AUTO_INCREMENT,
    role_id INT NOT NULL,
    document_type_id INT NOT NULL,
    gender_id INT NOT NULL,
    frist_name VARCHAR(30) NOT NULL,
    second_name VARCHAR(30),
    surname VARCHAR(30) NOT NULL,
    second_surname VARCHAR(30),
    email VARCHAR(100) UNIQUE NOT NULL,
    password_user VARCHAR(225) NOT NULL,
    points TINYINT(3) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL, 
    PRIMARY KEY(user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE user ADD CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES role(role_id) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE user ADD CONSTRAINT fk_document_type_id FOREIGN KEY (document_type_id) REFERENCES document_type(document_type_id) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE user ADD CONSTRAINT fk_gender_id FOREIGN KEY (gender_id) REFERENCES gender(gender_id) ON DELETE RESTRICT ON UPDATE CASCADE;
