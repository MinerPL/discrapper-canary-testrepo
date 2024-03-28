"use strict";
n.r(t);
var s, a, l, i, r = n("913527"),
  o = n.n(r),
  u = n("442837"),
  d = n("570140"),
  c = n("255078"),
  f = n("594174"),
  E = n("74538");
let _ = !1;
class T extends(i = u.default.Store) {
  shouldShowReactivateNotice() {
    let e = f.default.getCurrentUser();
    return !(0, E.isPremium)(e) && _
  }
}
l = "SubscriptionRemindersStore", (a = "displayName") in(s = T) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new T(d.default, {
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
    let {
      subscription: t
    } = e;
    if (null != t) {
      var n;
      let e = c.default.createFromServer(t);
      if (null == (0, E.getPremiumPlanItem)(e) || (null === (n = e.metadata) || void 0 === n ? void 0 : n.ended_at) == null) return;
      let s = o()(e.metadata.ended_at);
      o()().isBetween(s.clone().add(4, "days"), s.clone().add(11, "days")) && (_ = !0)
    }
  }
})