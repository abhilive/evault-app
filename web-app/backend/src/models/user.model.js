const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  // sequelize.drop({ force: true });

  const {INTEGER, STRING, TEXT, FLOAT, BOOLEAN, DATE, CHAR} = DataTypes;
  const User = sequelize.define('user', {
      user_id: {type: INTEGER, primaryKey: true, autoIncrement: true},
      name: {type: STRING, allowNull: false},
      gender: {type: CHAR, allowNull: false},
      email: {type: STRING, unique: true, allowNull: false},
      phone: {type:TEXT, allowNull: false},
      password: {type:STRING, allowNull: false},
      public_address: {type: TEXT, unique: true, allowNull: false },   
  });
  
  User.prototype.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
  User.prototype.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  // User.sync({ alter: true }).then(() => {
  //   //return User.findAll();
  //   return User.create({
  //     userId: '',
  //     roleId: 1,
  //     name: 'MJY Chandrachud',
  //     gender: 'F',
  //     email: 'jyc3@mail.com',
  //     phone: '31231232',
  //     password: '31231232'
  //   });
  //   console.log("synced successfully.");
  // }).then((users) => {
  //     //console.log(users.every(user => user instanceof User)); // true
  //     console.log("All users:", JSON.stringify(users, null, 2));
  // }).catch((err) => {
  //     console.log(err);
  // });
  
  return User;
};
