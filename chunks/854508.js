    "use strict";
    var n = r("859514"),
      o = r("503486"),
      i = r("18563"),
      u = r("814026"),
      c = TypeError,
      f = Object.defineProperty,
      s = o.self !== o;
    try {
      if (u) {
        var a = Object.getOwnPropertyDescriptor(o, "self");
        (s || !a || !a.get || !a.enumerable) && i(o, "self", {
          get: function() {
            return o
          },
          set: function(e) {
            if (this !== o) throw c("Illegal invocation");
            f(o, "self", {
              value: e,
              writable: !0,
              configurable: !0,
              enumerable: !0
            })
          },
          configurable: !0,
          enumerable: !0
        })
      } else n({
        global: !0,
        simple: !0,
        forced: s
      }, {
        self: o
      })
    } catch (e) {}