'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', {
         email: {
            type: Sequelize.STRING,
            allowNull: false
         },
         phone: {
            type: Sequelize.STRING,
            allowNull: false
         },
         dob: {
            type: Sequelize.DATE,
            allowNull: false
         },
         password: {
            type: Sequelize.STRING,
            allowNull: false
         },
         createdAt: {
            type: Sequelize.DATE
         },
         updatedAt: {
            type: Sequelize.DATE
         },
         deletedAt: {
            type: Sequelize.DATE
         }
      })
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
   }
};
