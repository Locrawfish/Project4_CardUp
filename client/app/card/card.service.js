
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
        console.log(card);
      };


/** @ngInject */
    function CardService() {

    var that = this;

    that.findItemById = function(name) {
      var cardName = parseInt(name);
      return_.find(that.inventory, function(card) {
        return card.name === cardName;
      });
    };

    that.inventory = [
    {
      _id: 1,
      name: 'Addison Funk',
      title: 'Co-Found',
      company: 'CardUp',
      cell: 6786342550,
      work: 1234567890,
      email: 'test@test.com',
      linkedin: 'linked.com/addyfunk',
      site: 'www.hey.com',
      imageFile: 'addison.jpg'
    },
    {
      _id: 2,
      name: 'Loren Crawford',
      title: 'Co-Found',
      company: 'CardUp',
      cell: 7891234569,
      work: 1234567890,
      email: 'test@test.com',
      linkedin: 'linked.com/loren',
      site: 'www.hey.com',
      imageFile: 'loren.jpg'
    },
    {
      _id: 3,
      name: 'Spongebob',
      title: 'Squarepants',
      company: 'Krusty',
      cell: 7891234569,
      work: 1234567890,
      email: 'Spongebob@test.com',
      linkedin: 'linked.com/Spongebob',
      site: 'www.Squarepants.com',
      imageFile: 'addison.jpg'
    }
  ];
 }
});
// I commented this out b/c I got an error after merging; may need to be added back in
// ();
