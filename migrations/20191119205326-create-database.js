'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createDatabase('my_app');
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.dropDatabase('my_app');
   }
};
