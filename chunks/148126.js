"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  }
});
var n = r("95788"),
  a = r("794666"),
  o = r("723347"),
  i = 0 / 0,
  u = /^[-+]0x[0-9a-f]+$/i,
  l = /^0b[01]+$/i,
  s = /^0o[0-7]+$/i,
  f = parseInt,
  c = function(e) {
    if ("number" == typeof e) return e;
    if ((0, o.default)(e)) return i;
    if ((0, a.default)(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = (0, a.default)(t) ? t + "" : t
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = (0, n.default)(e);
    var r = l.test(e);
    return r || s.test(e) ? f(e.slice(2), r ? 2 : 8) : u.test(e) ? i : +e
  }