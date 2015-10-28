
  'use strict';

  angular
    .module('cardUpApp')
    .service('CardService', function($http) {

      var self = this;

      self.getAllCards = function() {
        return $http.get('/api/cards');
      };

      self.addCard = function(card) {
        console.log('addCard posting with card:', JSON.stringify(card));
        return $http.post('/api/cards', card);
      };


/** @ngInject */
    // function CardService() {

    // var that = this;

    // that.findItemById = function(name) {
    //   var cardName = parseInt(name);
    //   return_.find(that.inventory, function(card) {
    //     return card.name === cardName;
    //   });
    // };

  //   that.inventory = [
  //   {
  //     id: 1,
  //     name: 'Addison Funk',
  //     title: 'Co-Founder',
  //     company: 'CardUp',
  //     cell: 6786342550,
  //     work: 1234567890,
  //     email: 'test@test.com',
  //     linkedin: 'linked.com/addyfunk',
  //     site: 'www.hey.com',
  //     imageFile: 'addison.jpg'
  //   },
  //   {
  //     id: 2,
  //     name: 'Loren Crawford',
  //     title: 'Co-Founder',
  //     company: 'CardUp',
  //     cell: 7891234569,
  //     work: 1234567890,
  //     email: 'test@test.com',
  //     linkedin: 'linked.com/loren',
  //     site: 'www.hey.com',
  //     imageFile: "loren.jpg"
  //   }
  // ];
});
