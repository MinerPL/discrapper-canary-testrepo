var r = n(525425),
  i = n(228057),
  a = n(142670),
  s = n(161984),
  o = n(671660),
  l = n(443735),
  u = n(402428),
  c = n(521392),
  d = n(207757),
  _ = n(807419),
  E = n(706627),
  f = n(667066),
  h = n(556868),
  p = n(292065),
  m = n(662506);
e.exports = function(e, t, n, I, T, g, S) {
  var A = p(e, n),
N = p(t, n),
v = S.get(N);
  if (v) {
r(e, n, v);
return;
  }
  var O = g ? g(A, N, n + '', e, t, S) : void 0,
R = void 0 === O;
  if (R) {
var C = u(N),
  y = !C && d(N),
  D = !C && !y && h(N);
O = N, C || y || D ? u(A) ? O = A : c(A) ? O = s(A) : y ? (R = !1, O = i(N, !0)) : D ? (R = !1, O = a(N, !0)) : O = [] : f(N) || l(N) ? (O = A, l(A) ? O = m(A) : (!E(A) || _(A)) && (O = o(N))) : R = !1;
  }
  R && (S.set(N, O), T(O, N, I, g, S), S.delete(N)), r(e, n, O);
};