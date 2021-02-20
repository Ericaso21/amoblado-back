/*
======================================
interest
======================================
*/

DROP TABLE IF EXISTS interest;
CREATE TABLE interest (
    interest_id INT NOT NULL AUTO_INCREMENT,
    interest_rate FLOAT(3,1) NOT NULL,
    PRIMARY KEY(interest_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO interest VALUES (NULL,2.5);
