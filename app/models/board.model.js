var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var boardSchema = new Schema({
  head:{
    type:String,
    index:true,
    required:true
  },
  perminssion:{
    type: String,
    enum:['public','private','other'],
    default: 'other'
  },
  content:{
    type: String,
    index: true,
    required:true,
  },
  like:{
    type: Number,
  },
  create:{
    type: Date,
    default: Date.now
  }

});
mongoose.model('Board', boardSchema);
