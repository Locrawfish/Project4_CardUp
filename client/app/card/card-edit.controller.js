'use strict';

angular
  .module('cardUpApp')
  .controller('CardEditController', CardEditController);

  /** @ngInject */

function CardEditController(CardService, $stateParams, ContactService, Auth, $location) {

  var that = this;
  var user = Auth.getCurrentUser();

  var cardId = $stateParams.id;
  console.log('cardId:', cardId);

  CardService.getCardById(cardId).then(function(res){
    that.card = res.data;
    console.log('CardEditController got card: ' + JSON.stringify(that.card));
  });

  that.editCard = function(card, res) {
      console.log(JSON.stringify(card));
      $state.go('card-edit', { id: card._id });

    };
}
