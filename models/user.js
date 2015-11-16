// User model w/ Mongoose
// /models/user.js
var mongoose = require('mongoose');

var charactersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true, unique: true },
  like: { type: Boolean },
  created_at: Date,
  updated_at: Date
});

var Characters = mongoose.model('Characters', charactersSchema);

// Make this available to our other files
module.exports = Characters;
