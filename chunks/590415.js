"use strict";
n.d(t, {
  ZP: function() {
    return l
  },
  gf: function() {
    return a
  },
  xO: function() {
    return r
  }
});
var i, r, s = n(442837),
  o = n(979651);

function a(e) {
  if (null == e) return 0;
  if (e.suppress && null != e.requestToSpeakTimestamp) return 1;
  if (!e.suppress && null != e.requestToSpeakTimestamp) return 2;
  if (!e.suppress && null == e.requestToSpeakTimestamp) return 3;
  return 0
}

function l(e, t) {
  return (0, s.e7)([o.Z], () => null == e || null == t ? 0 : a(o.Z.getVoiceStateForChannel(t, e)), [e, t])
}(i = r || (r = {}))[i.NONE = 0] = "NONE", i[i.REQUESTED_TO_SPEAK = 1] = "REQUESTED_TO_SPEAK", i[i.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", i[i.ON_STAGE = 3] = "ON_STAGE"