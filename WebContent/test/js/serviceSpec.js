//Test code
describe("SERVICES TEST", function() {
	
	describe("Test DataService", function () {
	 
	    var service, httpBackend, scope, utilsService;
	    
	    beforeEach(function () {
	        module("widgets");
	    });
	
	    // Injectamos variables al contexto del test
	    beforeEach(inject(function(DataService, $httpBackend, $rootScope) {
	    	scope = $rootScope.$new();
	    	service = DataService;
	        httpBackend = $httpBackend;
	    }));
	   
	    it('Must return data; get()', function() {
	    	
	    	var urlRequest = "rest/test/jasmine"
	    	// Hacemos que la llamada a $http con 'testJasmine' devuelva lo que queramos
	    	httpBackend.expectGET(urlRequest).respond('{"sucess":true,"data":{"testJasmine":"OK"},"error":null}');
	    	
	        var promise = service.get('rest/test/jasmine');
	        promise.then(function(data){
	        	expect(data.sucess).toBe(true);
	        	expect(data.data.testJasmine).toBe("OK");
			},function(data){});
	        httpBackend.flush();
	    });
	
	    afterEach(function() {
	        httpBackend.verifyNoOutstandingExpectation();
	        httpBackend.verifyNoOutstandingRequest();
	    });
	});
	

	describe("Test TemplateService", function () {
		var service;
		
		beforeEach(function () {
	        module("widgets");
	    });
		
		beforeEach(inject(function(TemplateService){
			service = TemplateService;
			spyOn($,"ajax").andCallFake(function(){
								return { done: function(data){ return this;},
										fail: function(){return "failJasmine";}} 
							});
		}));
		
		it("Must get a template", function(){
			var template = service.getTemplate("template.html");
			expect($.ajax).toHaveBeenCalled();
			expect(template).toBe("");
		});
		
	});
});