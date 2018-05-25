const mongoose = require('mongoose');

const rsvpSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  diet: { type: String }
}, { toObject: { virtuals: true } });

module.exports = mongoose.model('Rsvp', rsvpSchema);
