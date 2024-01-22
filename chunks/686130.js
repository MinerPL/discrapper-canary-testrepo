"use strict";
var r = n("859514"),
  i = n("868822"),
  o = n("64980"),
  s = n("590455"),
  a = n("125359"),
  c = n("551544"),
  u = n("238104"),
  d = n("998270"),
  l = n("47361"),
  f = n("623105"),
  p = n("87078"),
  h = n("174669"),
  g = n("140925"),
  b = h("replace"),
  v = TypeError,
  m = o("".indexOf),
  y = o("".replace),
  x = o("".slice),
  w = Math.max,
  S = function(e, t, n) {
    return n > e.length ? -1 : "" === t ? n : m(e, t, n)
  };
r({
  target: "String",
  proto: !0
}, {
  replaceAll: function(e, t) {
    var n, r, o, h, k, _, E, M, D = s(this),
      C = 0,
      P = 0,
      T = "";
    if (!c(e)) {
      if ((n = u(e)) && !~m(d(s(f(e))), "g")) throw v("`.replaceAll` does not allow non-global regexes");
      if (r = l(e, b)) return i(r, e, D, t);
      if (g && n) return y(d(D), e, t)
    }
    for (o = d(D), h = d(e), !(k = a(t)) && (t = d(t)), E = w(1, _ = h.length), C = S(o, h, 0); - 1 !== C;) M = k ? d(t(h, C, o)) : p(h, o, C, [], void 0, t), T += x(o, P, C) + M, P = C + _, C = S(o, h, C + E);
    return P < o.length && (T += x(o, P)), T
  }
})