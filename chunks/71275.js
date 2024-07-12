n.d(t, {
  PK: function() {
return l;
  },
  tu: function() {
return c;
  },
  xJ: function() {
return u;
  }
});
var r = n(442837),
  i = n(430824),
  a = n(979651),
  o = n(565799),
  s = n(501655);

function l(e) {
  let t = function(e) {
return (0, r.e7)([o.Z], () => null != o.Z.getMutableParticipants(e, s.pV.SPEAKER).find(e => e.type === s.Ui.STREAM), [e]);
  }(e);
  return (0, r.e7)([a.Z], () => a.Z.hasVideo(e), [e]) || t;
}

function u(e) {
  return function(e) {
return null != o.Z.getMutableParticipants(e, s.pV.SPEAKER).find(e => e.type === s.Ui.STREAM);
  }(e) || a.Z.hasVideo(e);
}

function c(e) {
  var t;
  let n = i.Z.getGuild(e);
  return null != n && (null !== (t = null == n ? void 0 : n.maxStageVideoChannelUsers) && void 0 !== t ? t : 0) > 0;
}