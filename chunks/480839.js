"use strict";
var e = n(161581),
  o = n(173850),
  i = n(936940),
  u = n(526988),
  c = n(976418),
  f = n(192291),
  a = n(679622),
  s = n(310731),
  y = n(106295),
  p = n(361270),
  h = f.aTypedArray,
  v = f.exportTypedArrayMethod,
  l = e.Uint16Array,
  g = l && o(l.prototype.sort),
  d = !!g && !(i(function() {
    g(new l(2), null)
  }) && i(function() {
    g(new l(2), {})
  })),
  A = !!g && !i(function() {
    if (y) return y < 74;
    if (a) return a < 67;
    if (s) return !0;
    if (p) return p < 602;
    var t, r, n = new l(516),
      e = Array(516);
    for (t = 0; t < 516; t++) r = t % 4, n[t] = 515 - t, e[t] = t - 2 * r + 3;
    for (g(n, function(t, r) {
        return (t / 4 | 0) - (r / 4 | 0)
      }), t = 0; t < 516; t++)
      if (n[t] !== e[t]) return !0
  });
v("sort", function(t) {
  var r;
  if (void 0 !== t && u(t), A) return g(this, t);
  return c(h(this), (r = t, function(t, n) {
    return void 0 !== r ? +r(t, n) || 0 : n != n ? -1 : t != t ? 1 : 0 === t && 0 === n ? 1 / t > 0 && 1 / n < 0 ? 1 : -1 : t > n
  }))
}, !A || d)