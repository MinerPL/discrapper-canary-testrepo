t.read = function(e, t, n, r, i) {
  var a, o, s = 8 * i - r - 1,
l = (1 << s) - 1,
u = l >> 1,
c = -7,
d = n ? i - 1 : 0,
_ = n ? -1 : 1,
E = e[t + d];
  for (d += _, a = E & (1 << -c) - 1, E >>= -c, c += s; c > 0; a = 256 * a + e[t + d], d += _, c -= 8);
  for (o = a & (1 << -c) - 1, a >>= -c, c += r; c > 0; o = 256 * o + e[t + d], d += _, c -= 8);
  if (0 === a)
a = 1 - u;
  else {
if (a === l)
  return o ? NaN : 1 / 0 * (E ? -1 : 1);
o += Math.pow(2, r), a -= u;
  }
  return (E ? -1 : 1) * o * Math.pow(2, a - r);
}, t.write = function(e, t, n, r, i, a) {
  var o, s, l, u = 8 * a - i - 1,
c = (1 << u) - 1,
d = c >> 1,
_ = 23 === i ? 5.960464477539062e-8 : 0,
E = r ? 0 : a - 1,
f = r ? 1 : -1,
h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
  for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = c) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), o + d >= 1 ? t += _ / l : t += _ * Math.pow(2, 1 - d), t * l >= 2 && (o++, l /= 2), o + d >= c ? (s = 0, o = c) : o + d >= 1 ? (s = (t * l - 1) * Math.pow(2, i), o += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + E] = 255 & s, E += f, s /= 256, i -= 8);
  for (o = o << i | s, u += i; u > 0; e[n + E] = 255 & o, E += f, o /= 256, u -= 8);
  e[n + E - f] |= 128 * h;
};