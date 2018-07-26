const mongoose = require('mongoose');

const guestbookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String }
}, {
  toObject: { virtuals: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Guestbook', guestbookSchema);
