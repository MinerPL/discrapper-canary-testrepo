n.d(t, {
    $H: function () {
        return v;
    },
    GN: function () {
        return x;
    }
});
var s = n(735250), r = n(470079), o = n(120356), i = n.n(o), c = n(481060), a = n(774078), l = n(55935), u = n(74538), d = n(639119), p = n(474936), f = n(689938), g = n(716496);
function b(e) {
    let {
            isTabSelected: t,
            expiresAt: n,
            trialDuration: o
        } = e, u = r.useMemo(() => Date.parse(n), [n]), d = (0, a.Z)(u, 60000);
    return Object.values(d).every(e => 0 === e) ? null : (0, s.jsx)(c.Tooltip, {
        text: (0, l.QX)(d, {
            days: f.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
            hours: f.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
            minutes: f.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
        }),
        children: e => (0, s.jsxs)('div', {
            ...e,
            className: i()(g.premiumTrialBadge, g.premiumTrialAcknowledgedBadge, { [g.premiumTrialBadgeSelected]: t }),
            children: [
                (0, s.jsx)(c.ClockIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: g.premiumTrialBadgeIcon
                }),
                o
            ]
        })
    });
}
function v(e) {
    var t;
    let {
            isTabSelected: n,
            trialOffer: r
        } = e, o = null === (t = (0, d.N)()) || void 0 === t ? void 0 : t.subscription_trial, i = (0, u.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count
        });
    return (0, s.jsx)(_, {
        isTabSelected: n,
        badgeCopy: i,
        offerExpiresAt: r.expires_at,
        className: (null == o ? void 0 : o.sku_id) === p.Si.TIER_2 ? g.premiumTrialTier2UnacknowledgedBadge : g.premiumTrialTier0UnacknowledgedBadge
    });
}
function x(e) {
    let {
            isTabSelected: t,
            userDiscount: n,
            includesAmountOff: r
        } = e, o = f.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: n.discount.amount });
    return (0, s.jsx)(_, {
        isTabSelected: t,
        badgeCopy: r ? o : f.Z.Messages.PREMIUM_DISCOUNT_BADGE,
        offerExpiresAt: n.expires_at,
        className: g.premiumDiscountUnacknowledgedBadge
    });
}
function _(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: r,
        className: o
    } = e;
    return null != r ? (0, s.jsx)(b, {
        expiresAt: r,
        isTabSelected: t,
        trialDuration: n
    }) : (0, s.jsx)('div', {
        className: i()(g.premiumTrialBadge, o),
        children: n
    });
}
