"use strict";
n.r(t), n("47120");
var l, a, s, i, r = n("442837"),
  o = n("570140"),
  u = n("445507");
let d = {
    "valorant-user": u.VALORANT_USER_SIGNUP,
    "valorant-admin": u.VALORANT_GUILD_SIGNUP
  },
  c = null,
  f = {},
  h = new Set;

function C() {
  for (let e in c = null, f) delete f[e]
}
class p extends(l = r.default.Store) {
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
i = "SignUpStore", (s = "displayName") in(a = p) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i, t.default = new p(o.default, {
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
    h.add(t), C()
  },
  DISMISS_SIGN_UP: C
})