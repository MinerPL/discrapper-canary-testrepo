var r = n(102074),
  i = n(251064),
  a = n(464880),
  o = n(803607),
  s = n(879893),
  l = n(82075);
e.exports = function(e, t, n) {
  var u = -1,
c = i,
d = e.length,
_ = !0,
E = [],
f = E;
  if (n)
_ = !1, c = a;
  else if (d >= 200) {
var h = t ? null : s(e);
if (h)
  return l(h);
_ = !1, c = o, f = new r();
  } else
f = t ? [] : E;
  t:
for (; ++u < d;) {
  var p = e[u],
    m = t ? t(p) : p;
  if (p = n || 0 !== p ? p : 0, _ && m == m) {
    for (var I = f.length; I--;)
      if (f[I] === m)
        continue t;
    t && f.push(m), E.push(p);
  } else
    !c(f, m, n) && (f !== E && f.push(m), E.push(p));
}
  return E;
};