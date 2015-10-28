(function() {
  'use strict';
  // item === card
  // cart === contact

  angular.module('cardUpApp')
  .service('ContactService', function(Auth, $http) {

    var myUser = Auth.getCurrentUser();
    var that = this;

    // that.contact = [];

     that.findItemById = function(card) {
      return _.find(that.cards, function(card) {
        console.log(card);
        return card.id === (itemId);
      });
    };

    that.addCard = function(card) {
      console.log(card);
      console.log(myUser);
      var found = that.findItemById(card);
      if (found) {
        found.name += card.name;
      }
      else {
        myUser.cards.push(card._id);
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
