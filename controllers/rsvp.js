const Rsvp = require('../models/rsvp');


function rsvpsCreate(req, res, next) {

  Rsvp
    .create(req.body)
    .then(rsvp => res.status(201).json(rsvp))
    .catch(next);
}

function rsvpsIndex(req, res, next) {
  Rsvp
    .find()
    .exec()
    .then(rsvps => res.json(rsvps))
    .catch(next);
}

function rsvpsShow(req, res, next) {
  Rsvp
    .findById(req.params.id)
    .exec()
    .then((rsvp) => {
      if(!rsvp) return res.notFound();
      res.json(rsvp);
    })
    .catch(next);
}

function rsvpsUpdate(req, res, next) {

  Rsvp
    .findById(req.params.id)
    .exec()
    .then((rsvp) => {
      if(!rsvp) return res.notFound();
      rsvp = Object.assign(rsvp, req.body);
      return rsvp.save();
    })
    .then(rsvp => res.json(rsvp))
    .catch(next);
}

function rsvpsDelete(req, res, next) {
  Rsvp
    .findById(req.params.id)
    .exec()
    .then((rsvp) => {
      if(!rsvp) return res.notFound();
      return rsvp.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  create: rsvpsCreate,
  index: rsvpsIndex,
  show: rsvpsShow,
  update: rsvpsUpdate,
  delete: rsvpsDelete
};
