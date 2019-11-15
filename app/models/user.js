/**
 * @fileoverview model for user table
 * @author arjunics027@gmail.com (Arjun Singh)
 * @created on 16-11-2019
 * @company N/A
 */

const sequelize = require('sequelize');

module.exports = (connection, Sequelize) => {
   let User = sequelize.define('users', {
      email: {
         type: Sequelize.STRING
      },
      name: {
         type: Sequelize.STRING
      },
      phone: {
         type: Sequelize.STRING
      },
      profile_photo: {
         type: Sequelize.STRING
      },
   }, {
      freezeTableName: true, // not convert table name into plural
      timestamps: true, // add createdaAt and updatedAt to user schema
      paranoid: true // add deletedAt to user schema
   });
   return User;
};
