groupApp.factory('Group', ['$resource', function($resource){
  return $resource('/api/groups/:id',{ group_code: new Date().setHours(0,0,0,0)});
}])
