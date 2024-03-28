"use strict";
r.r(t);
var n = r("65708"),
  i = r("544364"),
  o = function(e) {
    return e && e[n.default] && e === e[0, n.default]()
  };
t.default = function(e) {
  return {
    onCreateRule: function(t, r, n) {
      if (!o(r)) return null;
      var s = (0, i.createRule)(t, {}, n);
      return r.subscribe(function(t) {
        for (var r in t) s.prop(r, t[r], e)
      }), s
    },
    onProcessRule: function(t) {
      if (!t || "style" === t.type) {
        var r = t.style,
          n = function(n) {
            var i = r[n];
            if (!o(i)) return "continue";
            delete r[n], i.subscribe({
              next: function(r) {
                t.prop(n, r, e)
              }
            })
          };
        for (var i in r)
          if ("continue" === n(i)) continue
      }
    }
  }
}