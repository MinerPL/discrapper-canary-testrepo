"use strict";
var r = n("911718"),
  i = n("307904"),
  o = n("638839")(),
  s = n("293471"),
  a = r("%TypeError%"),
  c = r("%Math.floor%");
e.exports = function(e, t) {
  if ("function" != typeof e) throw new a("`fn` is not a function");
  if ("number" != typeof t || t < 0 || t > 4294967295 || c(t) !== t) throw new a("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2],
    r = !0,
    u = !0;
  if ("length" in e && s) {
    var d = s(e, "length");
    d && !d.configurable && (r = !1), d && !d.writable && (u = !1)
  }
  return (r || u || !n) && (o ? i(e, "length", t, !0, !0) : i(e, "length", t)), e
}