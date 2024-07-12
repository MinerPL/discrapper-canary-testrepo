var n = r(425561),
  _ = r(393531),
  a = r(208529);
t.exports = function(t, e, r, i, o, E) {
  var s = 1 & r,
c = t.length,
I = e.length;
  if (c != I && !(s && I > c))
return !1;
  var R = E.get(t),
T = E.get(e);
  if (R && T)
return R == e && T == t;
  var u = -1,
l = !0,
A = 2 & r ? new n() : void 0;
  for (E.set(t, e), E.set(e, t); ++u < c;) {
var N = t[u],
  d = e[u];
if (i)
  var O = s ? i(d, N, u, e, t, E) : i(N, d, u, t, e, E);
if (void 0 !== O) {
  if (O)
    continue;
  l = !1;
  break;
}
if (A) {
  if (!_(e, function(t, e) {
      if (!a(A, e) && (N === t || o(N, t, r, i, E)))
        return A.push(e);
    })) {
    l = !1;
    break;
  }
} else if (!(N === d || o(N, d, r, i, E))) {
  l = !1;
  break;
}
  }
  return E.delete(t), E.delete(e), l;
};