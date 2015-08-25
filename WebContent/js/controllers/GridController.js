
angular.module('widgets').controller("GridController", 
		['$scope', '$log', '$timeout', 'DataService', 'TemplateService', GridController]);
function GridController($scope, $log, $timeout, DataService, TemplateService) {
	var self = this;
	
	this.processWidget = function(type, listener) {
		if(TemplateService.libs[self.type.class]!=2){
			$scope.$on("loaded:jqGrid",function(){
				$log.log("controller: Event received loaded:jqGrid");
				loadGrid();
		     });
		} else {
			loadGrid();
		}
		
		function loadGrid() {
			var url = "rest/"+ self.dataObject.url+"/"+self.type.class+"/"+self.dataObject.param;
			var promise = DataService.get(url);
			promise.then(
				function(data){
					$("table#"+self.widgetName).jqGrid(WidgetOptions[self.type.config]);
					var gridData = data.data.gridData;
					for(var i=0,l=gridData.length;i<=l;i++)
						$("table#"+self.widgetName).jqGrid('addRowData',i+1,gridData[i]);
			}, function(data){
				$log.error("Error obtaining widget data");
			});
			self.status="OK";
			listener();
		}
	};
}
GridController.prototype = Object.create(WidgetController.prototype);