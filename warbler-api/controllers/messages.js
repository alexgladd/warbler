const { Message } = require('../models');

exports.getAllMessages = (req, res) => {
  Message.find().sort({ createdAt: 'desc' })
  .populate('author', { username: true, profileImgUrl: true })
  .then(messages => {
    res.json({
      messages
    });
  })
  .catch(err => {
    console.error('Failed to get all messages', err);
    res.status(500).json({ message: 'Encountered a problem retrieving all messages' });
  });
}
