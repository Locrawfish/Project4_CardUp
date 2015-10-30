(function() {
'use strict';

angular
    .module('cardUpApp')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      // routerConfig);

  /** @ngInject */
    $stateProvider
      .state('card', {
        url: '/cards',
        templateUrl: 'app/card/card.html',
        controller: 'CardIndexController',
        controllerAs: 'ctrl'
      })
      .state('card-new', {
        url: '/cards/new',
        templateUrl: 'app/card/new.html',
        controller: 'CardIndexController',
        controllerAs: 'ctrl'
      })
      .state('card-edit', {
        url: '/cards/:id/edit',
        templateUrl: 'app/card/edit.html',
        controller: 'CardEditController',
        controllerAs: 'ctrl'
      })
      .state('card-mycards', {
        url: '/cards/mycards',
        templateUrl: 'app/card/mycards.html',
        controller: 'CardIndexController',
        controllerAs: 'ctrl'
      })
      .state('card-mycontacts', {
        url: '/cards/mycontacts',
        templateUrl: 'app/card/mycontacts.html',
        controller: 'CardIndexController',
        controllerAs: 'ctrl'
      })
      .state('card-show', {
        url: '/cards/:id',
        templateUrl: 'app/card/show.html',
        controller: 'CardIndexController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });

})();





