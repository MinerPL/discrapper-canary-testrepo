"use strict";
s.r(t), s.d(t, {
  useSafetyToolsButtonTooltipForChannel: function() {
    return S
  }
}), s("700225");
var n = s("718517"),
  a = s("764828"),
  l = s("821240"),
  r = s("774298"),
  o = s("888203"),
  i = s("408815");
let T = 1 * n.default.Millis.HOUR,
  u = 12 * n.default.Millis.HOUR;

function S(e) {
  var t;
  let s = (0, r.useInappropriateConversationSafetyToolsWarningForChannel)(e),
    n = (0, o.useInappropriateConversationWarningsForChannel)(e),
    S = (0, i.useShouldShowInitialSafetyToolsButtonTooltip)(e);
  if (null == s || S || (0, l.shouldShowTakeoverForWarnings)(n)) return;
  let _ = n.some(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1),
    d = n.filter(e => null != e.dismiss_timestamp).sort((e, t) => t.dismiss_timestamp < e.dismiss_timestamp ? -1 : 1);
  if (d.length < 1) return;
  let E = d[0];
  if (! function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (null == e) return !0;
      let s = new Date(e).getTime() + (t ? T : u),
        n = new Date().getTime();
      return n >= s
    }(E.dismiss_timestamp, _)) return;
  let c = n.filter(e => null == e.dismiss_timestamp);
  return null !== (t = c.findLast(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1)) && void 0 !== t ? t : c.findLast(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
}