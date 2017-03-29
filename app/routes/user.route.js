module.exports = function(app){
  var UserContoller = require('../controllers/user.controller.js');
  app.route('/phone')
  .get(UserContoller.getShowStatus)
  .post(UserContoller.CreateUser);
  app.route('/locations')
  .get(UserContoller.getLocation)
  .post(UserContoller.ByLocation);
}
