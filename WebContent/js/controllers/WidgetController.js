angular.module('widgets').controller("WidgetController", [WidgetController]);

function WidgetController() {	
};

// Function that loads the widget content.
WidgetController.prototype.loadWidget = function($scope) {
	var self = this;
	var listener = $scope.$on("pane:"+self.widgetPane, function(){
		self.processWidget(self.type.type, listener);
	});
};
