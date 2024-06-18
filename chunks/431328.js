"use strict";
n.d(t, {
  Fd: function() {
    return u
  },
  Io: function() {
    return _
  },
  Rk: function() {
    return l
  },
  w8: function() {
    return a
  }
}), n(47120);
var i = n(442837),
  r = n(136015),
  s = n(565799),
  o = n(501655);

function a(e, t) {
  let [n] = (0, i.e7)([s.Z], () => [s.Z.getMutableParticipants(e, t), s.Z.getParticipantsVersion(e)], [e, t], r.Q);
  return n
}

function l(e, t) {
  return (0, i.e7)([s.Z], () => s.Z.getParticipantCount(e, t), [e, t])
}

function u(e) {
  let [t] = (0, i.e7)([s.Z], () => [s.Z.getMutableRequestToSpeakParticipants(e), s.Z.getRequestToSpeakParticipantsVersion(e)], [e], r.Q);
  return t
}

function _(e) {
  return (0, i.e7)([s.Z], () => s.Z.getMutableParticipants(e, o.pV.SPEAKER).filter(e => e.type === o.Ui.VOICE).length, [e])
}