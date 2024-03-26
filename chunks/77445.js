"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("446674"),
  i = n("271938"),
  u = n("18494"),
  r = n("808422");

function a() {
  let e = (0, l.useStateFromStores)([u.default], () => u.default.getVoiceChannelId()),
    t = (0, l.useStateFromStores)([i.default], () => i.default.getId()),
    n = (0, r.default)(t, e);
  return n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
}