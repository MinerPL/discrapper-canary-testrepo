var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(230711),
    u = n(906732),
    c = n(975298),
    d = n(543241),
    f = n(963249),
    _ = n(703656),
    h = n(301766),
    p = n(594174),
    m = n(78839),
    g = n(451478),
    E = n(74538),
    v = n(639119),
    I = n(474936),
    S = n(981631),
    T = n(388032),
    b = n(186903);
t.Z = function (e) {
    let { isGift: t, subscriptionTier: i, onClick: y, size: A, className: N, isTrialCTA: C, buttonText: R, buttonTextClassName: O, iconClassName: D, postSuccessGuild: L, onSubscribeModalClose: x, premiumModalAnalyticsLocation: w, showIcon: M = !0, disableShine: P, applicationId: k, giftMessage: U, overrideDisabledButtonText: G, shinyButtonClassName: B, showGradient: Z = !1, ...F } = e,
        V = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        j = (0, s.e7)([g.Z], () => g.Z.isFocused()),
        H = (0, s.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
        { fractionalState: Y } = (0, c.Z)(),
        { analyticsLocations: W } = (0, u.ZP)(),
        K = (0, v.N)(),
        z = !t && null != K && null != i && I.nG[K.trial_id].skus.includes(i),
        q = (e) => {
            var a;
            if ((e.preventDefault(), null == V)) {
                (0, _.uL)(S.Z5c.LOGIN);
                return;
            }
            if ((null == y || y(e), (null == H ? void 0 : H.status) === S.O0b.ACCOUNT_HOLD)) {
                (0, d.A3)(), l.Z.open(S.oAB.PREMIUM), null == x || x(!1);
                return;
            }
            !(function (e) {
                let { isClaimed: t, isVerified: i, isGift: a, subscriptionTier: s, trialId: l, postSuccessGuild: u, onSubscribeModalClose: c, analyticsLocations: d, premiumModalAnalyticsLocation: _, applicationId: h, giftMessage: p } = e;
                if (!t) {
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await n.e('69417').then(n.bind(n, 918995));
                        return (t) => {
                            let { onClose: n, ...i } = t;
                            return (0, r.jsx)(e, {
                                ...i,
                                onClose: n
                            });
                        };
                    });
                    return;
                }
                if (!i) {
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await n.e('20102').then(n.bind(n, 444688));
                        return (t) => {
                            let { onClose: n, ...i } = t;
                            return (0, r.jsx)(e, {
                                ...i,
                                onClose: n
                            });
                        };
                    });
                    return;
                }
                let m = S.Qqv.BUY;
                null != l ? (m = S.Qqv.TRIAL) : a && (m = S.Qqv.GIFT),
                    (0, f.Z)({
                        isGift: a,
                        initialPlanId: null,
                        subscriptionTier: s,
                        analyticsLocations: d,
                        analyticsObject: {
                            object: S.qAy.BUTTON_CTA,
                            objectType: m,
                            ..._
                        },
                        trialId: l,
                        postSuccessGuild: u,
                        onClose: c,
                        applicationId: h,
                        giftMessage: p
                    });
            })({
                isClaimed: V.isClaimed(),
                isVerified: V.verified,
                isGift: t,
                subscriptionTier: i,
                trialId: z ? (null === (a = K.subscription_trial) || void 0 === a ? void 0 : a.id) : null,
                postSuccessGuild: L,
                onSubscribeModalClose: x,
                analyticsLocations: W,
                premiumModalAnalyticsLocation: w,
                applicationId: k,
                giftMessage: U
            });
        };
    if (C)
        return (0, r.jsxs)(o.Button, {
            size: A,
            className: N,
            innerClassName: b.premiumSubscribeButton,
            color: o.Button.Colors.BRAND_INVERTED,
            onClick: q,
            ...F,
            children: [
                M &&
                    (0, r.jsx)(o.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: b.premiumIcon
                    }),
                (0, r.jsx)('span', {
                    className: a()(b.buttonText, O),
                    children: null != R ? R : T.intl.string(T.t['Gd/XHB'])
                })
            ]
        });
    if (t)
        return (0, r.jsxs)(o.Button, {
            size: A,
            className: N,
            innerClassName: b.giftButton,
            color: o.Button.Colors.PRIMARY,
            onClick: q,
            ...F,
            children: [
                (0, r.jsx)(o.GiftIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: b.giftIcon
                }),
                (0, r.jsx)('span', {
                    className: a()(b.buttonText, O),
                    children: null != R ? R : T.intl.string(T.t.PEjaCw)
                })
            ]
        });
    let Q = T.intl.string(T.t['2pG5GR']),
        X = null != H ? (0, E.Af)(H) : null,
        J = null != X ? E.ZP.getPremiumType(X.planId) : null == V ? void 0 : V.premiumType,
        $ = i === I.Si.TIER_2 && null != J && [I.p9.TIER_0, I.p9.TIER_1].includes(J);
    $ && (Q = T.intl.string(T.t.IJI7ys));
    let ee = null != H && E.ZP.isSwitchingPlansDisabled(H, Y),
        et = (null != H && H.status !== S.O0b.ACCOUNT_HOLD && !(0, h.Q0)(H.planId) && !$) || ee,
        en = et
            ? null != G
                ? G
                : (function (e) {
                      let { ctaSubscriptionSkuId: t, currentPremiumType: n, isSwitchingDisabled: r, subscription: i } = e,
                          a = null,
                          s = null;
                      if (null != t && t !== I.Si.LEGACY && t !== I.Si.TIER_0 && t !== I.Si.TIER_1 && t !== I.Si.TIER_2)
                          return {
                              disabledButtonText: a,
                              disabledButtonTooltipText: s
                          };
                      let o = null != t ? I.y7[(0, E.Wz)(t)] : null,
                          l = null != o ? I.$e[o] : null,
                          u = null != n ? I.$e[n] : null;
                      return (
                          r ? (s = E.ZP.getSwitchingPlansDisabledMessage(i)) : null != u && null != l && l < u ? ((a = T.intl.string(T.t['2pG5GR'])), (s = T.intl.string(T.t.jXaaRk))) : null != o && null != n && o === n ? ((a = T.intl.string(T.t.ymSxh4)), (s = T.intl.string(T.t.jXaaRk))) : null == o && null != n && n === I.p9.TIER_2 && (s = T.intl.string(T.t.jXaaRk)),
                          {
                              disabledButtonText: a,
                              disabledButtonTooltipText: s
                          }
                      );
                  })({
                      ctaSubscriptionSkuId: i,
                      currentPremiumType: J,
                      isSwitchingDisabled: ee,
                      subscription: H
                  })
            : null;
    function er(e) {
        var t, n;
        return (0, r.jsxs)(o.ShinyButton, {
            disabled: et,
            onClick: q,
            innerClassName: b.premiumSubscribeButton,
            color: i === I.Si.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
            size: A,
            className: B,
            wrapperClassName: a()(
                {
                    [b.tier2Gradient]: Z && i === I.Si.TIER_2,
                    [b.tier1Gradient]: Z && i === I.Si.TIER_1
                },
                N
            ),
            pauseAnimation: !j || P,
            ...F,
            ...e,
            children: [
                M &&
                    (0, r.jsx)(o.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(b.premiumIcon, D)
                    }),
                (0, r.jsx)('span', {
                    className: a()(b.buttonText, O),
                    children: null !== (n = null !== (t = null == en ? void 0 : en.disabledButtonText) && void 0 !== t ? t : R) && void 0 !== n ? n : Q
                })
            ]
        });
    }
    return (null == en ? void 0 : en.disabledButtonTooltipText) != null
        ? (0, r.jsx)(o.Tooltip, {
              text: en.disabledButtonTooltipText,
              children: er
          })
        : er();
};
