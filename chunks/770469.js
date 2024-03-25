"use strict";
n.r(t), n.d(t, {
  BadgeEntryPoint: function() {
    return r
  },
  LocalizedPricingBadgeIcon: function() {
    return er
  }
}), n("222007");
var r, i, s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  o = n("446674"),
  u = n("102985"),
  c = n("959905"),
  d = n("485138"),
  f = n("49111"),
  p = n("194675"),
  _ = n("479490"),
  E = n("492689"),
  m = n("621231"),
  T = n("80371"),
  I = n("445908"),
  h = n("31581"),
  g = n("176261"),
  C = n("6618"),
  S = n("852384"),
  A = n("908707"),
  v = n("825425"),
  N = n("46894"),
  x = n("725607"),
  R = n("570954"),
  O = n("369380"),
  D = n("167023"),
  b = n("294012"),
  M = n("746068"),
  L = n("943354"),
  y = n("590798"),
  P = n("51388"),
  G = n("659562"),
  U = n("404339"),
  j = n("66779"),
  F = n("958562"),
  B = n("948574"),
  w = n("193776"),
  k = n("876884"),
  H = n("990988"),
  V = n("69548"),
  Y = n("177364"),
  W = n("325478"),
  q = n("84816"),
  Z = n("503742"),
  z = n("671478"),
  K = n("704716"),
  Q = n("2289"),
  X = n("234299"),
  J = n("77978"),
  $ = n("30993"),
  ee = n("859495"),
  et = n("867820");
(i = r || (r = {}))[i.PrivateMessages = 0] = "PrivateMessages", i[i.SettingsMenu = 1] = "SettingsMenu";
let en = new Map([
  ["PE", q],
  ["PH", Z],
  ["CL", h],
  ["CO", g],
  ["AR", _],
  ["JP", G],
  ["VN", et],
  ["TH", ee],
  ["ID", M],
  ["MY", V],
  ["MX", H],
  ["KR", U],
  ["BG", T],
  ["CZ", S],
  ["HU", b],
  ["RO", Q],
  ["SE", X],
  ["CY", C],
  ["EE", v],
  ["IS", y],
  ["IE", L],
  ["LV", w],
  ["LI", j],
  ["LT", F],
  ["LU", B],
  ["MT", k],
  ["SK", $],
  ["SI", J],
  ["GR", O],
  ["FI", x],
  ["PT", K],
  ["NO", W],
  ["BE", m],
  ["AT", E],
  ["CH", I],
  ["FR", R],
  ["DE", A],
  ["ES", N],
  ["IT", P],
  ["NL", Y],
  ["PL", z],
  ["HR", D]
]);

function er(e) {
  let {
    entryPoint: t,
    className: n
  } = e, i = (0, o.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), a = (0, c.useLocalizedPromoQuery)(), _ = null == a ? void 0 : a.countryCode;
  if ((0, d.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, _), null == _ || !en.has(_) || i) return null;
  let E = en.get(_),
    m = "badgeIcon" + r[t];
  return (0, s.jsx)("img", {
    className: l(n, p[m]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: E
  })
}