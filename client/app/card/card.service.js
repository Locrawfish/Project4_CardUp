(function() {
  'use strict';

  angular
    .module('cardUpApp')
    .service('CardService', CardService);

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
      id: 1,
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
      id: 2,
      name: 'Loren Crawford',
      title: 'Co-Found',
      company: 'CardUp',
      cell: 7891234569,
      work: 1234567890,
      email: 'test@test.com',
      linkedin: 'linked.com/loren',
      site: 'www.hey.com',
      imageFile: 'loren.jpg'
    }
  ];
 }
})();
