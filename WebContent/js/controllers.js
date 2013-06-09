'use strict';

/* Controllers */

angular.module('widgets.controllers', []).
controller("AppController",function($rootScope, $scope){
  $scope.initApp = function() {
    // Flags to control the highcharts JS load
    $rootScope.loadingChartJS = false;
    $rootScope.loadedChartJS = false;
    $rootScope.loadingGrid = false;
    $rootScope.loadedGrid = false;	
    $rootScope.loadingMap = false;
    $rootScope.loadedMap = false;	
  };
})
.controller('WidgetController', function($scope, $log, DataService) {
	
	// Function that loads the widget content.
	$scope.loadWidget = function() {
		var listener = $scope.$on("pane:"+$scope.widgetPane, function(event){
				$log.log("Loading widgets for pane "+$scope.widgetPane);
				if($scope.type.class=="chart") {
					$scope.loadChart($scope.type.type, listener);
				} else if ($scope.type.class == "grid") {
					$scope.loadGrid(listener);
				} else if ($scope.type.class == "map") {
					$scope.loadMap(listener);
				}
		});
	};
	
	// Function that loads a chart inside a widget.
	// Receives the listener because when the load its done, invoking the listener will destroy it.
	// Otherwise the chart will be loaded every time the user change the tab.
	$scope.loadChart = function(type, listener) {
		function loadChart(){
			var url = "rest/"+ $scope.dataObject.url+"/"+$scope.type.class+"/"+$scope.dataObject.param;
			var promise = DataService.get(url);
			promise.then(
				function(data){
					var chart = data.data.chartData;
					var series = [];
					for(var i=0,l=chart.data.length;i<l;i++) {
						series[i] = chart.data[i];
					}
					$('#'+$scope.widgetName).highcharts(WidgetOptions[$scope.type.config](type, chart));
			}, function(data){
				$log.error("Error obtaining widget data");
				$scope.status = "ERROR";
			});
			$scope.status="OK";
			// Destroy the listener
			listener();
		}
		
		// If highchart.js isn't loaded, add an listener to the load event.
		if(!$scope.$root.loadedChartJS){
			$scope.$on("loaded:highcharts",function(){
				$log.log("controller: Event received loaded:highcharts -> " + type);
				loadChart();
		     });
		} else {
			loadChart();
		}
	};
	
	// Function that loads a grid inside a widget.
	$scope.loadGrid = function(listener) {
		if(!$scope.$root.loadedGrid){
			$scope.$on("loaded:jqGrid",function(){
				$log.log("controller: Event received loaded:jqGrid");
				loadGrid();
		     });
		} else {
			loadGrid();
		}
		
		function loadGrid() {
			var url = "rest/"+ $scope.dataObject.url+"/"+$scope.type.class+"/"+$scope.dataObject.param;
			var promise = DataService.get(url);
			promise.then(
				function(data){
					$("table#"+$scope.widgetName).jqGrid(WidgetOptions[$scope.type.config]);
					var gridData = data.data.gridData;
					for(var i=0,l=gridData.length;i<=l;i++)
						$("table#"+$scope.widgetName).jqGrid('addRowData',i+1,gridData[i]);
			}, function(data){
				$log.error("Error obtaining widget data");
			});
			$scope.status="OK";
			listener();
		}
	};
	
	$scope.loadMap = function(listener) {
		if(!$scope.$root.loadedMap){
			$scope.$on("loaded:gmaps",function(){
				$log.log("controller: Event received loaded:gmaps");
				loadMap();
		     });
		} else {
			loadMap();
		}
		
		function loadMap() {
			var map = new GMaps({
				  div: '#'+$scope.widgetName,
				  lat: -12.043333,
				  lng: -77.028333
				});
			if ($scope.type.type=="geolocation") {
			      GMaps.geolocate({
			        success: function(position){
			          map.setCenter(position.coords.latitude, position.coords.longitude);
			        },
			        error: function(error){
			          $log.error('Geolocation failed: '+error.message);
			        },
			        not_supported: function(){
			          $log.log("Your browser does not support geolocation");
			        }
			      });
			}
			$("#"+$scope.widgetName).css("width","300px").css("height","300px");
			listener();
			$scope.status = "OK";
		}
	};
  });
