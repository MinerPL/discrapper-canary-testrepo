"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var a = s("884691"),
  n = s("866227"),
  l = s.n(n),
  i = s("446674"),
  r = s("299285"),
  o = s("305961"),
  d = s("437712"),
  u = s("153160"),
  c = s("248933"),
  S = s("129408"),
  E = s("49111"),
  T = s("782340");

function f(e) {
  let t = (0, S.getApplicationSubscriptionPlanId)(e),
    s = (0, i.useStateFromStores)([c.default], () => c.default.getSubscriptionListingForPlan(t), [t]),
    n = (0, i.useStateFromStores)([c.default], () => null != s ? c.default.getSubscriptionGroupListingForSubscriptionListing(s.id) : null, [s]),
    f = (0, i.useStateFromStores)([d.default], () => {
      let t = d.default.getForSubscription(e.id);
      if (null != t) {
        let [e] = Array.from(t);
        return e
      }
      return null
    }, [e]),
    _ = (0, i.useStateFromStores)([r.default], () => {
      if (null == f) return;
      let e = r.default.getApplication(f.applicationId);
      if (null != e) return e
    }, [f]),
    m = (0, i.useStateFromStores)([o.default], () => {
      if (null != f) return o.default.getGuild(f.guildId)
    }, [f]),
    [g, h] = a.useState(!1),
    N = null == s ? void 0 : function(e) {
      let {
        listing: t,
        subscription: s
      } = e, a = s.currentPeriodEnd, n = t.subscription_plans[0], i = (0, u.formatPrice)(n.price, n.currency), r = s.createdAt, o = s.status === E.SubscriptionStatusTypes.CANCELED, d = t.soft_deleted, c = s.status === E.SubscriptionStatusTypes.PAST_DUE;
      return {
        subscribedSinceDate: r,
        currentPeriodEndDate: a,
        currentPeriodEndLabel: l().isAfter(s.currentPeriodEnd) ? T.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDED : T.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDS,
        subscriptionPlanPrice: i,
        isCancelled: o,
        isDeleted: d,
        isPastDue: c
      }
    }({
      listing: s,
      subscription: e
    });
  return {
    application: _,
    guild: m,
    expanded: g,
    handleToggleExpanded: () => h(e => !e),
    listing: s,
    groupListing: n,
    subscriptionInfo: N
  }
}