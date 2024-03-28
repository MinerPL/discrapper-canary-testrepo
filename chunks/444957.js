"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationSafetyToolsWarningForChannel: function() {
    return i
  }
});
var a = n("237292"),
  l = n("403485"),
  s = n("604849");

function i(e) {
  let t = (0, a.useIsEligibleForInappropriateConversationWarning)({
      location: "safety-tools-button"
    }),
    n = (0, s.useSafetyAlertsSettingOrDefault)(),
    i = (0, l.useInappropriateConversationWarningsForChannel)(e);
  if (!t || !n) return;
  let r = i.filter(e => null != e.dismiss_timestamp);
  if (0 !== r.length) return r.sort((e, t) => e.type > t.type ? 1 : e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1)[0]
}