(function() {
'use strict';

angular
    .module('cardUpApp')
    .config(routerConfig);

  /** @ngInject */
function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('cards', {
        url: '/cards',
        templateUrl: 'app/card/card.html',
        controller: 'CardIndexController',
        controllerAs: 'ctrl'
      })
      .state('cardNew', {
        url: '/cards/new',
        templateUrl: 'app/card/new.html',
        controller: 'CardNewController',
        controllerAs: 'ctrl'
      })
      .state('cardDetail', {
        url: '/cards/:id',
        templateUrl: 'app/card/show.html',
        controller: 'CardShowController',
        controllerAs: 'ctrl'
      });


    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }

})();





