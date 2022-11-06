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

     await queryInterface.bulkInsert('Coupons', [
      {
        tag: 'FIXED10',
        minPrice: 50,
        minItem: 1,
        discountAmountOff: 10,
        discountPercentOff: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'PERCENT10',
        minPrice: 100,
        minItem: 2,
        discountAmountOff: null,
        discountPercentOff: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'MIXED10',
        minPrice: 200,
        minItem: 3,
        discountAmountOff: 10,
        discountPercentOff: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'REJECTED10',
        minPrice: 1000,
        minItem: 0,
        discountAmountOff: 10,
        discountPercentOff: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Coupons', null, {});
  }
};
