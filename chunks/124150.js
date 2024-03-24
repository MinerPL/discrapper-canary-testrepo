"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var l = n("446674"),
  a = n("913144"),
  s = n("874595");
let i = {
    "valorant-user": s.VALORANT_USER_SIGNUP
  },
  r = null,
  o = new Set;
class u extends l.default.Store {
  getActiveUserSignUp() {
    return r
  }
  hasCompletedTarget(e) {
    return o.has(e)
  }
}
u.displayName = "SignUpStore";
var d = new u(a.default, {
  ENABLE_USER_SIGN_UP: function(e) {
    let {
      key: t
    } = e, n = i[t];
    (0, s.isUserTarget)(n) && (r = n)
  },
  COMPLETE_USER_SIGN_UP: function(e) {
    let {
      targetKey: t
    } = e;
    o.add(t), r = null
  }
})