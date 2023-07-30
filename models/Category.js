// Imports for Model/DataTypes that requires sequelize
const { Model, DataTypes } = require('sequelize');
// Import for sequelize connection
const sequelize = require('../config/connection.js');

class Category extends Model {}

// Define columns for the Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);
// Module export for Category
module.exports = Category;
