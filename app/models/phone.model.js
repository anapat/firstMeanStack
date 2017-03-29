var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhoneSchema  = new Schema({
  name:String,
  phone: {
    type: String,
    index: true,
    required: true
  },
  author:{
    type: Schema.ObjectId,
    ref:'User'
  }
});

mongoose.model('Phone',PhoneSchema);
