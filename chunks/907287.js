var n = e(990393),
  o = Object.prototype.hasOwnProperty;
t.exports = function(t, r, e, i, a, u) {
  var f = 1 & e,
    c = n(t),
    s = c.length;
  if (s != n(r).length && !f) return !1;
  for (var p = s; p--;) {
    var l = c[p];
    if (!(f ? l in r : o.call(r, l))) return !1
  }
  var h = u.get(t),
    v = u.get(r);
  if (h && v) return h == r && v == t;
  var d = !0;
  u.set(t, r), u.set(r, t);
  for (var b = f; ++p < s;) {
    var g = t[l = c[p]],
      y = r[l];
    if (i) var m = f ? i(y, g, l, r, t, u) : i(g, y, l, t, r, u);
    if (!(void 0 === m ? g === y || a(g, y, e, i, u) : m)) {
      d = !1;
      break
    }
    b || (b = "constructor" == l)
  }
  if (d && !b) {
    var w = t.constructor,
      _ = r.constructor;
    w != _ && "constructor" in t && "constructor" in r && !("function" == typeof w && w instanceof w && "function" == typeof _ && _ instanceof _) && (d = !1)
  }
  return u.delete(t), u.delete(r), d
}