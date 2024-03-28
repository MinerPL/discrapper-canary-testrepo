"use strict";
r.r(t);
var n = r("926080"),
  a = r("97445"),
  o = r("315162"),
  i = r("429296"),
  l = r("725180"),
  u = r("17071");
t.default = function(e, t, r) {
  t = (0, n.default)(t, e);
  for (var s = -1, f = t.length, c = !1; ++s < f;) {
    var d = (0, u.default)(t[s]);
    if (!(c = null != e && r(e, d))) break;
    e = e[d]
  }
  return c || ++s != f ? c : !!(f = null == e ? 0 : e.length) && (0, l.default)(f) && (0, i.default)(d, f) && ((0, o.default)(e) || (0, a.default)(e))
}