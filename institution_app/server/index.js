const express = require('express');
require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./db/connect');
const app = express();
const PORT = process.env.PORT || 3001;
const notFoundMiddlware = require('./middleware/404Middleware');
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

app.use(notFoundMiddlware);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
