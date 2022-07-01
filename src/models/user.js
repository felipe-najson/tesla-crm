const mongoose = require('mongoose');

export const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 1024,
  },
  username: {
    type: String,
    required: true,
    maxlength: 50,
  },
});

export const User = mongoose.model('User', userSchema);
