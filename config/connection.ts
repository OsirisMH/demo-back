import { Sequelize } from 'sequelize';

const db = new Sequelize('demo', 'osiris', 'asthar', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false,
});

export default db;
