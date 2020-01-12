const { model, Schema } = require('mongoose');

const roleSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
});

const Role = model('Role', roleSchema);

module.exports = Role;
