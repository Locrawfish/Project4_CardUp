(function() {
  'use strict';

  // item === card
  // cart === contact

  angular.module('cardUpApp')
  .service('ContactService', function() {

    var that = this;

    that.contact = [];

    function findItemById(cards, name) {
      return _.find(cards, function(card) {
        return card.name === name;
      });
    }

    that.addCard = function(card) {
      var found = findItemById(that.contact, card.name);
      if (found) {
        found.name += card.name;
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
