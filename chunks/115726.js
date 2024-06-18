"use strict";
var e = r(581031),
  i = r(339718),
  u = Math.floor,
  c = e("".charAt),
  o = e("".replace),
  s = e("".slice),
  a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  f = /\$([$&'`]|\d{1,2})/g;
t.exports = function(t, n, r, e, l, h) {
  var v = r + t.length,
    p = e.length,
    d = f;
  return void 0 !== l && (l = i(l), d = a), o(h, d, function(i, o) {
    var a;
    switch (c(o, 0)) {
      case "$":
        return "$";
      case "&":
        return t;
      case "`":
        return s(n, 0, r);
      case "'":
        return s(n, v);
      case "<":
        a = l[s(o, 1, -1)];
        break;
      default:
        var f = +o;
        if (0 === f) return i;
        if (f > p) {
          var h = u(f / 10);
          if (0 === h) return i;
          if (h <= p) return void 0 === e[h - 1] ? c(o, 1) : e[h - 1] + c(o, 1);
          return i
        }
        a = e[f - 1]
    }
    return void 0 === a ? "" : a
  })
}