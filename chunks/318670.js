var r = n(345114),
  i = n(806159),
  a = n(738562);
t.Z = function(e, t, n, s, o, l) {
  var u = 1 & n,
c = e.length,
d = t.length;
  if (c != d && !(u && d > c))
return !1;
  var _ = l.get(e),
E = l.get(t);
  if (_ && E)
return _ == t && E == e;
  var f = -1,
h = !0,
p = 2 & n ? new r.Z() : void 0;
  for (l.set(e, t), l.set(t, e); ++f < c;) {
var m = e[f],
  I = t[f];
if (s)
  var T = u ? s(I, m, f, t, e, l) : s(m, I, f, e, t, l);
if (void 0 !== T) {
  if (T)
    continue;
  h = !1;
  break;
}
if (p) {
  if (!(0, i.Z)(t, function(e, t) {
      if (!(0, a.Z)(p, t) && (m === e || o(m, e, n, s, l)))
        return p.push(t);
    })) {
    h = !1;
    break;
  }
} else if (!(m === I || o(m, I, n, s, l))) {
  h = !1;
  break;
}
  }
  return l.delete(e), l.delete(t), h;
};