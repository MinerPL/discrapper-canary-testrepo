"use strict";
n.r(t), n.d(t, {
  getPipParticipants: function() {
    return i
  }
});
var a = n("823379"),
  l = n("44136"),
  s = n("354459");

function i(e, t, n) {
  return null == t || t.type === s.ParticipantTypes.ACTIVITY ? [] : [t.type === s.ParticipantTypes.STREAM ? e.find(e => e.type === s.ParticipantTypes.USER && e.id === (null == t ? void 0 : t.user.id) && e.id !== n && (0, l.default)(e)) : null, t.type === s.ParticipantTypes.USER ? e.find(e => e.type === s.ParticipantTypes.STREAM && e.user.id === (null == t ? void 0 : t.user.id) && null != e.streamId) : null, t.id !== n ? e.find(e => e.type === s.ParticipantTypes.USER && e.id === n && (0, l.default)(e)) : null].filter(a.isNotNullish)
}