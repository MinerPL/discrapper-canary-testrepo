"use strict";
n.d(t, {
  U5: function() {
    return A
  },
  pp: function() {
    return N
  }
}), n(47120);
var i = n(442837),
  r = n(147913),
  s = n(592125),
  o = n(131951),
  a = n(944486),
  l = n(979651),
  u = n(557177),
  _ = n(565799),
  d = n(431328),
  c = n(501655),
  E = n(427679),
  I = n(754277);
let T = e => e / 400,
  h = !1,
  S = (0, u.tu)("stage_waiting", "stage_waiting", T(o.Z.getOutputVolume()));

function f() {
  let e = a.Z.getVoiceChannelId();
  if (null == e) {
    S.stop(), h = !1;
    return
  }
  let t = s.Z.getChannel(e);
  if (!(null == t ? void 0 : t.isGuildStageVoice()) || o.Z.isSelfDeaf()) {
    S.stop(), h = !1;
    return
  }
  if (I.Z.shouldPlay()) {
    S.volume = T(o.Z.getOutputVolume()), S.loop(), h = !0;
    return
  }
  if (E.Z.isLive(e)) {
    S.stop(), h = !1;
    return
  }
  if (I.Z.isMuted()) {
    S.pause(), h = !1;
    return
  }
  let n = null != Object.values(l.Z.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
  n || h ? n && (S.pause(), h = !1) : (S.volume = T(o.Z.getOutputVolume()), S.loop(), h = !0)
}

function N(e) {
  let t = (0, i.e7)([a.Z], () => a.Z.getVoiceChannelId() === e),
    n = null != (0, d.w8)(e, c.pV.SPEAKER).find(e => !e.voiceState.isVoiceMuted()),
    r = (0, i.e7)([E.Z], () => E.Z.getStageInstanceByChannel(e));
  return t && null == r && !n
}

function A(e) {
  let t = a.Z.getVoiceChannelId() === e,
    n = null != _.Z.getMutableParticipants(e, c.pV.SPEAKER).find(e => !e.voiceState.isVoiceMuted()),
    i = E.Z.getStageInstanceByChannel(e);
  return t && null == i && !n
}
class m extends r.Z {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    if (null != t) {
      let e = s.Z.getChannel(t);
      (null == e ? void 0 : e.isGuildStageVoice()) ? f(): (S.stop(), h = !1)
    } else S.stop(), h = !1
  }
  handleLogout() {
    S.stop(), h = !1
  }
  handlePlay(e) {
    let {
      play: t
    } = e;
    t ? f() : (S.pause(), h = !1)
  }
  handleMute(e) {
    let {
      muted: t
    } = e;
    t ? (S.pause(), h = !1) : f()
  }
  handleVoiceStateUpdates() {
    f()
  }
  handleSetOutputVolume(e) {
    let {
      volume: t
    } = e;
    S.volume = T(t)
  }
  handleToggleSelfDeaf() {
    f()
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
      LOGOUT: this.handleLogout,
      STAGE_MUSIC_MUTE: this.handleMute,
      STAGE_MUSIC_PLAY: this.handlePlay,
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
      AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.ZP = new m