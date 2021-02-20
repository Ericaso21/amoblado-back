/*
======================================
BILL
======================================
*/

DROP TABLE IF EXISTS bill;
CREATE TABLE bill (
    bill_id INT NOT NULL AUTO_INCREMENT,
    bill_date DATE NOT NULL,
    subtotal FLOAT(3,1) NOT NULL,
    iva FLOAT(3,1) NOT NULL,
    total FLOAT(3,1) NOT NULL,
    PRIMARY KEY(bill_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
