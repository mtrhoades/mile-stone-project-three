const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'postgres',
    password: 'Ruckus179',
    host: 'localhost',
    port: 5432,
    database: 'kulaLodgeApp'
});

module.exports = pool;