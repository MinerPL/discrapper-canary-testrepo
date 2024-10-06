t.d(s, {
    Z: function () {
        return S;
    }
}),
    t(47120);
var n = t(470079),
    a = t(913527),
    i = t.n(a),
    r = t(442837),
    o = t(812206),
    l = t(430824),
    c = t(551428),
    d = t(937615),
    _ = t(488915),
    u = t(171246),
    E = t(981631),
    T = t(689938);
function S(e) {
    var s;
    let t = (0, u.bZ)(e),
        a = (0, r.e7)([_.Z], () => _.Z.getSubscriptionListingForPlan(t), [t]),
        S = (0, r.e7)([c.Z], () => (null != a ? c.Z.getForSKU(a.id) : null), [a]),
        I = (0, r.e7)([_.Z], () => (null != a ? _.Z.getSubscriptionGroupListingForSubscriptionListing(a.id) : null), [a]),
        N = null == S ? void 0 : S.applicationId,
        A = (0, r.e7)([o.Z], () => (null != N ? o.Z.getApplication(N) : null), [N]),
        C = null === (s = e.metadata) || void 0 === s ? void 0 : s.application_subscription_guild_id,
        m = (0, r.e7)([l.Z], () => l.Z.getGuild(C), [C]),
        [g, h] = n.useState(!1),
        O =
            null == a
                ? void 0
                : (function (e) {
                      let { listing: s, subscription: t } = e,
                          n = t.currentPeriodEnd,
                          a = s.subscription_plans[0],
                          r = (0, d.T4)(a.price, a.currency),
                          o = t.createdAt,
                          l = t.status === E.O0b.CANCELED,
                          c = s.soft_deleted,
                          _ = t.status === E.O0b.PAST_DUE;
                      return {
                          subscribedSinceDate: o,
                          currentPeriodEndDate: n,
                          currentPeriodEndLabel: i()().isAfter(t.currentPeriodEnd) ? T.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDED : T.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDS,
                          subscriptionPlanPrice: r,
                          isCancelled: l,
                          isDeleted: c,
                          isPastDue: _
                      };
                  })({
                      listing: a,
                      subscription: e
                  });
    return {
        application: A,
        guild: m,
        expanded: g,
        handleToggleExpanded: () => h((e) => !e),
        listing: a,
        storeListing: S,
        groupListing: I,
        subscriptionInfo: O
    };
}
