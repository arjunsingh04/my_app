/**
 * @fileoverview A demo API for server testing
 * @author arjun.singh@nexcode.in (Arjun Singh)
 * @created on 15-11-2019
 * @company N/A
 */

const demoMessage = async function (req, res) {
   try {
      console.log('try block');
      io.emit('hye')
   } catch (err) {
      console.log('catch block error');
   }
};

module.exports = { demoMessage };
