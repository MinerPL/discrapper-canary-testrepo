"use strict";
r.r(t);
var n = r("421896"),
  a = r("318670"),
  o = r("193079"),
  i = r("97106"),
  l = r("257109"),
  u = r("315162"),
  s = r("532455"),
  f = r("676067"),
  c = "[object Arguments]",
  d = "[object Array]",
  p = "[object Object]",
  h = Object.prototype.hasOwnProperty;
t.default = function(e, t, r, b, v, g) {
  var x = (0, u.default)(e),
    y = (0, u.default)(t),
    m = x ? d : (0, l.default)(e),
    w = y ? d : (0, l.default)(t);
  m = m == c ? p : m, w = w == c ? p : w;
  var E = m == p,
    C = w == p,
    O = m == w;
  if (O && (0, s.default)(e)) {
    if (!(0, s.default)(t)) return !1;
    x = !0, E = !1
  }
  if (O && !E) return g || (g = new n.default), x || (0, f.default)(e) ? (0, a.default)(e, t, r, b, v, g) : (0, o.default)(e, t, m, r, b, v, g);
  if (!(1 & r)) {
    var _ = E && h.call(e, "__wrapped__"),
      S = C && h.call(t, "__wrapped__");
    if (_ || S) {
      var k = _ ? e.value() : e,
        j = S ? t.value() : t;
      return g || (g = new n.default), v(k, j, r, b, g)
    }
  }
  return !!O && (g || (g = new n.default), (0, i.default)(e, t, r, b, v, g))
}