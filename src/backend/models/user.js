const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true
  },
  password: {
    type: Schema.Types.String,
    required: true
  },
  fullname: {
    type: Schema.Types.String,
    required: true,
  },
});

const User = model('User', userSchema);

module.exports = User;
