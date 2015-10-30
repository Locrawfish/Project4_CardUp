
'use strict';

angular
  .module('cardUpApp')
  .controller('CardIndexController', CardIndexController);

  /** @ngInject */

  function CardIndexController(CardService, $state, ContactService, Auth, $location) {


    var that = this;

    CardService.getAllCards().then(function(res){
      that.inventory = res.data;
      console.log('that.inventory:', JSON.stringify(that.inventory));
    });


    that.createCard = function(card, res) {
      // console.log("createCard: ", card);
      CardService.createCard(card)
        .success(function() {
          $location.path('/cards')
      });
    };

    that.addMyCard = function(card) {
      console.log("createCard: ", card);
      CardService.addMyCard(card);
    };

    function FilesCtrl() {
      that.uploader = {};
      that.upload = function () {
      that.uploader.flow.upload();
        }
      }

    var user = Auth.getCurrentUser();

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

};
