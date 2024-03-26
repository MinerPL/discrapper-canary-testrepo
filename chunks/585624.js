"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("222007");
var a = s("37983");
s("884691");
var r = s("140944"),
  i = s("521313"),
  n = s("869816"),
  l = s("300598"),
  o = s("515723"),
  u = s("368510"),
  d = s("536316"),
  c = s("327195"),
  _ = s("463145"),
  E = s("416227"),
  T = s("325793"),
  I = s("180790"),
  f = s("167990"),
  S = s("886676"),
  R = s("972956"),
  m = s("521507"),
  A = s("175949"),
  N = s("837861"),
  p = s("664803"),
  C = s("854299"),
  g = s("700684"),
  O = s("479997"),
  P = s("667466"),
  M = s("884306"),
  h = s("908173"),
  L = s("930767"),
  x = s("398683"),
  v = s("816571"),
  D = s("114244"),
  b = s("991119");
let U = new Map([
  ["BG", n],
  ["CZ", u],
  ["HU", S],
  ["RO", x],
  ["SE", v],
  ["CY", o],
  ["EE", c],
  ["IS", m],
  ["IE", R],
  ["LV", g],
  ["LI", N],
  ["LT", p],
  ["LU", C],
  ["MT", O],
  ["SK", b],
  ["SI", D],
  ["GR", I],
  ["FI", E],
  ["PT", L],
  ["NO", M],
  ["BE", i],
  ["AT", r],
  ["CH", l],
  ["FR", T],
  ["DE", d],
  ["ES", _],
  ["IT", A],
  ["NL", P],
  ["PL", h],
  ["HR", f]
]);

function j(e) {
  let {
    className: t,
    countryCode: s
  } = e;
  if (null == s || !U.has(s)) return null;
  let r = U.get(s);
  return (0, a.jsx)("img", {
    className: t,
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: r
  })
}