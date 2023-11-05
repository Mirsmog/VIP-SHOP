const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user',{
  id:{type: DataTypes.INTEGER, primaryKey: true, auto}
})
