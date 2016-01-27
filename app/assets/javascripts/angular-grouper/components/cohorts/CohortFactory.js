groupApp.factory('Cohort', ['$resource', function($resource){
  return $resource('/api/cohorts/:id');
}])
