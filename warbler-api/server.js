// warbler api server main

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // load development environment vars from .env
  console.log('Server starting in development mode');
  require('dotenv').config();
}

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const apiRouter = require('./routes');

const app = express();
app.set('port', process.env.PORT || 8080);

if (process.env.NODE_ENV === 'production') {
  const cors = require('cors');
  app.use(cors({ origin: 'https://alexgladd.github.io' }));

  app.use(morgan('common'));
} else {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});
