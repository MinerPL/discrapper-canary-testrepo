"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationWarningsForChannel: function() {
    return r
  }
});
var i = n("446674"),
  a = n("764828");

function r(e) {
  let t = (0, i.useStateFromStores)([a.default], () => a.default.getChannelSafetyWarnings(e), [e]);
  return t.filter(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
}