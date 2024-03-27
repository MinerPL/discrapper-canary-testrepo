"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var n = r("441609"),
  a = r("944644"),
  o = function(e, t, r, o) {
    var i = !r;
    r || (r = {});
    for (var u = -1, l = t.length; ++u < l;) {
      var s = t[u],
        f = o ? o(r[s], e[s], s, r, e) : void 0;
      void 0 === f && (f = e[s]), i ? (0, a.default)(r, s, f) : (0, n.default)(r, s, f)
    }
    return r
  }