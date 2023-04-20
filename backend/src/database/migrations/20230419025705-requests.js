"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("requests", {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      purchase_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      amont: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
      },
      total_value: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
      },
      product_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: { tableName: "products" },
          key: "id",
        },
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("requests");
  },
};
