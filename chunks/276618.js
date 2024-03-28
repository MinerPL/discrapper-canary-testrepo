"use strict";
n.r(t), n.d(t, {
  useShouldShowInitialSafetyToolsButtonTooltip: function() {
    return i
  }
});
var a = n("442837"),
  l = n("359119"),
  s = n("444957");

function i(e) {
  let t = (0, s.useInappropriateConversationSafetyToolsWarningForChannel)(e),
    n = (0, a.useStateFromStores)([l.default], () => l.default.hasShownInitialTooltipForChannel(e));
  return null != t && !n
}