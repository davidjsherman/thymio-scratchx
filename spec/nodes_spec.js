const ASEBAHTTPURL = 'http://localhost:3000/';
const THYMIOURL = ASEBAHTTPURL + 'nodes/thymio-II';

describe("an ajax request for the node list", function(){

    var responses= {
	notfound: {
	    status: 404
	},
	success: {
	    status: 200,
	    contentType: 'application/json',
	    responseText: '[{"node":1,"name":"thymio-II","protocolVersion":5,"aeslId":1}]'
	},
    };

    var request; // must be scoped outside of beforeEach

    // make request for node list
    
    beforeEach(function(done) {
	jasmine.Ajax.install();

	jQuery.ajax({
            url: ASEBAHTTPURL + 'nodes',
            dataType: 'json',
            success: function(data) {
                console.log("send: " + ASEBAHTTPURL + 'nodes');
	    }
	});

	// spyOn($, 'ajax').and.callThrough();
	
	request = jasmine.Ajax.requests.mostRecent();
	request.respondWith(responses.success);
	done();
    });

    afterEach(function() {
	jasmine.Ajax.uninstall();
    });

    // test results
    
    it("sends the request to the correct endpoint", function(done){
	expect(request.url).toBe('http://localhost:3000/nodes');
	done();
    });

    it("uses the correct HTTP method", function(done) {
	expect(request.method).toBe('GET');
	done();
    });

    it("returns the correct mocked node list", function(done) {
	expect(request.data()).toEqual(responses.success);
	done();
    });
});
