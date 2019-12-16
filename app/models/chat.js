/**
 * @fileoverview model for user chat
 * @author arjunics027@gmail.com (Arjun Singh)
 * @created on 02-12-2019
 * @company N/A
 */

const sequelize = require('sequelize');

module.exports = (connection, Sequelize) => {
   let Chat = sequelize.define('chats', {
   });
   return Chat;
};