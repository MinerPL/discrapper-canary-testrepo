"use strict";
r.r(t);
var n = r("844511"),
  a = r("364555");
t.default = function(e, t, r, o) {
  var i = !r;
  r || (r = {});
  for (var l = -1, u = t.length; ++l < u;) {
    var s = t[l],
      f = o ? o(r[s], e[s], s, r, e) : void 0;
    void 0 === f && (f = e[s]), i ? (0, a.default)(r, s, f) : (0, n.default)(r, s, f)
  }
  return r
}