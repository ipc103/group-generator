groupApp.config(function($stateProvider){

  $stateProvider
    .state('cohorts', {
      url: '/cohorts',
      templateUrl: 'cohorts.html',
      controller: 'CohortsCtrl as CohortsCtrl'
    })

    .state('cohort', {
      url: '/cohorts/:id',
      templateUrl: '/app/components/cohorts/cohort/cohorts.cohort.html',
      controller: 'CohortCtrl as cohortCtrl'
    })

    .state('cohort.groups', {
      url: '/groups',
      templateUrl: '/app/components/groups/groups.html',
      controller: 'GroupsController as groupsCtrl'
    })
})
