var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(230711),
    u = n(906732),
    c = n(543241),
    d = n(963249),
    _ = n(703656),
    E = n(301766),
    f = n(594174),
    h = n(78839),
    p = n(451478),
    I = n(74538),
    m = n(639119),
    T = n(474936),
    S = n(981631),
    g = n(689938),
    A = n(186903);
t.Z = function (e) {
    let { isGift: t, subscriptionTier: i, onClick: N, size: O, className: R, isTrialCTA: v, buttonText: C, buttonTextClassName: L, iconClassName: y, postSuccessGuild: D, onSubscribeModalClose: b, premiumModalAnalyticsLocation: M, showIcon: P = !0, disableShine: U, applicationId: w, giftMessage: x, overrideDisabledButtonText: G, shinyButtonClassName: k, showGradient: B = !1, ...F } = e,
        V = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        H = (0, s.e7)([p.Z], () => p.Z.isFocused()),
        Z = (0, s.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: Y } = (0, u.ZP)(),
        j = (0, m.N)(),
        W = !t && null != j && null != i && T.nG[j.trial_id].skus.includes(i),
        K = (e) => {
            var a;
            if ((e.preventDefault(), null == V)) {
                (0, _.uL)(S.Z5c.LOGIN);
                return;
            }
            if ((null == N || N(e), (null == Z ? void 0 : Z.status) === S.O0b.ACCOUNT_HOLD)) {
                (0, c.A3)(), l.Z.open(S.oAB.PREMIUM), null == b || b(!1);
                return;
            }
            !(function (e) {
                let { isClaimed: t, isVerified: i, isGift: a, subscriptionTier: s, trialId: l, postSuccessGuild: u, onSubscribeModalClose: c, analyticsLocations: _, premiumModalAnalyticsLocation: E, applicationId: f, giftMessage: h } = e;
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
                let p = S.Qqv.BUY;
                null != l ? (p = S.Qqv.TRIAL) : a && (p = S.Qqv.GIFT),
                    (0, d.Z)({
                        isGift: a,
                        initialPlanId: null,
                        subscriptionTier: s,
                        analyticsLocations: _,
                        analyticsObject: {
                            object: S.qAy.BUTTON_CTA,
                            objectType: p,
                            ...E
                        },
                        trialId: l,
                        postSuccessGuild: u,
                        onClose: c,
                        applicationId: f,
                        giftMessage: h
                    });
            })({
                isClaimed: V.isClaimed(),
                isVerified: V.verified,
                isGift: t,
                subscriptionTier: i,
                trialId: W ? (null === (a = j.subscription_trial) || void 0 === a ? void 0 : a.id) : null,
                postSuccessGuild: D,
                onSubscribeModalClose: b,
                analyticsLocations: Y,
                premiumModalAnalyticsLocation: M,
                applicationId: w,
                giftMessage: x
            });
        };
    if (v)
        return (0, r.jsxs)(o.Button, {
            size: O,
            className: R,
            innerClassName: A.premiumSubscribeButton,
            color: o.Button.Colors.BRAND_INVERTED,
            onClick: K,
            ...F,
            children: [
                P &&
                    (0, r.jsx)(o.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: A.premiumIcon
                    }),
                (0, r.jsx)('span', {
                    className: a()(A.buttonText, L),
                    children: null != C ? C : g.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                })
            ]
        });
    if (t)
        return (0, r.jsxs)(o.Button, {
            size: O,
            className: R,
            innerClassName: A.giftButton,
            color: o.Button.Colors.PRIMARY,
            onClick: K,
            ...F,
            children: [
                (0, r.jsx)(o.GiftIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: A.giftIcon
                }),
                (0, r.jsx)('span', {
                    className: a()(A.buttonText, L),
                    children: null != C ? C : g.Z.Messages.PREMIUM_GIFTING_BUTTON
                })
            ]
        });
    let z = g.Z.Messages.APPLICATION_STORE_GET_PREMIUM,
        q = null != Z ? (0, I.Af)(Z) : null,
        Q = null != q ? I.ZP.getPremiumType(q.planId) : null == V ? void 0 : V.premiumType,
        X = i === T.Si.TIER_2 && null != Q && [T.p9.TIER_0, T.p9.TIER_1].includes(Q);
    X && (z = g.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE);
    let $ = null != Z && I.ZP.isSwitchingPlansDisabled(Z),
        J = (null != Z && Z.status !== S.O0b.ACCOUNT_HOLD && !(0, E.Q0)(Z.planId) && !X) || $,
        ee = J
            ? null != G
                ? G
                : (function (e) {
                      let { ctaSubscriptionSkuId: t, currentPremiumType: n, isSwitchingDisabled: r, subscription: i } = e,
                          a = null,
                          s = null;
                      if (null != t && t !== T.Si.LEGACY && t !== T.Si.TIER_0 && t !== T.Si.TIER_1 && t !== T.Si.TIER_2)
                          return {
                              disabledButtonText: a,
                              disabledButtonTooltipText: s
                          };
                      let o = null != t ? T.y7[(0, I.Wz)(t)] : null,
                          l = null != o ? T.$e[o] : null,
                          u = null != n ? T.$e[n] : null;
                      return (
                          r ? (s = I.ZP.getSwitchingPlansDisabledMessage(i)) : null != u && null != l && l < u ? ((a = g.Z.Messages.APPLICATION_STORE_GET_PREMIUM), (s = g.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP)) : null != o && null != n && o === n ? ((a = g.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN), (s = g.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP)) : null == o && null != n && n === T.p9.TIER_2 && (s = g.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP),
                          {
                              disabledButtonText: a,
                              disabledButtonTooltipText: s
                          }
                      );
                  })({
                      ctaSubscriptionSkuId: i,
                      currentPremiumType: Q,
                      isSwitchingDisabled: $,
                      subscription: Z
                  })
            : null;
    function et(e) {
        var t, n;
        return (0, r.jsxs)(o.ShinyButton, {
            disabled: J,
            onClick: K,
            innerClassName: A.premiumSubscribeButton,
            color: i === T.Si.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
            size: O,
            className: k,
            wrapperClassName: a()(
                {
                    [A.tier2Gradient]: B && i === T.Si.TIER_2,
                    [A.tier1Gradient]: B && i === T.Si.TIER_1
                },
                R
            ),
            pauseAnimation: !H || U,
            ...F,
            ...e,
            children: [
                P &&
                    (0, r.jsx)(o.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(A.premiumIcon, y)
                    }),
                (0, r.jsx)('span', {
                    className: a()(A.buttonText, L),
                    children: null !== (n = null !== (t = null == ee ? void 0 : ee.disabledButtonText) && void 0 !== t ? t : C) && void 0 !== n ? n : z
                })
            ]
        });
    }
    return (null == ee ? void 0 : ee.disabledButtonTooltipText) != null
        ? (0, r.jsx)(o.Tooltip, {
              text: ee.disabledButtonTooltipText,
              children: et
          })
        : et();
};
