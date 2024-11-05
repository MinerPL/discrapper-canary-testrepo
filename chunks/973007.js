var i = n(200651);
n(192379);
var l = n(481060),
    s = n(184508),
    r = n(823188),
    C = n(474936),
    a = n(377628);
function o(e) {
    let { onClick: t, isGift: n, priceOptions: s, showHalloweenGift: C, shouldUseTaglineXPCopy: o } = e;
    return (0, i.jsx)(l.Clickable, {
        onClick: t,
        style: { cursor: 'pointer' },
        children: (0, i.jsx)(r.wp, {
            className: a.tier2MarketingCard,
            ctaButton: null,
            showWumpus: !C && !o,
            showHalloweenGift: C,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: s,
            shouldUseTaglineXPCopy: o
        })
    });
}
function d(e) {
    let { onClick: t, isGift: n, priceOptions: s, shouldUseTaglineXPCopy: C } = e;
    return (0, i.jsx)(l.Clickable, {
        onClick: t,
        style: { cursor: 'pointer' },
        children: (0, i.jsx)(r.Gq, {
            className: a.tier0MarketingCard,
            ctaButton: null,
            showWumpus: !C,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: s,
            shouldUseTaglineXPCopy: C
        })
    });
}
t.Z = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: l, shouldShowHalloweenTier2Card: r } = e,
        a = (0, s.tY)('PremiumMarketingHome');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o, {
                onClick: () => t(C.Si.TIER_2),
                isGift: n,
                priceOptions: l,
                showHalloweenGift: r,
                shouldUseTaglineXPCopy: a
            }),
            (0, i.jsx)(d, {
                onClick: () => t(C.Si.TIER_0),
                isGift: n,
                priceOptions: l,
                shouldUseTaglineXPCopy: a
            })
        ]
    });
};
