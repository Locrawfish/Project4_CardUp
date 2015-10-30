(function() {
  'use strict';

  angular.module('cardUpApp')
  .service('ContactService', function(Auth, $http) {

    var myUser = Auth.getCurrentUser();
    var that = this;

     that.findItemById = function(card) {
      return _.find(that.cards, function(card) {
        console.log(card);
        return card.id === (itemId);
      });
    };

    that.addCard = function(card) {
      $http.post('/api/users/contacts', card);
    };


    that.removeCard = function(card, res) {
      var index = myUser.card;
      myUser.cards.splice(index, 1);
      $http.delete('/api/cards/'+ card._id, card);
      console.log(card);
      res.redirect('http://localhost:9000/cards');
    };


  });
})();
