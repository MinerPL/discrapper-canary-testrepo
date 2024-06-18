"use strict";
n.d(t, {
  PK: function() {
    return l
  },
  tu: function() {
    return _
  },
  xJ: function() {
    return u
  }
});
var i = n(442837),
  r = n(430824),
  s = n(979651),
  o = n(565799),
  a = n(501655);

function l(e) {
  let t = function(e) {
    return (0, i.e7)([o.Z], () => null != o.Z.getMutableParticipants(e, a.pV.SPEAKER).find(e => e.type === a.Ui.STREAM), [e])
  }(e);
  return (0, i.e7)([s.Z], () => s.Z.hasVideo(e), [e]) || t
}

function u(e) {
  return function(e) {
    return null != o.Z.getMutableParticipants(e, a.pV.SPEAKER).find(e => e.type === a.Ui.STREAM)
  }(e) || s.Z.hasVideo(e)
}

function _(e) {
  var t;
  let n = r.Z.getGuild(e);
  return null != n && (null !== (t = null == n ? void 0 : n.maxStageVideoChannelUsers) && void 0 !== t ? t : 0) > 0
}