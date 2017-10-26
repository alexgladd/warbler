const { Router } = require('express');
const apiRouter = Router();

require('./auth')(apiRouter);
require('./users')(apiRouter);
require('./messages')(apiRouter);

module.exports = apiRouter;
