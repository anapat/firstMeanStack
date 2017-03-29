var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
  full:{
    type: String,
    index: true,
    trim:true,
    required: true
  },
  username:{
    type: String,
    index: true,
    required:true
  },
  password:{
    type: String,
    required: true
  },
  email:{
    type: String,
    match: /.+\@.+\.+/,
    required:true
  },
  actor:{
    type: String,
    enum:['other','member','admin'],
    default:'other'
  },
  create:{
    type: Date,
    default: Date.now
  }
});
mongoose.model('Member',MemberSchema);
