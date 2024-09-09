t.d(n, {
    HE: function () {
        return M;
    },
    Ji: function () {
        return N;
    },
    KU: function () {
        return d;
    },
    PO: function () {
        return I;
    },
    R$: function () {
        return E;
    },
    i$: function () {
        return T;
    },
    q9: function () {
        return _;
    }
});
var s = t(735250);
t(470079);
var r = t(120356),
    i = t.n(r),
    l = t(481060),
    a = t(911969),
    c = t(937615),
    o = t(689938),
    u = t(246502);
function I(e) {
    let { children: n, className: t } = e;
    return (0, s.jsx)('div', {
        className: i()(u.table, t),
        children: n
    });
}
function _(e) {
    let { children: n } = e;
    return (0, s.jsx)('div', {
        className: u.header,
        children: n
    });
}
function E(e) {
    let { label: n, value: t, className: r } = e;
    return (0, s.jsxs)('div', {
        className: i()(u.row, r),
        children: [
            (0, s.jsx)('div', {
                className: u.rowLabel,
                children: n
            }),
            (0, s.jsx)('div', {
                className: u.rowAmount,
                children: t
            })
        ]
    });
}
function T(e) {
    let { label: n, value: t, discounts: r, originalAmount: i, interval: I, currency: _, className: T, intervalCount: d, inTrialPeriod: N } = e,
        M = (e) => (null != r ? r.find((n) => n.type === e) : null),
        A = M(a.eW.SUBSCRIPTION_PLAN),
        L = M(a.eW.ENTITLEMENT),
        P = null != A ? Math.floor((A.amount / i) * 100) : null,
        R = (0, c.T4)(i, _);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(E, {
                label: n,
                value: (0, s.jsxs)(s.Fragment, {
                    children: [
                        N ? o.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({ price: (0, c.T4)(0, _) }) : t,
                        null != P
                            ? (0, s.jsxs)('div', {
                                  className: u.rowPercentDiscount,
                                  children: ['-', P, '%']
                              })
                            : null
                    ]
                }),
                className: T
            }),
            N &&
                (0, s.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    className: u.trialEndPrice,
                    children: o.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL.format({ price: R })
                }),
            null != P
                ? (0, s.jsxs)('div', {
                      className: u.rowDiscountOriginalPrice,
                      children: ['(', null != I && null != d ? (0, c.og)(R, I, d) : R, ')']
                  })
                : null,
            null != L
                ? (0, s.jsx)('div', {
                      className: u.entitlementDiscountRow,
                      children: o.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
                  })
                : null
        ]
    });
}
function d(e) {
    let { extended: n = !1, negativeMarginTop: t = !1, negativeMarginBottom: r = !1 } = e;
    return (0, s.jsx)('div', {
        className: i()(u.divider, {
            [u.dividerExtended]: n,
            [u.negativeMarginTop]: t,
            [u.negativeMarginBottom]: r
        })
    });
}
function N(e) {
    let { label: n, value: t, className: r } = e;
    return (0, s.jsxs)('div', {
        className: i()(u.totalRow, r),
        children: [
            (0, s.jsx)('div', {
                className: u.totalLabel,
                children: n
            }),
            (0, s.jsx)('div', {
                className: u.totalAmount,
                children: t
            })
        ]
    });
}
function M(e) {
    let { children: n, className: t } = e;
    return (0, s.jsx)('div', {
        className: i()(u.finePrint, t),
        children: n
    });
}
