'use strict';
define(['angular','uiRouter', 'uiTabs', 'ocLazyLoad'], function(angular){
	
	var app = angular.module('widgets', ['ui.bootstrap','ui.router', 'oc.lazyLoad']).
	  config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/widget");
		
		$stateProvider
			.state("widget", {
				url: '/widget',
				templateUrl: 'partials/widgets.html',
				resolve: {
					loadJS: ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load(['js/controllers/WidgetController.js',
						                         'js/controllers/ChartController.js',
						                         'js/controllers/GridController.js',
						                         'js/controllers/MapController.js',
							                     'js/directives/WidgetDirective.js',
							                     'js/services/DataService.js',
							                     'js/services/TemplateService.js',
							                     'js/widgetOptions.js'])
					}]
				}
			})
			.state("how", {
				url: '/how',
				templateUrl: 'partials/howItWorks.html'
			})
			.state("credits", {
				url: '/credits',
				templateUrl: 'partials/credits.html'
			});
	}]);
	
	app.init = function(){
		angular.bootstrap(document, ['widgets']);
	}
	return app;
});
