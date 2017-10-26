const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.requireAuthentication = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
      if (payload) {
        req.auth = payload;
        next();
      } else {
        res.status(401).json({ message: 'Authentication required' });
      }
    });
  } catch(e) {
    res.status(401).json({ message: 'Authentication required' });
  }
}

exports.requireAuthorization = (req, res, next) => {
  try {
    if (req.params.id && req.params.id === req.auth.userId) {
      User.findById(req.params.id).then(user => {
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(401).json({ message: 'Not authorized' });
        }
      }).catch(err => {
        res.status(401).json({ message: 'Not authorized' });
      });
    }
  } catch(e) {
    res.status(401).json({ message: 'Not authorized' });
  }
}
