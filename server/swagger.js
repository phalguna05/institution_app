const swaggerJSDoc = require('swagger-jsdoc');
const { PORT } = require('./config/env');

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Institution App API',
      version: '0.1.0',
      description:
        'Institution App for schools to manage their students, teachers and courses',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Phalguna and Sai Nikhil',
        url: 'https://sainikhil1605.netlify.app/',
        email: 'info@email.com',
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api/v1`,
      },
      {
        url: `https://institution-app.herokuapp.com/api/v1`,
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Only add the access token donot add the Bearer word',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./api/routes/*.js', './models/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
