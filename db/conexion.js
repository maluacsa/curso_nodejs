const mariadb = require("mariadb");

const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABSE,
    concection:limit: process.env.CONN_LIMIT,

    

}