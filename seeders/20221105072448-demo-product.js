'use strict';

/** @type {import('sequelize-cli').Migration} */
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
     await queryInterface.bulkInsert('Products', [
      {
        productName: 'Product 1',
        productPrice: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Product 2',
        productPrice: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Product 3',
        productPrice: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Product 4',
        productPrice: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Product 5',
        productPrice: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Product 6',
        productPrice: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Product 7',
        productPrice: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Product 8',
        productPrice: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Product 9',
        productPrice: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Product 10',
        productPrice: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: 'Product 11',
        productPrice: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Products', null, {});
  }
};
