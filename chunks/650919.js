t.d(s, {
  Z: function() {
return T;
  }
}), t(47120);
var n = t(470079),
  a = t(913527),
  i = t.n(a),
  r = t(442837),
  o = t(812206),
  l = t(430824),
  c = t(580130),
  d = t(937615),
  _ = t(488915),
  E = t(171246),
  u = t(981631),
  I = t(689938);

function T(e) {
  let s = (0, E.bZ)(e),
t = (0, r.e7)([_.Z], () => _.Z.getSubscriptionListingForPlan(s), [s]),
a = (0, r.e7)([_.Z], () => null != t ? _.Z.getSubscriptionGroupListingForSubscriptionListing(t.id) : null, [t]),
T = (0, r.e7)([c.Z], () => {
  let s = c.Z.getForSubscription(e.id);
  if (null != s) {
    let [e] = Array.from(s);
    return e;
  }
  return null;
}, [e]),
S = (0, r.e7)([o.Z], () => {
  if (null == T)
    return;
  let e = o.Z.getApplication(T.applicationId);
  if (null != e)
    return e;
}, [T]),
N = (0, r.e7)([l.Z], () => {
  if (null != T)
    return l.Z.getGuild(T.guildId);
}, [T]),
[C, m] = n.useState(!1),
A = null == t ? void 0 : function(e) {
  let {
    listing: s,
    subscription: t
  } = e, n = t.currentPeriodEnd, a = s.subscription_plans[0], r = (0, d.T4)(a.price, a.currency), o = t.createdAt, l = t.status === u.O0b.CANCELED, c = s.soft_deleted, _ = t.status === u.O0b.PAST_DUE;
  return {
    subscribedSinceDate: o,
    currentPeriodEndDate: n,
    currentPeriodEndLabel: i()().isAfter(t.currentPeriodEnd) ? I.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDED : I.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDS,
    subscriptionPlanPrice: r,
    isCancelled: l,
    isDeleted: c,
    isPastDue: _
  };
}({
  listing: t,
  subscription: e
});
  return {
application: S,
guild: N,
expanded: C,
handleToggleExpanded: () => m(e => !e),
listing: t,
groupListing: a,
subscriptionInfo: A
  };
}