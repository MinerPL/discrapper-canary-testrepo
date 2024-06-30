var a = s(735250);
s(470079);
var t = s(120356), r = s.n(t), c = s(442837), i = s(481060), L = s(607070), C = s(285952), l = s(483444), u = s(599250), o = s(926153), d = s(27693), h = s(70613), N = s(74538), T = s(937615), S = s(104494), E = s(639119), f = s(474936), R = s(689938), p = s(64506);
let M = e => {
    let {
            isTier0: n,
            discountAmount: s
        } = e, t = (0, E.N)(), c = null != t && t.trial_id === f.a7, L = R.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
    return void 0 !== s ? L = R.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: s }) : c && (L = R.Z.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL), (0, a.jsx)('div', {
        className: p.trialBadgeContainer,
        children: (0, a.jsx)(i.Text, {
            variant: 'text-xs/bold',
            className: r()(p.trialOfferText, { [p.tier0TrialOffer]: n }),
            children: L
        })
    });
};
n.Z = function (e) {
    var n;
    let s;
    let {
            hideCloseButton: t = !1,
            hideCloseOnFullScreen: E,
            shouldShowPrice: I,
            plan: _,
            renderAnimation: x,
            onClose: m,
            isGift: g,
            upgradeToPremiumType: A,
            headerTheme: Z = f.nL.DEFAULT,
            className: j,
            showTrialBadge: v = !1,
            showDiscountBadge: O = !1
        } = e, F = A === f.p9.TIER_2;
    s = A === f.p9.TIER_0 ? u.Z : A === f.p9.TIER_1 ? o.Z : l.Z;
    let H = (0, c.e7)([L.Z], () => L.Z.useReducedMotion), B = (0, S.Ng)(), P = null == B ? void 0 : null === (n = B.discount) || void 0 === n ? void 0 : n.amount;
    return (0, a.jsxs)('div', {
        'aria-hidden': !0,
        className: r()({
            [p.headerBackground]: !F,
            [Z === f.nL.WINTER ? p.tier2HeaderBackgroundWinterTheme : p.tier2HeaderBackground]: F
        }, j),
        children: [
            H || Z !== f.nL.WINTER ? null : (0, a.jsx)(h.Z, {
                className: p.snow,
                wind: 5
            }),
            (v || O) && (0, a.jsx)(d.Z, { className: p.trialBadgeSparkles }),
            x(),
            (0, a.jsxs)(C.Z, {
                align: C.Z.Align.START,
                justify: C.Z.Justify.BETWEEN,
                className: p.headerTop,
                children: [
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(s, { className: r()(p.headerIcon, { [p.nonTier2]: !F }) }),
                            (v || O) && (0, a.jsx)(M, {
                                isTier0: A === f.p9.TIER_0,
                                discountAmount: O ? P : void 0
                            })
                        ]
                    }),
                    !t && (0, a.jsx)(i.ModalCloseButton, {
                        hideOnFullscreen: E,
                        onClick: m,
                        className: p.closeButton
                    })
                ]
            }),
            I && null != _ ? (0, a.jsx)('div', {
                className: p.price,
                children: function (e, n) {
                    let s = N.ZP.getDefaultPrice(e), {intervalType: a} = N.ZP.getInterval(e), t = (0, T.T4)(s.amount, s.currency);
                    if (n)
                        return t;
                    switch (a) {
                    case f.rV.MONTH:
                        return R.Z.Messages.BILLING_PRICE_PER_MONTH.format({ price: t });
                    case f.rV.YEAR:
                        return R.Z.Messages.BILLING_PRICE_PER_YEAR.format({ price: t });
                    }
                }(_, g)
            }) : null
        ]
    });
};
