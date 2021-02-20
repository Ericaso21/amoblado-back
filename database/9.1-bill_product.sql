/*
======================================
BILL_PRODUCT
======================================
*/

DROP TABLE IF EXISTS bill_product;
CREATE TABLE bill_product (
    bill_id INT NOT NULL,
    product_id INT NOT NULL,
    PRIMARY KEY(bill_id,product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE bill_product ADD CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE bill_product ADD CONSTRAINT fk_bills_id FOREIGN KEY (bill_id) REFERENCES bill(bill_id) ON DELETE RESTRICT ON UPDATE CASCADE;
