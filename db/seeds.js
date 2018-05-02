const mongoose   = require('mongoose');
const { db, env } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(db[env]);

// REQ models
// const User = require('../models/user');

// Drop collections
// User.collection.drop();

// Close connection
// .then(questions => {
//   console.log(`${questions.length} questions created! 🤷🏻‍🤷🏾‍`);
// })
// .catch(err => console.log(err))
// .finally(() => mongoose.connection.close());
