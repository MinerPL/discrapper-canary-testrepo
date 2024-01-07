function(e, i, s) {
    "use strict";
    var t, n;

    function r(e) {
        let i = 0,
            s = [];
        return async function() {
            if (2 !== i) {
                if (1 === i) return new Promise(e => {
                    s.push(e)
                });
                for (i = 1, await e(), i = 2; s.length > 0;) {
                    var t;
                    null === (t = s.shift()) || void 0 === t || t()
                }
            }
        }
    }
    s.r(i), s.d(i, {
        createQueuedAsyncInitializer: function() {
            return r
        }
    }), s("424973"), (n = t || (t = {}))[n.UNINITIALIZED = 0] = "UNINITIALIZED", n[n.INITIALIZING = 1] = "INITIALIZING", n[n.READY = 2] = "READY"
}