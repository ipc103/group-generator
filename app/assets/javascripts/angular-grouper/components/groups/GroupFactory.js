groupApp.factory('Group', ['$resource', function($resource){
  return $resource('/api/groups/:id');
}])
