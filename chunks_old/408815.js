"use strict";
s.r(t), s.d(t, {
  useShouldShowInitialSafetyToolsButtonTooltip: function() {
    return r
  }
});
var n = s("446674"),
  a = s("764828"),
  l = s("774298");

function r(e) {
  let t = (0, l.useInappropriateConversationSafetyToolsWarningForChannel)(e),
    s = (0, n.useStateFromStores)([a.default], () => a.default.hasShownInitialTooltipForChannel(e));
  return null != t && !s
}