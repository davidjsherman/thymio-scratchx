var ScratchExtensions = new (function () {
    var plugin = null;
    var handlers = {};
    var blockDefs = {};
    var menuDefs = {};
    var deviceSpecs = {};
    var devices = {};
    var poller = null;
    var lib = this;
        
    lib.register = function (name, descriptor, handler, deviceSpec) {
	handlers[name] = handler;
        console.log('Scratch extension "' + name + '" registered');
        return true;
    }

    lib.unregister = function (name) {
        console.log('Scratch extension "' + name + '" un registered');
        return true;
    }

    lib.extension = function (name) {
	return handlers[name];
    }
})();
