'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Wallets', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('Wallets', null, {});
     
  }
};
