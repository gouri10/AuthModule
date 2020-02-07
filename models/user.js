const mongoose = require('mongoose')
//onst bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
local: {
  username: String,
  email: {
    type: String,
    unique: true
    },
  password: String
  },
social: {
  github: {
    id: String,
    token: String,
    displayName: String,
    username: String,
    photo: String
    }
  },

})

var User = mongoose.model('User', UserSchema);

module.exports = User;