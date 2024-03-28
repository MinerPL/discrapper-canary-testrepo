"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
}), s("47120");
var a, n = s("735250"),
  i = s("470079"),
  l = s("803997"),
  r = s.n(l),
  u = s("512722"),
  o = s.n(u),
  d = s("924826"),
  c = s("442837"),
  E = s("481060"),
  f = s("570140"),
  _ = s("355467"),
  p = s("827837"),
  m = s("821849"),
  I = s("724757"),
  N = s("818035"),
  S = s("509545"),
  P = s("78839"),
  T = s("285952"),
  C = s("884246"),
  R = s("74538"),
  A = s("807160"),
  M = s("474936"),
  h = s("231338"),
  L = s("689938"),
  g = s("472009"),
  y = s("486158");

function x(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function D(e) {
  let {
    payments: t,
    locale: s,
    compactMode: a,
    numPages: l
  } = e, u = i.useRef(null), [o, c] = i.useState(0), [f, p] = i.useState(null), m = t.slice(10 * o, (o + 1) * 10);
  i.useEffect(() => {
    var e;
    null === (e = u.current) || void 0 === e || e.scrollTo({
      to: 0
    })
  }, [o]);
  let N = i.useCallback(e => {
      c(e);
      let s = t[t.length - 1].id;
      e === l - 1 && f !== s && ((0, _.fetchPayments)(10, s), p(s))
    }, [t, l, f]),
    S = (0, I.default)("billing-history", u);
  return (0, n.jsx)(d.ListNavigatorProvider, {
    navigator: S,
    children: (0, n.jsx)(d.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...i
        } = e;
        return (0, n.jsx)(C.default, {
          className: r()(g.verticalFit, g.paginator),
          currentPageIndex: o,
          onChangePage: N,
          numPages: l,
          ref: t,
          ...i,
          children: (0, n.jsx)(E.AdvancedScroller, {
            className: g.bottomDivider,
            ref: u,
            children: m.map((e, t) => (0, n.jsx)(A.default, {
              className: r()(g.paymentRow, g.bottomDivider),
              payment: e,
              locale: s,
              compactMode: a
            }, t))
          })
        })
      }
    })
  })
}
class U extends(a = i.PureComponent) {
  get numPages() {
    return Math.max(Math.ceil(this.props.payments.length / 10), 1)
  }
  componentDidMount() {
    f.default.wait(() => {
      (0, p.fetchActivityStatistics)(), (0, _.fetchPayments)(20)
    })
  }
  renderPremiumExternalSubscription(e) {
    return o()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, n.jsxs)(E.Card, {
      className: g.externalRow,
      children: [(0, n.jsx)("div", {
        className: g.externalRowHeader,
        children: L.default.Messages.BILLING_EXTERNAL_HEADER.format({
          paymentGatewayName: h.PaymentGatewayToFriendlyName[e.paymentGateway]
        })
      }), (0, n.jsx)("div", {
        className: g.externalRowBody,
        children: L.default.Messages.BILLING_EXTERNAL_DESCRIPTION.format({
          paymentGatewayName: h.PaymentGatewayToFriendlyName[e.paymentGateway],
          billingHistoryLink: (0, R.getExternalSubscriptionMethodUrl)(e.paymentGateway, "BILLING_HISTORY")
        })
      })]
    })
  }
  render() {
    let {
      compactMode: e,
      payments: t,
      subscription: s,
      locale: a
    } = this.props, i = null != s && s.isPurchasedExternally;
    return 0 !== t.length || i ? (0, n.jsxs)("div", {
      className: g.verticalFit,
      children: [null != s && i ? this.renderPremiumExternalSubscription(s) : null, t.length > 0 ? (0, n.jsxs)("div", {
        className: r()(g.paymentPane, g.verticalFit),
        children: [e ? null : (0, n.jsx)("div", {
          className: r()(g.paymentRow, g.bottomDivider),
          children: (0, n.jsxs)(T.default, {
            className: g.paymentRowHeader,
            children: [(0, n.jsx)("div", {
              className: y.date,
              children: L.default.Messages.BILLING_PAYMENT_TABLE_HEADER_DATE
            }), (0, n.jsx)("div", {
              className: g.paymentRowHeaderDescription,
              children: L.default.Messages.BILLING_PAYMENT_TABLE_HEADER_DESCRIPTION
            }), (0, n.jsx)("div", {
              className: y.amount,
              children: L.default.Messages.BILLING_PAYMENT_TABLE_HEADER_AMOUNT
            })]
          })
        }), (0, n.jsx)(D, {
          compactMode: e,
          locale: a,
          payments: t,
          numPages: this.numPages
        })]
      }) : null]
    }) : null
  }
  constructor(...e) {
    super(...e), x(this, "scrollerRef", i.createRef())
  }
}

function O(e) {
  var t;
  let s = e.skuId,
    a = null === (t = e.subscription) || void 0 === t ? void 0 : t.items[0].planId;
  return !(null == s || null == a || Object.values(M.PremiumSubscriptionSKUs).includes(s) || (0, R.isPremiumSubscriptionPlan)(a))
}

function v(e) {
  let t = (0, c.useStateFromStores)([N.default], () => N.default.getPayments()),
    s = (0, c.useStateFromStores)([P.default], () => P.default.getPremiumTypeSubscription()),
    a = i.useMemo(() => new Set(t.filter(O).map(e => {
      let {
        subscription: t
      } = e;
      return null == t ? void 0 : t.items[0].planId
    })), [t]),
    l = i.useMemo(() => new Set(t.filter(O).map(e => {
      let {
        skuId: t
      } = e;
      return t
    })), [t]),
    r = (0, c.useStateFromStoresArray)([S.default], () => S.default.getPlanIdsForSkus(Array.from(l))),
    u = i.useCallback(() => r.length === a.size, [r, a]);
  return i.useEffect(() => {
    !u() && f.default.wait(() => {
      l.forEach(e => (0, m.fetchSubscriptionPlansForSKU)(e, void 0, void 0, !0, void 0))
    })
  }, [u, l]), (0, n.jsx)(U, {
    ...e,
    payments: u() ? t : [],
    subscription: s
  })
}
x(U, "defaultProps", {
  compactMode: !1
})