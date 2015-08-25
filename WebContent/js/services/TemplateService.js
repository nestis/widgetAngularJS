angular.module('widgets').factory('TemplateService', ['$log', 'DataService', TemplateServiceFactory]);
function TemplateServiceFactory($log, DataService) {
	
	var getTemplate = function(template) {
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
	
	getLibrary = function(url, lib, fn) {
		this.libs[lib] = 1;
		require([url], fn);
	}
	
	return {
		libs: {},
		getTemplate: getTemplate,
		getLibrary: getLibrary
	};
}