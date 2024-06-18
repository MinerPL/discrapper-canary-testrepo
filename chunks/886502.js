var n = e(620014),
  o = e(501979),
  i = e(575473),
  a = e(907287),
  u = e(65064),
  f = e(402428),
  c = e(207757),
  s = e(556868),
  p = "[object Arguments]",
  l = "[object Array]",
  h = "[object Object]",
  v = Object.prototype.hasOwnProperty;
t.exports = function(t, r, e, d, b, g) {
  var y = f(t),
    m = f(r),
    w = y ? l : u(t),
    _ = m ? l : u(r);
  w = w == p ? h : w, _ = _ == p ? h : _;
  var x = w == h,
    k = _ == h,
    M = w == _;
  if (M && c(t)) {
    if (!c(r)) return !1;
    y = !0, x = !1
  }
  if (M && !x) return g || (g = new n), y || s(t) ? o(t, r, e, d, b, g) : i(t, r, w, e, d, b, g);
  if (!(1 & e)) {
    var j = x && v.call(t, "__wrapped__"),
      O = k && v.call(r, "__wrapped__");
    if (j || O) {
      var E = j ? t.value() : t,
        N = O ? r.value() : r;
      return g || (g = new n), b(E, N, e, d, g)
    }
  }
  return !!M && (g || (g = new n), a(t, r, e, d, b, g))
}