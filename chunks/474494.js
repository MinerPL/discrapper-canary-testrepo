"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("47120");
var a = s("735250");
s("470079");
var i = s("319147"),
  r = s("306276"),
  n = s("510236"),
  l = s("133398"),
  o = s("722283"),
  u = s("298274"),
  d = s("569620"),
  c = s("16503"),
  _ = s("64268"),
  E = s("697720"),
  T = s("578325"),
  I = s("56790"),
  R = s("90718"),
  S = s("897482"),
  f = s("4515"),
  m = s("474472"),
  N = s("156129"),
  A = s("799303"),
  p = s("245630"),
  C = s("842272"),
  g = s("486731"),
  O = s("346943"),
  P = s("55826"),
  M = s("218776"),
  h = s("414653"),
  L = s("297141"),
  x = s("26517"),
  v = s("93125"),
  D = s("278583"),
  b = s("814437");
let U = new Map([
  ["BG", n],
  ["CZ", u],
  ["HU", S],
  ["RO", x],
  ["SE", v],
  ["CY", o],
  ["EE", c],
  ["IS", m],
  ["IE", f],
  ["LV", g],
  ["LI", A],
  ["LT", p],
  ["LU", C],
  ["MT", O],
  ["SK", b],
  ["SI", D],
  ["GR", I],
  ["FI", E],
  ["PT", L],
  ["NO", M],
  ["BE", r],
  ["AT", i],
  ["CH", l],
  ["FR", T],
  ["DE", d],
  ["ES", _],
  ["IT", N],
  ["NL", P],
  ["PL", h],
  ["HR", R]
]);

function j(e) {
  let {
    className: t,
    countryCode: s
  } = e;
  if (null == s || !U.has(s)) return null;
  let i = U.get(s);
  return (0, a.jsx)("img", {
    className: t,
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: i
  })
}