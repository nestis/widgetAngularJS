'use strict';

/* Directives */
angular.module('widgets').directive('widget', ['$log', 'TemplateService', function ($log, TemplateService) {
	var self = {};
	
	self.getTemplate = function(elem, attrs) {
		var html = elem.html().trim();

		// If the widget has a defined template...
		if(attrs.widgetTemplate) {
			html += TemplateService.getTemplate(attrs.widgetTemplate);
		}
		var errorDiv = TemplateService.getTemplate("widgetErrorDiv.html");
		var loadingDiv = TemplateService.getTemplate("widgetLoadingDiv.html");
		
		var el = $(html);
		el.find("#widgetContent").attr("data-ng-show","wgtCtrl.status=='OK'").append("<div id='"+attrs.widgetName+"'></div>");

		el.find(".widgetWrapper").append(errorDiv);
		el.find(".widgetWrapper").append(loadingDiv);
		
		if(JSON.parse(attrs.widget).class=="grid") {
			el.find("#widgetContent").append("<table id='"+ attrs.widgetName + "'></table>");
		}
		// Dynamic setting of bootstrap collapse attributes
		el.find(".widgetWrapper").attr("id", "collapse"+attrs.widgetName);
		el.find("a.accordion-toggle").attr("data-parent","#"+el.find("div.accordion").attr("id")).attr("href","#"+el.find("div.accordion-body").attr("id"));
		return el.html();
	}
	
	return {
		element:'A', //this directive will work as an element attribute only. All HTML element with a 'widget' attribute will pass throug this directive.
		multiElement:true,
		template: self.getTemplate,
		scope: {
			title: '@widgetTitle',
			widgetName: '@widgetName',
			widgetPane: '=widgetPane',
			widgetTemplate: '=widgetTemplate'
		},
		// compile function, first to be executed. We should manipulate the DOM only here.
		compile:function(element, attrs) {
			return {
				// post-link compile function
				pre: function postLink($scope, iElement, iAttrs, ctrl) {
					$log.log("directive: Processing widget " + iAttrs.widgetName);	
					
					// Widget Variables init from JSON values. If done it on scope:{} throws a digest error.
					if(iAttrs.widgetObject) {
						ctrl.dataObject = JSON.parse(iAttrs.widgetObject);
					}
					ctrl.type = JSON.parse(iAttrs.widget);
					ctrl.status = "LOADING";

					// Check the widget type in case is needed to do something specific for it. For example: load a JS library
					if(!TemplateService.libs[ctrl.type.class]) {
						TemplateService.getLibrary(attrs.widgetLib, ctrl.type.class ,function(){
							$log.log("directive: Loaded " + ctrl.type.class);	
							TemplateService.libs[ctrl.type.class] = 2;	
							$scope.$root.$broadcast('loaded:' + ctrl.type.class);
						});
					}
					ctrl.loadWidget($scope);
				}
			};
		},
		controller: '@',
		name: 'widgetController',
		controllerAs: 'wgtCtrl',
		bindToController: true
	};
}]);  
