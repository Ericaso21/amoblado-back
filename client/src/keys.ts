var config = require('./config');

export default {

    database: {
        host: config.RDS_HOSTNAME,
        user: config.RDS_USURNAME,
        password: config.RDS_PASSWORD,
        database: config.RDS_DATABASE,
        port: config.RDS_PORT
    }
}