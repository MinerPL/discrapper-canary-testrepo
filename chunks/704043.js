var r = n("146007"),
  i = n("556459"),
  o = n("596340"),
  s = n("442347"),
  a = n("540956"),
  c = n("725502"),
  u = n("591350"),
  d = n("381178"),
  l = "[object Arguments]",
  f = "[object Array]",
  p = "[object Object]",
  h = Object.prototype.hasOwnProperty;
e.exports = function(e, t, n, g, b, v) {
  var m = c(e),
    y = c(t),
    x = m ? f : a(e),
    w = y ? f : a(t);
  x = x == l ? p : x, w = w == l ? p : w;
  var S = x == p,
    k = w == p,
    _ = x == w;
  if (_ && u(e)) {
    if (!u(t)) return !1;
    m = !0, S = !1
  }
  if (_ && !S) return v || (v = new r), m || d(e) ? i(e, t, n, g, b, v) : o(e, t, x, n, g, b, v);
  if (!(1 & n)) {
    var E = S && h.call(e, "__wrapped__"),
      M = k && h.call(t, "__wrapped__");
    if (E || M) {
      var D = E ? e.value() : e,
        C = M ? t.value() : t;
      return v || (v = new r), b(D, C, n, g, v)
    }
  }
  return !!_ && (v || (v = new r), s(e, t, n, g, b, v))
}