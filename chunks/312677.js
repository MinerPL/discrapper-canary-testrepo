    "use strict";
    var r = e("147018"),
      o = e("161581"),
      u = e("4340"),
      i = e("325008"),
      c = TypeError,
      f = Object.defineProperty,
      _ = o.self !== o;
    try {
      if (i) {
        var a = Object.getOwnPropertyDescriptor(o, "self");
        (_ || !a || !a.get || !a.enumerable) && u(o, "self", {
          get: function() {
            return o
          },
          set: function(n) {
            if (this !== o) throw c("Illegal invocation");
            f(o, "self", {
              value: n,
              writable: !0,
              configurable: !0,
              enumerable: !0
            })
          },
          configurable: !0,
          enumerable: !0
        })
      } else r({
        global: !0,
        simple: !0,
        forced: _
      }, {
        self: o
      })
    } catch (n) {}