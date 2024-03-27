"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("446674"),
  u = n("271938"),
  a = n("18494"),
  i = n("808422");

function d() {
  let e = (0, l.useStateFromStores)([a.default], () => a.default.getVoiceChannelId()),
    t = (0, l.useStateFromStores)([u.default], () => u.default.getId()),
    n = (0, i.default)(t, e);
  return n === i.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
}