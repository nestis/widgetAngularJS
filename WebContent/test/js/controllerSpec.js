describe("CONTROLLER TEST", function(){
	describe("Test AppController", function () {
	  
	    var scope = null;
	    var rootScope = null;
	    
	    // Module load
	    beforeEach(function () {
	        module("widgets");
	    });
	    
	    // Inject variables to test context
	    beforeEach(inject(function($rootScope, $controller) {
	        rootScope = $rootScope;
	        scope = $rootScope.$new();
	        // Creamos el controller...
	        $controller('AppController', {
	          $rootScope: rootScope,
	          $scope: scope
	        });
	    }));
	
	    it('Must init flag variable of third party libraries', function(){

	    	scope.initApp();
	    	expect(rootScope.loadingChartJS).toBeFalsy();
	    	expect(rootScope.loadedChartJS).toBeFalsy();
	    	expect(rootScope.loadingGrid).toBeFalsy();
	    	expect(rootScope.loadedGrid).toBeFalsy();
	    	expect(rootScope.loadingMaps).toBeFalsy();
	    	expect(rootScope.loadedMap).toBeFalsy();
	    });
	});
	
	describe("Test WidgetController", function () {
		  
	    var scope = null;
	    var dataServiceMock = {
	    		get:function(url){
	    			return {then: function(succes, error){}};
				}
	    };
	    
	    beforeEach(function () {
	        module("widgets");
	    });
	    
	    // Injectamos servicios
	    beforeEach(inject(function($rootScope, $controller, $log, DataService) {
	        scope = $rootScope.$new();
	       
	        $controller('WidgetController', {
	        	$scope: scope,
	        	$log: $log,
	        	DataService: dataServiceMock
	        });
	    }));
	
	    it('Must init a chart widget', function() {

	    	// Before test
	    	scope.type = {class:"chart", type:"line"};
	    	scope.widgetPane = 1;
	    	scope.dataObject = {url:"test", param:"jasmine"};
	    	
	    	// Init test
	    	scope.loadWidget();
	    	scope.$root.loadedChartJS=true;
	    	scope.$root.$broadcast("pane:1");
	    	
	    	// Check de test
	    	expect(scope.status).toBe("OK");
	    });
	    


	    it('Must init a grid widget', function() {

	    	// Before test
	    	scope.type = {class:"grid"};
	    	scope.widgetPane = 1;
	    	scope.dataObject = {url:"test", param:"jasmine"};
	    	
	    	// Init test
	    	scope.loadWidget();
	    	scope.$root.loadedGrid=true;
	    	scope.$root.$broadcast("pane:1");
	    	
	    	// Check de test
	    	expect(scope.status).toBe("OK");
	    });
	    
	    it('Must init a map widget', function() {

	    	// Before test
	    	scope.type = {class:"map", type:"	"};
	    	scope.widgetPane = 1;
	    	scope.dataWidget = {url:"test", param:"jasmine"};
	    	GMaps = function(obj){
	    		geolocate = function(){}
	    		
	    	};
	    	// Init test
	    	scope.loadWidget();
	    	scope.$root.loadedGrid=true;
	    	scope.$broadcast("pane:1");
	    	
	    	// Check de test
	    	expect(scope.status).toBe("OK");
	    });
	});
});