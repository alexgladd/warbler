const mongoose = require('mongoose');
const User = require('./user');

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true, maxLength: 160 },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

messageSchema.pre('remove', function(next) {
  User.findById(this.author)
  .then(user => {
    if (!user) return next();

    user.messages.remove(this.id);
    user.save().then(() => next()).catch(err => {
      next(err);
    });
  })
  .catch(err => {
    next(err);
  });
});

module.exports = mongoose.model('Message', messageSchema);
