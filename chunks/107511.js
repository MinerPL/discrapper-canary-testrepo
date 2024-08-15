n(47120);
var r = n(433517),
  i = n(570140),
  a = n(317770),
  s = n(314897),
  o = n(944486),
  l = n(105372),
  u = n(88751),
  c = n(157925);
class d extends a.Z {
  _initialize() {
i.Z.subscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
  }
  _terminate() {
i.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
  }
  constructor(...e) {
var t, n, i;
super(...e), t = this, n = 'handleVoiceStateUpdates', i = e => {
  let {
    voiceStates: t
  } = e;
  t.forEach(e => {
    if (null == e.channelId || e.userId !== s.default.getId())
      return;
    if (this.terminate(), r.K.get(c.$z, !1))
      return;
    let t = o.Z.getVoiceChannelId();
    if (null != t && e.channelId === t)
      u.ZP.isAudienceMember(e.userId, t) && (r.K.set(c.$z, !0), l.$(t));
  });
}, n in t ? Object.defineProperty(t, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = i;
  }
}
t.Z = new d();