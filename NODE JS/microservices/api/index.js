const express = require('express');
const { api } = require('../config.js');
const user = require("./components/user/network");
const auth = require("./components/auth/network");

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.js');

app.use(express.json());
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use('/api/user', user);
app.use('/api/auth/login', auth);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ROUTER

app.listen(api.port, () => {
  console.log("Iniciando", api.port);
});
