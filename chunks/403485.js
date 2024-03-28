"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationWarningsForChannel: function() {
    return s
  }
});
var a = n("442837"),
  l = n("359119");

function s(e) {
  return (0, a.useStateFromStores)([l.default], () => l.default.getChannelSafetyWarnings(e), [e]).filter(e => e.type === l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
}