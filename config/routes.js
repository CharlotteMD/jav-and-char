const router = require('express').Router();

// REQ controllers, auth & secure route
const auth  = require('../controllers/auth');
// const rsvp  = require('../controllers/rsvp');
const guestbook  = require('../controllers/guestbook');
// const secureRoute = require('../lib/secureRoute');

router.route('/maremotos')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

// router.route('/weddings/muslim/rsvp')
//   .post(rsvp.create);
//
// router.route('/weddings/muslim/guestlist')
//   .get(rsvp.index);

router.route('/guestbook/new')
  .post(guestbook.create);

router.route('/guestbook/')
  .get(guestbook.index);

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
