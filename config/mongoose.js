var config = require('./config.js');
var mongoose = require('mongoose');

module.exports = function(){
	mongoose.set('debug',config.debug);

	var db = mongoose.connect(config.mongoUri);
	require('../app/models/user.model.js');
	require('../app/models/phone.model.js');
	require('../app/models/member.model.js');
  require('../app/models/board.model.js');
	require('../app/models/comment.model.js');
	//require('../server/models/user.model.js');
	//require('../server/models/post.model.js');

	return db;
}
