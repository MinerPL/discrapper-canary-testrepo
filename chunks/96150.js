n(47120);
var r = n(570140),
  i = n(317770),
  a = n(280837),
  s = n(592125),
  o = n(914010),
  l = n(823379);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class c extends i.Z {
  _initialize() {
r.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), r.Z.subscribe('LOGOUT', this.handleLogout);
  }
  _terminate() {
r.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), r.Z.unsubscribe('LOGOUT', this.handleLogout);
  }
  constructor(...e) {
super(...e), u(this, 'handleVoiceChannelSelect', e => {
  let {
    channelId: t,
    guildId: n
  } = e;
  if (null != t) {
    let e = s.Z.getChannel(t);
    if (null == e || e.isGuildStageVoice())
      return;
  }
  this.terminate();
  this.handleDisconnectFromStageChannel(null == t ? null : null != n ? n : null);
}), u(this, 'handleDisconnectFromStageChannel', e => {
  let t = o.Z.getGuildId();
  (0, a.O)([
    t,
    e
  ].filter(l.lm));
}), u(this, 'handleLogout', () => {
  this.terminate(), this.handleDisconnectFromStageChannel(null);
});
  }
}
t.Z = new c();