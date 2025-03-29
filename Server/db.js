//for local database

/*

const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'AniHub',
    password: '1911192',
    port: 5432,
});

module.exports = pool
*/  



const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false, // Required for Supabase
    },
});

module.exports = pool;
