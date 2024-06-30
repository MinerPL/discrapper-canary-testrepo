s(47120);
var n = s(735250);
s(470079);
var a = s(120356), i = s.n(a), r = s(392711), o = s.n(r), l = s(442837), c = s(481060), d = s(594174), _ = s(509545), E = s(78839), u = s(74538), T = s(393411), I = s(474936), S = s(689938), N = s(570662);
function C(e) {
    let {
            user: t,
            planId: s,
            count: a,
            userPremiumSubscription: r
        } = e, [o, d] = (0, l.Wu)([_.Z], () => [
            _.Z.get(s),
            null != r ? _.Z.get(r.planId) : null
        ]);
    if (null == o || u.ZP.getInterval(s).intervalType !== I.rV.MONTH)
        return null;
    let E = null != d ? d.skuId : null, T = o.skuId === E, C = u.ZP.getDisplayName(s);
    return (0, n.jsxs)('div', {
        className: N.accountCreditRow,
        children: [
            (0, n.jsx)('div', {
                className: i()({
                    [N.iconBackgroundTier0]: o.skuId === I.Si.TIER_0,
                    [N.iconBackgroundTier1]: o.skuId === I.Si.TIER_1,
                    [N.iconBackgroundTier2]: o.skuId === I.Si.TIER_2
                }),
                children: (0, n.jsx)(c.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: N.icon
                })
            }),
            (0, n.jsxs)('div', {
                className: N.rowDetails,
                children: [
                    (0, n.jsx)(c.Heading, {
                        variant: 'heading-md/semibold',
                        children: S.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT.format({ planName: C })
                    }),
                    t.hasFreePremium() || null != r && r.isPurchasedExternally ? null : (0, n.jsx)(c.Heading, {
                        className: N.rowApplied,
                        variant: 'heading-sm/semibold',
                        color: 'header-secondary',
                        children: T && null != r ? S.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT_APPLIED_ON.format({ date: r.currentPeriodEnd }) : S.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT_APPLIED_MISMATCHED_PLAN.format({ planName: C })
                    })
                ]
            }),
            (0, n.jsx)(c.Text, {
                className: N.rowCreditCount,
                variant: 'text-md/semibold',
                children: S.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT_COUNT_MONTHS.format({ count: a })
            })
        ]
    });
}
t.Z = function (e) {
    let {
            className: t,
            entitlements: s
        } = e, a = o()(Array.from(s)).filter(e => {
            let {
                subscriptionPlanId: t,
                parentId: s,
                consumed: n
            } = e;
            return null != t && null != s && !n;
        }).groupBy(e => e.subscriptionPlanId).value(), r = (0, l.e7)([E.ZP], () => E.ZP.getPremiumSubscription()), _ = (0, l.e7)([E.ZP], () => null == E.ZP.getPremiumTypeSubscription()), u = Object.keys(a).some(e => e === I.Xh.PREMIUM_MONTH_TIER_1), m = (0, l.e7)([d.default], () => d.default.getCurrentUser());
    return null == m ? null : (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)('div', {
                className: i()(t, N.premiumSubscriptionAccountCredit),
                children: Object.keys(a).map(e => (0, n.jsx)(C, {
                    planId: e,
                    count: a[e].length,
                    userPremiumSubscription: r,
                    user: m
                }, e))
            }),
            u && _ && (0, n.jsxs)('div', {
                children: [
                    (0, n.jsx)(c.Text, {
                        className: N.tier1AccountCreditHeader,
                        variant: 'text-md/normal',
                        children: S.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_HEADER
                    }),
                    (0, n.jsx)(T.R, {})
                ]
            })
        ]
    });
};
