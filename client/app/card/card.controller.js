
'use strict';

angular
  .module('cardUpApp')
  .controller('CardIndexController', CardIndexController);

// CardController.$inject = ['$http'];

  /** @ngInject */

  function CardIndexController(CardService, $state, ContactService, Auth) {


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

    var user = Auth.getCurrentUser();

    that.addCard = function(card) {
      // REMOVE THIS WITH REAL DATA, THIS IS A BAD IDEA
      delete card._id;
      ContactService.addCard(card);
    };

    that.removeCard = function(card) {
      ContactService.removeCard(card);
    };

    // that.removeCard = function(card) {
    //   ContactService.removeCard(card);
    // };

};
