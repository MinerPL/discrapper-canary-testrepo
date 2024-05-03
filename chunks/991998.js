"use strict";
u.r(e), u.d(e, {
  default: function() {
    return d
  }
});
var n = u("528734"),
  r = u("995638"),
  a = u("951516");

function f(t, e) {
  var u = t.getFullYear() - e.getFullYear() || t.getMonth() - e.getMonth() || t.getDate() - e.getDate() || t.getHours() - e.getHours() || t.getMinutes() - e.getMinutes() || t.getSeconds() - e.getSeconds() || t.getMilliseconds() - e.getMilliseconds();
  return u < 0 ? -1 : u > 0 ? 1 : u
}

function d(t, e) {
  (0, a.default)(2, arguments);
  var u = (0, n.default)(t),
    d = (0, n.default)(e),
    o = f(u, d),
    i = Math.abs((0, r.default)(u, d));
  u.setDate(u.getDate() - o * i);
  var l = Number(f(u, d) === -o),
    s = o * (i - l);
  return 0 === s ? 0 : s
}