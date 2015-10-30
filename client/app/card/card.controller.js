
'use strict';

angular
  .module('cardUpApp')
  .controller('CardIndexController', CardIndexController);

  /** @ngInject */

  function CardIndexController(CardService, $state, ContactService, Auth, $location) {

    var that = this;
    // var user = Auth.getCurrentUser();

    CardService.getAllCards().then(function(res){
      that.inventory = res.data;
      console.log('that.inventory:', JSON.stringify(that.inventory));
    });


    that.createCard = function(card) {
      CardService.createCard(card)
        .success(function() {
          $location.path('/cards');
      });
    };

    that.editCard = function(card) {
      console.log(JSON.stringify(card));
      $state.go('card-edit', { id: card._id });
    };

    that.addMyCard = function(card) {
      console.log('createCard: ', card);
      CardService.addMyCard(card);
    };

    // function FilesCtrl() {
    //   that.uploader = {};
    //   that.upload = function () {
    //   that.uploader.flow.upload();
    //     };
    //   }

    that.addCard = function(card) {
      // REMOVE THIS WITH REAL DATA, THIS IS A BAD IDEA
      delete card._id;
      ContactService.addCard(card);
    };

    that.removeCard = function(card) {
      ContactService.removeCard(card);
    };
    that.go = function ( path ) {
      $location.path( path );
    };
}
