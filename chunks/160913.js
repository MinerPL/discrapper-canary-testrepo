"use strict";
n.r(t), n.d(t, {
  useIsPrepaidPaymentPastDue: function() {
    return m
  }
});
var i = n("913527"),
  s = n.n(i),
  a = n("442837"),
  l = n("853872"),
  r = n("509545"),
  u = n("78839"),
  o = n("74538"),
  c = n("981631"),
  d = n("231338");

function m() {
  let e = (0, a.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
    t = (0, a.useStateFromStores)([r.default], () => null != e && null != e.planIdFromItems ? r.default.get(null == e ? void 0 : e.planIdFromItems) : null),
    n = (0, a.useStateFromStores)([l.default], () => null != e && null != e.paymentSourceId ? l.default.getPaymentSource(e.paymentSourceId) : null, [e]),
    i = null != n && d.PREPAID_PAYMENT_SOURCES.has(n.type),
    m = (null == e ? void 0 : e.status) === c.SubscriptionStatusTypes.PAST_DUE ? s()().diff(s()(e.currentPeriodStart), "days") : 0;
  return !!(null != e && null != t && (0, o.isPremiumBaseSubscriptionPlan)(t.id)) && i && m >= 0 && m <= (0, o.getBillingGracePeriodDaysAndExpiresDate)(e).days && e.status === c.SubscriptionStatusTypes.PAST_DUE && !e.isPurchasedExternally
}