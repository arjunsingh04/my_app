/**
 * @fileoverview main file to start server
 * @author arjunics027@gmail.com (Arjun Singh)
 * @created on 15-11-2019
 * @company N/A
 */

const express = require('express');
const app = express();
const config = require('./config/appConfig');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const server = require('http').Server(app);
global.io = require('socket.io')(server, { origins: '*:*' });
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (err, req, res, next) {
   res.status(err.status || 500);
   res.render('error', {
      message: err.message,
      err: err
   });
});

const api = require('./app/routes/apiRoutes')(app, express);
app.use('/api', api);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(express.static('public'));

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname + 'public/index.html'), function (err) {
      if (err) {
         res.status(500).send(err);
      }
   });
})

// server started listening here
server.listen(config.app.port, () => console.log(`App listening on: http://${config.app.host}:${config.app.port}`));
