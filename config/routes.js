const router = require('express').Router();

// REQ controllers, auth & secure route
const auth  = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

// User page where you can view and edit your profile
// router.route('/users/:id')
//   .get(secureRoute, users.show)
//   .put(secureRoute, users.update)
//   .delete(secureRoute, users.delete);

// INDEX
// router.route('/weddings')
//   .get(weddings.index)
//   .post(secureRoute, weddings.create);

// SHOW
// router.route('/questions/:id')
//   .get(questions.show)
//   // .put(secureRoute, questions.update)
//   .delete(secureRoute, questions.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
