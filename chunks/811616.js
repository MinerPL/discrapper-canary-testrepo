t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(735250);
t(470079);
var a = t(120356),
    r = t.n(a),
    s = t(512722),
    l = t.n(s),
    o = t(442837),
    c = t(692547),
    u = t(481060),
    d = t(987209),
    _ = t(706454),
    p = t(509545),
    m = t(669079),
    I = t(930153),
    f = t(74538),
    E = t(937615),
    x = t(104494),
    N = t(474936),
    S = t(689938),
    T = t(703236);
function h(e) {
    let { premiumSubscription: n, planId: t, selectPlan: a, selected: s, priceOptions: h, shouldShowUpdatedPaymentModal: b, isEligibleForDiscount: g, discountAmountOff: P, isEligibleForTrial: v } = e,
        A = (0, o.e7)([_.default], () => _.default.locale),
        M = (0, o.e7)([p.Z], () => p.Z.get(t)),
        { isGift: C, giftRecipient: y } = (0, d.wD)(),
        R = C && (0, m.pO)(y);
    l()(null != M, 'Missing subscriptionPlan');
    let O = null != n && n.planId === t,
        L = O || (t === N.Xh.PREMIUM_MONTH_TIER_2 && null != n && [N.Xh.PREMIUM_YEAR_TIER_0, N.Xh.PREMIUM_YEAR_TIER_1].includes(n.planId)),
        j = N.nH[t],
        Z = (0, f.aS)(t, !1, C, h),
        D = (0, f.Ap)(h.paymentSourceId),
        w = null != j && !b,
        B = (0, x.Ng)(),
        G = M.interval === N.rV.YEAR ? S.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : S.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
        F = () =>
            null != j &&
            (0, i.jsx)(u.Text, {
                tag: 'span',
                variant: 'eyebrow',
                color: 'always-white',
                className: T.planOptionDiscount,
                children: S.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({ discount: (0, I.T3)(A, j / 100) })
            }),
        U = () =>
            (M.interval === N.rV.YEAR && null != n) || (w && !O)
                ? M.interval === N.rV.YEAR && null != n
                    ? (0, i.jsxs)('span', {
                          className: T.planOptionMonthsFree,
                          children: ['(', S.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ')']
                      })
                    : w && !O
                      ? F()
                      : void 0
                : null;
    return (0, i.jsxs)(u.Clickable, {
        role: R ? 'menuitem' : 'radio',
        'aria-checked': s,
        tabIndex: s ? 0 : -1,
        focusProps: {
            offset: {
                left: -4,
                right: -4,
                top: 0,
                bottom: 0
            }
        },
        onClick: L ? void 0 : () => a(t),
        className: r()(T.planOptionClickableContainer, {
            [T.selectedPlan]: R && s,
            [T.selectionBox]: R
        }),
        children: [
            (0, i.jsxs)('div', {
                className: r()(T.planOption, { [T.planOptionDisabled]: L }),
                children: [
                    (0, i.jsxs)('div', {
                        className: T.planOptionClickable,
                        children: [
                            !R &&
                                (0, i.jsx)(u.Checkbox, {
                                    readOnly: !0,
                                    displayOnly: !0,
                                    value: s,
                                    shape: u.Checkbox.Shapes.ROUND,
                                    color: c.Z.unsafe_rawColors.BRAND_500.css,
                                    type: u.Checkbox.Types.INVERTED,
                                    className: T.planOptionCheckbox
                                }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: r()(T.planOptionInterval, {
                                            [T.optionSelected]: s || R,
                                            [T.updatedOptionSelected]: b && (s || R)
                                        }),
                                        children: [(0, f.L7)(M.interval, C, D, M.intervalCount, R, (0, f.Rd)(M.id)), R && U()]
                                    }),
                                    R &&
                                        (0, i.jsx)('div', {
                                            className: T.planOneTimeCost,
                                            children: S.Z.Messages.ONE_TIME_CHARGE.format({ currencyAmount: (0, E.T4)(Z.amount, Z.currency) })
                                        })
                                ]
                            }),
                            O &&
                                (0, i.jsxs)('span', {
                                    className: T.planOptionCurrentPlan,
                                    children: ['(', S.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ')']
                                }),
                            !R && U()
                        ]
                    }),
                    b
                        ? (0, i.jsx)('div', {
                              className: r()({ [T.optionPriceSelected]: s }),
                              children: S.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                  price:
                                      g && null != P && M.interval === N.rV.MONTH
                                          ? (0, E.T4)(Z.amount - P, Z.currency)
                                          : v
                                            ? (0, E.T4)(0, Z.currency, {
                                                  minimumFractionDigits: 0,
                                                  maximumFractionDigits: 0
                                              })
                                            : (0, E.T4)(Z.amount, Z.currency)
                              })
                          })
                        : (0, i.jsx)('div', {
                              className: r()({ [T.optionSelected]: s || R }),
                              children: (0, E.T4)(Z.amount, Z.currency)
                          })
                ]
            }),
            b &&
                (0, i.jsx)('div', {
                    className: T.planOptionSubtextContainer,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-md/normal',
                        color: s ? 'text-normal' : 'interactive-normal',
                        className: r()(T.planOptionSubtext, { [T.discountPlanOptionSubtext]: g }),
                        children: (() => {
                            if (g && null != P && M.interval === N.rV.MONTH) {
                                var e;
                                return S.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format({
                                    numMonths: null !== (e = null == B ? void 0 : B.discount.user_usage_limit) && void 0 !== e ? e : N.rt,
                                    discountedPrice: (0, E.T4)(Z.amount - P, Z.currency),
                                    regularPrice: (0, E.T4)(Z.amount, Z.currency)
                                });
                            }
                            if (v) return G.format({ price: (0, E.T4)(Z.amount, Z.currency) });
                            if (M.interval === N.rV.YEAR) return S.Z.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({ percent: j });
                            return null;
                        })()
                    })
                })
        ]
    });
}
