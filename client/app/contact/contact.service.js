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

  //   function getCards(){
  //   $http
  //     .get('http://localhost:9000/cards')
  //     .then (function(response){
  //       self.all = response.data.cards;
  //     });
  //   }
  // getCards();

    that.addCard = function(card) {
      $http.post('/api/users/contacts', card);
    };
  //   function addCard(){
  //   $http
  //     .post('http://localhost:9000/cards', self.newCard)
  //     .then(function(response){
  //       getCards();
  //     });
  //   self.newCard = {};
  // }

    that.removeCard = function(card, user) {
      var index = that.contact.indexOf(card);
      myUser.cards.splice(index, 1);
      $http.delete('/api/users'+ user._id, user);
    };


  });
})();
