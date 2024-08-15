n(47120);
var r = n(846519),
  i = n(147913),
  a = n(603113),
  s = n(594190),
  o = n(592125),
  l = n(131951),
  u = n(19780),
  c = n(885110),
  d = n(606304),
  _ = n(938475),
  E = n(70956),
  f = n(367907),
  h = n(981631);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let m = 1 * E.Z.Millis.MINUTE;
class I extends i.Z {
  _initialize() {
__OVERLAY__ ? this.stores = new Map() : (this.stores = new Map().set(d.Z, () => this._handleSpeakingStoreChanged()).set(u.Z, () => this._handleRTCConnectionStoreChanged()), this._reset());
  }
  _reset() {
this._currentUserSpeaking = !1, this._anyoneElseSpeaking = !1, null != this._reportInterval && (this._reportInterval.stop(), this._reportInterval = null);
  }
  _trackStartSpeaking() {
if (this._currentUserSpeaking) {
  let e = u.Z.getChannelId(),
    t = u.Z.getGuildId(),
    n = o.Z.getChannel(e),
    r = null == n ? void 0 : n.isBroadcastChannel();
  (0, f.yw)(h.rMx.START_SPEAKING, {
    mode: l.Z.getMode(),
    priority: d.Z.isCurrentUserPrioritySpeaking(),
    channel: e,
    server: t,
    channel_id: e,
    guild_id: t,
    is_broadcast: r,
    rtc_connection_id: u.Z.getRTCConnectionId(),
    media_session_id: u.Z.getMediaSessionId(),
    voice_state_count: _.ZP.countVoiceStatesForChannel(this._voiceChannelId),
    ...this.getGameMetadata(),
    ...u.Z.getPacketStats()
  });
}
  }
  _trackStartListening() {
if (l.Z.isDeaf() || !this._anyoneElseSpeaking)
  return;
let e = u.Z.getChannelId(),
  t = u.Z.getGuildId(),
  n = o.Z.getChannel(e),
  r = null == n ? void 0 : n.isBroadcastChannel();
(0, f.yw)(h.rMx.START_LISTENING, {
  mute: l.Z.isMute(),
  anyone_priority: d.Z.isAnyonePrioritySpeaking(),
  channel: e,
  server: t,
  channel_id: e,
  guild_id: t,
  is_broadcast: r,
  rtc_connection_id: u.Z.getRTCConnectionId(),
  media_session_id: u.Z.getMediaSessionId(),
  voice_state_count: _.ZP.countVoiceStatesForChannel(this._voiceChannelId),
  ...this.getGameMetadata()
});
  }
  _terminate() {
this._reset(), d.Z.removeChangeListener(this._handleSpeakingStoreChanged), u.Z.removeChangeListener(this._handleRTCConnectionStoreChanged);
  }
  getGameMetadata() {
let e = c.Z.findActivity(e => e.type === h.IIU.PLAYING),
  t = s.ZP.getCurrentGameForAnalytics();
return {
  game_platform: (0, a.Z)(e),
  game_name: null != e ? e.name : null,
  game_exe_name: null != t ? t.exeName : null,
  game_id: null != e ? e.application_id : null
};
  }
  constructor(...e) {
super(...e), p(this, '_currentUserSpeaking', !1), p(this, '_anyoneElseSpeaking', !1), p(this, '_voiceChannelId', void 0), p(this, '_reportInterval', void 0), p(this, '_handleRTCConnectionStoreChanged', () => {
  let e = u.Z.getChannelId();
  if (this._voiceChannelId !== e) {
    if (this._voiceChannelId = e, null == e) {
      this._reset();
      return;
    }
    null == this._reportInterval && (this._reportInterval = new r.Xp(), this._reportInterval.start(m, () => {
      this._trackStartSpeaking(), this._trackStartListening();
    }));
  }
}), p(this, '_handleSpeakingStoreChanged', () => {
  let e = d.Z.isCurrentUserSpeaking();
  this._currentUserSpeaking !== e && (this._currentUserSpeaking = e, this._trackStartSpeaking());
  let t = d.Z.isAnyoneElseSpeaking();
  this._anyoneElseSpeaking !== t && (this._anyoneElseSpeaking = t, this._trackStartListening());
});
  }
}
t.Z = new I();