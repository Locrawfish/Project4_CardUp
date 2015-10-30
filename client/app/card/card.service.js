
  'use strict';

  angular
    .module('cardUpApp')
    .service('CardService', CardService);

/** @ngInject */
    function CardService($http) {

      var self = this;

      self.getAllCards = function() {
        return $http.get('/api/cards');
      };

      self.createCard = function(card) {
        console.log('createCard posting with card:', JSON.stringify(card));
        return $http.post('/api/cards', card);
        // res.redirect('/cards');
      };

      self.editCard = function(card) {
        return $http.put('/api/cards/_id/edit', card);
      };

      self.addMyCard = function(card) {
        console.log('addMyCard posting w/ card: ' , JSON.stringify(user.mycards));
        return $http.post('/api/users', card);
      };

      self.getCardById = function(id) {
        return $http.get('/api/cards/' + id);
      };
    }
