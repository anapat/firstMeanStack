var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  phone: {
    type: String,
    index: true
  },
  password: String
});
mongoose.model('User',UserSchema);
