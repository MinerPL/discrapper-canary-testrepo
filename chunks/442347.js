var r = n("904526"),
  i = Object.prototype.hasOwnProperty;
e.exports = function(e, t, n, o, s, a) {
  var c = 1 & n,
    u = r(e),
    d = u.length;
  if (d != r(t).length && !c) return !1;
  for (var l = d; l--;) {
    var f = u[l];
    if (!(c ? f in t : i.call(t, f))) return !1
  }
  var p = a.get(e);
  if (p && a.get(t)) return p == t;
  var h = !0;
  a.set(e, t), a.set(t, e);
  for (var g = c; ++l < d;) {
    var b = e[f = u[l]],
      v = t[f];
    if (o) var m = c ? o(v, b, f, t, e, a) : o(b, v, f, e, t, a);
    if (!(void 0 === m ? b === v || s(b, v, n, o, a) : m)) {
      h = !1;
      break
    }
    g || (g = "constructor" == f)
  }
  if (h && !g) {
    var y = e.constructor,
      x = t.constructor;
    y != x && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof x && x instanceof x) && (h = !1)
  }
  return a.delete(e), a.delete(t), h
}