/*
======================================
USER_BILL
======================================
*/

DROP TABLE IF EXISTS user_bill;
CREATE TABLE user_bill (
    user_id INT NOT NULL,
    bill_id INT NOT NULL,
    PRIMARY KEY(user_id,bill_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE user_bill ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE user_bill ADD CONSTRAINT fk_bill_id FOREIGN KEY (bill_id) REFERENCES bill(bill_id) ON DELETE RESTRICT ON UPDATE CASCADE;
