"use strict";
n.d(t, {
  Z7: function() {
    return a
  },
  _d: function() {
    return o
  },
  z: function() {
    return l
  }
});
var i = n(442837),
  r = n(565799),
  s = n(501655);

function o(e) {
  return (0, i.e7)([r.Z], () => null != e ? r.Z.getParticipantCount(e, s.pV.BLOCKED) : 0, [e])
}

function a(e) {
  var t;
  return null !== (t = r.Z.getParticipantCount(e, s.pV.BLOCKED)) && void 0 !== t ? t : 0
}

function l(e) {
  return (0, i.e7)([r.Z], () => r.Z.getMutableParticipants(e, s.pV.BLOCKED), [e])
}