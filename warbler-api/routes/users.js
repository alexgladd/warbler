const { UserController } = require('../controllers');
const auth = require('../middleware/auth');

const setupUserRoutes = (router) => {
  router.route('/users')
    .post(UserController.createNewUser);

  router.route('/users/:id/messages')
    .post(auth.requireAuthentication, auth.requireAuthorization, UserController.createMessage);
}

module.exports = setupUserRoutes;
