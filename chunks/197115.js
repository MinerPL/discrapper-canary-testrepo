var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(442837), s = n(481060), l = n(230711), u = n(906732), c = n(543241), d = n(963249), _ = n(703656), E = n(301766), f = n(594174), h = n(78839), p = n(451478), m = n(74538), I = n(474936), T = n(981631), g = n(689938), S = n(825128);
t.Z = function (e) {
    let {
            isGift: t,
            subscriptionTier: i,
            onClick: A,
            size: N,
            className: v,
            trialId: O,
            isTrialCTA: R,
            buttonText: C,
            buttonTextClassName: y,
            iconClassName: D,
            postSuccessGuild: L,
            onSubscribeModalClose: b,
            premiumModalAnalyticsLocation: M,
            showIcon: P = !0,
            disableShine: U,
            applicationId: w,
            giftMessage: x,
            overrideDisabledButtonText: G,
            shinyButtonClassName: k,
            onClickOverride: B,
            showGradient: F = !1,
            ...V
        } = e, H = (0, o.e7)([f.default], () => f.default.getCurrentUser()), Z = (0, o.e7)([p.Z], () => p.Z.isFocused()), Y = (0, o.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()), {analyticsLocations: j} = (0, u.ZP)(), W = e => {
            if (e.preventDefault(), null == H) {
                (0, _.uL)(T.Z5c.LOGIN);
                return;
            }
            if (null == A || A(e), (null == Y ? void 0 : Y.status) === T.O0b.ACCOUNT_HOLD) {
                (0, c.A3)(), l.Z.open(T.oAB.PREMIUM), null == b || b(!1);
                return;
            }
            !function (e) {
                let {
                    isClaimed: t,
                    isVerified: i,
                    isGift: a,
                    subscriptionTier: o,
                    trialId: l,
                    postSuccessGuild: u,
                    onSubscribeModalClose: c,
                    analyticsLocations: _,
                    premiumModalAnalyticsLocation: E,
                    applicationId: f,
                    giftMessage: h
                } = e;
                if (!t) {
                    (0, s.openModalLazy)(async () => {
                        let {default: e} = await n.e('69417').then(n.bind(n, 918995));
                        return t => {
                            let {
                                onClose: n,
                                ...i
                            } = t;
                            return (0, r.jsx)(e, {
                                ...i,
                                onClose: n
                            });
                        };
                    });
                    return;
                }
                if (!i) {
                    (0, s.openModalLazy)(async () => {
                        let {default: e} = await n.e('20102').then(n.bind(n, 444688));
                        return t => {
                            let {
                                onClose: n,
                                ...i
                            } = t;
                            return (0, r.jsx)(e, {
                                ...i,
                                onClose: n
                            });
                        };
                    });
                    return;
                }
                let p = T.Qqv.BUY;
                null != l ? p = T.Qqv.TRIAL : a && (p = T.Qqv.GIFT), (0, d.Z)({
                    isGift: a,
                    initialPlanId: null,
                    subscriptionTier: o,
                    analyticsLocations: _,
                    analyticsObject: {
                        object: T.qAy.BUTTON_CTA,
                        objectType: p,
                        ...E
                    },
                    trialId: l,
                    postSuccessGuild: u,
                    onClose: c,
                    applicationId: f,
                    giftMessage: h
                });
            }({
                isClaimed: H.isClaimed(),
                isVerified: H.verified,
                isGift: t,
                subscriptionTier: i,
                trialId: O,
                postSuccessGuild: L,
                onSubscribeModalClose: b,
                analyticsLocations: j,
                premiumModalAnalyticsLocation: M,
                applicationId: w,
                giftMessage: x
            });
        };
    if (R)
        return (0, r.jsxs)(s.Button, {
            size: N,
            className: v,
            innerClassName: S.premiumSubscribeButton,
            color: s.Button.Colors.BRAND_INVERTED,
            onClick: null != B ? B : W,
            ...V,
            children: [
                P && (0, r.jsx)(s.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: S.premiumIcon
                }),
                (0, r.jsx)('span', {
                    className: a()(S.buttonText, y),
                    children: null != C ? C : g.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                })
            ]
        });
    if (t)
        return (0, r.jsxs)(s.Button, {
            size: N,
            className: v,
            innerClassName: S.giftButton,
            color: s.Button.Colors.PRIMARY,
            onClick: null != B ? B : W,
            ...V,
            children: [
                (0, r.jsx)(s.GiftIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: S.giftIcon
                }),
                (0, r.jsx)('span', {
                    className: a()(S.buttonText, y),
                    children: null != C ? C : g.Z.Messages.PREMIUM_GIFTING_BUTTON
                })
            ]
        });
    let K = g.Z.Messages.APPLICATION_STORE_GET_PREMIUM, z = null != Y ? (0, m.Af)(Y) : null, q = null != z ? m.ZP.getPremiumType(z.planId) : null == H ? void 0 : H.premiumType, Q = i === I.Si.TIER_2 && null != q && [
            I.p9.TIER_0,
            I.p9.TIER_1
        ].includes(q);
    Q && (K = g.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE);
    let X = null != Y && Y.status !== T.O0b.ACCOUNT_HOLD && !(0, E.Q0)(Y.planId) && !Q, $ = X ? null != G ? G : function (e) {
            let {
                    ctaSubscriptionSkuId: t,
                    currentPremiumType: n
                } = e, r = null, i = null;
            if (null != t && t !== I.Si.LEGACY && t !== I.Si.TIER_0 && t !== I.Si.TIER_1 && t !== I.Si.TIER_2)
                return {
                    disabledButtonText: r,
                    disabledButtonTooltipText: i
                };
            let a = null != t ? I.y7[(0, m.Wz)(t)] : null, o = null != a ? I.$e[a] : null, s = null != n ? I.$e[n] : null;
            return null != s && null != o && o < s ? (r = g.Z.Messages.APPLICATION_STORE_GET_PREMIUM, i = g.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != a && null != n && a === n ? (r = g.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, i = g.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == a && null != n && n === I.p9.TIER_2 && (i = g.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                disabledButtonText: r,
                disabledButtonTooltipText: i
            };
        }({
            ctaSubscriptionSkuId: i,
            currentPremiumType: q
        }) : null;
    function J(e) {
        var t, n;
        return (0, r.jsxs)(s.ShinyButton, {
            disabled: X,
            onClick: null != B ? B : W,
            innerClassName: S.premiumSubscribeButton,
            color: i === I.Si.TIER_1 ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
            size: N,
            className: k,
            wrapperClassName: a()({
                [S.tier2Gradient]: F && i === I.Si.TIER_2,
                [S.tier1Gradient]: F && i === I.Si.TIER_1
            }, v),
            pauseAnimation: !Z || U,
            ...V,
            ...e,
            children: [
                P && (0, r.jsx)(s.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: a()(S.premiumIcon, D)
                }),
                (0, r.jsx)('span', {
                    className: a()(S.buttonText, y),
                    children: null !== (n = null !== (t = null == $ ? void 0 : $.disabledButtonText) && void 0 !== t ? t : C) && void 0 !== n ? n : K
                })
            ]
        });
    }
    return (null == $ ? void 0 : $.disabledButtonTooltipText) != null ? (0, r.jsx)(s.Tooltip, {
        text: $.disabledButtonTooltipText,
        children: J
    }) : J();
};
