const express = require('express');

require('express-async-errors');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const basicAuth = require('express-basic-auth');
const connectDB = require('./config/db/connect');
const { PORT, MONGO_URI, DOCS_EMAIL, DOCS_PASSWORD } = require('./config/env');

const app = express();

const notFoundMiddlware = require('./middleware/404Middleware');
const errorMiddleware = require('./middleware/ErrorMiddleware');
const swaggerSpec = require('./swagger');
const adminRoutes = require('./api/routes/admin');
const superAdminRoutes = require('./api/routes/superAdmin');
const teacherRoutes=require('./api/routes/teacher');

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
const userObject = {};
userObject[DOCS_EMAIL] = DOCS_PASSWORD;
app.use(
  '/docs',
  basicAuth({
    users: { ...userObject },
    challenge: true,
  }),
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);
// Admin Routes
app.use('/api/v1/admin', adminRoutes);
// Super Admin Routes
app.use('/api/v1/superAdmin', superAdminRoutes);
// Teacher Routes
app.use('/api/v1/teacher', teacherRoutes);

app.use(notFoundMiddlware);
app.use(errorMiddleware);
const startServer = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
