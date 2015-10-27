(function() {
  'use strict';

  angular
    .module('cardUpApp')
    .service('CardService', CardService);

  /** @ngInject */
  function CardService() {

    var that = this;

    that.findItemById = function(id) {
      var itemId = parseInt(id);
      return _.find(that.inventory, function(item) {
        return item.id === itemId;
      });
    };

    // TODO: eventually we want to fetch the inventory from the server.
    that.inventory = [
      {
        id: 1,
        category: 'Business',
        name: 'Business Card',
        price: 2.99,
        imageFile: '.jpg'
      },
      {
        id: 2,
        category: 'Freelance',
        name: 'Freelance Card',
        price: 2.99,
        imageFile: '.jpg'
      },
      {
        id: 3,
        category: 'Personal',
        name: 'Personal Card',
        price: 2.99,
        imageFile: '.jpg'
      }
    ];
   }
})();




