groupApp.factory('Group', ['$http', '$rootScope', function($http, $rootScope){
  var url = '/api/groups';
  return {
    query: function(params, callback){
      $http({url: url, method: "GET", params: params})
        .success(function(response){
          console.log('query successful!')
          callback(response);
        })
    },
    create: function(params, callback) {
			$http.post(
				url,
        params
			)
			.success(function(response) {
				console.log("added object successfully!");
				callback(response);
			})
			.error(function(response) {
				console.log("error adding object!");
			});
		}
  }
}])
