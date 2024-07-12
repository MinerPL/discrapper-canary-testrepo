var r = n(42848),
  i = 4294967294,
  a = Math.floor,
  o = Math.min;
e.exports = function(e, t, n, s) {
  var l = 0,
u = null == e ? 0 : e.length;
  if (0 === u)
return 0;
  for (var c = (t = n(t)) != t, d = null === t, _ = r(t), E = void 0 === t; l < u;) {
var f = a((l + u) / 2),
  h = n(e[f]),
  p = void 0 !== h,
  m = null === h,
  I = h == h,
  T = r(h);
if (c)
  var g = s || I;
else
  g = E ? I && (s || p) : d ? I && p && (s || !m) : _ ? I && p && !m && (s || !T) : !m && !T && (s ? h <= t : h < t);
g ? l = f + 1 : u = f;
  }
  return o(u, i);
};