
angular.module('widgets').controller("ChartController", 
		['$scope', '$log', '$timeout', 'DataService', 'TemplateService', ChartController]);
function ChartController($scope, $log, $timeout, DataService, TemplateService) {
	var self = this;
	
	this.processWidget = function(type, listener) {
		function loadChart(){
			var url = "rest/"+ self.dataObject.url+"/"+self.type.class+"/"+self.dataObject.param;
			DataService.get(url).then(
				function(data){
					var chart = data.data.chartData;
					var series = [];
					for(var i=0,l=chart.data.length;i<l;i++) {
						series[i] = chart.data[i];
					}
					self.status="OK";
					$timeout(function(){
						$scope.$apply();
						$('#'+self.widgetName).highcharts(WidgetOptions[self.type.config](type, chart));
					})
			}, function(data){
				$log.error("Error obtaining widget data");
				self.status = "ERROR";
			});
			// Destroy the listener
			listener();
		}
		
		// If highchart.js isn't loaded, add an listener to the load event.
		if(TemplateService.libs[self.type.class]!=2){
			$scope.$on("loaded:"+self.type.class,function(){
				$log.log("controller: Event received loaded:highcharts -> " + type);
				loadChart();
		     });
		} else {
			loadChart();
		}
	};
};
ChartController.prototype = Object.create(WidgetController.prototype);