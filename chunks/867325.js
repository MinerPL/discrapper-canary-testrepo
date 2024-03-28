"use strict";
var r, a = n("668530"),
  o = n("156741"),
  i = n("735471"),
  l = n("262546"),
  u = n("204384"),
  s = n("780524"),
  c = n("274745"),
  d = a.Function;
var f = /MSIE .\./.test(u) || l && ((r = a.Bun.version.split(".")).length < 3 || "0" === r[0] && (r[1] < 3 || "3" === r[1] && "0" === r[2]));
e.exports = function(e, t) {
  var n = t ? 2 : 1;
  return f ? function(r, a) {
    var l = c(arguments.length, 1) > n,
      u = i(r) ? r : d(r),
      f = l ? s(arguments, n) : [],
      p = l ? function() {
        o(u, this, f)
      } : u;
    return t ? e(p, a) : e(p)
  } : e
}