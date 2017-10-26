const { User, Message } = require('../models');
const jwt = require('jsonwebtoken');

exports.createNewUser = (req, res) => {
  User.create(req.body)
  .then(user => {
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
    res.status(201).json({
      userId: user.id,
      profileImgUrl: user.profileImgUrl,
      token
    });
  })
  .catch(err => {
    res.status(500).json(err);
  });
}

exports.createMessage = (req, res) => {
  Message.create({ text: req.body.text, author: req.user.id })
  .then(message => {
    req.user.messages.push(message);
    req.user.save().then(user => {
      res.status(201).json({
        message,
        user: { username: user.username, profileImgUrl: user.profileImgUrl }
      });
    }).catch(err => {
      res.status(500).json(err);
    });
  })
  .catch(err => {
    res.status(500).json(err);
  })
}
