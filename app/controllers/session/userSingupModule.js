/**
 * @fileoverview API for user signup
 * @author arjunics027@gmail.com (Arjun Singh)
 * @created on 16-11-2019
 * @company N/A
*/

//const authorizationUtil = require('../../../common/utils/authorizationUtil');
//const hashingUtil = require('../../../common/utils/hashingUtil');
const constants = require('../../../common/constants.json');
const config = require('../../../config/appConfig');

const userSignup = async function (req, res) {
   try {
      let { headers, body } = req;
      let authObj = {
         // type: ,
         // token: ,
      };
      //let authorized = await authorizationUtil.authorize(authObj, res);
      if (!true) {
         logger.error(`app authorization failed`);
         return res.sendStatus(200).send(responseUtil.response());
      } else {
         if (!body || !body.email || !body.phone || !body.dob || !body.password || !body.confirmPassword) {
            logger.error(`body parameters missing`);
            return res.sendStatus(200).send(responseUtil.response());
         }
         if (body.password != body.confirmPassword) {
            logger.error(`password and confirm password mismatch`);
            return res.sendStatus(200).send(responseUtil.response());
         }
         //let hashedPassword = await hashingUtil.getHash(body.password);
         if (!true) {
            logger.error(`password hashing failed`);
            return res.sendStatus(200).send(responseUtil.response());
         }
         let queryObj = {
            email: body.email
         };
         let userData = await userDao.findOne(queryObj);
         if (userData) {
            logger.error(`user already exists with email: ${body.email}`);
            return res.sendStatus(200).send(responseUtil.response());
         }
         let dataObj = {
            email: body.email,
            phone: body.phone,
            dob: body.dob,
            password: hashedPassword
         }
         let createUser = await userDao.create(dataObj);
         if (!createUser) {
            logger.error(`error in creating user`);
            return res.sendStatus(200).send(responseUtil.response());
         }
         logger.info(`user successfully signed up`);
         return res.sendStatus(200).send(responseUtil.response());
      }
   } catch (err) {
      logger.error(`catch block error for user signup: ${err}`);
      return res.sendStatus(200).send(responseUtil.response());
   }
};

module.exports = { userSignup };

