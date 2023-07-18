const { genSalt, hash, compare } = require('bcrypt');

const saltRounds = 10;

  exports.cryptPassword = (password, callback) => { 
    genSalt(saltRounds, (err, salt) => {
      if (err) return callback(err);
      
    hash(password, salt, (err, hash) => callback(err, hash));
    });
  };
  
  exports.comparePassword = (plainPass, hashWord, callback) => {
    compare(plainPass, hashWord, (err, result) => {   
      return err == null ?
      callback(null, result) :
      callback(err);
    });
  };

