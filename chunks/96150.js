"use strict";
n(47120);
var i = n(570140),
  r = n(317770),
  s = n(280837),
  o = n(592125),
  a = n(914010),
  l = n(823379);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class _ extends r.Z {
  _initialize() {
    i.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), i.Z.subscribe("LOGOUT", this.handleLogout)
  }
  _terminate() {
    i.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), i.Z.unsubscribe("LOGOUT", this.handleLogout)
  }
  constructor(...e) {
    super(...e), u(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t,
        guildId: n
      } = e;
      if (null != t) {
        let e = o.Z.getChannel(t);
        if (null == e || e.isGuildStageVoice()) return
      }
      this.terminate();
      this.handleDisconnectFromStageChannel(null == t ? null : null != n ? n : null)
    }), u(this, "handleDisconnectFromStageChannel", e => {
      let t = a.Z.getGuildId();
      (0, s.O)([t, e].filter(l.lm))
    }), u(this, "handleLogout", () => {
      this.terminate(), this.handleDisconnectFromStageChannel(null)
    })
  }
}
t.Z = new _