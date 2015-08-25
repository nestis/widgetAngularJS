angular.module('widgets').factory('DataService', ['$log', '$http', '$q', DataServiceFactory]);
function DataServiceFactory($log, $http, $q) {
	var getData = function(url){
		// Timeout to fake a complex server request
		var millis = parseInt(500 + Math.random*1000);
		setTimeout(function(){
			return;
	    },millis);
		
	    var deferred = $q.defer();
		$log.log("Calling... " + url); 
        $http.get(url).success(function(data, status) {
            deferred.resolve(data);
        }).error(function(data, status) {
            deferred.reject(data);
        });
        return deferred.promise;
	};
	
	return {
		get: getData
	}
}