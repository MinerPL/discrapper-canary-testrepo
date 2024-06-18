"use strict";
n(47120);
var i = n(570140),
  r = n(287734),
  s = n(147913),
  o = n(703656),
  a = n(769654),
  l = n(131951),
  u = n(944486),
  _ = n(914010),
  d = n(981631);
class c extends s.Z {
  handleGuildCreate(e) {
    let {
      guild: t
    } = e, n = u.Z.getChannelId(d.ME), i = u.Z.getVoiceChannelId();
    t.id === n && (0, a.X)(t.id), t.id === i && !1 !== t.unavailable && null == i && r.default.selectVoiceChannel((0, u.C)(t.id))
  }
  handleChannelCreate(e) {
    let {
      channel: t
    } = e;
    if (t.type !== d.d4z.GROUP_DM) return;
    let n = t.originChannelId,
      i = u.Z.getChannelId(d.kod);
    null == _.Z.getGuildId() && null != n && n === i && (0, o.uL)(d.Z5c.CHANNEL(d.ME, t.id)), null != n && n === u.Z.getVoiceChannelId() && r.default.selectVoiceChannel(t.id, l.Z.isVideoEnabled())
  }
  handleLogout() {
    i.Z.dispatch({
      type: "VOICE_CHANNEL_SELECT",
      channelId: null,
      guildId: null,
      video: !1,
      currentVoiceChannelId: null
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      GUILD_CREATE: this.handleGuildCreate,
      CHANNEL_CREATE: this.handleChannelCreate,
      LOGOUT: this.handleLogout
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new c