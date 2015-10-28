(function() {
'use strict';

angular
  .module('cardUpApp')
  .controller('CardIndexController', CardIndexController);

  /** @ngInject */
  function CardIndexController(CardService, $state, ContactService) {

    var that = this;
    // that.cards = ContactService.inventory;

    that.inventory = CardService.inventory;

    that.goCard = function (card) {
      $state.go( 'cardDetail', { cardName : card.name });
    };

    that.searchText = '';
    that.contact = ContactService.contact;

    that.addCard = function(card) {
      ContactService.addCard(card);
    };

    that.removeCard = function(card) {
      ContactService.removeCard(card);
    };

  }

})();
