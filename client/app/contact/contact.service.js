(function() {
  'use strict';

  angular.module('cardUpApp')
  .service('ContactService', function(Auth, $http) {

    var myUser = Auth.getCurrentUser();
    var that = this;

     that.findItemById = function(itemId) {
      return _.find(that.cards, function(card) {
        console.log(card);
        return card.id === (itemId);
      });
    };

    that.addCard = function(card) {
      $http.post('/api/users/contacts', card);
    };

    that.removeCard = function(card) {
      var index = myUser.card;
      myUser.cards.splice(index, 1);
      $http.delete('/api/cards/'+ card._id, card);
      console.log(card);


    // that.removeCard = function(card) {
    //   var index = myUser.cards.indexOf(card);
    //   myUser.card.splice(index, 1);
    //   $http.delete('/api/cards'+ card._id, card);
    //   res.redirect('/cards');

    };


  });
})();
