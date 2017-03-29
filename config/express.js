var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var jade = require('jade');
var config = require('./config');
var sass = require('node-sass-middleware');
var validator = require('express-validator');
var cookieSession = require('cookie-session');
var session = require('express-session');
var passport = require('passport');
var html = require('html');
var flash = require('connect-flash');
var RedisStore =  require('connect-redis')(session);

 module.exports = function(){
   var app = express();
   if(process.env.NODE_ENV === 'development'){
	 	app.use(morgan('dev'));
	 }
	 else{
	 	app.use(compression);
	 }
   app.use(session({secret: 'subaru'}));
   

 	 app.use(bodyParser.json());

   app.set('views','./app/views');
   app.engine('html', require('ejs').renderFile);
   require('../app/routes/index.route')(app);
   require('../app/routes/user.route')(app);
   require('../app/routes/phone.route')(app);
   require('../app/routes/member.route')(app,'test');
   app.use(sass({
		src: './sass',
		dest: './public/css',
		debug: true,
		outputStyle: 'compressed',
		prefix: '/css'
	}));
  app.use(express.static('./public'));
  
   return app;
 }
