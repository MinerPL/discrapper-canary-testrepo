var r = n(525425),
  i = n(228057),
  a = n(142670),
  o = n(161984),
  s = n(671660),
  u = n(443735),
  c = n(402428),
  l = n(521392),
  d = n(207757),
  f = n(807419),
  p = n(706627),
  h = n(667066),
  m = n(556868),
  g = n(292065),
  _ = n(662506);
e.exports = function(e, t, n, b, v, y, E) {
  var S = g(e, n),
    x = g(t, n),
    w = E.get(x);
  if (w) {
    r(e, n, w);
    return
  }
  var C = y ? y(S, x, n + "", e, t, E) : void 0,
    T = void 0 === C;
  if (T) {
    var D = c(x),
      M = !D && d(x),
      O = !D && !M && m(x);
    C = x, D || M || O ? c(S) ? C = S : l(S) ? C = o(S) : M ? (T = !1, C = i(x, !0)) : O ? (T = !1, C = a(x, !0)) : C = [] : h(x) || u(x) ? (C = S, u(S) ? C = _(S) : (!p(S) || f(S)) && (C = s(x))) : T = !1
  }
  T && (E.set(x, C), v(C, x, b, y, E), E.delete(x)), r(e, n, C)
}