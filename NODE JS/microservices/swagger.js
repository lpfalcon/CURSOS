const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Microservices',
        version: '1.0.0',
      },
    },
    apis: ['./api/components/user/network.js'],
  };


const swaggerSpec = swaggerJsDoc(options);
module.exports = swaggerSpec;