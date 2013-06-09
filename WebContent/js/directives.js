'use strict';

/* Directives */
angular.module('widgets.directives', [])
.directive('widget', function ($log, $rootScope, TemplateService) {
	return {
		element:'A', //this directive will work as an element attribute only. All HTML element with a 'widget' attribute will pass throug this directive.
		scope: {
			title: '@widgetTitle',
			widgetName: '@widgetName',
			widgetPane: '=widgetPane',
			widgetTemplate: '=widgetTemplate'
		},
		// compile function, first to be executed. We should manipulate the DOM only here.
		compile:function(element, attrs) {
			// If the widget has a defined template...
			if(attrs.widgetTemplate) {
				element.append(TemplateService.getTemplate(attrs.widgetTemplate));
			}
			// Loading and Error divs
			element.find(".widgetWrapper").append(TemplateService.getTemplate("widgetLoadingDiv.html"));
			element.find(".widgetWrapper").append(TemplateService.getTemplate("widgetErrorDiv.html"));
			
			// Add a ngShow attribute to the widget content div			
			element.find("#widgetContent").attr("data-ng-show","status=='OK'").append("<div id='"+attrs.widgetName+"'></div>");
			
			if(JSON.parse(attrs.widget).class=="grid") {
				element.find("#widgetContent").append("<table id='"+ attrs.widgetName + "'></table>");
			}
			
			// Dynamic setting of bootstrap collapse attributes
			element.find(".widgetWrapper").attr("id", "collapse"+attrs.widgetName);
			element.find("a.accordion-toggle").attr("data-parent","#"+element.find("div.accordion").attr("id")).attr("href","#"+element.find("div.accordion-body").attr("id"));
			
			return {
				// post-link compile function
				post: function postLink($scope, iElement, iAttrs) {
					$log.log("directive: Processing widget " + iAttrs.widgetName);	
					
					// Widget Variables init from JSON values. If done it on scope:{} throws a digest error.
					if(iAttrs.widgetObject)
						$scope.dataObject = JSON.parse(iAttrs.widgetObject);
					$scope.type = JSON.parse(iAttrs.widget);
					
					$scope.status = "LOADING";

					// Check the widget type in case is needed to do something specific for it. For example: load a JS library
					if($scope.type.class=="chart"){
						// Check if the highchart.JS isnt loaded or loading, otherwise load it.
						if(!$rootScope.loadedChartJS && !$rootScope.loadingChartJS){
							$rootScope.loadingChartJS=true;
							$log.log("directive: Loading highcharts.js");
							// Async JS loading so we can continue the AngularJS compilation process
							$LAB.script("lib/highcharts/js/highcharts.js").wait(function(){
								$log.log("directive: Loaded highcharts.js");		
								// Broadcast event of highchart.JS loaded.					
								$rootScope.$broadcast("loaded:highcharts");
								$rootScope.loadedChartJS=true;
							});
						}
						
					} else if ($scope.type.class=="grid") {
						if(!$rootScope.loadedGrid && !$rootScope.loadingGrid){
							$rootScope.loadingGrid=true;
							$log.log("directive: Loading jqGrid.js");
							$LAB.script("http://trirand.com/blog/jqgrid/js/jquery.jqGrid.js").wait(function(){
								$log.log("directive: Loaded jqGrid.js");					
								$rootScope.$broadcast("loaded:jqGrid");
								$rootScope.loadedGrid=true;
							});
						}
					} else if ($scope.type.class=="map") {
						if(!$rootScope.loadedMap && !$rootScope.loadingMap){
							$rootScope.loadingMap=true;
							$log.log("directive: Loading gmaps.js");
							$LAB.script("lib/gmaps.js").wait(function(){
								$log.log("directive: Loaded gmaps.js");							
								$rootScope.$broadcast("loaded:gmaps");
								$rootScope.loadedMap=true;
							});
						}
					}
					$scope.loadWidget();
				}					
			};
		},
		controller: 'WidgetController'
	};
});  
