s.d(t, {
  Z: function() {
return I;
  }
}), s(47120);
var n = s(470079),
  a = s(913527),
  i = s.n(a),
  r = s(442837),
  o = s(812206),
  l = s(430824),
  c = s(580130),
  d = s(937615),
  _ = s(488915),
  E = s(171246),
  u = s(981631),
  T = s(689938);

function I(e) {
  let t = (0, E.bZ)(e),
s = (0, r.e7)([_.Z], () => _.Z.getSubscriptionListingForPlan(t), [t]),
a = (0, r.e7)([_.Z], () => null != s ? _.Z.getSubscriptionGroupListingForSubscriptionListing(s.id) : null, [s]),
I = (0, r.e7)([c.Z], () => {
  let t = c.Z.getForSubscription(e.id);
  if (null != t) {
    let [e] = Array.from(t);
    return e;
  }
  return null;
}, [e]),
S = (0, r.e7)([o.Z], () => {
  if (null == I)
    return;
  let e = o.Z.getApplication(I.applicationId);
  if (null != e)
    return e;
}, [I]),
N = (0, r.e7)([l.Z], () => {
  if (null != I)
    return l.Z.getGuild(I.guildId);
}, [I]),
[C, m] = n.useState(!1),
A = null == s ? void 0 : function(e) {
  let {
    listing: t,
    subscription: s
  } = e, n = s.currentPeriodEnd, a = t.subscription_plans[0], r = (0, d.T4)(a.price, a.currency), o = s.createdAt, l = s.status === u.O0b.CANCELED, c = t.soft_deleted, _ = s.status === u.O0b.PAST_DUE;
  return {
    subscribedSinceDate: o,
    currentPeriodEndDate: n,
    currentPeriodEndLabel: i()().isAfter(s.currentPeriodEnd) ? T.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDED : T.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDS,
    subscriptionPlanPrice: r,
    isCancelled: l,
    isDeleted: c,
    isPastDue: _
  };
}({
  listing: s,
  subscription: e
});
  return {
application: S,
guild: N,
expanded: C,
handleToggleExpanded: () => m(e => !e),
listing: s,
groupListing: a,
subscriptionInfo: A
  };
}