"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
}), s("222007");
var a = s("37983");
s("884691");
var n = s("140944"),
  l = s("521313"),
  r = s("869816"),
  i = s("300598"),
  u = s("515723"),
  o = s("368510"),
  d = s("536316"),
  c = s("327195"),
  _ = s("463145"),
  E = s("416227"),
  I = s("325793"),
  f = s("180790"),
  T = s("167990"),
  S = s("886676"),
  R = s("972956"),
  m = s("521507"),
  p = s("175949"),
  N = s("837861"),
  g = s("664803"),
  A = s("854299"),
  P = s("700684"),
  C = s("479997"),
  O = s("667466"),
  M = s("884306"),
  h = s("908173"),
  L = s("930767"),
  x = s("398683"),
  v = s("816571"),
  j = s("114244"),
  b = s("991119");
let U = new Map([
  ["BG", r],
  ["CZ", o],
  ["HU", S],
  ["RO", x],
  ["SE", v],
  ["CY", u],
  ["EE", c],
  ["IS", m],
  ["IE", R],
  ["LV", P],
  ["LI", N],
  ["LT", g],
  ["LU", A],
  ["MT", C],
  ["SK", b],
  ["SI", j],
  ["GR", f],
  ["FI", E],
  ["PT", L],
  ["NO", M],
  ["BE", l],
  ["AT", n],
  ["CH", i],
  ["FR", I],
  ["DE", d],
  ["ES", _],
  ["IT", p],
  ["NL", O],
  ["PL", h],
  ["HR", T]
]);

function D(e) {
  let {
    className: t,
    countryCode: s
  } = e;
  if (null == s || !U.has(s)) return null;
  let n = U.get(s);
  return (0, a.jsx)("img", {
    className: t,
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: n
  })
}