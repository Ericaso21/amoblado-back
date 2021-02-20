CREATE USER 'employee'@'%' IDENTIFIED BY '$1$WNo2CvKZ$nZAuClseMHEisfy.zzbr1.';
CREATE USER 'client'@'%' IDENTIFIED BY '$1$WyFl6KXb$HW8fa8qtMfY.7AyBS/jGU0';
GRANT SELECT, UPDATE, DELETE, INSERT ON app_sena.* TO 'employee'@'%';
GRANT SELECT, UPDATE, INSERT ON app_sena.* TO 'client'@'%';

