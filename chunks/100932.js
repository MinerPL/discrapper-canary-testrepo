"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationsTiers: function() {
    return i
  }
});
var a = n("442837"),
  u = n("594174"),
  l = n("359119"),
  r = n("237292"),
  s = n("13279");
let i = e => {
  let t = (0, r.useIsEligibleForInappropriateConversationWarning)({
      location: "context-menu-item"
    }),
    n = (0, a.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
    i = (0, s.useInappropriateConversationBannerForChannel)(e.id, "context-menu-item");
  if ((null == n ? void 0 : n.isStaff()) !== !0 || !t || !e.isDM()) return null;
  let d = (null == i ? void 0 : i.type) === l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
  return {
    isTier1: d,
    isTier2: (null == i ? void 0 : i.type) === l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
  }
}