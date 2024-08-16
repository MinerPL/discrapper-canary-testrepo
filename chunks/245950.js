t.d(s, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var n = t(470079),
    a = t(913527),
    i = t.n(a),
    r = t(442837),
    o = t(430824),
    l = t(937615),
    c = t(584825),
    d = t(289393),
    _ = t(697227),
    E = t(981631),
    u = t(689938);
function I(e) {
    let s = (0, _.W)(e),
        t = (0, r.e7)([d.Z], () => d.Z.getSubscriptionListingForPlan(s)),
        a = (0, r.e7)([d.Z], () => (null != t ? d.Z.getSubscriptionGroupListingForSubscriptionListing(t.id) : null)),
        I = (0, r.e7)([o.Z], () => o.Z.getGuild(null == a ? void 0 : a.guild_id)),
        [T, S] = n.useState(!1),
        { fetchSubscriptionsSettings: N } = (0, c.JH)();
    n.useEffect(() => {
        T && null != I && null == d.Z.getSubscriptionSettings(I.id) && N(I.id);
    }, [T, I, N]);
    let C =
        null == t
            ? void 0
            : (function (e) {
                  let { subscription: s } = e,
                      t = i()(s.currentPeriodEnd).format('M/D/YY'),
                      n = null != s.price ? (0, l.T4)(s.price, s.currency) : '',
                      a = i()(s.createdAt).format('M/D/YY'),
                      r = s.status === E.O0b.CANCELED,
                      o = s.status === E.O0b.PAST_DUE,
                      c = null != s.trialId;
                  return {
                      memberSince: a,
                      nextRenewalDate: t,
                      nextRenewalLabel: r ? u.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_MEMBERSHIP_ENDS : u.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_NEXT_RENEWAL,
                      subscriptionPrice: n,
                      isCancelled: r,
                      isPastDue: o,
                      isTrial: c
                  };
              })({ subscription: e });
    return {
        guild: I,
        expanded: T,
        handleToggleExpanded: () => S((e) => !e),
        listing: t,
        groupListing: a,
        subscriptionInfo: C
    };
}
