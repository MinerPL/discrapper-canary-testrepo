"use strict";
n(47120);
var i = n(147913),
  r = n(314897),
  s = n(592125),
  o = n(242291),
  a = n(981631);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class u extends i.Z {
  constructor(...e) {
    super(...e), l(this, "prevConnected", !1), l(this, "tempMutedChannel", null), l(this, "handleRTCConnectionState", e => {
      let {
        state: t,
        channelId: n
      } = e, i = t === a.hes.RTC_CONNECTED, r = i && !this.prevConnected, l = s.Z.getChannel(n), u = null == l ? void 0 : l.getGuildId(), _ = this.tempMutedChannel === n;
      r && null != u && (_ ? this.tempMutedChannel = null : (0, o.M2)(u)), this.prevConnected = i
    }), l(this, "handleMute", e => {
      let {
        channelId: t
      } = e;
      this.tempMutedChannel = t
    }), l(this, "handleVoiceStateUpdates", e => {
      let {
        voiceStates: t
      } = e, n = r.default.getId(), i = r.default.getSessionId();
      t.forEach(e => {
        let {
          userId: t,
          channelId: r,
          sessionId: s
        } = e;
        t === n && s !== i && null != r && (this.tempMutedChannel = r)
      })
    }), l(this, "actions", {
      RTC_CONNECTION_STATE: this.handleRTCConnectionState,
      SOUNDBOARD_MUTE_JOIN_SOUND: this.handleMute,
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
    })
  }
}
t.Z = new u