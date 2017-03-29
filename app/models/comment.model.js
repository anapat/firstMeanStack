var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  content:{
    type: String,
    index: true,
    require: true
  },
  like:{
    type: Number
  },
  author:{
    type: Schema.ObjectId,
    ref:'Member'
  },
  creat:{
    type: Date,
    default: Date.now
  }
},{timestamps: true});
mongoose.model('Comment',commentSchema);
