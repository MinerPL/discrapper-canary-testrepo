t.d(n, {
    As: function () {
        return g;
    },
    By: function () {
        return Z;
    },
    Lu: function () {
        return x;
    },
    e9: function () {
        return Y;
    },
    hG: function () {
        return D;
    },
    nd: function () {
        return y;
    },
    yT: function () {
        return H;
    }
}),
    t(411104),
    t(724458),
    t(47120);
var s = t(735250),
    r = t(470079),
    i = t(120356),
    l = t.n(i),
    a = t(512722),
    c = t.n(a),
    o = t(442837),
    u = t(481060),
    I = t(911969),
    _ = t(100527),
    E = t(906732),
    T = t(509545),
    d = t(259580),
    N = t(63063),
    M = t(74538),
    A = t(937615),
    L = t(374649),
    P = t(591548),
    R = t(639119),
    m = t(653798),
    S = t(585602),
    U = t(474936),
    p = t(981631),
    O = t(689938),
    v = t(104125);
let C = (e, n) => {
        var t;
        return !!(null === (t = e.discounts) || void 0 === t ? void 0 : t.some((e) => e.type === n));
    },
    h = (e, n) => {
        var t, s, r;
        return e.subscriptionPlanPrice - (null !== (r = null === (s = e.discounts) || void 0 === s ? void 0 : null === (t = s.find((e) => e.type === n)) || void 0 === t ? void 0 : t.amount) && void 0 !== r ? r : 0);
    };
