const { MessageController } = require('../controllers');

const setupMessageRoutes = (router) => {
  router.route('/messages')
    .get(MessageController.getAllMessages);
}

module.exports = setupMessageRoutes;
