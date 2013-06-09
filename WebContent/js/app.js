'use strict';

angular.module('widgets', ['ui.bootstrap','widgets.filters', 'widgets.services', 'widgets.directives', 'widgets.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/widget', {templateUrl: 'partials/widgets.html'});
    $routeProvider.when('/how', {templateUrl: 'partials/howItWorks.html'});
    $routeProvider.when('/credits', {templateUrl: 'partials/credits.html'});
    $routeProvider.otherwise({redirectTo: '/widget'});	
  }]);
