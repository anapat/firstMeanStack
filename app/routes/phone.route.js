module.exports = function(app){
  var PhoneController = require('../controllers/phone.controller.js');
  var UserContoller = require('../controllers/user.controller.js');
  app.route('/phone/add/')
  .get(UserContoller.getShowStatus)
  .post(PhoneController.NumberAdd);
  app.route('/phone/:Phonenumber')
  .get(UserContoller.getShowStatus)
  .put(UserContoller.getShowStatus)
  .delete(UserContoller.getShowStatus);
  app.param('Phonenumber',PhoneController.SeachPhoneById);
  app.route('/phone/update')
  .post(PhoneController.update);
  app.route('/data/delete/:id')
  .put(UserContoller.getShowStatus)
  .get(UserContoller.getShowStatus);
  app.param('id',PhoneController.delete);
}
