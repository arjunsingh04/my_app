/**
 * @fileoverview data access object for user table
 * @author arjunics027@gmail.com (Arjun Singh)
 * @created on 16-11-2019
 * @company N/A
 */

const userModel = require('../models/user');

const userDao = {
   findOne: (query) => {
      return new Promise((resolve, reject) => {
         userModel.findOne({ where: query }, (err, data) => {
            if (err) {
               return reject(err);
            }
            return resolve(data);
         });
      });
   }
};

module.exports = userDao;