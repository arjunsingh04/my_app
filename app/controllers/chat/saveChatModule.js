/**
 * @fileoverview API to save user chat
 * @author arjunics027@gmail.com (Arjun Singh)
 * @created on 02-12-2019
 * @company NEXCODE
 */

const jwtUtil = require('../../../common/utils/jwtUtil');
const appConfig = require('../../../config/appConfig');
const userDao = require('../../DAO/userDAO');
const chatDao = require('../../DAO/chatDAO');

const saveChat = async function (req, res) {
   try {
      let { headers, body } = req;
      let authObj = {
         type: ,
         token: ,
      };
      let authorized = await authorizationUtil.authorize(cred, res);
      if (!authorized) {
         logger.error(`app authorization failed`);
         return res.sendStatus(200).send(responseUtil.response());
      } else {
         if (!body || !body.receiver_id || !body.message || !body.type) {
            logger.error(`body parameters missing`);
            return res.status(200).send(responseUtil.response());
         }
         let jwtPayload = await jwtUtil.verifyToken(headers.token, appConfig.user.jwt_secret_key);
         let dataObj = {
            sender_id: jwtPayload.id,
            receiver_id: body.receiver_id,
            message: body.message,
            type: body.type
         };
         if (body.type == 'one-to-one') {
            dataObj.chat_room = (dataObj.sender_id < dataObj.receiver_id) ? `${dataObj.sender_id}_${dataObj.receiver_id}` : `${dataObj.receiver_id}_${dataObj.sender_id}`;
         } else if (body.type == 'group') {
            dataObj.chat_room = dataObj.receiver_id;
         }
         let saveChatData = await chatDao.create(dataObj);
         if (!saveChatData) {
            logger.error(`error in saving chat data`);
            return res.status(200).send(responseUtil.error());
         }
         logger.info(`chat saved successfully for room: ${dataObj.chat_room}`);
         return res.status(200).send(responseUtil.successData());
      }
   } catch (err) {
      logger.error
   }
};

module.exports = { saveChat };