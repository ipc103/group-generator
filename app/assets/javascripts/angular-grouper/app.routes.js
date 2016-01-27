groupApp.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('cohort', {
      url: '/',
      templateUrl: 'cohorts.html',
      controller: 'CohortsCtrl as CohortsCtrl'
    })

    .state('cohort.groups', {
      url: 'groups',
      templateUrl: 'groups.html',
      controller: 'GroupsController as groupsCtrl'
    })

    $urlRouterProvider.otherwise('/')
})
