"use strict";
s.r(t), s.d(t, {
  useInappropriateConversationSafetyToolsWarningForChannel: function() {
    return r
  }
});
var n = s("761771"),
  a = s("888203"),
  l = s("328564");

function r(e) {
  let t = (0, n.useIsEligibleForInappropriateConversationWarning)({
      location: "safety-tools-button"
    }),
    s = (0, l.useSafetyAlertsSettingOrDefault)(),
    r = (0, a.useInappropriateConversationWarningsForChannel)(e);
  if (!t || !s) return;
  let o = r.filter(e => null != e.dismiss_timestamp);
  if (0 === o.length) return;
  let i = o.sort((e, t) => e.type > t.type ? 1 : e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1);
  return i[0]
}