"use strict";
var r = n("548828"),
  a = n("611345"),
  o = n("186973"),
  i = n("474883"),
  l = TypeError,
  u = function(e) {
    return function(t, n, u, s) {
      var c = a(t),
        d = o(c),
        f = i(c);
      r(n);
      var p = e ? f - 1 : 0,
        h = e ? -1 : 1;
      if (u < 2)
        for (;;) {
          if (p in d) {
            s = d[p], p += h;
            break
          }
          if (p += h, e ? p < 0 : f <= p) throw new l("Reduce of empty array with no initial value")
        }
      for (; e ? p >= 0 : f > p; p += h) p in d && (s = n(s, d[p], p, c));
      return s
    }
  };
e.exports = {
  left: u(!1),
  right: u(!0)
}