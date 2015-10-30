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

  that.editCard = function(card) {
      CardService.editCard(card)
      .success(function() {
        $location.path('/cards')
      });

    };
}
