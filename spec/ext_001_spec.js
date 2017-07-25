var ASEBAHTTPURL = 'http://localhost:3000/';
var THYMIOURL = ASEBAHTTPURL + 'nodes/thymio-II';

describe("ScratchExtensions", function() {
    it("is defined", function(done){
	expect(ScratchExtensions).toBeDefined();
	done();
    });
});

describe("Thymio extension", function() {
    it("exists in ScratchExtensions.handlers", function(done){
	expect(ScratchExtensions.extension('Thymio')).toBeDefined();
	done();
    });
});

var ext = window.ScratchExtensions.extension('Thymio');

describe("Thymio extension", function() {
    it("has resetAll method", function(done){
	expect(ext.resetAll).toBeDefined();
	done();
    });
});

describe("Method resetAll", function() {

    var request;

    beforeEach(function() {
	jasmine.Ajax.install();
    });

    afterEach(function() {
	jasmine.Ajax.uninstall();
    });

    ext.resetAll();

    request = jasmine.Ajax.requests.mostRecent();
    request.respondWith({ status: 200 });

    it("sends the request to the correct endpoint", function(done){
    	expect(request.method).toBe('GET');
    	expect(request.url).toBe(THYMIOURL+ '/Q_reset');
    });
});
