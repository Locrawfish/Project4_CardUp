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

    that.addCard = function(user) {

      $http.put('/api/users/' + user._id, user);
    };

    that.removeCard = function(card, user) {
      var index = that.contact.indexOf(card);
      myUser.cards.splice(index, 1);
      $http.delete('/api/users'+ user._id, user);
    };

  });
})();
