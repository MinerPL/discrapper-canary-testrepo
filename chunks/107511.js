"use strict";
n(47120);
var i = n(433517),
  r = n(570140),
  s = n(317770),
  o = n(314897),
  a = n(944486),
  l = n(105372),
  u = n(88751),
  _ = n(157925);
class d extends s.Z {
  _initialize() {
    r.Z.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    r.Z.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    var t, n, r;
    super(...e), t = this, n = "handleVoiceStateUpdates", r = e => {
      let {
        voiceStates: t
      } = e;
      t.forEach(e => {
        if (null == e.channelId || e.userId !== o.default.getId()) return;
        if (this.terminate(), i.K.get(_.$z, !1)) return;
        let t = a.Z.getVoiceChannelId();
        if (null != t && e.channelId === t) u.ZP.isAudienceMember(e.userId, t) && (i.K.set(_.$z, !0), l.$(t))
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = r
  }
}
t.Z = new d