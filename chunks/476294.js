"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationsTiers: function() {
    return u
  }
});
var i = n("446674"),
  a = n("697218"),
  r = n("764828"),
  s = n("761771"),
  l = n("898436");
let u = e => {
  let t = (0, s.useIsEligibleForInappropriateConversationWarning)({
      location: "context-menu-item"
    }),
    n = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
    u = (0, l.useInappropriateConversationBannerForChannel)(e.id, "context-menu-item");
  if ((null == n ? void 0 : n.isStaff()) !== !0 || !t || !e.isDM()) return null;
  let o = (null == u ? void 0 : u.type) === r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1,
    d = (null == u ? void 0 : u.type) === r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2;
  return {
    isTier1: o,
    isTier2: d
  }
}