const { User, Message } = require('../models');
const jwt = require('jsonwebtoken');

exports.createNewUser = (req, res) => {
  User.create(req.body)
  .then(user => {
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
    res.status(201).json({
      userId: user.id,
      username: user.username,
      profileImgUrl: user.profileImgUrl,
      token
    });
  })
  .catch(err => {
    console.error('Failed to create new user', err);

    // decide how to respond
    if (err.name === 'MongoError' && err.code === 11000) {
      // duplicate key
      res.status(409).json({ message: 'A user with that email or username already exists' });
    } else {
      res.status(500).json({ message: 'Encountered a problem creating a new user' });
    }
  });
}

exports.createMessage = (req, res) => {
  Message.create({ text: req.body.text, author: req.user.id })
  .then(message => {
    req.user.messages.push(message);
    req.user.save().then(user => {
      res.status(201).json(Object.assign({}, message.toObject(),
        { author: { _id: user.id, username: user.username, profileImgUrl: user.profileImgUrl} }));
    }).catch(err => {
      console.error('Failed to add message to user', err);
      res.status(500).json({ message: 'Encountered a problem creating the new message' });
    });
  })
  .catch(err => {
    console.error('Failed to create new message', err);
    res.status(500).json({ message: 'Encountered a problem creating the new message' });
  })
}
