requirejs.config({
	paths: {
		jquery : '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
		googleMaps: '//maps.google.com/maps/api/js?v=3.exp&libraries=places&callback=init',
		bootstrap: '../lib/bootstrap.min',
		angular: '../lib/angular/angular',
		uiRouter: '../lib/angular/angular-ui-router',
		uiTabs: '../lib/angular/angular-ui.tabs.min',
		ocLazyLoad: '../lib/angular/ocLazyLoad'
	},
	shim: {
		angular: {
			deps: ['jquery'],
			exports: 'angular'
		},
		bootstrap: ['jquery'],
		uiRouter: ['angular'],
		uiTabs: ['angular'],
		ocLazyLoad: ['angular']
	}
});
require(['googleMaps', 'app'], function(gmaps, app){
	app.init();
});
function init() {
	console.log("googlemaps loaded");
}