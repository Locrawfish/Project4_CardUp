'use strict';

angular.module('cardUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cards', {
        url: '/cards',
        templateUrl: 'app/card/card.html',
        controller: 'CardIndexController',
        controllerAs: 'ctrl'
      })
      .state('cardDetail', {
        url: '/cards/:id',
        templateUrl: 'app/card/show.html',
        controller: 'CardShowController',
        controllerAs: 'ctrl'
      })
      .state('cardNew', {
        url: '/cards/new',
        templateUrl: 'app/card/new.html',
        controller: 'CardNewController',
        controllerAs: 'ctrl'
      });
  });





