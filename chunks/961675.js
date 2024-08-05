n(47120);
var i, a = n(442837),
  s = n(570140);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let r = new Set();
class o extends(i = a.ZP.PersistedStore) {
  initialize(e) {
null != e && (r = new Set(e));
  }
  hasHidden(e) {
return r.has(e);
  }
  getState() {
return r;
  }
}
l(o, 'displayName', 'ForumChannelAdminOnboardingGuideStore'), l(o, 'persistKey', 'ForumChannelAdminOnboardingGuideStore'), t.Z = new o(s.Z, {
  ADMIN_ONBOARDING_GUIDE_HIDE: function(e) {
let {
  channelId: t,
  hide: n
} = e;
n ? r.add(t) : r.delete(t);
  }
});