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
        console.error('Authentication error: token verification failed', err);
        res.status(401).json({ message: 'Authentication required' });
      }
    });
  } catch(e) {
    console.error(`Authentication error: ${e.message}`, e);
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
          console.error('Authorization error: no user found');
          res.status(401).json({ message: 'Not authorized' });
        }
      }).catch(err => {
        console.error('Authorization error: user lookup failed', err);
        res.status(401).json({ message: 'Not authorized' });
      });
    } else {
      console.error('Authorization error: user id mismatch');
    }
  } catch(e) {
    console.error(`Authorization error: ${e.message}`, e);
    res.status(401).json({ message: 'Not authorized' });
  }
}
