const mongoose = require('mongoose');

const thankyouSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String }
});

module.exports = mongoose.model('ThankYou', thankyouSchema);
