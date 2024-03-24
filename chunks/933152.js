"use strict";
n.r(t), n.d(t, {
  useStrangerDangerWarning: function() {
    return u
  }
});
var s = n("674015"),
  a = n("228430"),
  l = n("764828"),
  i = n("533855"),
  r = n("908041"),
  o = n("888203");

function u(e, t) {
  let n = (0, a.useIsSpamMessageRequest)(e),
    u = (0, s.useIsMessageRequest)(e),
    d = (0, i.useChannelSafetyWarning)(e, l.SafetyWarningTypes.STRANGER_DANGER),
    c = (0, r.useUserIsTeen)(t),
    f = (0, o.useInappropriateConversationWarningsForChannel)(e).length > 0;
  if (c && !n && !u && !f) return d
}