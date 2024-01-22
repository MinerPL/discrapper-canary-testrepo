n("424973");
var r = n("488063"),
  i = n("394835"),
  o = n("991914"),
  s = n("430272"),
  a = n("662504"),
  c = n("531217");
e.exports = function(e, t, n) {
  var u = -1,
    d = i,
    l = e.length,
    f = !0,
    p = [],
    h = p;
  if (n) f = !1, d = o;
  else if (l >= 200) {
    var g = t ? null : a(e);
    if (g) return c(g);
    f = !1, d = s, h = new r
  } else h = t ? [] : p;
  e: for (; ++u < l;) {
    var b = e[u],
      v = t ? t(b) : b;
    if (b = n || 0 !== b ? b : 0, f && v == v) {
      for (var m = h.length; m--;)
        if (h[m] === v) continue e;
      t && h.push(v), p.push(b)
    } else !d(h, v, n) && (h !== p && h.push(v), p.push(b))
  }
  return p
}