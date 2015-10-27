/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var express = require('express');
var router = express.Router();

var authenticate = function(req, res, next) {
  if(!req.isAuthenticated()) {
    res.redirect('/');
  }
  else {
    next();
  }
}

module.exports = function(app) {

  // Insert routes below
  app.use('/api/cards', require('./api/card'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // ---------------- INDEX | CARDS
router.get('/', authenticate, function(req, res, next) {
  var cards = global.currentUser.cards;
  res.render('cards/index', { cards: cards, message: req.flash() })
});

  // ---------------- INDEX | USERS
router.get('/', function(req, res, next) {
  res.render('settings.ejs', { currentUser: currentUser });
});

router.get('/', authenticate, function(req, res, next) {
  console.log('This is the user profile');
  res.render('settings.ejs', { message: req.flash() });
});


// ---------------- NEW | CARDS
router.get('card/new', authenticate, function(req, res, next) {
  var card = {
    name: '',
    title: '',
    company: '',
    phone: {
      cell: '',
      work: ''
    },
    email: '',
    linkedIn: '',
    website: ''
    };
  res.render('cards/new', { card: card, message: req.flash() });
});

// ---------------- SHOW | CARDS
router.get('/:id', authenticate, function(req, res, next) {
  var card = currentUser.cards.id(req.params.id);
  if (!card) return next(makeError(res, 'Document not found', 404));
  res.render('cards/show', { card: card, message: req.flash() } );
});

// ---------------- EDIT | CARDS
router.get('/:id/edit', authenticate, function(req, res, next) {
  var card = currentUser.cards.id(req.params.id);
  if (!card) return next(makeError(res, 'Document not found', 404));
  res.render('cards/edit', { card: card, message: req.flash() } );
});

// ---------------- CREATE | CARDS
router.post('/', authenticate, function(req, res, next) {
  var card = {
    name: req.body.name,
    title: req.body.title,
    company: req.body.company,
    phone: {
      cell: req.body.cell,
      work: req.body.work
    },
    email: req.body.email,
    linkedIn: req.body.linkedIn,
    website: req.body.website
  };
  // card.create(card, function(err, saved) {
  currentUser.cards.push(card);
  currentUser.save(function (err) {
    if (err) return next(err);
    res.redirect('/cards');
  });
});

// ---------------- UPDATE | CARDS
router.put('/:id', authenticate, function(req, res, next) {
  var card = currentUser.cards.id(req.params.id);
  if (!card) return next(makeError(res, 'Document not found', 404));
  else {
    card.name = req.body.name;
    card.title = req.body.title;
    card.company = req.body.company;
    card.phone.cell = req.body.cell;
    card.phone.work = req.body.work;
    card.email = req.body.email;
    card.linkedIn = req.body.linkedIn;
    card.website = req.body.website;
    currentUser.save(function(err) {
      if (err) return next(err);
      res.redirect('/cards');
    });
  }
});

// ---------------- UPDATE | USERS
router.put('/', authenticate, function(req, res, next) {
  currentUser.name = req.body.name;
  currentUser.email = req.body.email;
  if (req.body.password) {
    currentUser.local.password = currentUser.encrypt(req.body.password);
  }
  currentUser.save(function(err) {
    if (err) return next(err);
    res.redirect('/cards');
    });
});

// ---------------- DESTROY | CARDS
router.delete('/:id', authenticate, function(req, res, next) {
  var card = currentUser.cards.id(req.params.id);
  if (!card) return next(makeError(res, 'Document not found', 404));
  var index = currentUser.cards.indexOf(card);
  currentUser.cards.splice(index, 1);
  currentUser.save(function(err) {
    if (err) return next(err);
    res.redirect('/cards');
  });
});


  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
