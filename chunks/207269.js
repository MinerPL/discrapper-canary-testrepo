"use strict";
n(47120);
var i = n(704215),
  r = n(570140),
  s = n(147913),
  o = n(605236),
  a = n(430824),
  l = n(496675),
  u = n(619574),
  _ = n(317816),
  d = n(828312),
  c = n(994840),
  E = n(981631);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class T extends s.Z {
  constructor(...e) {
    super(...e), I(this, "actions", {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e)
    }), I(this, "handleConnectionOpen", e => {
      let t = (0, c.jZ)("SignUpManager"),
        n = (0, d.t)("SignUpManager", !1),
        s = (0, o.un)(i.z.GAME_ONE_USER_SIGNUPS),
        a = (0, _.v)("SignUpManager"),
        l = (0, u.e)("SignUpManager", !1),
        E = (0, o.un)(i.z.GENSHIN_USER_SIGNUPS);
      if (t && !n && !s) {
        r.Z.dispatch({
          type: "ENABLE_USER_SIGN_UP",
          key: "valorant-user"
        });
        return
      }
      if (a && !l && !E) {
        r.Z.dispatch({
          type: "ENABLE_USER_SIGN_UP",
          key: "genshin-user"
        });
        return
      }
    }), I(this, "handleChannelSelect", e => {
      let {
        guildId: t
      } = e;
      if (null == t) return;
      let n = (0, o.un)(i.z.GAME_ONE_USER_SIGNUPS),
        s = (0, o.un)(i.z.GENSHIN_USER_SIGNUPS);
      if (n && s) return;
      let _ = (0, d.t)("SignUpManager"),
        c = (0, u.e)("SignUpManager");
      if (!_ && !c) return;
      let I = a.Z.getGuild(t);
      if (null != I) {
        if (I.hasFeature(E.oNc.VALORANT_L30) && l.Z.can(E.Plq.MANAGE_GUILD, I) && !n) {
          r.Z.dispatch({
            type: "ENABLE_GUILD_SIGN_UP",
            key: "valorant-admin",
            guildId: t
          });
          return
        }
        if (I.hasFeature(E.oNc.GENSHIN_L30) && l.Z.can(E.Plq.MANAGE_GUILD, I) && !s) {
          r.Z.dispatch({
            type: "ENABLE_GUILD_SIGN_UP",
            key: "genshin-admin",
            guildId: t
          });
          return
        }
      }
    })
  }
}
t.Z = new T