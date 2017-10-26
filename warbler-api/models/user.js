const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email:         { type: String, required: true, unique: true },
  username:      { type: String, required: true, unique: true },
  password:      { type: String, required: true },
  profileImgUrl: { type: String },
  messages:      [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
});

userSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  bcrypt.hash(user.password, 10)
  .then(hashed => {
    user.password = hashed;
    next();
  })
  .catch(err => {
    next(err);
  });
});

userSchema.methods.comparePassword = function(otherPassword, next) {
  bcrypt.compare(otherPassword, this.password)
  .then(match => {
    next(null, match);
  })
  .catch(err => {
    next(err);
  });
};

module.exports = mongoose.model('User', userSchema);
