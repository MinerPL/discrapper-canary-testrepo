"use strict";
var r = n("156741"),
  a = n("729605"),
  o = n("338752"),
  i = n("474883"),
  l = n("54659"),
  u = Math.min,
  s = [].lastIndexOf,
  c = !!s && 1 / [1].lastIndexOf(1, -0) < 0,
  d = l("lastIndexOf");
e.exports = c || !d ? function(e) {
  if (c) return r(s, this, arguments) || 0;
  var t = a(this),
    n = i(t),
    l = n - 1;
  for (arguments.length > 1 && (l = u(l, o(arguments[1]))), l < 0 && (l = n + l); l >= 0; l--)
    if (l in t && t[l] === e) return l || 0;
  return -1
} : s