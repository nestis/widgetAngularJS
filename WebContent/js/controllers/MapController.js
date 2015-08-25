
angular.module('widgets').controller("MapController", 
		['$scope', '$log', '$timeout', 'DataService', 'TemplateService', MapController]);
function MapController($scope, $log, $timeout, DataService, TemplateService) {
	var self = this;
	
	this.processWidget = function(type, listener) {
		if(TemplateService.libs[self.type.class]!=2){
			$scope.$on("loaded:gmaps",function(){
				$log.log("controller: Event received loaded:gmaps");
				loadMap();
		     });
		} else {
			loadMap();
		}
		
		function loadMap() {
			self.status = "OK";
			$timeout(function(){
			var map = new GMaps({
				  div: '#'+self.widgetName,
				  lat: -12.043333,
				  lng: -77.028333
				});
			if (self.type.type=="geolocation") {
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
				$("#"+self.widgetName).css("width","99%").css("height","300px");
				listener();
			});
		}
	}
};
MapController.prototype = Object.create(WidgetController.prototype);