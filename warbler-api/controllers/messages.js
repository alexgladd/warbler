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
    res.status(500).json(err);
  });
}
