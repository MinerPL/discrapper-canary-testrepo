"use strict";
var e = n(566885),
  o = n(581031),
  i = n(470592),
  u = n(339718),
  c = n(49693),
  f = n(29016),
  a = o([].push),
  s = function(t) {
    var r = 1 === t,
      n = 2 === t,
      o = 3 === t,
      s = 4 === t,
      y = 6 === t,
      p = 7 === t,
      h = 5 === t || y;
    return function(v, l, g, d) {
      for (var A, w, x = u(v), b = i(x), T = e(l, g), E = c(b), I = 0, m = d || f, R = r ? m(v, E) : n || p ? m(v, 0) : void 0; E > I; I++)
        if ((h || I in b) && (w = T(A = b[I], I, x), t)) {
          if (r) R[I] = w;
          else if (w) switch (t) {
            case 3:
              return !0;
            case 5:
              return A;
            case 6:
              return I;
            case 2:
              a(R, A)
          } else switch (t) {
            case 4:
              return !1;
            case 7:
              a(R, A)
          }
        } return y ? -1 : o || s ? s : R
    }
  };
t.exports = {
  forEach: s(0),
  map: s(1),
  filter: s(2),
  some: s(3),
  every: s(4),
  find: s(5),
  findIndex: s(6),
  filterReject: s(7)
}