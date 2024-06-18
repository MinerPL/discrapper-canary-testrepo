var n = e(425561),
  o = e(393531),
  i = e(208529);
t.exports = function(t, r, e, a, u, f) {
  var c = 1 & e,
    s = t.length,
    p = r.length;
  if (s != p && !(c && p > s)) return !1;
  var l = f.get(t),
    h = f.get(r);
  if (l && h) return l == r && h == t;
  var v = -1,
    d = !0,
    b = 2 & e ? new n : void 0;
  for (f.set(t, r), f.set(r, t); ++v < s;) {
    var g = t[v],
      y = r[v];
    if (a) var m = c ? a(y, g, v, r, t, f) : a(g, y, v, t, r, f);
    if (void 0 !== m) {
      if (m) continue;
      d = !1;
      break
    }
    if (b) {
      if (!o(r, function(t, r) {
          if (!i(b, r) && (g === t || u(g, t, e, a, f))) return b.push(r)
        })) {
        d = !1;
        break
      }
    } else if (!(g === y || u(g, y, e, a, f))) {
      d = !1;
      break
    }
  }
  return f.delete(t), f.delete(r), d
}