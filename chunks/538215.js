"use strict";
n(47120);
var i = n(147913),
  r = n(358221),
  s = n(729052),
  o = n(592125),
  a = n(979651),
  l = n(556076);
class u extends i.Z {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (null == t || null == n) return;
    let i = o.Z.getChannel(t);
    if (null != i && (0, s.vS)(i) && i.isGuildVoice()) {
      let e = r.Z.getParticipants(t).length,
        n = a.Z.isInChannel(t),
        i = e === (n ? 1 : 0);
      i ? l.y(t, i) : e === (n ? 2 : 1) && l.y(t, i)
    }
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new u