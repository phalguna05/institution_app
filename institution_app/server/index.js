const express = require('express');

require('express-async-errors');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const connectDB = require('./config/db/connect');
const { PORT, MONGO_URI } = require('./config/env');

const app = express();

const notFoundMiddlware = require('./middleware/404Middleware');
const errorMiddleware = require('./middleware/ErrorMiddleware');
const swaggerSpec = require('./swagger');
const adminRoutes = require('./api/routes/admin');
const superAdminRoutes = require('./api/routes/superAdmin');

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Admin Routes
app.use('/api/v1/admin', adminRoutes);
// Super Admin Routes
app.use('/api/v1/superAdmin', superAdminRoutes);

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
