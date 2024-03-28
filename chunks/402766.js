"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
}), s("411104");
var a = s("735250");
s("470079");
var l = s("67523"),
  n = s("865267"),
  i = s("125664"),
  r = s("981631");

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