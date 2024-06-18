"use strict";
var e = n(796774),
  o = n(680625),
  i = Array,
  u = Math.abs,
  c = Math.pow,
  f = Math.floor,
  a = Math.log,
  s = Math.LN2,
  y = function(t) {
    var r = o(t),
      n = u(t - r);
    return n > .5 || .5 === n && r % 2 != 0 ? r + e(t) : r
  };
t.exports = {
  pack: function(t, r, n) {
    var e, o, p, h = i(n),
      v = 8 * n - r - 1,
      l = (1 << v) - 1,
      g = l >> 1,
      d = 23 === r ? c(2, -24) - c(2, -77) : 0,
      A = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0,
      w = 0;
    for ((t = u(t)) != t || t === 1 / 0 ? (o = t != t ? 1 : 0, e = l) : (p = c(2, -(e = f(a(t) / s))), t * p < 1 && (e--, p *= 2), e + g >= 1 ? t += d / p : t += d * c(2, 1 - g), t * p >= 2 && (e++, p /= 2), e + g >= l ? (o = 0, e = l) : e + g >= 1 ? (o = y((t * p - 1) * c(2, r)), e += g) : (o = y(t * c(2, g - 1) * c(2, r)), e = 0)); r >= 8;) h[w++] = 255 & o, o /= 256, r -= 8;
    for (e = e << r | o, v += r; v > 0;) h[w++] = 255 & e, e /= 256, v -= 8;
    return h[--w] |= 128 * A, h
  },
  unpack: function(t, r) {
    var n, e = t.length,
      o = 8 * e - r - 1,
      i = (1 << o) - 1,
      u = i >> 1,
      f = o - 7,
      a = e - 1,
      s = t[a--],
      y = 127 & s;
    for (s >>= 7; f > 0;) y = 256 * y + t[a--], f -= 8;
    for (n = y & (1 << -f) - 1, y >>= -f, f += r; f > 0;) n = 256 * n + t[a--], f -= 8;
    if (0 === y) y = 1 - u;
    else {
      if (y === i) return n ? NaN : s ? -1 / 0 : 1 / 0;
      n += c(2, r), y -= u
    }
    return (s ? -1 : 1) * n * c(2, y - r)
  }
}