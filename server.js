/**
 * @fileoverview main file to start the server
 * @author arjun.singh@nexcode.in (Arjun Singh)
 * @created on 15-11-2019
 * @company N/A
 */

const express = require('express');
const app = express();
const path = require('path');
const server = require('http');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const apiRoutes = require('./app/routes/apiRoutes')(app, express);
app.use('/api', apiRoutes);
app.use('api-docs', swaggerUi.server, swaggerUi.setup);

app.listen(() => `App started listening on port: ${3000}`);