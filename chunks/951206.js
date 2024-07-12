t.d(n, {
  F: function() {
return d;
  }
});
var l = t(512722),
  u = t.n(l),
  i = t(846027),
  r = t(287734),
  a = t(131951),
  o = t(254238),
  s = t(893387);

function d(e, n) {
  var t;
  let l = null !== (t = e.sessionId) && void 0 !== t ? t : '';
  (0, o._)(l), (0, o.s6)();
  let d = null != n ? n : e.channelId;
  u()(null != d, 'attempted to transfer to unknown channel'), e.selfMute !== a.Z.isSelfMute() && i.Z.toggleSelfMute(), e.selfDeaf !== a.Z.isSelfDeaf() && i.Z.toggleSelfDeaf(), (0, s.Z)(d, 'discord_client', l), r.default.selectVoiceChannel(d, !1);
}