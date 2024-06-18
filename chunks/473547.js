"use strict";
var r = n(548015),
  i = n(204188),
  a = n(175056),
  o = n(906024),
  s = 1 / 0,
  u = r.Z ? r.Z.prototype : void 0,
  c = u ? u.toString : void 0;
t.Z = function e(t) {
  if ("string" == typeof t) return t;
  if ((0, a.Z)(t)) return (0, i.Z)(t, e) + "";
  if ((0, o.Z)(t)) return c ? c.call(t) : "";
  var n = t + "";
  return "0" == n && 1 / t == -s ? "-0" : n
}