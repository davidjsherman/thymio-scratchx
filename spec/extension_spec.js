var RandomWaitExtension = require('../src/random_wait_extension');

describe("RandomWaitExtension", function() {
    it("is defined", function(done){
	expect(RandomWaitExtension).toBeDefined();
	done();
    });

    it("has _shutdown method", function(done){
	expect(RandomWaitExtension._shutdown).toBeDefined();
	done();
    });

    it("has _getStatus method", function(done){
	expect(RandomWaitExtension._getStatus).toBeDefined();
	describe("RandomWaitExtension _getStatus", function() {
	    it("is ready", function(done){
		expect(RandomWaitExtension._getStatus()).toBe({status:2, msg: 'Ready'});
	    });
	    done();
	});
	done();
    });

    it("logs wait on the console", function() {
	var consoleSpy = spyOn(console, 'log');
	var result = RandomWaitExtension.wait_random();
	expect(consoleSpy.calls.mostRecent().args[0]).toContain('Waiting for');
    });
});
