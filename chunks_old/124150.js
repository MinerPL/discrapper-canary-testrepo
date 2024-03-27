"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var l = n("446674"),
  a = n("913144"),
  s = n("874595");
let i = {
    "valorant-user": s.VALORANT_USER_SIGNUP,
    "valorant-admin": s.VALORANT_GUILD_SIGNUP
  },
  r = null,
  o = {},
  u = new Set;
class d extends l.default.Store {
  getActiveUserSignUp() {
    return r
  }
  getActiveGuildSignUp(e) {
    var t;
    return null !== (t = o[e]) && void 0 !== t ? t : null
  }
  hasCompletedTarget(e) {
    return u.has(e)
  }
}
d.displayName = "SignUpStore";
var c = new d(a.default, {
  ENABLE_USER_SIGN_UP: function(e) {
    let {
      key: t
    } = e, n = i[t];
    (0, s.isUserTarget)(n) && 0 === Object.keys(o).length && (r = n)
  },
  ENABLE_GUILD_SIGN_UP: function(e) {
    let {
      key: t,
      guildId: n
    } = e, l = i[t];
    (0, s.isGuildTarget)(l) && (o[n] = l, r = null)
  },
  COMPLETE_USER_SIGN_UP: function(e) {
    let {
      targetKey: t
    } = e;
    for (let e in u.add(t), r = null, o) delete o[e]
  }
})