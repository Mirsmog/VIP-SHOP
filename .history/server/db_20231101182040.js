import { Sequelize } from 'sequelize';

module.exports = new Sequelize({
  process.env.DB
});
