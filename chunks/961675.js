"use strict";
n.r(t), n("47120");
var a, l = n("442837"),
  s = n("570140");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let r = new Set;
class o extends(a = l.default.PersistedStore) {
  initialize(e) {
    null != e && (r = new Set(e))
  }
  hasHidden(e) {
    return r.has(e)
  }
  getState() {
    return r
  }
}
i(o, "displayName", "ForumChannelAdminOnboardingGuideStore"), i(o, "persistKey", "ForumChannelAdminOnboardingGuideStore"), t.default = new o(s.default, {
  ADMIN_ONBOARDING_GUIDE_HIDE: function(e) {
    let {
      channelId: t,
      hide: n
    } = e;
    n ? r.add(t) : r.delete(t)
  }
})