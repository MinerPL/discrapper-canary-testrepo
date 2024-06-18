"use strict";
n(47120);
var i = n(147913),
  r = n(362721),
  s = n(314897),
  o = n(592125),
  a = n(979651),
  l = n(906605),
  u = n(574176),
  _ = n(106301),
  d = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E extends i.Z {
  constructor(...e) {
    super(...e), c(this, "previousVoiceChannelId", void 0), c(this, "actions", {
      VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
      GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
      LOGOUT: () => this.handleLogout()
    }), c(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t,
        guildId: n
      } = e, {
        enableHangStatus: i,
        setDefaultStatus: s
      } = u.n.getCurrentConfig({
        guildId: null != n ? n : d.lds,
        location: "HangStatusManager"
      }, {
        autoTrackExposure: !0
      });
      if (null == n && null == t) {
        this.handleDisconnectFromVoiceChannel(), this.previousVoiceChannelId = t;
        return
      }
      if (!i || t === this.previousVoiceChannelId) return;
      if (this.previousVoiceChannelId = t, null == n || null == t) return;
      let a = o.Z.getChannel(t);
      if (null == a || a.type !== d.d4z.GUILD_VOICE || !(0, r.w)(a, !0) || null != _.Z.getCurrentHangStatus()) return;
      let c = _.Z.getCurrentDefaultStatus();
      if ((null == c ? void 0 : c.expiresAt) != null && (null == c ? void 0 : c.expiresAt) >= Date.now()) {
        if (c.status === d.tNA.CUSTOM && null != c.customHangStatus) {
          let {
            status: e,
            emoji: t
          } = c.customHangStatus;
          (0, l._s)(e, t);
          return
        }
        if (null == c.status) return;
        else {
          (0, l.Zx)(c.status);
          return
        }
      }
      s && (0, l.Zx)(d.tNA.CHILLING)
    }), c(this, "handleGuildMemberUpdate", e => {
      let {
        user: t,
        guildId: n
      } = e;
      if (t.id !== s.default.getId()) return;
      let i = a.Z.getCurrentClientVoiceChannelId(n);
      if (null == i || null == _.Z.getCurrentHangStatus()) return;
      let u = o.Z.getChannel(i);
      !(0, r.w)(u, !0) && (0, l.Sc)()
    }), c(this, "handleDisconnectFromVoiceChannel", () => {
      (0, l.Sc)()
    }), c(this, "handleLogout", () => {
      this.handleDisconnectFromVoiceChannel()
    })
  }
}
t.Z = new E