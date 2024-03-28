    "use strict";
    var n, o;

    function i(t) {
      let r = 0,
        e = [];
      return async function() {
        if (2 !== r) {
          if (1 === r) return new Promise(t => {
            e.push(t)
          });
          for (r = 1, await t(), r = 2; e.length > 0;) {
            var n;
            null === (n = e.shift()) || void 0 === n || n()
          }
        }
      }
    }
    e.r(r), e.d(r, {
      createQueuedAsyncInitializer: function() {
        return i
      }
    }), e("653041"), (o = n || (n = {}))[o.UNINITIALIZED = 0] = "UNINITIALIZED", o[o.INITIALIZING = 1] = "INITIALIZING", o[o.READY = 2] = "READY"