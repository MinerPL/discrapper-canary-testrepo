var n = r(990393),
  _ = Object.prototype.hasOwnProperty;
t.exports = function(t, e, r, a, i, o) {
  var E = 1 & r,
s = n(t),
c = s.length;
  if (c != n(e).length && !E)
return !1;
  for (var I = c; I--;) {
var R = s[I];
if (!(E ? R in e : _.call(e, R)))
  return !1;
  }
  var T = o.get(t),
u = o.get(e);
  if (T && u)
return T == e && u == t;
  var l = !0;
  o.set(t, e), o.set(e, t);
  for (var A = E; ++I < c;) {
var N = t[R = s[I]],
  d = e[R];
if (a)
  var O = E ? a(d, N, R, e, t, o) : a(N, d, R, t, e, o);
if (!(void 0 === O ? N === d || i(N, d, r, a, o) : O)) {
  l = !1;
  break;
}
A || (A = 'constructor' == R);
  }
  if (l && !A) {
var S = t.constructor,
  p = e.constructor;
S != p && 'constructor' in t && 'constructor' in e && !('function' == typeof S && S instanceof S && 'function' == typeof p && p instanceof p) && (l = !1);
  }
  return o.delete(t), o.delete(e), l;
};