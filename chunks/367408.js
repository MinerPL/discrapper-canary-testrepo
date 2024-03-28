"use strict";
n.r(t), n.d(t, {
  useSafetyToolsButtonTooltipForChannel: function() {
    return c
  }
}), n("852437");
var a = n("70956"),
  l = n("359119"),
  s = n("116347"),
  i = n("444957"),
  r = n("403485"),
  o = n("276618");
let u = 1 * a.default.Millis.HOUR,
  d = 12 * a.default.Millis.HOUR;

function c(e) {
  var t;
  let n = (0, i.useInappropriateConversationSafetyToolsWarningForChannel)(e),
    a = (0, r.useInappropriateConversationWarningsForChannel)(e),
    c = (0, o.useShouldShowInitialSafetyToolsButtonTooltip)(e);
  if (null == n || c || (0, s.shouldShowTakeoverForWarnings)(a)) return;
  let f = a.some(e => e.type === l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1),
    h = a.filter(e => null != e.dismiss_timestamp).sort((e, t) => t.dismiss_timestamp < e.dismiss_timestamp ? -1 : 1);
  if (h.length < 1 || ! function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (null == e) return !0;
      let n = new Date(e).getTime() + (t ? u : d);
      return new Date().getTime() >= n
    }(h[0].dismiss_timestamp, f)) return;
  let m = a.filter(e => null == e.dismiss_timestamp);
  return null !== (t = m.findLast(e => e.type === l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1)) && void 0 !== t ? t : m.findLast(e => e.type === l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
}