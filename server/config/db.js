const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'empresadb',
    password: '123456',
    port: 5432
})

/* const getData= async () => {
    const res = await pool.query('SELECT NOW()');
    console.log(res.rows[0].now);
    return res.rows
}

getData() */

module.exports = pool