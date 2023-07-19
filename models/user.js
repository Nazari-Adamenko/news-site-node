const { cryptPassword, comparePassword } = require('../utils/encryptionUtils')

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, {
        foreignKey: 'userId'
      });
    }

    comparePassword(password) {
      return new Promise((res, rej) => {
        comparePassword(password, this.password, (err, result) => {
          if(err) return rej(err);
          return res(result);
        })
      })
    }
  }

  User.init({
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user, options) => {
    cryptPassword(user.password, (err, hash) => {
      if(err) throw err;
      if(!hash == undefined) console.error('Hash is missing');
      user.password = hashedPassword;
    });
  });

  return User;
};