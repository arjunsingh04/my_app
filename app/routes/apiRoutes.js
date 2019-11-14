/**
 * @fileoverview all routes defined in this file
 * @author arjun.singh@nexcode.in (Arjun Singh)
 * @created on 15-11-2019
 * @company N/A
 */

const demoController = require('../controllers/demo/demoModule');

module.exports = (app, express) => {
   let apiRoutes = express.Router();
   // start writing endpoints here
   apiRoutes.get('/demo', demoController.demoMessage);

   return apiRoutes;
};