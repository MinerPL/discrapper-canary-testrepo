s.d(n, {
    Z: function () {
        return P;
    }
});
var l = s(735250);
s(470079);
var i = s(120356), t = s.n(i), r = s(512722), a = s.n(r), c = s(442837), o = s(692547), u = s(481060), d = s(987209), _ = s(706454), m = s(509545), I = s(669079), E = s(930153), p = s(74538), N = s(937615), T = s(104494), S = s(474936), x = s(689938), h = s(24812);
function P(e) {
    let {
            premiumSubscription: n,
            planId: s,
            selectPlan: i,
            selected: r,
            priceOptions: P,
            shouldShowUpdatedPaymentModal: A,
            isEligibleForDiscount: v,
            discountAmountOff: f,
            isEligibleForAnnualDiscount: M,
            annualDiscountAmountOff: g,
            isEligibleForTrial: C
        } = e, R = (0, c.e7)([_.default], () => _.default.locale), O = (0, c.e7)([m.Z], () => m.Z.get(s)), {
            isGift: L,
            giftRecipient: j
        } = (0, d.wD)(), y = L && (0, I.pO)(j);
    a()(null != O, 'Missing subscriptionPlan');
    let Z = null != n && n.planId === s, b = Z || s === S.Xh.PREMIUM_MONTH_TIER_2 && null != n && [
            S.Xh.PREMIUM_YEAR_TIER_0,
            S.Xh.PREMIUM_YEAR_TIER_1
        ].includes(n.planId), D = S.nH[s], G = (0, p.aS)(s, !1, L, P), U = (0, p.Ap)(P.paymentSourceId), F = null != D && !A, w = (0, T.Ng)(), B = (0, T.z1)(), H = M && null != g && O.interval === S.rV.YEAR, k = O.interval === S.rV.YEAR ? x.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : x.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL, W = () => null != D && (0, l.jsx)(u.Text, {
            tag: 'span',
            variant: 'eyebrow',
            color: 'always-white',
            className: h.planOptionDiscount,
            children: x.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({ discount: (0, E.T3)(R, D / 100) })
        }), Y = () => O.interval === S.rV.YEAR && null != n || F && !Z ? O.interval !== S.rV.YEAR || null == n || H ? F && !Z ? W() : void 0 : (0, l.jsxs)('span', {
            className: h.planOptionMonthsFree,
            children: [
                '(',
                x.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS,
                ')'
            ]
        }) : null;
    return (0, l.jsxs)(u.Clickable, {
        role: y ? 'menuitem' : 'radio',
        'aria-checked': r,
        tabIndex: r ? 0 : -1,
        focusProps: {
            offset: {
                left: -4,
                right: -4,
                top: 0,
                bottom: 0
            }
        },
        onClick: b ? void 0 : () => i(s),
        className: t()(h.planOptionClickableContainer, {
            [h.selectedPlan]: y && r,
            [h.selectionBox]: y
        }),
        children: [
            (0, l.jsxs)('div', {
                className: t()(h.planOption, { [h.planOptionDisabled]: b }),
                children: [
                    (0, l.jsxs)('div', {
                        className: h.planOptionClickable,
                        children: [
                            !y && (0, l.jsx)(u.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: r,
                                shape: u.Checkbox.Shapes.ROUND,
                                color: o.Z.unsafe_rawColors.BRAND_500.css,
                                type: u.Checkbox.Types.INVERTED,
                                className: h.planOptionCheckbox
                            }),
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: t()(h.planOptionInterval, {
                                            [h.optionSelected]: r || y,
                                            [h.updatedOptionSelected]: A && (r || y)
                                        }),
                                        children: [
                                            (0, p.L7)(O.interval, L, U, O.intervalCount, y, (0, p.Rd)(O.id)),
                                            y && Y()
                                        ]
                                    }),
                                    y && (0, l.jsx)('div', {
                                        className: h.planOneTimeCost,
                                        children: x.Z.Messages.ONE_TIME_CHARGE.format({ currencyAmount: (0, N.T4)(G.amount, G.currency) })
                                    })
                                ]
                            }),
                            Z && (0, l.jsxs)('span', {
                                className: h.planOptionCurrentPlan,
                                children: [
                                    '(',
                                    x.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN,
                                    ')'
                                ]
                            }),
                            !y && Y()
                        ]
                    }),
                    A ? (0, l.jsx)('div', {
                        className: t()({ [h.optionPriceSelected]: r }),
                        children: H ? (() => {
                            if (H) {
                                var e;
                                let n = (0, E.T3)(R, S.sK[null !== (e = null == B ? void 0 : B.discount_id) && void 0 !== e ? e : 'DEFAULT']);
                                return (0, l.jsxs)('div', {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'flex-end'
                                    },
                                    children: [
                                        (0, l.jsx)(u.Text, {
                                            variant: 'eyebrow',
                                            color: 'always-white',
                                            className: h.annualPlanOptionDiscount,
                                            children: x.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({ discount: n })
                                        }),
                                        x.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({ price: (0, N.T4)(G.amount - g, G.currency) })
                                    ]
                                });
                            }
                            return null;
                        })() : x.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({ price: v && null != f && O.interval === S.rV.MONTH ? (0, N.T4)(G.amount - f, G.currency) : C ? (0, N.T4)(0, G.currency, { maximumFractionDigits: 0 }) : (0, N.T4)(G.amount, G.currency) })
                    }) : (0, l.jsx)('div', {
                        className: t()({ [h.optionSelected]: r || y }),
                        children: (0, N.T4)(G.amount, G.currency)
                    })
                ]
            }),
            A && (0, l.jsx)('div', {
                className: h.planOptionSubtextContainer,
                children: (0, l.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    color: r ? 'text-normal' : 'interactive-normal',
                    className: t()(h.planOptionSubtext, { [h.discountPlanOptionSubtext]: v || M }),
                    children: (() => {
                        if (v && null != f && O.interval === S.rV.MONTH) {
                            var e;
                            return x.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format({
                                numMonths: null !== (e = null == w ? void 0 : w.discount.user_usage_limit) && void 0 !== e ? e : S.rt,
                                discountedPrice: (0, N.T4)(G.amount - f, G.currency),
                                regularPrice: (0, N.T4)(G.amount, G.currency)
                            });
                        }
                        if (M && null != g && O.interval === S.rV.YEAR)
                            return x.Z.Messages.BILLING_ANNUAL_DISCOUNT_YEARLY_PRICE_SUBTEXT.format({ regularPrice: (0, N.T4)(G.amount, G.currency) });
                        if (C)
                            return k.format({ price: (0, N.T4)(G.amount, G.currency) });
                        else
                            O.interval === S.rV.YEAR && x.Z.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({ percent: D });
                        return null;
                    })()
                })
            })
        ]
    });
}
