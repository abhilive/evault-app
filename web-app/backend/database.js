/* eslint-disable no-console */
const { Sequelize } = require('sequelize');

const RolesModel = require('./src/models/roles.model');
const UserModel = require('./src/models/user.model');

const { applyExtraSetup } = require('./src/models/extra-setup');

const sequelize = new Sequelize('evault_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Roles = RolesModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);


applyExtraSetup(sequelize);

// sequelize.sync({ force: true })
//   .then(() => {
//     console.log('Database & tables created!');
//   });

module.exports = {
  User,
  Roles
};

// const modelDefiners = [
//   require('./src/models/roles.model'),
// 	require('./src/models/user.model')
// 	// Add more models here...
// 	// require('./models/item'),
// ];

// We define all models according to their files.
// for (const modelDefiner of modelDefiners) {
// 	modelDefiner(sequelize);
// }

// We execute any extra setup after the models are defined, such as adding associations.
//applyExtraSetup(sequelize);

// const connectDB = async () => {
//   try {
//     await sequelize.authenticate()
//     await sequelize.sync({ alter: true })
//     console.log('++++ Connection has been established successfully. ++++')
//   } catch (error) {
//     console.error('Unable to connect to the database:', error)
//   }
// }

// connectDB();

// We export the sequelize connection instance to be used around our app.