const { Pool } = require('pg');

const pool = new Pool({
    user : "node_user",
    host : "localhost",
    database : "monstersdb",
    password : "node",
    port : "5432"
});

module.exports = pool;