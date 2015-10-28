
'use strict';

angular
  .module('cardUpApp')
  .controller('CardIndexController', function($scope, CardService, $state) {

              // CardIndexController);
  // .controller('BookCtrl', function($scope, Card) {
  //   function getAllCards() {
  //     Card.getAllCards()
  //   }
  // })
// CardController.$inject = ['$http'];

  /** @ngInject */
  // function CardIndexController(CardService, $state, ContactService) {

    var that = this;

    CardService.getAllCards().then(function(res){
      that.inventory = res.data;
      console.log('that.inventory:', JSON.stringify(that.inventory));
    });

    // that.goCard = function (card) {
    //   $state.go( 'cardDetail', { cardName : card.name });
    // };

    // that.searchText = '';
    // that.contact = ContactService.contact;

    that.addCard = function(card) {
      console.log('addCard:', card);
      CardService.addCard(card);
    };

    // that.removeCard = function(card) {
    //   ContactService.removeCard(card);
    // };

});
