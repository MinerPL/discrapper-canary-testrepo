"use strict";
n(47120);
var i = n(846519),
  r = n(147913),
  s = n(603113),
  o = n(594190),
  a = n(592125),
  l = n(131951),
  u = n(19780),
  _ = n(885110),
  d = n(606304),
  c = n(938475),
  E = n(70956),
  I = n(367907),
  T = n(981631);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let S = 1 * E.Z.Millis.MINUTE;
class f extends r.Z {
  _initialize() {
    __OVERLAY__ ? this.stores = new Map : (this.stores = new Map().set(d.Z, () => this._handleSpeakingStoreChanged()).set(u.Z, () => this._handleRTCConnectionStoreChanged()), this._reset())
  }
  _reset() {
    this._currentUserSpeaking = !1, this._anyoneElseSpeaking = !1, null != this._reportInterval && (this._reportInterval.stop(), this._reportInterval = null)
  }
  _trackStartSpeaking() {
    if (this._currentUserSpeaking) {
      let e = u.Z.getChannelId(),
        t = u.Z.getGuildId(),
        n = a.Z.getChannel(e),
        i = null == n ? void 0 : n.isBroadcastChannel();
      (0, I.yw)(T.rMx.START_SPEAKING, {
        mode: l.Z.getMode(),
        priority: d.Z.isCurrentUserPrioritySpeaking(),
        channel: e,
        server: t,
        channel_id: e,
        guild_id: t,
        is_broadcast: i,
        rtc_connection_id: u.Z.getRTCConnectionId(),
        media_session_id: u.Z.getMediaSessionId(),
        voice_state_count: c.ZP.countVoiceStatesForChannel(this._voiceChannelId),
        ...this.getGameMetadata(),
        ...u.Z.getPacketStats()
      })
    }
  }
  _trackStartListening() {
    if (l.Z.isDeaf() || !this._anyoneElseSpeaking) return;
    let e = u.Z.getChannelId(),
      t = u.Z.getGuildId(),
      n = a.Z.getChannel(e),
      i = null == n ? void 0 : n.isBroadcastChannel();
    (0, I.yw)(T.rMx.START_LISTENING, {
      mute: l.Z.isMute(),
      anyone_priority: d.Z.isAnyonePrioritySpeaking(),
      channel: e,
      server: t,
      channel_id: e,
      guild_id: t,
      is_broadcast: i,
      rtc_connection_id: u.Z.getRTCConnectionId(),
      media_session_id: u.Z.getMediaSessionId(),
      voice_state_count: c.ZP.countVoiceStatesForChannel(this._voiceChannelId),
      ...this.getGameMetadata()
    })
  }
  _terminate() {
    this._reset(), d.Z.removeChangeListener(this._handleSpeakingStoreChanged), u.Z.removeChangeListener(this._handleRTCConnectionStoreChanged)
  }
  getGameMetadata() {
    let e = _.Z.findActivity(e => e.type === T.IIU.PLAYING),
      t = o.ZP.getCurrentGameForAnalytics();
    return {
      game_platform: (0, s.Z)(e),
      game_name: null != e ? e.name : null,
      game_exe_name: null != t ? t.exeName : null,
      game_id: null != e ? e.application_id : null
    }
  }
  constructor(...e) {
    super(...e), h(this, "_currentUserSpeaking", !1), h(this, "_anyoneElseSpeaking", !1), h(this, "_voiceChannelId", void 0), h(this, "_reportInterval", void 0), h(this, "_handleRTCConnectionStoreChanged", () => {
      let e = u.Z.getChannelId();
      if (this._voiceChannelId !== e) {
        if (this._voiceChannelId = e, null == e) {
          this._reset();
          return
        }
        null == this._reportInterval && (this._reportInterval = new i.Xp, this._reportInterval.start(S, () => {
          this._trackStartSpeaking(), this._trackStartListening()
        }))
      }
    }), h(this, "_handleSpeakingStoreChanged", () => {
      let e = d.Z.isCurrentUserSpeaking();
      this._currentUserSpeaking !== e && (this._currentUserSpeaking = e, this._trackStartSpeaking());
      let t = d.Z.isAnyoneElseSpeaking();
      this._anyoneElseSpeaking !== t && (this._anyoneElseSpeaking = t, this._trackStartListening())
    })
  }
}
t.Z = new f