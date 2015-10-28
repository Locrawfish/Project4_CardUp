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

  //   function getCards(){
  //   $http
  //     .get('http://localhost:9000/cards')
  //     .then (function(response){
  //       self.all = response.data.cards;
  //     });
  //   }
  // getCards();

    that.addCard = function(card) {
      var found = findItemById(that.contact, card.name);
      if (found) {
        found.name += card.name;
      }
      else {
        that.contact.push(angular.copy(card));
      }
    };
  //   function addCard(){
  //   $http
  //     .post('http://localhost:9000/cards', self.newCard)
  //     .then(function(response){
  //       getCards();
  //     });
  //   self.newCard = {};
  // }

    that.removeCard = function(card) {
      var index = that.contact.indexOf(card);
      that.contact.splice(index, 1);
    };

  //   function removeCard(card){
  //   $http
  //     .delete("http://localhost:9000/cards/"+ card._id)
  //     .then(function(response){
  //       var index = self.all.indexOf(card);
  //       self.all.splice(index, 1);
  //     });
  // }


    // that.clearCard = function() {
    //   that.contact.length = 0;
    // };
  });
})();
