var r = n(821164),
  i = Object.prototype.hasOwnProperty;
e.exports = function(e, t, n, a, o, s) {
  var l = 1 & n,
u = r(e),
c = u.length;
  if (c != r(t).length && !l)
return !1;
  for (var d = c; d--;) {
var _ = u[d];
if (!(l ? _ in t : i.call(t, _)))
  return !1;
  }
  var E = s.get(e);
  if (E && s.get(t))
return E == t;
  var f = !0;
  s.set(e, t), s.set(t, e);
  for (var h = l; ++d < c;) {
var p = e[_ = u[d]],
  m = t[_];
if (a)
  var I = l ? a(m, p, _, t, e, s) : a(p, m, _, e, t, s);
if (!(void 0 === I ? p === m || o(p, m, n, a, s) : I)) {
  f = !1;
  break;
}
h || (h = 'constructor' == _);
  }
  if (f && !h) {
var T = e.constructor,
  g = t.constructor;
T != g && 'constructor' in e && 'constructor' in t && !('function' == typeof T && T instanceof T && 'function' == typeof g && g instanceof g) && (f = !1);
  }
  return s.delete(e), s.delete(t), f;
};