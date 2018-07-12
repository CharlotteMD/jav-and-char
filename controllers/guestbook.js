const Guestbook = require('../models/guestbook');


function guestbooksCreate(req, res, next) {

  Guestbook
    .create(req.body)
    .then(guestbook => res.status(201).json(guestbook))
    .catch(next);
}

function guestbooksIndex(req, res, next) {
  Guestbook
    .find()
    .exec()
    .then(guestbooks => res.json(guestbooks))
    .catch(next);
}

function guestbooksShow(req, res, next) {
  Guestbook
    .findById(req.params.id)
    .exec()
    .then((guestbook) => {
      if(!guestbook) return res.notFound();
      res.json(guestbook);
    })
    .catch(next);
}

function guestbooksUpdate(req, res, next) {

  Guestbook
    .findById(req.params.id)
    .exec()
    .then((guestbook) => {
      if(!guestbook) return res.notFound();
      guestbook = Object.assign(guestbook, req.body);
      return guestbook.save();
    })
    .then(guestbook => res.json(guestbook))
    .catch(next);
}

function guestbooksDelete(req, res, next) {
  Guestbook
    .findById(req.params.id)
    .exec()
    .then((guestbook) => {
      if(!guestbook) return res.notFound();
      return guestbook.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  create: guestbooksCreate,
  index: guestbooksIndex,
  show: guestbooksShow,
  update: guestbooksUpdate,
  delete: guestbooksDelete
};
