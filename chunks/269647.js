"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(314897),
  _ = n(592125),
  d = n(131951),
  c = n(496675),
  E = n(19780),
  I = n(979651),
  T = n(981631);
let h = !0,
  S = !0;

function f() {
  let e;
  let t = E.Z.getChannelId();
  if (null == t) e = !0;
  else {
    var n;
    let i = _.Z.getChannel(t),
      r = I.Z.getVoiceState(null == i ? void 0 : i.getGuildId(), u.default.getId());
    e = d.Z.getMode() !== T.pM4.VOICE_ACTIVITY || null == i || i.isPrivate() || i.isGuildStageVoice() || c.Z.can(T.Plq.USE_VAD, i) || null == (n = r) || !!n.suppress || null != n.requestToSpeakTimestamp || !1
  }
  if (h === e) return !1;
  S = e, h = e, l.Z.dispatch({
    type: "SET_VAD_PERMISSION",
    hasPermission: h
  })
}
class N extends(o = a.ZP.Store) {
  initialize() {
    this.waitFor(c.Z, d.Z, E.Z, I.Z)
  }
  shouldShowWarning() {
    return !S
  }
  canUseVoiceActivity() {
    return h
  }
}
s = "PermissionVADStore", (r = "displayName") in(i = N) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new N(l.Z, {
  RTC_CONNECTION_STATE: f,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: f,
  AUDIO_SET_MODE: f,
  CHANNEL_UPDATES: f,
  THREAD_UPDATE: f,
  GUILD_ROLE_UPDATE: f,
  GUILD_MEMBER_UPDATE: f,
  IMPERSONATE_UPDATE: f,
  IMPERSONATE_STOP: f,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.some(e => {
      let {
        userId: t
      } = e;
      return t === u.default.getId() && f()
    })
  },
  AUDIO_TOGGLE_SELF_MUTE: function() {
    S = h
  },
  PERMISSION_CLEAR_VAD_WARNING: function() {
    S = !0
  }
})