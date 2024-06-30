s.d(t, {
    Z: function () {
        return v;
    }
}), s(47120);
var n, a = s(735250), i = s(470079), r = s(120356), o = s.n(r), l = s(512722), c = s.n(l), d = s(91192), _ = s(442837), E = s(481060), u = s(570140), T = s(355467), I = s(827837), S = s(821849), N = s(724757), C = s(818035), m = s(509545), A = s(78839), h = s(285952), g = s(884246), O = s(74538), p = s(807160), R = s(474936), x = s(231338), M = s(689938), D = s(631545), f = s(69630);
function P(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}
function L(e) {
    let {
            payments: t,
            locale: s,
            compactMode: n,
            numPages: r
        } = e, l = i.useRef(null), [c, _] = i.useState(0), [u, I] = i.useState(null), S = t.slice(10 * c, (c + 1) * 10);
    i.useEffect(() => {
        var e;
        null === (e = l.current) || void 0 === e || e.scrollTo({ to: 0 });
    }, [c]);
    let C = i.useCallback(e => {
            _(e);
            let s = t[t.length - 1].id;
            e >= r - 2 && u !== s && ((0, T.cQ)(10, s), I(s));
        }, [
            t,
            r,
            u
        ]), m = (0, N.Z)('billing-history', l);
    return (0, a.jsx)(d.bG, {
        navigator: m,
        children: (0, a.jsx)(d.SJ, {
            children: e => {
                let {
                    ref: t,
                    ...i
                } = e;
                return (0, a.jsx)(g.Z, {
                    className: o()(D.verticalFit, D.paginator),
                    currentPageIndex: c,
                    onChangePage: C,
                    numPages: r,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, a.jsx)(E.AdvancedScroller, {
                        className: D.bottomDivider,
                        ref: l,
                        children: S.map((e, t) => (0, a.jsx)(p.Z, {
                            className: o()(D.paymentRow, D.bottomDivider),
                            payment: e,
                            locale: s,
                            compactMode: n
                        }, t))
                    })
                });
            }
        })
    });
}
class Z extends (n = i.PureComponent) {
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        u.Z.wait(() => {
            (0, I.N)(), (0, T.cQ)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return c()(null != e.paymentGateway, 'Expected payment gateway when rendering for external subscription'), (0, a.jsxs)(E.Card, {
            className: D.externalRow,
            children: [
                (0, a.jsx)('div', {
                    className: D.externalRowHeader,
                    children: M.Z.Messages.BILLING_EXTERNAL_HEADER.format({ paymentGatewayName: x.Vz[e.paymentGateway] })
                }),
                (0, a.jsx)('div', {
                    className: D.externalRowBody,
                    children: M.Z.Messages.BILLING_EXTERNAL_DESCRIPTION.format({
                        paymentGatewayName: x.Vz[e.paymentGateway],
                        billingHistoryLink: (0, O.JE)(e.paymentGateway, 'BILLING_HISTORY')
                    })
                })
            ]
        });
    }
    render() {
        let {
                compactMode: e,
                payments: t,
                subscription: s,
                locale: n
            } = this.props, i = null != s && s.isPurchasedExternally;
        return 0 !== t.length || i ? (0, a.jsxs)('div', {
            className: D.verticalFit,
            children: [
                null != s && i ? this.renderPremiumExternalSubscription(s) : null,
                t.length > 0 ? (0, a.jsxs)('div', {
                    className: o()(D.paymentPane, D.verticalFit),
                    children: [
                        e ? null : (0, a.jsx)('div', {
                            className: o()(D.paymentRow, D.bottomDivider),
                            children: (0, a.jsxs)(h.Z, {
                                className: D.paymentRowHeader,
                                children: [
                                    (0, a.jsx)('div', {
                                        className: f.date,
                                        children: M.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_DATE
                                    }),
                                    (0, a.jsx)('div', {
                                        className: D.paymentRowHeaderDescription,
                                        children: M.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_DESCRIPTION
                                    }),
                                    (0, a.jsx)('div', {
                                        className: f.amount,
                                        children: M.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_AMOUNT
                                    })
                                ]
                            })
                        }),
                        (0, a.jsx)(L, {
                            compactMode: e,
                            locale: n,
                            payments: t,
                            numPages: this.numPages
                        })
                    ]
                }) : null
            ]
        }) : null;
    }
    constructor(...e) {
        super(...e), P(this, 'scrollerRef', i.createRef());
    }
}
function b(e) {
    var t;
    let s = e.skuId, n = null === (t = e.subscription) || void 0 === t ? void 0 : t.items[0].planId;
    return !(null == s || null == n || Object.values(R.Si).includes(s) || (0, O.PV)(n));
}
function v(e) {
    let t = (0, _.e7)([C.Z], () => C.Z.getPayments()), s = (0, _.e7)([A.ZP], () => A.ZP.getPremiumTypeSubscription()), n = i.useMemo(() => new Set(t.filter(b).map(e => {
            let {subscription: t} = e;
            return null == t ? void 0 : t.items[0].planId;
        })), [t]), r = i.useMemo(() => new Set(t.filter(b).map(e => {
            let {skuId: t} = e;
            return t;
        })), [t]), o = (0, _.Wu)([m.Z], () => m.Z.getPlanIdsForSkus(Array.from(r))), l = i.useCallback(() => o.length === n.size, [
            o,
            n
        ]);
    return i.useEffect(() => {
        !l() && u.Z.wait(() => {
            r.forEach(e => (0, S.GZ)(e, void 0, void 0, !0, void 0));
        });
    }, [
        l,
        r
    ]), (0, a.jsx)(Z, {
        ...e,
        payments: l() ? t : [],
        subscription: s
    });
}
P(Z, 'defaultProps', { compactMode: !1 });
