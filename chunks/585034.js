"use strict";
var r = n("886639"),
  i = n("868822"),
  o = n("418855"),
  s = n("649675"),
  a = n("763589"),
  c = n("308274"),
  u = n("470984"),
  d = n("55082"),
  l = n("579697"),
  f = n("161323"),
  p = TypeError,
  h = function(e, t) {
    this.stopped = e, this.result = t
  },
  g = h.prototype;
e.exports = function(e, t, n) {
  var b, v, m, y, x, w, S, k = n && n.that,
    _ = !!(n && n.AS_ENTRIES),
    E = !!(n && n.IS_RECORD),
    M = !!(n && n.IS_ITERATOR),
    D = !!(n && n.INTERRUPTED),
    C = r(t, k),
    P = function(e) {
      return b && f(b, "normal", e), new h(!0, e)
    },
    T = function(e) {
      return _ ? (o(e), D ? C(e[0], e[1], P) : C(e[0], e[1])) : D ? C(e, P) : C(e)
    };
  if (E) b = e.iterator;
  else if (M) b = e;
  else {
    if (!(v = l(e))) throw p(s(e) + " is not iterable");
    if (a(v)) {
      for (m = 0, y = c(e); y > m; m++)
        if ((x = T(e[m])) && u(g, x)) return x;
      return new h(!1)
    }
    b = d(e, v)
  }
  for (w = E ? e.next : b.next; !(S = i(w, b)).done;) {
    try {
      x = T(S.value)
    } catch (e) {
      f(b, "throw", e)
    }
    if ("object" == typeof x && x && u(g, x)) return x
  }
  return new h(!1)
}