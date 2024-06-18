"use strict";
var n = t(147018),
  a = t(345374),
  i = t(886960),
  o = t(49693),
  f = t(980855),
  s = t(299623),
  c = t(959318),
  l = Array,
  u = Math.max,
  d = Math.min;
n({
  target: "Array",
  proto: !0
}, {
  toSpliced: function(e, r) {
    var t, n, a, v, h = s(this),
      p = o(h),
      g = f(e, p),
      b = arguments.length,
      y = 0;
    for (0 === b ? t = n = 0 : 1 === b ? (t = 0, n = p - g) : (t = b - 2, n = d(u(c(r), 0), p - g)), v = l(a = i(p + t - n)); y < g; y++) v[y] = h[y];
    for (; y < g + t; y++) v[y] = arguments[y - g + 2];
    for (; y < a; y++) v[y] = h[y + n - t];
    return v
  }
}), a("toSpliced")