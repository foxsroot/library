'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('authors', {
        id: {
          type: sequelize.UUID,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: sequelize.STRING,
          allowNull: false
        },
        date_of_birth: {
          type: sequelize.DATE,
          allowNull: true
        }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("authors");
  }
};
