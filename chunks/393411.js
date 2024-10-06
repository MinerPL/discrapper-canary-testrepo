t.d(s, {
    R: function () {
        return y;
    }
}),
    t(411104);
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(512722),
    o = t.n(r),
    l = t(442837),
    c = t(481060),
    d = t(366939),
    _ = t(100527),
    u = t(906732),
    E = t(710845),
    T = t(963249),
    S = t(301766),
    I = t(509545),
    N = t(78839),
    A = t(931331),
    C = t(754347),
    m = t(122289),
    g = t(74538),
    h = t(212895),
    O = t(296848),
    p = t(140465),
    R = t(879463),
    x = t(104494),
    M = t(987997),
    f = t(833569),
    D = t(823188),
    L = t(474936),
    P = t(981631),
    b = t(689938),
    Z = t(353740);
let v = new E.Z('SubscriptionHeader.tsx'),
    j = {
        page: P.ZY5.USER_SETTINGS,
        section: P.jXE.SETTINGS_PREMIUM,
        object: P.qAy.CARD
    },
    B = [P.O0b.PAUSED, P.O0b.PAUSE_PENDING, P.O0b.BILLING_RETRY];
function U(e) {
    let { wordMark: s, subscriptionInfo: t, buttons: a, statusClasses: r, shouldUseDiscountMarketing: o, discountAmount: l } = e;
    return (0, n.jsxs)('div', {
        className: i()(Z.banner, r),
        children: [
            (0, n.jsx)('div', { className: Z.bannerBackgroundImage }),
            (0, n.jsxs)('div', {
                className: Z.detailsContainer,
                children: [
                    (0, n.jsx)('div', { className: Z.image }),
                    (0, n.jsxs)('div', {
                        className: Z.details,
                        children: [
                            (0, n.jsxs)('div', {
                                className: Z.headerLabel,
                                children: [
                                    s,
                                    o &&
                                        null != l &&
                                        (0, n.jsx)(D.Cy, {
                                            text: b.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: l }),
                                            className: Z.discountPill,
                                            colorOptions: D.VE.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1
                                        })
                                ]
                            }),
                            t
                        ]
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: Z.buttons,
                children: a
            })
        ]
    });
}
function G(e) {
    let { wordMark: s, subscriptionInfo: t, buttons: a, statusClasses: r, shouldUseDiscountMarketing: o, discountAmount: l } = e;
    return (0, n.jsxs)('div', {
        className: i()(Z.banner, r, Z.repositioned),
        children: [
            (0, n.jsx)('div', { className: Z.bannerBackgroundImage }),
            (0, n.jsx)('div', {
                className: Z.detailsContainer,
                children: (0, n.jsx)('div', {
                    className: Z.details,
                    children: (0, n.jsxs)('div', {
                        className: Z.headerLabel,
                        children: [
                            (0, n.jsx)('div', { className: Z.image }),
                            (0, n.jsxs)('div', {
                                className: Z.headerColumnB,
                                children: [
                                    s,
                                    o &&
                                        null != l &&
                                        (0, n.jsx)(D.Cy, {
                                            text: b.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: l }),
                                            className: Z.discountPill,
                                            colorOptions: D.VE.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1
                                        }),
                                    t
                                ]
                            })
                        ]
                    })
                })
            }),
            (0, n.jsx)('div', {
                className: Z.buttons,
                children: a
            })
        ]
    });
}
function F() {
    return (0, n.jsxs)('div', {
        className: Z.wordMark,
        children: [
            (0, n.jsx)(C.Z, {
                className: Z.discordWordmark,
                'aria-label': b.Z.Messages.PREMIUM_TIER_1
            }),
            (0, n.jsx)('div', { className: Z.classicWordmark })
        ]
    });
}
function y() {
    let { analyticsLocations: e } = (0, u.ZP)(_.Z.ACCOUNT_CREDIT_BANNER);
    return (0, n.jsx)(U, {
        wordMark: (0, n.jsx)(F, {}),
        subscriptionInfo: (0, n.jsx)('div', {
            className: Z.planInfo,
            children: b.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION
        }),
        buttons: (0, n.jsx)(M.Z, {
            className: Z.toolsButton,
            onClick: () =>
                (0, T.Z)({
                    subscriptionTier: L.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: j
                }),
            children: b.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_CTA
        }),
        statusClasses: { [Z.tier1]: !0 }
    });
}
s.Z = function (e) {
    var s;
    let { subscription: a, renewalInvoicePreview: r, paymentSource: E, busy: D, analyticsLocation: y } = e,
        { analyticsLocations: V } = (0, u.ZP)(_.Z.SUBSCRIPTION_HEADER),
        { enabled: Y } = (0, R.ZP)({ location: 'subscription_header' });
    (!L.pj.has(a.planId) || !P.JwP.ALL_PAUSEABLE.has(a.status)) && (Y = !1);
    let k = (0, x.Ng)(),
        w = null == k ? void 0 : null === (s = k.discount) || void 0 === s ? void 0 : s.amount,
        H = (0, p.t7)(),
        W = (0, p.lr)(),
        K = (0, l.e7)([N.ZP], () => N.ZP.inReverseTrial()),
        z = () => {
            if (a.status === P.O0b.ACTIVE || a.status === P.O0b.PAST_DUE || a.status === P.O0b.PAUSED) q(f.Steps.PAUSE_SELECT);
        },
        Q = () => {
            if (a.status === P.O0b.ACTIVE || a.status === P.O0b.PAST_DUE || a.status === P.O0b.PAUSE_PENDING) q();
        },
        X = () => {
            if (a.status === P.O0b.BILLING_RETRY) q(f.Steps.CONFIRM);
        },
        q = (e) => {
            (0, c.openModalLazy)(async () => {
                let { default: s } = await Promise.resolve().then(t.bind(t, 833569));
                return (t) =>
                    (0, n.jsx)(s, {
                        ...t,
                        premiumSubscription: a,
                        analyticsLocation: y,
                        analyticsLocations: V,
                        initialStep: e
                    });
            });
        },
        J = () => {
            if (null != a && null != a.planIdFromItems) {
                let e = I.Z.get(a.planIdFromItems);
                if (null == e) {
                    v.info('Plan not fetched for plan id: '.concat(a.planIdFromItems));
                    return;
                }
                let s = (0, h.DE)(e, null == E ? void 0 : E.id, !1),
                    t = s.length > 0 ? s[0] : a.currency,
                    n = !1;
                1 === s.length && (null == E ? void 0 : E.id) === a.paymentSourceId && (0, h.tD)(e.id, t, null == E ? void 0 : E.id) && (n = !0),
                    n
                        ? d.O5(a, V)
                        : (0, T.Z)({
                              initialPlanId: a.planIdFromItems,
                              analyticsLocations: V,
                              analyticsLocation: y,
                              analyticsObject: j,
                              subscription: a
                          });
            }
        },
        $ = () => {
            if (!B.includes(a.status) || null == a.pauseEndsAt) {
                (0, m.q2)(Error('Invalid subscription to resume'), {
                    extra: {
                        subscriptionId: a.id,
                        status: a.status,
                        pauseEndsAt: a.pauseEndsAt
                    }
                });
                return;
            }
            a.status === P.O0b.PAUSED
                ? (0, T.Z)({
                      initialPlanId: a.planIdFromItems,
                      analyticsLocations: V,
                      analyticsLocation: y,
                      analyticsObject: j,
                      subscription: a,
                      skipConfirm: !0
                  })
                : d.v4(a, V);
        },
        ee = () => {
            if (a.status === P.O0b.PAUSED) q(f.Steps.PAUSE_SELECT);
        },
        es = () => {
            q(f.Steps.WHAT_YOU_LOSE);
        },
        et = g.ZP.getPlanIdFromInvoice(a, r);
    if ((0, S.Q0)(et)) return null;
    let en = g.ZP.getStatusFromInvoice(a, r),
        ea = g.ZP.getPremiumType(et),
        ei = {
            [Z.tier0]: ea === L.p9.TIER_0,
            [Z.tier1]: ea === L.p9.TIER_1,
            [Z.tier2]: ea === L.p9.TIER_2,
            [Z.canceled]: en === P.O0b.CANCELED,
            [Z.pausePending]: en === P.O0b.PAUSE_PENDING,
            [Z.paused]: en === P.O0b.PAUSED,
            [Z.failedPayment]: (0, g.zV)(en)
        },
        er = null;
    switch (ea) {
        case L.p9.TIER_0:
            er = (0, n.jsxs)('div', {
                className: Z.wordMark,
                children: [
                    (0, n.jsx)(C.Z, {
                        className: Z.discordWordmark,
                        'aria-label': b.Z.Messages.PREMIUM_TIER_0
                    }),
                    (0, n.jsx)('div', { className: Z.basicWordmark })
                ]
            });
            break;
        case L.p9.TIER_1:
            er = (0, n.jsx)(F, {});
            break;
        case L.p9.TIER_2:
            er = (0, n.jsx)(A.Z, {
                className: Z.planName,
                'aria-label': b.Z.Messages.PREMIUM_TITLE
            });
    }
    let eo = B.includes(a.status) ? G : U;
    return (0, n.jsx)(eo, {
        wordMark: er,
        subscriptionInfo: ((e) => {
            o()(null != r, 'Expected renewalInvoicePreview');
            let s = g.ZP.getReverseTrialWeeks(a.trialId);
            return (0, n.jsx)('div', {
                className: Z.planInfo,
                children: K
                    ? b.Z.Messages.REVERSE_TRIAL_SUBSCRIBER_MANAGEMENT_SUBHEADER.format({ weeks: s })
                    : (0, g.qV)({
                          planId: e,
                          subscription: a,
                          renewalInvoicePreview: r,
                          hasDiscountApplied: H,
                          activeDiscountInfo: W
                      })
            });
        })(et),
        buttons: (() => {
            let { status: e } = a;
            if (a.isPurchasedExternally) {
                let e = (0, g.JE)(a.paymentGateway, 'SUBSCRIPTION_MANAGEMENT');
                return (0, n.jsx)(c.Anchor, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, n.jsx)(c.Button, {
                        className: i()(Z.toolsButton, Z.externalButton),
                        size: c.Button.Sizes.SMALL,
                        look: c.ButtonLooks.OUTLINED,
                        color: c.ButtonColors.WHITE,
                        submitting: D,
                        children: b.Z.Messages.BILLING_MANAGE_SUBSCRIPTION
                    })
                });
            }
            if (g.ZP.isBaseSubscriptionCanceled(a))
                return (0, n.jsx)(c.Button, {
                    className: Z.toolsButton,
                    size: c.Button.Sizes.SMALL,
                    color: c.ButtonColors.BRAND_INVERTED,
                    submitting: D,
                    onClick: J,
                    children: b.Z.Messages.RESUBSCRIBE
                });
            switch (e) {
                case P.O0b.BILLING_RETRY:
                    return (0, n.jsx)(c.Button, {
                        className: Z.billingRetryCancel,
                        size: c.Button.Sizes.SMALL,
                        color: c.ButtonColors.CUSTOM,
                        submitting: D,
                        onClick: X,
                        children: b.Z.Messages.CANCEL
                    });
                case P.O0b.PAUSE_PENDING:
                    return (0, n.jsxs)('div', {
                        className: Z.toolsButtons,
                        children: [
                            (0, n.jsx)(c.Button, {
                                className: Z.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                look: c.ButtonLooks.LINK,
                                color: c.ButtonColors.WHITE,
                                submitting: D,
                                onClick: Q,
                                children: b.Z.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
                            }),
                            (0, n.jsx)(c.Button, {
                                className: Z.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                color: c.ButtonColors.BRAND_INVERTED,
                                submitting: D,
                                onClick: $,
                                children: b.Z.Messages.CANCEL_PAUSE
                            })
                        ]
                    });
                case P.O0b.PAUSED:
                    let { durations: s } = (0, O.AT)(a);
                    return (0, n.jsxs)('div', {
                        className: Z.toolsButtons,
                        children: [
                            s.length > 0
                                ? (0, n.jsx)(c.Button, {
                                      className: Z.linkButton,
                                      size: c.Button.Sizes.SMALL,
                                      look: c.ButtonLooks.LINK,
                                      color: c.ButtonColors.WHITE,
                                      submitting: D,
                                      onClick: ee,
                                      children: b.Z.Messages.PREMIUM_CANCEL_OR_EXTEND_PAUSE_SUBSCRIPTION
                                  })
                                : (0, n.jsx)(c.Button, {
                                      className: Z.linkButton,
                                      size: c.Button.Sizes.SMALL,
                                      look: c.ButtonLooks.LINK,
                                      color: c.ButtonColors.WHITE,
                                      submitting: D,
                                      onClick: es,
                                      children: b.Z.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
                                  }),
                            (0, n.jsx)(c.Button, {
                                className: Z.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                color: c.ButtonColors.BRAND_INVERTED,
                                submitting: D,
                                onClick: $,
                                children: b.Z.Messages.RESUME
                            })
                        ]
                    });
                case P.O0b.ACTIVE:
                case P.O0b.PAST_DUE:
                    let t = g.ZP.isSwitchingPlansDisabled(a),
                        r = g.ZP.getSwitchingPlansDisabledMessage(a);
                    return (0, n.jsxs)('div', {
                        className: Z.toolsButtons,
                        children: [
                            Y
                                ? (0, n.jsx)(c.Button, {
                                      className: Z.toolsButton,
                                      size: c.Button.Sizes.SMALL,
                                      look: c.ButtonLooks.LINK,
                                      color: c.ButtonColors.WHITE,
                                      submitting: D,
                                      onClick: z,
                                      children: b.Z.Messages.PREMIUM_PAUSE_OR_CANCEL_SUBSCRIPTION
                                  })
                                : (0, n.jsx)(c.Button, {
                                      className: Z.toolsButton,
                                      size: c.Button.Sizes.SMALL,
                                      look: c.ButtonLooks.LINK,
                                      color: c.ButtonColors.WHITE,
                                      submitting: D,
                                      onClick: Q,
                                      children: b.Z.Messages.CANCEL
                                  }),
                            (0, n.jsx)(c.Tooltip, {
                                text: r,
                                children: (e) =>
                                    (0, n.jsx)(M.Z, {
                                        ...e,
                                        disabled: t,
                                        className: Z.toolsButton,
                                        onClick: () => {
                                            (0, T.Z)({
                                                analyticsLocations: V,
                                                analyticsLocation: y,
                                                analyticsObject: j,
                                                subscription: a
                                            });
                                        },
                                        children: b.Z.Messages.PREMIUM_SWITCH_PLANS
                                    })
                            })
                        ]
                    });
            }
        })(),
        statusClasses: ei,
        shouldUseDiscountMarketing: H,
        discountAmount: w
    });
};
