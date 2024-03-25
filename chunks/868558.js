"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var a = n("862337"),
  s = n("913144"),
  l = n("987317"),
  i = n("316272"),
  r = n("373469"),
  o = n("42203"),
  u = n("305961"),
  d = n("603699"),
  c = n("945956"),
  f = n("718517"),
  E = n("773336"),
  h = n("49111");
let _ = new a.Timeout,
  C = new a.Timeout;
class S extends i.default {
  _initialize() {
    s.default.subscribe("IDLE", this.handleIdleUpdate)
  }
  _terminate() {
    _.stop(), C.stop(), s.default.unsubscribe("IDLE", this.handleIdleUpdate)
  }
  handleIdleUpdate() {
    let e = d.default.getIdleSince();
    if (!E.isPlatformEmbedded) return;
    _.stop(), C.stop();
    let t = r.default.getAllActiveStreams();
    for (let e of t)
      if (e.state !== h.ApplicationStreamStates.ENDED) return;
    if (null == e) return;
    let n = c.default.getChannelId();
    if (null == n) return;
    C.start(18e6, () => {
      l.default.selectVoiceChannel(null)
    });
    let a = u.default.getGuild(c.default.getGuildId());
    if (null == a || null == a.afkChannelId || a.afkChannelId === n || null == a.afkTimeout) return;
    let s = o.default.getChannel(n);
    if (null != s) !s.isGuildStageVoice() && _.start(e + a.afkTimeout * f.default.Millis.SECOND - Date.now(), () => {
      null != (a = u.default.getGuild(c.default.getGuildId())) && null != a.afkChannelId && l.default.selectVoiceChannel(a.afkChannelId)
    })
  }
}
var I = new S