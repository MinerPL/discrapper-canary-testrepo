"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationBannerForChannel: function() {
    return u
  }
});
var i = n("764828"),
  a = n("533855"),
  r = n("761771"),
  s = n("888203"),
  l = n("328564");

function u(e, t) {
  let n = (0, r.useIsEligibleForInappropriateConversationWarning)({
      location: t
    }),
    u = (0, l.useSafetyAlertsSettingOrDefault)(),
    o = (0, s.useInappropriateConversationWarningsForChannel)(e),
    d = (0, a.useChannelSafetyWarning)(e, i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
  if (!!n && !!u && 0 !== o.length) {
    if (!o.some(e => e.type === i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)) return d
  }
}