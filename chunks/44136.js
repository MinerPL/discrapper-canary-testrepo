"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("442837"), n("314897"), n("131951");
var a = n("354459");

function l(e) {
  var t, n;
  return e.type !== a.ParticipantTypes.ACTIVITY && ((0, a.isStreamParticipant)(e) ? null != e.streamId : null !== (n = null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) && void 0 !== n && n)
}