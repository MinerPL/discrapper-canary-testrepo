a.d(n, {
    HE: function () {
        return R;
    },
    Ji: function () {
        return p;
    },
    KU: function () {
        return M;
    },
    PO: function () {
        return T;
    },
    R$: function () {
        return N;
    },
    i$: function () {
        return P;
    },
    q9: function () {
        return A;
    }
});
var t = a(735250);
a(470079);
var s = a(120356), r = a.n(s), l = a(442837), i = a(481060), o = a(911969), c = a(706454), u = a(937615), d = a(104494), _ = a(474936), I = a(689938), E = a(188157);
function T(e) {
    let {
        children: n,
        className: a
    } = e;
    return (0, t.jsx)('div', {
        className: r()(E.table, a),
        children: n
    });
}
function A(e) {
    let {children: n} = e;
    return (0, t.jsx)('div', {
        className: E.header,
        children: n
    });
}
function N(e) {
    let {
        label: n,
        value: a,
        className: s
    } = e;
    return (0, t.jsxs)('div', {
        className: r()(E.row, s),
        children: [
            (0, t.jsx)('div', {
                className: E.rowLabel,
                children: n
            }),
            (0, t.jsx)('div', {
                className: E.rowAmount,
                children: a
            })
        ]
    });
}
function P(e) {
    let {
            label: n,
            value: a,
            discounts: s,
            originalAmount: r,
            interval: T,
            currency: A,
            className: P,
            intervalCount: M,
            planId: p
        } = e, R = e => null != s ? s.find(n => n.type === e) : null, L = R(o.eW.SUBSCRIPTION_PLAN), f = R(o.eW.ENTITLEMENT), C = (0, d.z1)(), m = null != L && null != C && null != p && p === _.Xh.PREMIUM_YEAR_TIER_2, S = null == L || m ? null : Math.floor(L.amount / r * 100), b = (0, l.e7)([c.default], () => c.default.locale), v = () => {
            var e;
            let n = (0, u.T3)(b, _.sK[null !== (e = null == C ? void 0 : C.discount_id) && void 0 !== e ? e : 'DEFAULT']);
            return (0, t.jsx)(i.Text, {
                variant: 'eyebrow',
                color: 'always-white',
                className: E.annualPlanOptionDiscount,
                children: I.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({ discount: n })
            });
        }, g = (0, u.T4)(r, A);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(N, {
                label: n,
                value: m ? (0, t.jsx)('div', {
                    className: E.annualDiscountValues,
                    children: (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsxs)('div', {
                                className: E.annualPlanDiscountPriceSection,
                                children: [
                                    v(),
                                    a
                                ]
                            }),
                            (0, t.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                color: 'interactive-normal',
                                children: I.Z.Messages.BILLING_ANNUAL_DISCOUNT_YEARLY_PRICE_SUBTEXT.format({ regularPrice: g })
                            })
                        ]
                    })
                }) : (0, t.jsxs)(t.Fragment, {
                    children: [
                        a,
                        null != S ? (0, t.jsxs)('div', {
                            className: E.rowPercentDiscount,
                            children: [
                                '-',
                                S,
                                '%'
                            ]
                        }) : null
                    ]
                }),
                className: P
            }),
            null != S ? (0, t.jsxs)('div', {
                className: E.rowDiscountOriginalPrice,
                children: [
                    '(',
                    null != T && null != M ? (0, u.og)(g, T, M) : g,
                    ')'
                ]
            }) : null,
            null != f ? (0, t.jsx)('div', {
                className: E.entitlementDiscountRow,
                children: I.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
            }) : null
        ]
    });
}
function M(e) {
    let {
        extended: n = !1,
        negativeMarginTop: a = !1,
        negativeMarginBottom: s = !1
    } = e;
    return (0, t.jsx)('div', {
        className: r()(E.divider, {
            [E.dividerExtended]: n,
            [E.negativeMarginTop]: a,
            [E.negativeMarginBottom]: s
        })
    });
}
function p(e) {
    let {
        label: n,
        value: a,
        className: s
    } = e;
    return (0, t.jsxs)('div', {
        className: r()(E.totalRow, s),
        children: [
            (0, t.jsx)('div', {
                className: E.totalLabel,
                children: n
            }),
            (0, t.jsx)('div', {
                className: E.totalAmount,
                children: a
            })
        ]
    });
}
function R(e) {
    let {
        children: n,
        className: a
    } = e;
    return (0, t.jsx)('div', {
        className: r()(E.finePrint, a),
        children: n
    });
}
