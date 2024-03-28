var i = n("801282"),
  r = n("900013"),
  a = n("730179"),
  l = Math.ceil,
  u = Math.max;
e.exports = function(e, t, n) {
  t = (n ? r(e, t, n) : void 0 === t) ? 1 : u(a(t), 0);
  var o = null == e ? 0 : e.length;
  if (!o || t < 1) return [];
  for (var s = 0, d = 0, c = Array(l(o / t)); s < o;) c[d++] = i(e, s, s += t);
  return c
}