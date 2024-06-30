var i = t(735250);
t(470079);
var r = t(442837), o = t(481060), a = t(78839), s = t(730314), l = t(639119), d = t(197115), c = t(823188), C = t(474936), u = t(231338), _ = t(696114);
function p(e) {
    let {
            subscriptionTier: n,
            onClick: t
        } = e, r = (0, l.N)(), a = null == r ? void 0 : r.subscription_trial;
    return (0, i.jsx)(d.Z, {
        color: o.ButtonColors.BRAND_INVERTED,
        buttonShineClassName: _.buttonShine,
        trialId: null == a ? void 0 : a.id,
        className: _.subButton,
        buttonTextClassName: _.subscribeButtonText,
        onlyShineOnHover: !0,
        subscriptionTier: n,
        onClickOverride: t,
        showIcon: !1
    });
}
function f(e) {
    let {
        onClick: n,
        isGift: t,
        priceOptions: r,
        shouldUseModifiedTierCards: a,
        isPremium: s,
        subscriptionTier: l
    } = e;
    return (0, i.jsx)(o.Clickable, {
        onClick: a && !s ? u.Vq : n,
        style: a && !s ? void 0 : { cursor: 'pointer' },
        children: (0, i.jsx)(c.wp, {
            className: _.tier2MarketingCard,
            ctaButton: a && !s ? (0, i.jsx)(p, {
                subscriptionTier: l,
                onClick: n
            }) : void 0,
            showWumpus: !a,
            showYearlyPrice: !0,
            isGift: t,
            isModal: !0,
            priceOptions: r,
            shouldUseModifiedCopy: a
        })
    });
}
function x(e) {
    let {
        onClick: n,
        isGift: t,
        priceOptions: r,
        shouldUseModifiedTierCards: a,
        isPremium: s,
        subscriptionTier: l
    } = e;
    return (0, i.jsx)(o.Clickable, {
        onClick: a && !s ? u.Vq : n,
        style: a && !s ? void 0 : { cursor: 'pointer' },
        children: (0, i.jsx)(c.Gq, {
            className: _.tier0MarketingCard,
            ctaButton: a && !s ? (0, i.jsx)(p, {
                subscriptionTier: l,
                onClick: n
            }) : void 0,
            showWumpus: !a,
            showYearlyPrice: !0,
            isGift: t,
            priceOptions: r,
            shouldUseModifiedCopy: a
        })
    });
}
n.Z = function (e) {
    let {
            onSelectSku: n,
            isGift: t,
            priceOptions: o
        } = e, {bucket: l} = (0, s.wj)('PremiumMarketingHome'), d = (0, r.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()), c = l > 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f, {
                onClick: () => n(C.Si.TIER_2),
                isGift: t,
                priceOptions: o,
                shouldUseModifiedTierCards: c,
                isPremium: null != d,
                subscriptionTier: C.Si.TIER_2
            }),
            (0, i.jsx)(x, {
                onClick: () => n(C.Si.TIER_0),
                isGift: t,
                priceOptions: o,
                shouldUseModifiedTierCards: c,
                isPremium: null != d,
                subscriptionTier: C.Si.TIER_0
            })
        ]
    });
};
