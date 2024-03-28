"use strict";
n.r(t), n.d(t, {
  getClass: function() {
    return l
  }
}), n("724458");
var s = n("468194");

function l(e, t) {
  for (var n = arguments.length, l = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) l[a - 2] = arguments[a];
  let i = l.reduce((e, t) => e + (0, s.upperCaseFirstChar)(t), ""),
    r = e["".concat(t).concat(i)];
  return null == r ? "" : r
}