"use strict";
n("854508"), n("70102");
var r = n("464510"),
  i = n("765379"),
  o = n("667769"),
  s = n("640107"),
  a = n("554741"),
  c = n("903389"),
  u = n("862440"),
  d = n("338100"),
  l = n("955006"),
  f = n("812095"),
  p = n("264871"),
  h = Object("a"),
  g = "a" !== h[0] || !(0 in h),
  b = f("String.prototype.split");
e.exports = function(e) {
  var t, n = d(this),
    f = u((g && p(n) ? b(n, "") : n).length);
  if (!c(e)) throw TypeError("Array.prototype.map callback must be a function");
  arguments.length > 1 && (t = arguments[1]);
  for (var h = r(n, f), v = 0; v < f;) {
    var m = l(v);
    if (a(n, m)) {
      var y = i(e, t, [s(n, m), v, n]);
      o(h, m, y)
    }
    v += 1
  }
  return h
}