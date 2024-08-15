var n = r(620014),
  a = r(501979),
  o = r(575473),
  i = r(907287),
  _ = r(65064),
  E = r(402428),
  s = r(207757),
  c = r(556868),
  I = '[object Arguments]',
  u = '[object Array]',
  l = '[object Object]',
  R = Object.prototype.hasOwnProperty;
e.exports = function(e, t, r, A, T, d) {
  var N = E(e),
p = E(t),
O = N ? u : _(e),
f = p ? u : _(t);
  O = O == I ? l : O, f = f == I ? l : f;
  var S = O == l,
D = f == l,
L = O == f;
  if (L && s(e)) {
if (!s(t))
  return !1;
N = !0, S = !1;
  }
  if (L && !S)
return d || (d = new n()), N || c(e) ? a(e, t, r, A, T, d) : o(e, t, O, r, A, T, d);
  if (!(1 & r)) {
var h = S && R.call(e, '__wrapped__'),
  C = D && R.call(t, '__wrapped__');
if (h || C) {
  var g = h ? e.value() : e,
    M = C ? t.value() : t;
  return d || (d = new n()), T(g, M, r, A, d);
}
  }
  return !!L && (d || (d = new n()), i(e, t, r, A, T, d));
};