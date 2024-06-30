s.d(t, {
    Z: function () {
        return T;
    }
}), s(47120);
var n = s(470079), a = s(913527), i = s.n(a), r = s(442837), o = s(430824), l = s(937615), c = s(584825), d = s(289393), _ = s(697227), E = s(981631), u = s(689938);
function T(e) {
    let t = (0, _.W)(e), s = (0, r.e7)([d.Z], () => d.Z.getSubscriptionListingForPlan(t)), a = (0, r.e7)([d.Z], () => null != s ? d.Z.getSubscriptionGroupListingForSubscriptionListing(s.id) : null), T = (0, r.e7)([o.Z], () => o.Z.getGuild(null == a ? void 0 : a.guild_id)), [I, S] = n.useState(!1), {fetchSubscriptionsSettings: N} = (0, c.JH)();
    n.useEffect(() => {
        I && null != T && null == d.Z.getSubscriptionSettings(T.id) && N(T.id);
    }, [
        I,
        T,
        N
    ]);
    let C = null == s ? void 0 : function (e) {
        let {subscription: t} = e, s = i()(t.currentPeriodEnd).format('M/D/YY'), n = null != t.price ? (0, l.T4)(t.price, t.currency) : '', a = i()(t.createdAt).format('M/D/YY'), r = t.status === E.O0b.CANCELED, o = t.status === E.O0b.PAST_DUE, c = null != t.trialId;
        return {
            memberSince: a,
            nextRenewalDate: s,
            nextRenewalLabel: r ? u.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_MEMBERSHIP_ENDS : u.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_NEXT_RENEWAL,
            subscriptionPrice: n,
            isCancelled: r,
            isPastDue: o,
            isTrial: c
        };
    }({ subscription: e });
    return {
        guild: T,
        expanded: I,
        handleToggleExpanded: () => S(e => !e),
        listing: s,
        groupListing: a,
        subscriptionInfo: C
    };
}
