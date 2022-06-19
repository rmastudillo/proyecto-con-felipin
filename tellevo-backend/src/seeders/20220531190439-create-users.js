'use strict';

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
    const usersArray = [];
    usersArray.push({
      username: 'pedropascal',
      driver: true,
      email: "pedropascal@uc.cl",
      password: "pedropascal123",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    usersArray.push({
      username: 'pedropascal2',
      driver: false,
      email: "pedropascal2@uc.cl",
      password: "pedropascal123",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    usersArray.push({
      username: 'notpedroahorasi',
      driver: false,
      email: "notpedroahorasi@uc.cl",
      password: "notpedroahorasi123",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    usersArray.push({
      username: 'notpedro',
      driver: true,
      email: "notpedro@uc.cl",
      password: "notpedro123",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    usersArray.push({
      username: 'pedronomaneja',
      driver: false,
      email: "pedronomaneja@uc.cl",
      password: "pedronomaneja123",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return queryInterface.bulkInsert('users', usersArray);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
