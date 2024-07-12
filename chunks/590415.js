n.d(t, {
  ZP: function() {
return l;
  },
  gf: function() {
return s;
  },
  xO: function() {
return i;
  }
});
var r, i, a = n(442837),
  o = n(979651);

function s(e) {
  if (null == e)
return 0;
  if (e.suppress && null != e.requestToSpeakTimestamp)
return 1;
  if (!e.suppress && null != e.requestToSpeakTimestamp)
return 2;
  if (!e.suppress && null == e.requestToSpeakTimestamp)
return 3;
  return 0;
}

function l(e, t) {
  return (0, a.e7)([o.Z], () => null == e || null == t ? 0 : s(o.Z.getVoiceStateForChannel(t, e)), [
e,
t
  ]);
}
(r = i || (i = {}))[r.NONE = 0] = 'NONE', r[r.REQUESTED_TO_SPEAK = 1] = 'REQUESTED_TO_SPEAK', r[r.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2] = 'REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK', r[r.ON_STAGE = 3] = 'ON_STAGE';