/**
 * @fileoverview all routes defined in this file
 * @author arjun.singh@nexcode.in (Arjun Singh)
 * @created on 15-11-2019
 * @company N/A
 */

const demoController = require('../controllers/demo/demoModule');
//const userSignupController = require('../controllers/session/userSingupModule');
//const saveChatController = require('../controllers/chat/saveChatModule');

const routes = (app, express) => {

   let apiRoutes = express.Router();

   apiRoutes.get('/demo', demoController.demoMessage);
   //apiRoutes.post('/user/signup', userSignupController.userSignup);
   //apiRoutes.post('/user/save/chat', saveChatController.saveChat);

   return apiRoutes;
};

module.exports = routes;