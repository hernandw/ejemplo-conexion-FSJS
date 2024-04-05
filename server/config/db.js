const { Pool } = require('pg');
require('dotenv').config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: 5432
})

/* const getData= async () => {
    const res = await pool.query('SELECT NOW()');
    console.log(res.rows[0].now);
    return res.rows
}

getData() */

module.exports = pool