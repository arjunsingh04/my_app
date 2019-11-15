/**
 * @fileoverview connect mysql db 
 * @author arjunics027@gmail.com (Arjun Singh)
 * @created on 15-11-2019
 * @company N/A
 */

const Sequelize = require('sequelize');
const config = require('../../config/dbConfig');

const connection = new Sequelize(config.db.database, config.db.username, config.db.password, {
   host: config.db.host,
   dialect: config.db.dialect,
   pool: {
      max: 5, // maximum no. of connections in a pool
      min: 0, // minimum no. of connections in a pool
      acquire: 50000, // maximum time (milliseconds) pool trying to connect before throwing error
      idle: 10000 // maximum time (milliseconds) can be idle before releasing the connection
   }
});

// database object
const dbObj = {};
dbObj.Sequelize = Sequelize;
dbObj.connection = connection;

// defining models here
dbObj.user = require('../../app/models/user')(connection, Sequelize);

module.exports = dbObj;