"use strict";
n.r(t), n("47120");
var a = n("570140"),
  s = n("846027"),
  l = n("872810"),
  i = n("317770"),
  r = n("569545"),
  o = n("199902"),
  u = n("314897"),
  d = n("592125"),
  c = n("131951"),
  f = n("590415");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class h extends i.default {
  _initialize() {
    a.default.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    a.default.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    super(...e), E(this, "handleVoiceStateUpdates", e => {
      let {
        voiceStates: t
      } = e, n = u.default.getId();
      t.forEach(e => {
        var t;
        if (e.userId === n && !!(null === (t = d.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.isGuildStageVoice()))(0, f.getAudienceRequestToSpeakState)(e) !== f.RequestToSpeakStates.ON_STAGE && (this.handleStopStream(e), this.handleStopUserVideo())
      })
    }), E(this, "handleStopStream", e => {
      let t = o.default.getActiveStreamForUser(e.userId, e.guildId);
      null != t && (0, l.stopStream)((0, r.encodeStreamKey)(t), !1)
    }), E(this, "handleStopUserVideo", () => {
      c.default.isVideoEnabled() && s.default.setVideoEnabled(!1)
    })
  }
}
t.default = new h