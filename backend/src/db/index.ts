const Sequelize = require('sequelize');
const config = require('./config');

import User from './models/User';
import Tweet from './models/Tweet';


const conn = new Sequelize(config);

User.init(conn);
Tweet.init(conn);

Tweet.associate(conn.models);

module.exports = conn;