function f(e) {
    var n;
    let { invoiceItem: t, overrideAmount: r, showGuildSubscriptionAdjustmentTooltip: i, currency: l, className: a, isPrepaidPaymentSource: _, referralTrialOfferId: E, inTrialPeriod: d } = e,
        N = (0, o.e7)([T.Z], () => T.Z.get(t.subscriptionPlanId)),
        L = null === (n = (0, R.N)(E)) || void 0 === n ? void 0 : n.subscription_trial;
    c()(null != N, 'Missing subscriptionPlan');
    let P = (function (e, n, t, s) {
        let r = C(e, I.eW.PREMIUM_TRIAL);
        switch (e.subscriptionPlanId) {
            case U.Xh.PREMIUM_MONTH_LEGACY:
            case U.Xh.PREMIUM_YEAR_LEGACY:
            case U.Xh.PREMIUM_MONTH_TIER_0:
            case U.Xh.PREMIUM_YEAR_TIER_0:
            case U.Xh.PREMIUM_MONTH_TIER_1:
            case U.Xh.PREMIUM_YEAR_TIER_1:
            case U.Xh.PREMIUM_MONTH_TIER_2:
            case U.Xh.PREMIUM_YEAR_TIER_2:
            case U.Xh.PREMIUM_3_MONTH_TIER_2:
            case U.Xh.PREMIUM_6_MONTH_TIER_2:
                return (0, M.Gf)(e.subscriptionPlanId, r, t, s);
            case U.Xh.PREMIUM_3_MONTH_GUILD:
            case U.Xh.PREMIUM_6_MONTH_GUILD:
                return O.Z.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
                    num: e.quantity,
                    intervalCount: n.intervalCount
                });
            case U.Xh.PREMIUM_MONTH_GUILD:
                return O.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({ num: e.quantity });
            case U.Xh.PREMIUM_YEAR_GUILD:
                return O.Z.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({ num: e.quantity });
        }
        switch (n.interval) {
            case U.rV.MONTH:
                if (1 === n.intervalCount) return O.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({ planName: n.name });
                return O.Z.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                    planName: n.name,
                    intervalCount: n.intervalCount
                });
            case U.rV.YEAR:
                return O.Z.Messages.YEARLY_GUILD_SUBSCRIPTION.format({ planName: n.name });
        }
        throw Error('Unexpected invoice plan: '.concat(e.subscriptionPlanId));
    })(
        t,
        N,
        _,
        (0, M.if)({
            intervalType: null == L ? void 0 : L.interval,
            intervalCount: null == L ? void 0 : L.interval_count
        })
    );
    !0 === i &&
        (P = (0, s.jsxs)('div', {
            className: v.invoiceItemLabelWithIcon,
            children: [
                (0, s.jsxs)('div', {
                    children: [P, ' ']
                }),
                (0, s.jsx)(u.Tooltip, {
                    text: O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                    'aria-label': O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                    tooltipClassName: v.invoiceItemTooltip,
                    children: (e) =>
                        (0, s.jsx)(u.CircleQuestionIcon, {
                            size: 'md',
                            color: 'currentColor',
                            ...e,
                            className: v.invoiceItemLabelIcon
                        })
                })
            ]
        }));
    let S = (0, A.T4)(null != r ? r : t.amount, l),
        p = _ ? S : (0, A.og)(S, N.interval, N.intervalCount);
    return (0, s.jsx)(m.i$, {
        label: P,
        value: p,
        originalAmount: t.subscriptionPlanPrice * t.quantity,
        discounts: t.discounts,
        interval: N.interval,
        intervalCount: N.intervalCount,
        currency: l,
        className: a,
        inTrialPeriod: d
    });
}
function g(e) {
    let { label: n, tooltipText: t, tooltipAriaLabel: r } = e;
    return (0, s.jsxs)('div', {
        className: v.invoiceItemLabelWithIcon,
        children: [
            n,
            (0, s.jsx)(u.Tooltip, {
                clickableOnMobile: !0,
                text: t,
                'aria-label': r,
                tooltipClassName: v.invoiceItemTooltip,
                children: (e) =>
                    (0, s.jsx)(u.CircleQuestionIcon, {
                        size: 'md',
                        color: 'currentColor',
                        ...e,
                        className: v.invoiceItemLabelIcon
                    })
            })
        ]
    });
}
function Z(e) {
    let { invoice: n, isPrepaidPaymentSource: t } = e,
        r = (0, P.j)(n.invoiceItems),
        i = r.find((e) => !(0, M.Z8)(e.subscriptionPlanId) && e.amount >= 0),
        l = r.find((e) => (0, M.Z8)(e.subscriptionPlanId) && e.amount >= 0),
        a = (0, o.e7)([T.Z], () => (null != l ? T.Z.get(l.subscriptionPlanId) : null)),
        c = null != l ? l.amount : 0,
        u = (0, A.T4)(c, n.currency),
        I = null != a ? (0, A.og)(u, a.interval, a.intervalCount) : 0;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != i
                ? (0, s.jsx)(f, {
                      invoiceItem: i,
                      currency: n.currency,
                      isPrepaidPaymentSource: t
                  })
                : null,
            0 !== c && null != l && null != a
                ? (0, s.jsx)(m.R$, {
                      label: O.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                          numGuildSubscriptions: l.quantity,
                          planName: (0, M.Gf)(a.id, !1, t)
                      }),
                      value: t ? u : I
                  })
                : null,
            (0, s.jsx)(S.Z, { invoice: n }),
            (0, s.jsx)(m.KU, {}),
            (0, s.jsx)(m.Ji, {
                label: (n.taxInclusive ? (t ? O.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE) : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                value: n.currency === p.pKx.USD ? (0, A.T4)(n.total, n.currency) : ''.concat((0, A.T4)(n.total, n.currency), '*')
            })
        ]
    });
}
function x(e) {
    let { invoice: n, newPlan: t, isPrepaidPaymentSource: r, referralTrialOfferId: i } = e,
        l = (0, P.j)(n.invoiceItems),
        a = l.find((e) => e.subscriptionPlanId === t.id);
    c()(null != a, 'Expected newPlanInvoiceItem');
    let o = l.find((e) => !(0, M.Z8)(e.subscriptionPlanId) && e.amount < 0),
        u = l.find((e) => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find((e) => e.type === I.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
        _ = C(a, I.eW.PREMIUM_TRIAL),
        E = h(a, I.eW.SUBSCRIPTION_PLAN),
        T = a.quantity * E,
        d = a.amount + (null != o ? o.amount : 0) - T + (null != u ? u.amount : 0),
        N = l.filter((e) => e.subscriptionPlanId === U.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === U.Xh.PREMIUM_YEAR_GUILD).reduce((e, n) => e + n.amount, 0);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(f, {
                invoiceItem: a,
                currency: n.currency,
                overrideAmount: T,
                isPrepaidPaymentSource: r,
                referralTrialOfferId: i
            }),
            0 === d || _
                ? null
                : (0, s.jsx)(m.R$, {
                      label: (0, s.jsx)(g, {
                          label: O.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({ planName: (0, M.PV)(t.id) ? (0, M.aq)(t.id) : t.name }),
                          tooltipText: O.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                      }),
                      value: (0, A.T4)(d, n.currency)
                  }),
            0 !== N
                ? (0, s.jsx)(m.R$, {
                      label: (0, s.jsx)(g, {
                          label: O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                          tooltipText: O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                          tooltipAriaLabel: O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
                      }),
                      value: (0, A.T4)(N, n.currency)
                  })
                : null,
            (0, s.jsx)(S.Z, { invoice: n }),
            (0, s.jsx)(m.KU, {}),
            (0, s.jsx)(m.Ji, {
                label: (n.taxInclusive ? (r ? O.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE) : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                value: n.currency === p.pKx.USD ? (0, A.T4)(n.total, n.currency) : ''.concat((0, A.T4)(n.total, n.currency), '*')
            })
        ]
    });
}
function B(e) {
    let n = e.slice();
    return (
        n.sort((e, n) => {
            let t = (0, M.uZ)(e.subscriptionPlanId),
                s = (0, M.uZ)(n.subscriptionPlanId);
            return t && !s ? -1 : !t && s ? 1 : 0;
        }),
        n
    );
}
function b(e) {
    return e.filter((e) => {
        let { subscriptionPlanId: n } = e;
        return n !== U.Xh.NONE_MONTH && n !== U.Xh.NONE_YEAR;
    });
}
function D(e) {
    let { proratedInvoice: n, renewalInvoice: t } = e,
        { intervalType: r, intervalCount: i } = (0, M.dn)(n),
        { intervalType: l, intervalCount: a } = (0, M.dn)(t);
    return r !== l || i !== a || n.subscriptionPeriodEnd.getTime() === t.subscriptionPeriodStart.getTime()
        ? null
        : (0, s.jsx)('div', {
              className: v.subscriptionPeriodResetNotice,
              children: O.Z.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({ renewalDate: n.subscriptionPeriodEnd })
          });
}
function G(e) {
    let { isUpdate: n, currentInvoice: t, newInvoice: r, inTrialPeriod: i } = e,
        a = null != t ? (0, P.j)(t.invoiceItems) : null,
        c = null != t ? (0, M.dn)(t) : null,
        { intervalType: o, intervalCount: u } = (0, M.dn)(r),
        I = null != c && (c.intervalType !== o || c.intervalCount !== u);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(m.KU, { extended: !0 }),
            null != t
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(m.q9, { children: O.Z.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL }),
                          b(B((0, P.j)(t.invoiceItems))).map((e) =>
                              (0, s.jsx)(
                                  f,
                                  {
                                      invoiceItem: e,
                                      currency: t.currency,
                                      inTrialPeriod: i
                                  },
                                  e.id
                              )
                          ),
                          (0, s.jsx)(m.KU, { extended: !0 })
                      ]
                  })
                : null,
            (0, s.jsx)(m.q9, { children: O.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL }),
            b(B((0, P.j)(r.invoiceItems))).map((e) => {
                let t = null != a && !a.some((n) => n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity);
                return (0, s.jsx)(
                    f,
                    {
                        invoiceItem: e,
                        currency: r.currency,
                        showGuildSubscriptionAdjustmentTooltip: I && (e.subscriptionPlanId === U.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === U.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === U.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === U.Xh.PREMIUM_6_MONTH_GUILD),
                        className: l()({ [v.subscriptionAddedInvoiceItem]: !n || t })
                    },
                    e.id
                );
            }),
            (0, s.jsx)(S.Z, { invoice: r }),
            (0, s.jsx)(m.KU, {}),
            (0, s.jsx)(m.R$, {
                label: O.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
                value: (0, A.og)((0, A.T4)(r.total, r.currency), o, u),
                className: v.subscriptionCostRow
            })
        ]
    });
}
function j(e) {
    var n;
    let { proratedInvoice: t, renewalInvoice: r, isTrial: i, isUpdate: l, overrideRenewalDate: a, trialFooterMessageOverride: c } = e,
        o = null === (n = (0, R.N)()) || void 0 === n ? void 0 : n.subscription_trial,
        { intervalType: u, intervalCount: I } = (0, M.dn)(r);
    if (null == t) return null;
    if (i) {
        let e = (0, M.if)({
                intervalType: null == o ? void 0 : o.interval,
                intervalCount: null == o ? void 0 : o.interval_count
            }),
            n = (null == o ? void 0 : o.interval) === U.rV.DAY && (null == o ? void 0 : o.interval_count) < 28 ? 2 : 7;
        return (0, s.jsx)(s.Fragment, {
            children:
                null != c
                    ? c
                    : O.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
                          duration: e,
                          days: n,
                          contactLink: p.EYA.CONTACT,
                          helpdeskArticle: N.Z.getArticleURL(p.BhN.PREMIUM_TRIAL)
                      })
        });
    }
    let _ = r.taxInclusive ? O.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : O.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
    return (0, s.jsx)(s.Fragment, {
        children: _.format({
            rate: (0, A.og)((0, A.T4)(r.subtotal, r.currency), u, I),
            renewalDate: null != a ? a : l ? (null != t ? t.subscriptionPeriodEnd : r.subscriptionPeriodStart) : r.subscriptionPeriodEnd,
            contactLink: p.EYA.CONTACT,
            helpdeskArticle: N.Z.getArticleURL(p.BhN.BILLING)
        })
    });
}
function y(e) {
    let { premiumSubscription: n, proratedInvoice: t, renewalInvoice: i, overrideRenewalDate: l, isUpdate: a = !1, isTrial: c = !1, priceOptions: o, isPrepaidPaymentSource: I = !1, trialFooterMessageOverride: T, hideSubscriptionDetails: N = !1 } = e,
        { analyticsLocations: M } = (0, E.ZP)(),
        A = {
            subscriptionId: null == n ? void 0 : n.id,
            renewal: !0,
            preventFetch: !a,
            analyticsLocatinons: M,
            analyticsLocation: _.Z.SUBSCRIPTION_INVOICE_FOOTER,
            ...o
        },
        [P] = (0, L.ED)(A),
        [R, S] = r.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            I
                ? null
                : (0, s.jsx)(m.HE, {
                      children: (0, s.jsx)(j, {
                          proratedInvoice: t,
                          renewalInvoice: i,
                          isTrial: c,
                          isUpdate: a,
                          overrideRenewalDate: l,
                          trialFooterMessageOverride: T
                      })
                  }),
            !N &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Clickable, {
                            onClick: () => S((e) => !e),
                            className: v.subscriptionDetailsToggle,
                            children: [
                                R ? O.Z.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : O.Z.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS,
                                (0, s.jsx)(d.Z, {
                                    direction: R ? d.Z.Directions.UP : d.Z.Directions.DOWN,
                                    className: v.subscriptionDetailsToggleCaret
                                })
                            ]
                        }),
                        R
                            ? (0, s.jsx)(G, {
                                  isUpdate: a,
                                  currentInvoice: P,
                                  newInvoice: i,
                                  inTrialPeriod: c
                              })
                            : null
                    ]
                })
        ]
    });
}
function Y(e) {
    let n,
        { plan: t, className: r, isPrepaidPaymentSource: i = !1, isCustomGift: l = !1, invoicePreview: a } = e,
        { tax: c, taxInclusive: o, currency: I } = a,
        _ = a.total,
        E = _ - c,
        T = (0, A.T4)(E, I),
        d = (0, A.T4)(_, I);
    return (
        (n = l ? (0, M.L7)(t.interval, !0, void 0, void 0, !0, (0, M.Rd)(t.id)) : O.Z.Messages.BILLING_INVOICE_GIFT_PLAN.format({ planName: (0, M.Gf)(t.id, !1, i) })),
        (0, s.jsxs)('div', {
            className: r,
            children: [
                (0, s.jsx)(u.FormTitle, { children: O.Z.Messages.PREMIUM_GIFTING_BUTTON }),
                c >= 0 && !1 === o
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(u.Text, {
                                  variant: 'text-md/bold',
                                  className: v.purchaseDetailsHeaderText,
                                  children: n
                              }),
                              (0, s.jsxs)(m.PO, {
                                  className: r,
                                  children: [
                                      (0, s.jsx)(m.q9, { children: O.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL }),
                                      (0, s.jsx)(m.R$, {
                                          label: n,
                                          value: T
                                      }),
                                      (0, s.jsx)(S.Z, { invoice: a }),
                                      (0, s.jsx)(m.KU, {}),
                                      (0, s.jsx)(m.R$, {
                                          label: O.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                          value: d,
                                          className: v.subscriptionCostRow
                                      })
                                  ]
                              })
                          ]
                      })
                    : (0, s.jsx)(u.Heading, {
                          variant: 'text-md/normal',
                          children: ''.concat(n, ' - ').concat(d)
                      })
            ]
        })
    );
}
function H(e) {
    let n,
        { invoice: t, plan: r } = e,
        i = (0, P.j)(t.invoiceItems).find((e) => e.subscriptionPlanId === r.id);
    return (
        c()(null != i, 'newPlanInvoiceItem can not be null'),
        r.interval === U.rV.MONTH ? (n = t.taxInclusive ? O.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL : O.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE) : r.interval === U.rV.YEAR ? (n = t.taxInclusive ? O.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : O.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE) : c()(!1, 'Invalid interval type'),
        (0, s.jsx)(u.Text, {
            variant: 'text-md/normal',
            children: n.format({ price: (0, A.T4)(i.subscriptionPlanPrice, t.currency) })
        })
    );
}
