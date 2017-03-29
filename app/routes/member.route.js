module.exports = function(app,text){
  console.log(text);
  var member = require('../controllers/member.controller.js');
  app.route('/signup')
  .get(member.index)
  .post(member.Signup);
  app.get('/status',member.getStatus);
  app.route('/signin')
  .get(member.PageLogin)
  .post(member.Signin);
  app.get('/logout',member.logout);
}
