'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("books", {
      id: {
        type: sequelize.UUID,
        primaryKey: true
      },
      name: {
        type: sequelize.STRING,
        allowNull: false
      },
      pages: {
        type: sequelize.INTEGER,
        allowNull: false
      },
      published_date: {
        type: sequelize.DATE,
        allowNull: false
      },
      genre: {
        type: sequelize.ENUM('fantasy', 'science', 'romance', 'horror', 'history'),
        allowNull: false
      },
      author_id: {
        type: sequelize.UUID,
        allowNull: false,
        references: {
          model: 'authors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("books");
  }
};
