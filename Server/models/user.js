var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    validate: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
        }
});

module.exports = {User}
