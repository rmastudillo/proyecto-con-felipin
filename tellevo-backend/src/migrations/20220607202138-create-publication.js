'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('publications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
      },
      idUser_1: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
      },
      idUser_2: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
      },
      idUser_3: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
      },
      idUser_4: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
      },
      start: {
        type: Sequelize.STRING
      },
      end: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      available_seats: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('publications');
  }
};