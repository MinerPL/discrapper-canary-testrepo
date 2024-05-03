"use strict";
n.r(t), n("47120");
var l, a, s, i, r = n("442837"),
  o = n("570140"),
  u = n("445507");
let d = {
    "valorant-user": u.VALORANT_USER_SIGNUP,
    "valorant-admin": u.VALORANT_GUILD_SIGNUP,
    "genshin-user": u.GENSHIN_USER_SIGNUP,
    "genshin-admin": u.GENSHIN_ADMIN_SIGNUP
  },
  c = null,
  f = {},
  h = new Set;

function p() {
  for (let e in c = null, f) delete f[e]
}
class m extends(l = r.default.Store) {
  getActiveUserSignUp() {
    return c
  }
  getActiveGuildSignUp(e) {
    var t;
    return null !== (t = f[e]) && void 0 !== t ? t : null
  }
  hasCompletedTarget(e) {
    return h.has(e)
  }
}
i = "SignUpStore", (s = "displayName") in(a = m) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i, t.default = new m(o.default, {
  ENABLE_USER_SIGN_UP: function(e) {
    let {
      key: t
    } = e, n = d[t];
    (0, u.isUserTarget)(n) && 0 === Object.keys(f).length && (c = n)
  },
  ENABLE_GUILD_SIGN_UP: function(e) {
    let {
      key: t,
      guildId: n
    } = e, l = d[t];
    (0, u.isGuildTarget)(l) && (f[n] = l, c = null)
  },
  COMPLETE_SIGN_UP: function(e) {
    let {
      targetKey: t
    } = e;
    h.add(t), p()
  },
  DISMISS_SIGN_UP: p
})