n(47120);
var r = n(147913),
  i = n(314897),
  a = n(592125),
  o = n(242291),
  s = n(981631);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class u extends r.Z {
  constructor(...e) {
super(...e), l(this, 'prevConnected', !1), l(this, 'tempMutedChannel', null), l(this, 'handleRTCConnectionState', e => {
  let {
    state: t,
    channelId: n
  } = e, r = t === s.hes.RTC_CONNECTED, i = r && !this.prevConnected, l = a.Z.getChannel(n), u = null == l ? void 0 : l.getGuildId(), c = this.tempMutedChannel === n;
  i && null != u && (c ? this.tempMutedChannel = null : (0, o.M2)(u)), this.prevConnected = r;
}), l(this, 'handleMute', e => {
  let {
    channelId: t
  } = e;
  this.tempMutedChannel = t;
}), l(this, 'handleVoiceStateUpdates', e => {
  let {
    voiceStates: t
  } = e, n = i.default.getId(), r = i.default.getSessionId();
  t.forEach(e => {
    let {
      userId: t,
      channelId: i,
      sessionId: a
    } = e;
    t === n && a !== r && null != i && (this.tempMutedChannel = i);
  });
}), l(this, 'actions', {
  RTC_CONNECTION_STATE: this.handleRTCConnectionState,
  SOUNDBOARD_MUTE_JOIN_SOUND: this.handleMute,
  VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
});
  }
}
t.Z = new u();