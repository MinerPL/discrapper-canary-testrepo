"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationBannerForChannel: function() {
    return o
  }
});
var a = n("359119"),
  l = n("897769"),
  s = n("237292"),
  i = n("403485"),
  r = n("604849");

function o(e, t) {
  let n = (0, s.useIsEligibleForInappropriateConversationWarning)({
      location: t
    }),
    o = (0, r.useSafetyAlertsSettingOrDefault)(),
    u = (0, i.useInappropriateConversationWarningsForChannel)(e),
    d = (0, l.useChannelSafetyWarning)(e, a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
  if (!!n && !!o && 0 !== u.length) {
    if (!u.some(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)) return d
  }
}