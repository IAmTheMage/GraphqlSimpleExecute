const { Sequelize } = require('sequelize');
require('dotenv/config');


const config = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    define: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
}

module.exports = config;