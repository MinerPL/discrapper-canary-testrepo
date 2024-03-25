"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
}), s("70102");
var a = s("37983");
s("884691");
var l = s("394716"),
  n = s("216773"),
  i = s("507006"),
  r = s("49111");

function o(e) {
  let {
    tier: t,
    ...s
  } = e;
  switch (t) {
    case r.BoostedGuildTiers.TIER_1:
      return (0, a.jsx)(l.default, {
        ...s
      });
    case r.BoostedGuildTiers.TIER_2:
      return (0, a.jsx)(n.default, {
        ...s
      });
    case r.BoostedGuildTiers.TIER_3:
      return (0, a.jsx)(i.default, {
        ...s
      });
    case r.BoostedGuildTiers.NONE:
      return null;
    default:
      throw Error("Not a valid tier type")
  }
}