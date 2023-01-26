'use strict';

const bcrypt = require("bcryptjs")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users',
      [
        {
          name: 'Administrator',
          email: 'admin@gmail.com',
          password: bcrypt.hashSync('password'),
          createdAt: new Date()
        },
        {
          name: 'Statff',
          email: 'staff@gmail.com',
          password: bcrypt.hashSync('password'),
          createdAt: new Date()
        },
        {
          name: 'Patient',
          email: 'patient@gmail.com',
          password: bcrypt.hashSync('password'),
          createdAt: new Date()
        }
      ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
