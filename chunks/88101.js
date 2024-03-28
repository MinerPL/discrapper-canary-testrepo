"use strict";
n.r(t), n.d(t, {
  useStrangerDangerWarning: function() {
    return u
  }
});
var a = n("385956"),
  l = n("15701"),
  s = n("359119"),
  i = n("897769"),
  r = n("981312"),
  o = n("403485");

function u(e, t) {
  let n = (0, l.useIsSpamMessageRequest)(e),
    u = (0, a.useIsMessageRequest)(e),
    d = (0, i.useChannelSafetyWarning)(e, s.SafetyWarningTypes.STRANGER_DANGER),
    c = (0, r.useUserIsTeen)(t),
    f = (0, o.useInappropriateConversationWarningsForChannel)(e).length > 0;
  if (c && !n && !u && !f) return d
}