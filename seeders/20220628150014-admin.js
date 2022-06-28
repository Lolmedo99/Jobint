'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Admins', [
      {
        name: 'Mari',
        lastName: 'Ruiz',
        email: 'mari@hola.com',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Admins', null, {});
  }
};
