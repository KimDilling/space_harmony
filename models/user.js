// User model w/ Mongoose
// /models/user.js
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true, unique: true },
  like: { type: Boolean },
  created_at: Date,
  updated_at: Date
});

var User = mongoose.model('User', userSchema);

// Make this available to our other files
module.exports = User;
