t.d(e, {
    H: function () {
        return c;
    },
    r: function () {
        return d;
    }
}),
    t(789020);
var l = t(200651),
    i = t(481060),
    r = t(724870),
    o = t(87484),
    a = t(171246),
    s = t(689011),
    u = t(981631);
async function c(n) {
    let { subscriptionPlanId: e, sku: o, subscriptionGroupPlanIds: c, activeSubscription: d, subscribeForGuild: p, analyticsLocations: f, analyticsLocation: v } = n,
        { promise: m, resolve: h } = Promise.withResolvers();
    if ((0, a.KK)(o.flags)) {
        let { promise: n, resolve: e } = Promise.withResolvers();
        (0, i.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: n } = await t.e('43889').then(t.bind(t, 279875));
            return (t) =>
                (0, l.jsx)(n, {
                    transitionState: t.transitionState,
                    onClose: t.onClose,
                    sku: o,
                    onSelect: e,
                    currentGuildId: p
                });
        }),
            (p = await n);
    }
    return (
        (0, r.h)({
            initialPlanId: e,
            skuId: o.id,
            activeSubscription: null != d ? d : null,
            applicationId: o.applicationId,
            planGroup: c,
            guildId: p,
            renderHeader: (n, e, t) =>
                (0, l.jsx)(s.t, {
                    step: t,
                    onClose: () => e(!1)
                }),
            analyticsSubscriptionType: u.NYc.APPLICATION,
            analyticsLocations: f,
            analyticsLocation: v,
            onComplete: h,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1
        }),
        m
    );
}
function d(n) {
    let { appId: e, skuId: t, analyticsLocations: l } = n;
    (0, o.Z)({
        applicationId: e,
        skuId: t,
        analyticsLocations: l
    });
}
