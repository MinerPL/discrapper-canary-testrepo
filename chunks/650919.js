"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("47120");
var a = s("470079"),
  n = s("913527"),
  l = s.n(n),
  i = s("442837"),
  r = s("812206"),
  o = s("430824"),
  d = s("580130"),
  u = s("937615"),
  c = s("488915"),
  S = s("171246"),
  E = s("981631"),
  T = s("689938");

function _(e) {
  let t = (0, S.getApplicationSubscriptionPlanId)(e),
    s = (0, i.useStateFromStores)([c.default], () => c.default.getSubscriptionListingForPlan(t), [t]),
    n = (0, i.useStateFromStores)([c.default], () => null != s ? c.default.getSubscriptionGroupListingForSubscriptionListing(s.id) : null, [s]),
    _ = (0, i.useStateFromStores)([d.default], () => {
      let t = d.default.getForSubscription(e.id);
      if (null != t) {
        let [e] = Array.from(t);
        return e
      }
      return null
    }, [e]),
    f = (0, i.useStateFromStores)([r.default], () => {
      if (null == _) return;
      let e = r.default.getApplication(_.applicationId);
      if (null != e) return e
    }, [_]),
    m = (0, i.useStateFromStores)([o.default], () => {
      if (null != _) return o.default.getGuild(_.guildId)
    }, [_]),
    [g, h] = a.useState(!1),
    N = null == s ? void 0 : function(e) {
      let {
        listing: t,
        subscription: s
      } = e, a = s.currentPeriodEnd, n = t.subscription_plans[0], i = (0, u.formatPrice)(n.price, n.currency), r = s.createdAt, o = s.status === E.SubscriptionStatusTypes.CANCELED, d = t.soft_deleted, c = s.status === E.SubscriptionStatusTypes.PAST_DUE;
      return {
        subscribedSinceDate: r,
        currentPeriodEndDate: a,
        currentPeriodEndLabel: l()().isAfter(s.currentPeriodEnd) ? T.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDED : T.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDS,
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
    application: f,
    guild: m,
    expanded: g,
    handleToggleExpanded: () => h(e => !e),
    listing: s,
    groupListing: n,
    subscriptionInfo: N
  }
}