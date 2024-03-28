"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("314897"),
  l = n("565799"),
  s = n("501655"),
  i = n("88751"),
  r = n("427679");

function o(e) {
  if (!e.isGuildStageVoice() || !r.default.isLive(e.id)) return !1;
  let t = a.default.getId();
  return !!(i.default.isModerator(t, e.id) && i.default.isSpeaker(t, e.id)) && (null == l.default.getMutableParticipants(e.id).find(n => n.user.id !== t && i.default.isModerator(n.user.id, e.id)) || null == l.default.getMutableParticipants(e.id, s.StageChannelParticipantNamedIndex.SPEAKER).find(n => n.user.id !== t && i.default.isModerator(n.user.id, e.id)))
}