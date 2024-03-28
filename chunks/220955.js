"use strict";
r.r(t);
var n = r("112419"),
  a = r("675717"),
  o = r("906024"),
  i = 0 / 0,
  l = /^[-+]0x[0-9a-f]+$/i,
  u = /^0b[01]+$/i,
  s = /^0o[0-7]+$/i,
  f = parseInt;
t.default = function(e) {
  if ("number" == typeof e) return e;
  if ((0, o.default)(e)) return i;
  if ((0, a.default)(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = (0, a.default)(t) ? t + "" : t
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = (0, n.default)(e);
  var r = u.test(e);
  return r || s.test(e) ? f(e.slice(2), r ? 2 : 8) : l.test(e) ? i : +e
}