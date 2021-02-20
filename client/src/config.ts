module.exports = {
    RDS_HOSTNAME: process.env.RDS_HOSTNAME || 'localhost',
    RDS_USURNAME: process.env.RDS_USURNAME || 'root',
    RDS_DATABASE: process.env.RDS_DATABASE || 'app_sena',
    RDS_PASSWORD: process.env.RDS_PASSWORD || '63a9f0ea7bb98050796b649e85481845',
    RDS_PORT: process.env.RDS_PORT || 3306
}