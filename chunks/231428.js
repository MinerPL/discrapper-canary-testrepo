t.d(s, {
    Z: function () {
        return v;
    }
}),
    t(47120);
var n,
    a = t(735250),
    i = t(470079),
    r = t(120356),
    o = t.n(r),
    l = t(512722),
    c = t.n(l),
    d = t(91192),
    _ = t(442837),
    E = t(481060),
    u = t(570140),
    I = t(355467),
    T = t(827837),
    S = t(821849),
    N = t(724757),
    C = t(600164),
    m = t(239827),
    A = t(818035),
    O = t(509545),
    g = t(78839),
    h = t(74538),
    p = t(807160),
    R = t(474936),
    x = t(231338),
    M = t(689938),
    f = t(40810),
    D = t(495018);
function P(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
function L(e) {
    let { payments: s, locale: t, compactMode: n, numPages: r } = e,
        l = i.useRef(null),
        [c, _] = i.useState(0),
        [u, T] = i.useState(null),
        S = s.slice(10 * c, (c + 1) * 10);
    i.useEffect(() => {
        var e;
        null === (e = l.current) || void 0 === e || e.scrollTo({ to: 0 });
    }, [c]);
    let C = i.useCallback(
            (e) => {
                _(e);
                let t = s[s.length - 1].id;
                e >= r - 2 && u !== t && ((0, I.cQ)(10, t), T(t));
            },
            [s, r, u]
        ),
        A = (0, N.Z)('billing-history', l);
    return (0, a.jsx)(d.bG, {
        navigator: A,
        children: (0, a.jsx)(d.SJ, {
            children: (e) => {
                let { ref: s, ...i } = e;
                return (0, a.jsx)(m.Z, {
                    className: o()(f.verticalFit, f.paginator),
                    currentPageIndex: c,
                    onChangePage: C,
                    numPages: r,
                    showPageCount: !1,
                    ref: s,
                    ...i,
                    children: (0, a.jsx)(E.AdvancedScroller, {
                        className: f.bottomDivider,
                        ref: l,
                        children: S.map((e, s) =>
                            (0, a.jsx)(
                                p.Z,
                                {
                                    className: o()(f.paymentRow, f.bottomDivider),
                                    payment: e,
                                    locale: t,
                                    compactMode: n
                                },
                                s
                            )
                        )
                    })
                });
            }
        })
    });
}
class b extends (n = i.PureComponent) {
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        u.Z.wait(() => {
            (0, T.N)(), (0, I.cQ)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            c()(null != e.paymentGateway, 'Expected payment gateway when rendering for external subscription'),
            (0, a.jsxs)(E.Card, {
                className: f.externalRow,
                children: [
                    (0, a.jsx)('div', {
                        className: f.externalRowHeader,
                        children: M.Z.Messages.BILLING_EXTERNAL_HEADER.format({ paymentGatewayName: x.Vz[e.paymentGateway] })
                    }),
                    (0, a.jsx)('div', {
                        className: f.externalRowBody,
                        children: M.Z.Messages.BILLING_EXTERNAL_DESCRIPTION.format({
                            paymentGatewayName: x.Vz[e.paymentGateway],
                            billingHistoryLink: (0, h.JE)(e.paymentGateway, 'BILLING_HISTORY')
                        })
                    })
                ]
            })
        );
    }
    render() {
        let { compactMode: e, payments: s, subscription: t, locale: n } = this.props,
            i = null != t && t.isPurchasedExternally;
        return 0 !== s.length || i
            ? (0, a.jsxs)('div', {
                  className: f.verticalFit,
                  children: [
                      null != t && i ? this.renderPremiumExternalSubscription(t) : null,
                      s.length > 0
                          ? (0, a.jsxs)('div', {
                                className: o()(f.paymentPane, f.verticalFit),
                                children: [
                                    e
                                        ? null
                                        : (0, a.jsx)('div', {
                                              className: o()(f.paymentRow, f.bottomDivider),
                                              children: (0, a.jsxs)(C.Z, {
                                                  className: f.paymentRowHeader,
                                                  children: [
                                                      (0, a.jsx)('div', {
                                                          className: D.date,
                                                          children: M.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_DATE
                                                      }),
                                                      (0, a.jsx)('div', {
                                                          className: f.paymentRowHeaderDescription,
                                                          children: M.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_DESCRIPTION
                                                      }),
                                                      (0, a.jsx)('div', {
                                                          className: D.amount,
                                                          children: M.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_AMOUNT
                                                      })
                                                  ]
                                              })
                                          }),
                                    (0, a.jsx)(L, {
                                        compactMode: e,
                                        locale: n,
                                        payments: s,
                                        numPages: this.numPages
                                    })
                                ]
                            })
                          : null
                  ]
              })
            : null;
    }
    constructor(...e) {
        super(...e), P(this, 'scrollerRef', i.createRef());
    }
}
function Z(e) {
    var s;
    let t = e.skuId,
        n = null === (s = e.subscription) || void 0 === s ? void 0 : s.items[0].planId;
    return !(null == t || null == n || Object.values(R.Si).includes(t) || (0, h.PV)(n));
}
function v(e) {
    let s = (0, _.e7)([A.Z], () => A.Z.getPayments()),
        t = (0, _.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()),
        n = i.useMemo(
            () =>
                new Set(
                    s.filter(Z).map((e) => {
                        let { subscription: s } = e;
                        return null == s ? void 0 : s.items[0].planId;
                    })
                ),
            [s]
        ),
        r = i.useMemo(
            () =>
                new Set(
                    s.filter(Z).map((e) => {
                        let { skuId: s } = e;
                        return s;
                    })
                ),
            [s]
        ),
        o = (0, _.Wu)([O.Z], () => O.Z.getPlanIdsForSkus(Array.from(r))),
        l = i.useCallback(() => o.length === n.size, [o, n]);
    return (
        i.useEffect(() => {
            !l() &&
                u.Z.wait(() => {
                    r.forEach((e) => (0, S.GZ)(e, void 0, void 0, !0, void 0));
                });
        }, [l, r]),
        (0, a.jsx)(b, {
            ...e,
            payments: l() ? s : [],
            subscription: t
        })
    );
}
P(b, 'defaultProps', { compactMode: !1 });
