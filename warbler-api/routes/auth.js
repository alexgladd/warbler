const { AuthController } = require('../controllers');

const setupAuthRoutes = (router) => {
  router.post('/authenticate', AuthController.authenticate);
}

module.exports = setupAuthRoutes;
