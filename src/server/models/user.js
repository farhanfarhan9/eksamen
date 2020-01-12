const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: String,
});

const User = model('User', userSchema);
