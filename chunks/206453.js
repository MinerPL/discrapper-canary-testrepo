"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("70102");
var l = n("37983");
n("884691");
var s = n("784917"),
  i = n("326880"),
  r = n("131777"),
  a = n("49111");

function o(e) {
  let {
    tier: t,
    ...n
  } = e;
  switch (t) {
    case a.BoostedGuildTiers.NONE:
    case a.BoostedGuildTiers.TIER_1:
      return (0, l.jsx)(s.default, {
        ...n
      });
    case a.BoostedGuildTiers.TIER_2:
      return (0, l.jsx)(i.default, {
        ...n
      });
    case a.BoostedGuildTiers.TIER_3:
      return (0, l.jsx)(r.default, {
        ...n
      });
    default:
      throw Error("Not a valid tier type")
  }
}