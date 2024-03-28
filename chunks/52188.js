"use strict";
n.r(t), n.d(t, {
  BadgeEntryPoint: function() {
    return i
  },
  LocalizedPricingBadgeIcon: function() {
    return ei
  }
}), n("47120");
var i, r, s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  o = n("442837"),
  u = n("246946"),
  c = n("91802"),
  d = n("222727"),
  f = n("981631"),
  p = n("503330"),
  _ = n("500052"),
  E = n("375832"),
  I = n("992171"),
  T = n("937064"),
  m = n("434336"),
  S = n("128955"),
  g = n("803353"),
  A = n("479388"),
  C = n("179581"),
  h = n("13174"),
  v = n("580248"),
  O = n("966294"),
  b = n("302143"),
  N = n("146121"),
  D = n("705500"),
  R = n("402127"),
  M = n("153652"),
  L = n("485487"),
  y = n("200985"),
  x = n("270930"),
  P = n("46514"),
  G = n("750876"),
  U = n("993855"),
  w = n("701497"),
  j = n("937717"),
  F = n("165194"),
  B = n("208802"),
  H = n("145905"),
  V = n("335302"),
  k = n("956172"),
  Y = n("695579"),
  W = n("541764"),
  Z = n("191706"),
  z = n("67528"),
  K = n("332150"),
  q = n("581902"),
  J = n("167219"),
  Q = n("704381"),
  X = n("591417"),
  $ = n("929883"),
  ee = n("261137"),
  et = n("958700");
(r = i || (i = {}))[r.PrivateMessages = 0] = "PrivateMessages", r[r.SettingsMenu = 1] = "SettingsMenu";
let en = new Map([
  ["PE", Z],
  ["PH", z],
  ["CL", S],
  ["CO", g],
  ["AR", _],
  ["JP", G],
  ["VN", et],
  ["TH", ee],
  ["ID", L],
  ["MY", k],
  ["MX", V],
  ["KR", U],
  ["BG", T],
  ["CZ", C],
  ["HU", M],
  ["RO", J],
  ["SE", Q],
  ["CY", A],
  ["EE", v],
  ["IS", x],
  ["IE", y],
  ["LV", B],
  ["LI", w],
  ["LT", j],
  ["LU", F],
  ["MT", H],
  ["SK", $],
  ["SI", X],
  ["GR", D],
  ["FI", b],
  ["PT", q],
  ["NO", W],
  ["BE", I],
  ["AT", E],
  ["CH", m],
  ["FR", N],
  ["DE", h],
  ["ES", O],
  ["IT", P],
  ["NL", Y],
  ["PL", K],
  ["HR", R]
]);

function ei(e) {
  let {
    entryPoint: t,
    className: n
  } = e, r = (0, o.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), a = (0, c.useLocalizedPromoQuery)(), _ = null == a ? void 0 : a.countryCode;
  if ((0, d.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, _), null == _ || !en.has(_) || r) return null;
  let E = en.get(_),
    I = "badgeIcon" + i[t];
  return (0, s.jsx)("img", {
    className: l()(n, p[I]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: E
  })
}