"use strict";
var r = n(147018),
  i = n(926515),
  a = n(581031),
  o = n(676125),
  s = n(354848),
  u = n(35179),
  c = n(155763),
  l = n(714050),
  d = n(995739),
  f = n(87046),
  p = n(115726),
  h = n(641236),
  m = n(992051),
  g = h("replace"),
  _ = TypeError,
  b = a("".indexOf),
  v = a("".replace),
  y = a("".slice),
  E = Math.max,
  S = function(e, t, n) {
    return n > e.length ? -1 : "" === t ? n : b(e, t, n)
  };
r({
  target: "String",
  proto: !0
}, {
  replaceAll: function(e, t) {
    var n, r, a, h, x, w, C, T, D = o(this),
      M = 0,
      O = 0,
      A = "";
    if (!u(e)) {
      if ((n = c(e)) && !~b(l(o(f(e))), "g")) throw _("`.replaceAll` does not allow non-global regexes");
      if (r = d(e, g)) return i(r, e, D, t);
      if (m && n) return v(l(D), e, t)
    }
    for (a = l(D), h = l(e), !(x = s(t)) && (t = l(t)), C = E(1, w = h.length), M = S(a, h, 0); - 1 !== M;) T = x ? l(t(h, M, a)) : p(h, a, M, [], void 0, t), A += y(a, O, M) + T, O = M + w, M = S(a, h, M + C);
    return O < a.length && (A += y(a, O)), A
  }
})