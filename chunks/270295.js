"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("47120");
var a = n("470079"),
  l = n("442837"),
  s = n("314897"),
  i = n("471253"),
  r = n("590415");

function o(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getId()),
    n = (0, r.default)(t, e.id),
    o = n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK || n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
    [u, d] = a.useState(o);
  return a.useEffect(() => {
    d(o)
  }, [o]), [u, function() {
    n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, i.audienceAckRequestToSpeak)(e, !0) : (0, i.toggleRequestToSpeak)(e, !u), d(!u)
  }]
}