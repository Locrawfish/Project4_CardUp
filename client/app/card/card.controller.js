(function() {
'use strict';

angular
  .module('cardUpApp')
  .controller('CardIndexController', CardIndexController);

  /** @ngInject */
  function CardIndexController(CardService, $state, ContactService, Auth) {

    var that = this;
    // that.cards = ContactService.inventory;

    that.inventory = CardService.inventory;

    that.goCard = function (card) {
      $state.go( 'cardDetail', { cardName : card.name });
    };

    that.searchText = '';
    that.contact = ContactService.contact;

    var user = Auth.getCurrentUser();

    that.addCard = function(card) {
      // REMOVE THIS WITH REAL DATA, THIS IS A BAD IDEA
      delete card._id;
      ContactService.addCard(card);
    };

    that.removeCard = function(card) {
      ContactService.removeCard(card);
    };

  }

})();
