/*
======================================
Lendig
======================================
*/

DROP TABLE IF EXISTS lending;
CREATE TABLE lending (
    lending_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    interest_id INT NOT NULL,
    bill_id INT NOT NULL,
    dues TINYINT(3) NOT NULL,
    fees_paid TINYINT(3) NOT NULL,
    status_lending TINYINT(3) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
    PRIMARY KEY(lending_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE lending ADD CONSTRAINT fkuser_id FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE lending ADD CONSTRAINT dk_interest_id FOREIGN KEY (interest_id) REFERENCES interest(interest_id) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE lending ADD CONSTRAINT fkbill_id FOREIGN KEY (bill_id) REFERENCES bill(bill_id) ON DELETE RESTRICT ON UPDATE CASCADE;

