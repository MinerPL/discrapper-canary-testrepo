n.d(t, {
    R: function () {
        return U;
    }
}),
    n(411104);
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(366939),
    u = n(100527),
    m = n(906732),
    h = n(975298),
    g = n(710845),
    p = n(963249),
    x = n(301766),
    S = n(509545),
    T = n(78839),
    C = n(931331),
    _ = n(754347),
    E = n(122289),
    f = n(74538),
    I = n(212895),
    N = n(296848),
    A = n(140465),
    b = n(879463),
    v = n(104494),
    j = n(987997),
    O = n(833569),
    R = n(823188),
    P = n(474936),
    D = n(981631),
    y = n(388032),
    B = n(353740);
let L = new g.Z('SubscriptionHeader.tsx'),
    Z = {
        page: D.ZY5.USER_SETTINGS,
        section: D.jXE.SETTINGS_PREMIUM,
        object: D.qAy.CARD
    },
    F = [D.O0b.PAUSED, D.O0b.PAUSE_PENDING, D.O0b.BILLING_RETRY];
function M(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: s, statusClasses: l, shouldUseDiscountMarketing: a, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: r()(B.banner, l),
        children: [
            (0, i.jsx)('div', { className: B.bannerBackgroundImage }),
            (0, i.jsxs)('div', {
                className: B.detailsContainer,
                children: [
                    (0, i.jsx)('div', { className: B.image }),
                    (0, i.jsxs)('div', {
                        className: B.details,
                        children: [
                            (0, i.jsxs)('div', {
                                className: B.headerLabel,
                                children: [
                                    t,
                                    a &&
                                        null != o &&
                                        (0, i.jsx)(R.Cy, {
                                            text: y.intl.formatToPlainString(y.t.iiLbvr, { percent: o }),
                                            className: B.discountPill,
                                            colorOptions: R.VE.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1
                                        })
                                ]
                            }),
                            n
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: B.buttons,
                children: s
            })
        ]
    });
}
function k(e) {
    let { wordMark: t, subscriptionInfo: n, buttons: s, statusClasses: l, shouldUseDiscountMarketing: a, discountAmount: o } = e;
    return (0, i.jsxs)('div', {
        className: r()(B.banner, l, B.repositioned),
        children: [
            (0, i.jsx)('div', { className: B.bannerBackgroundImage }),
            (0, i.jsx)('div', {
                className: B.detailsContainer,
                children: (0, i.jsx)('div', {
                    className: B.details,
                    children: (0, i.jsxs)('div', {
                        className: B.headerLabel,
                        children: [
                            (0, i.jsx)('div', { className: B.image }),
                            (0, i.jsxs)('div', {
                                className: B.headerColumnB,
                                children: [
                                    t,
                                    a &&
                                        null != o &&
                                        (0, i.jsx)(R.Cy, {
                                            text: y.intl.formatToPlainString(y.t.iiLbvr, { percent: o }),
                                            className: B.discountPill,
                                            colorOptions: R.VE.PREMIUM_TIER_2_WHITE_FILL,
                                            isPillOnBorder: !1
                                        }),
                                    n
                                ]
                            })
                        ]
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: B.buttons,
                children: s
            })
        ]
    });
}
function w() {
    return (0, i.jsxs)('div', {
        className: B.wordMark,
        children: [
            (0, i.jsx)(_.Z, {
                className: B.discordWordmark,
                'aria-label': y.intl.string(y.t['FSOz7+'])
            }),
            (0, i.jsx)('div', { className: B.classicWordmark })
        ]
    });
}
function U() {
    let { analyticsLocations: e } = (0, m.ZP)(u.Z.ACCOUNT_CREDIT_BANNER);
    return (0, i.jsx)(M, {
        wordMark: (0, i.jsx)(w, {}),
        subscriptionInfo: (0, i.jsx)('div', {
            className: B.planInfo,
            children: y.intl.string(y.t.R0GJLy)
        }),
        buttons: (0, i.jsx)(j.Z, {
            className: B.toolsButton,
            onClick: () =>
                (0, p.Z)({
                    subscriptionTier: P.Si.TIER_1,
                    analyticsLocations: e,
                    analyticsObject: Z
                }),
            children: y.intl.string(y.t['/ygMUV'])
        }),
        statusClasses: { [B.tier1]: !0 }
    });
}
t.Z = function (e) {
    var t;
    let { subscription: s, renewalInvoicePreview: l, paymentSource: g, busy: R, analyticsLocation: U } = e,
        { analyticsLocations: V } = (0, m.ZP)(u.Z.SUBSCRIPTION_HEADER),
        { fractionalState: G } = (0, h.Z)({ forceFetch: !1 }),
        Y = G === P.a$.FP_SUB,
        { enabled: H } = (0, b.ZP)({ location: 'subscription_header' });
    (!P.pj.has(s.planId) || !D.JwP.ALL_PAUSEABLE.has(s.status) || Y) && (H = !1);
    let z = (0, v.Ng)(),
        W = null == z ? void 0 : null === (t = z.discount) || void 0 === t ? void 0 : t.amount,
        K = (0, A.t7)(),
        q = (0, A.lr)(),
        Q = (0, o.e7)([T.ZP], () => T.ZP.inReverseTrial()),
        X = () => {
            if (s.status === D.O0b.ACTIVE || s.status === D.O0b.PAST_DUE || s.status === D.O0b.PAUSED) ee(O.Steps.PAUSE_SELECT);
        },
        J = () => {
            if (s.status === D.O0b.ACTIVE || s.status === D.O0b.PAST_DUE || s.status === D.O0b.PAUSE_PENDING || !!Y) ee();
        },
        $ = () => {
            if (s.status === D.O0b.BILLING_RETRY) ee(O.Steps.CONFIRM);
        },
        ee = (e) => {
            (0, c.openModalLazy)(async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 833569));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        premiumSubscription: s,
                        analyticsLocation: U,
                        analyticsLocations: V,
                        initialStep: e
                    });
            });
        },
        et = () => {
            if (null != s && null != s.planIdFromItems) {
                let e = S.Z.get(s.planIdFromItems);
                if (null == e) {
                    L.info('Plan not fetched for plan id: '.concat(s.planIdFromItems));
                    return;
                }
                let t = (0, I.DE)(e, null == g ? void 0 : g.id, !1),
                    n = t.length > 0 ? t[0] : s.currency,
                    i = !1;
                1 === t.length && (null == g ? void 0 : g.id) === s.paymentSourceId && (0, I.tD)(e.id, n, null == g ? void 0 : g.id) && (i = !0),
                    i
                        ? d.O5(s, V)
                        : (0, p.Z)({
                              initialPlanId: s.planIdFromItems,
                              analyticsLocations: V,
                              analyticsLocation: U,
                              analyticsObject: Z,
                              subscription: s
                          });
            }
        },
        en = () => {
            if (!F.includes(s.status) || null == s.pauseEndsAt) {
                (0, E.q2)(Error('Invalid subscription to resume'), {
                    extra: {
                        subscriptionId: s.id,
                        status: s.status,
                        pauseEndsAt: s.pauseEndsAt
                    }
                });
                return;
            }
            s.status === D.O0b.PAUSED
                ? (0, p.Z)({
                      initialPlanId: s.planIdFromItems,
                      analyticsLocations: V,
                      analyticsLocation: U,
                      analyticsObject: Z,
                      subscription: s,
                      skipConfirm: !0
                  })
                : d.v4(s, V);
        },
        ei = () => {
            if (s.status === D.O0b.PAUSED) ee(O.Steps.PAUSE_SELECT);
        },
        es = () => {
            ee(O.Steps.WHAT_YOU_LOSE);
        },
        er = f.ZP.getPlanIdFromInvoice(s, l);
    if ((0, x.Q0)(er)) return null;
    let el = f.ZP.getStatusFromInvoice(s, l),
        ea = f.ZP.getPremiumType(er),
        eo = {
            [B.tier0]: ea === P.p9.TIER_0,
            [B.tier1]: ea === P.p9.TIER_1,
            [B.tier2]: ea === P.p9.TIER_2,
            [B.canceled]: el === D.O0b.CANCELED,
            [B.pausePending]: el === D.O0b.PAUSE_PENDING,
            [B.paused]: el === D.O0b.PAUSED && !Y,
            [B.failedPayment]: (0, f.zV)(el)
        },
        ec = null;
    switch (ea) {
        case P.p9.TIER_0:
            ec = (0, i.jsxs)('div', {
                className: B.wordMark,
                children: [
                    (0, i.jsx)(_.Z, {
                        className: B.discordWordmark,
                        'aria-label': y.intl.string(y.t['t9uG/v'])
                    }),
                    (0, i.jsx)('div', { className: B.basicWordmark })
                ]
            });
            break;
        case P.p9.TIER_1:
            ec = (0, i.jsx)(w, {});
            break;
        case P.p9.TIER_2:
            ec = (0, i.jsx)(C.Z, {
                className: B.planName,
                'aria-label': y.intl.string(y.t.lpNrPj)
            });
    }
    let ed = F.includes(s.status) && !Y ? k : M;
    return (0, i.jsx)(ed, {
        wordMark: ec,
        subscriptionInfo: ((e) => {
            a()(null != l, 'Expected renewalInvoicePreview');
            let t = f.ZP.getReverseTrialWeeks(s.trialId);
            return (0, i.jsx)('div', {
                className: B.planInfo,
                children: Q
                    ? y.intl.format(y.t.jLglur, { weeks: t })
                    : (0, f.qV)({
                          planId: e,
                          subscription: s,
                          renewalInvoicePreview: l,
                          hasDiscountApplied: K,
                          activeDiscountInfo: q,
                          hasFractionalPremiumWithSub: Y
                      })
            });
        })(er),
        buttons: (() => {
            let { status: e } = s;
            if (s.isPurchasedExternally) {
                let e = (0, f.JE)(s.paymentGateway, 'SUBSCRIPTION_MANAGEMENT');
                return (0, i.jsx)(c.Anchor, {
                    href: e,
                    useDefaultUnderlineStyles: !1,
                    children: (0, i.jsx)(c.Button, {
                        className: r()(B.toolsButton, B.externalButton),
                        size: c.Button.Sizes.SMALL,
                        look: c.ButtonLooks.OUTLINED,
                        color: c.ButtonColors.WHITE,
                        submitting: R,
                        children: y.intl.string(y.t.obRG6e)
                    })
                });
            }
            function t() {
                let e = f.ZP.isSwitchingPlansDisabled(s, G),
                    t = f.ZP.getSwitchingPlansDisabledMessage(s);
                return (0, i.jsxs)('div', {
                    className: B.toolsButtons,
                    children: [
                        H
                            ? (0, i.jsx)(c.Button, {
                                  className: B.toolsButton,
                                  size: c.Button.Sizes.SMALL,
                                  look: c.ButtonLooks.LINK,
                                  color: c.ButtonColors.WHITE,
                                  submitting: R,
                                  onClick: X,
                                  children: y.intl.string(y.t.eFlYVF)
                              })
                            : (0, i.jsx)(c.Button, {
                                  className: B.toolsButton,
                                  size: c.Button.Sizes.SMALL,
                                  look: c.ButtonLooks.LINK,
                                  color: c.ButtonColors.WHITE,
                                  submitting: R,
                                  onClick: J,
                                  children: y.intl.string(y.t['ETE/oK'])
                              }),
                        (0, i.jsx)(c.Tooltip, {
                            text: t,
                            children: (t) =>
                                (0, i.jsx)(j.Z, {
                                    ...t,
                                    disabled: e,
                                    className: B.toolsButton,
                                    onClick: () => {
                                        (0, p.Z)({
                                            analyticsLocations: V,
                                            analyticsLocation: U,
                                            analyticsObject: Z,
                                            subscription: s
                                        });
                                    },
                                    children: y.intl.string(y.t['dylp//'])
                                })
                        })
                    ]
                });
            }
            if (f.ZP.isBaseSubscriptionCanceled(s))
                return (0, i.jsx)(c.Button, {
                    className: B.toolsButton,
                    size: c.Button.Sizes.SMALL,
                    color: c.ButtonColors.BRAND_INVERTED,
                    submitting: R,
                    onClick: et,
                    children: y.intl.string(y.t.iIvF29)
                });
            switch (e) {
                case D.O0b.BILLING_RETRY:
                    return (0, i.jsx)(c.Button, {
                        className: B.billingRetryCancel,
                        size: c.Button.Sizes.SMALL,
                        color: c.ButtonColors.CUSTOM,
                        submitting: R,
                        onClick: $,
                        children: y.intl.string(y.t['ETE/oK'])
                    });
                case D.O0b.PAUSE_PENDING:
                    return (0, i.jsxs)('div', {
                        className: B.toolsButtons,
                        children: [
                            (0, i.jsx)(c.Button, {
                                className: B.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                look: c.ButtonLooks.LINK,
                                color: c.ButtonColors.WHITE,
                                submitting: R,
                                onClick: J,
                                children: y.intl.string(y.t.cM1H0N)
                            }),
                            (0, i.jsx)(c.Button, {
                                className: B.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                color: c.ButtonColors.BRAND_INVERTED,
                                submitting: R,
                                onClick: en,
                                children: y.intl.string(y.t.TgV5QU)
                            })
                        ]
                    });
                case D.O0b.PAUSED:
                    if (Y) return t();
                    let { durations: n } = (0, N.AT)(s);
                    return (0, i.jsxs)('div', {
                        className: B.toolsButtons,
                        children: [
                            n.length > 0
                                ? (0, i.jsx)(c.Button, {
                                      className: B.linkButton,
                                      size: c.Button.Sizes.SMALL,
                                      look: c.ButtonLooks.LINK,
                                      color: c.ButtonColors.WHITE,
                                      submitting: R,
                                      onClick: ei,
                                      children: y.intl.string(y.t.jNHWt7)
                                  })
                                : (0, i.jsx)(c.Button, {
                                      className: B.linkButton,
                                      size: c.Button.Sizes.SMALL,
                                      look: c.ButtonLooks.LINK,
                                      color: c.ButtonColors.WHITE,
                                      submitting: R,
                                      onClick: es,
                                      children: y.intl.string(y.t.cM1H0N)
                                  }),
                            (0, i.jsx)(c.Button, {
                                className: B.toolsButton,
                                size: c.Button.Sizes.SMALL,
                                color: c.ButtonColors.BRAND_INVERTED,
                                submitting: R,
                                onClick: en,
                                children: y.intl.string(y.t.zpi5pq)
                            })
                        ]
                    });
                case D.O0b.ACTIVE:
                case D.O0b.PAST_DUE:
                    return t();
            }
        })(),
        statusClasses: eo,
        shouldUseDiscountMarketing: K,
        discountAmount: W
    });
};
