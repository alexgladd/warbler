const { User } = require('../models');
const jwt = require('jsonwebtoken');

exports.authenticate = (req, res) => {
  User.findOne({ email: req.body.email })
  .then(user => {
    if (user) {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) throw new Error('Problem comparing submitted password');

        if (isMatch) {
          const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
          res.status(201).json({
            userId: user.id,
            username: user.username,
            profileImgUrl: user.profileImgUrl,
            token
          });
        } else {
          res.status(400).json({ message: 'Invalid email or password' });
        }
      });
    } else {
      res.status(400).json({ message: 'Invalid email or password' });
    }
  })
  .catch(err => {
    console.error('Failed to authenticate user', err);
    res.status(500).json({ message: 'Encountered a problem during authentication' });
  });
}
