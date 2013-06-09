'use strict';

/* Services */

angular.module('widgets.services', []).value('version', '0.1')

 // Service which makes requests to the REST API.
.service("DataService", function($log, $http, $q) {
	this.get = function(url){
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
	}
})
// Service which loads a HTML template from /WebContent/templates folder and returns it. 
.service("TemplateService",function($log, DataService) {
	this.getTemplate = function(template) {
		var url = "templates/"+template;
		var html = "";
		// $.ajax is used because AngularJS cant make sync requests using $http.
		$.ajax({method:'GET', async:false, url:url})
			.done(function(data){
					html = data;
				})
			.fail(function(data) {
				$log.error("Cannot found template " + url);
		});
		return html;
	};
});