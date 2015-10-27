(function() {
  'use strict';

  // item === card
  // cart === contact

  angular.module('cardUpApp')
  .service('ContactService', function() {

    var that = this;

    that.card = [];

    function findItemById(cards, id) {
      return _.find(cards, function(card) {
        return card.id === id;
      });
    }

    that.addCard = function(card) {
      var found = findItemById(that.contact, card.id);
      if (found) {
        found.qty += card.qty;
      }
      else {
        that.contact.push(angular.copy(card));
      }
    };

    that.removeCard = function(card) {
      var index = that.contact.indexOf(card);
      that.contact.splice(index, 1);
    };


    that.clearCard = function() {
      that.contact.length = 0;
    };
  });
})();
