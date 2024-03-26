"use strict";
s.r(t), s.d(t, {
  default: function() {
    return U
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  l = s.n(i),
  r = s("627445"),
  u = s.n(r),
  o = s("974667"),
  d = s("446674"),
  c = s("77078"),
  E = s("913144"),
  f = s("850068"),
  _ = s("444949"),
  p = s("775433"),
  m = s("510889"),
  I = s("386876"),
  N = s("10514"),
  S = s("521012"),
  T = s("145131"),
  P = s("251752"),
  C = s("719923"),
  R = s("942456"),
  A = s("646718"),
  M = s("843455"),
  h = s("782340"),
  L = s("99119"),
  g = s("246677");

function y(e) {
  let {
    payments: t,
    locale: s,
    compactMode: i,
    numPages: r
  } = e, u = n.useRef(null), [d, E] = n.useState(0), [_, p] = n.useState(null), I = t.slice(10 * d, (d + 1) * 10);
  n.useEffect(() => {
    var e;
    null === (e = u.current) || void 0 === e || e.scrollTo({
      to: 0
    })
  }, [d]);
  let N = n.useCallback(e => {
      E(e);
      let s = t[t.length - 1].id;
      e === r - 1 && _ !== s && ((0, f.fetchPayments)(10, s), p(s))
    }, [t, r, _]),
    S = (0, m.default)("billing-history", u);
  return (0, a.jsx)(o.ListNavigatorProvider, {
    navigator: S,
    children: (0, a.jsx)(o.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...n
        } = e;
        return (0, a.jsx)(P.default, {
          className: l(L.verticalFit, L.paginator),
          currentPageIndex: d,
          onChangePage: N,
          numPages: r,
          ref: t,
          ...n,
          children: (0, a.jsx)(c.AdvancedScroller, {
            className: L.bottomDivider,
            ref: u,
            children: I.map((e, t) => (0, a.jsx)(R.default, {
              className: l(L.paymentRow, L.bottomDivider),
              payment: e,
              locale: s,
              compactMode: i
            }, t))
          })
        })
      }
    })
  })
}
class x extends n.PureComponent {
  get numPages() {
    return Math.max(Math.ceil(this.props.payments.length / 10), 1)
  }
  componentDidMount() {
    E.default.wait(() => {
      (0, _.fetchActivityStatistics)(), (0, f.fetchPayments)(20)
    })
  }
  renderPremiumExternalSubscription(e) {
    return u(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, a.jsxs)(c.Card, {
      className: L.externalRow,
      children: [(0, a.jsx)("div", {
        className: L.externalRowHeader,
        children: h.default.Messages.BILLING_EXTERNAL_HEADER.format({
          paymentGatewayName: M.PaymentGatewayToFriendlyName[e.paymentGateway]
        })
      }), (0, a.jsx)("div", {
        className: L.externalRowBody,
        children: h.default.Messages.BILLING_EXTERNAL_DESCRIPTION.format({
          paymentGatewayName: M.PaymentGatewayToFriendlyName[e.paymentGateway],
          billingHistoryLink: (0, C.getExternalSubscriptionMethodUrl)(e.paymentGateway, "BILLING_HISTORY")
        })
      })]
    })
  }
  render() {
    let {
      compactMode: e,
      payments: t,
      subscription: s,
      locale: n
    } = this.props, i = null != s && s.isPurchasedExternally;
    return 0 !== t.length || i ? (0, a.jsxs)("div", {
      className: L.verticalFit,
      children: [null != s && i ? this.renderPremiumExternalSubscription(s) : null, t.length > 0 ? (0, a.jsxs)("div", {
        className: l(L.paymentPane, L.verticalFit),
        children: [e ? null : (0, a.jsx)("div", {
          className: l(L.paymentRow, L.bottomDivider),
          children: (0, a.jsxs)(T.default, {
            className: L.paymentRowHeader,
            children: [(0, a.jsx)("div", {
              className: g.date,
              children: h.default.Messages.BILLING_PAYMENT_TABLE_HEADER_DATE
            }), (0, a.jsx)("div", {
              className: L.paymentRowHeaderDescription,
              children: h.default.Messages.BILLING_PAYMENT_TABLE_HEADER_DESCRIPTION
            }), (0, a.jsx)("div", {
              className: g.amount,
              children: h.default.Messages.BILLING_PAYMENT_TABLE_HEADER_AMOUNT
            })]
          })
        }), (0, a.jsx)(y, {
          compactMode: e,
          locale: n,
          payments: t,
          numPages: this.numPages
        })]
      }) : null]
    }) : null
  }
  constructor(...e) {
    super(...e), this.scrollerRef = n.createRef()
  }
}

function D(e) {
  var t;
  let s = e.skuId,
    a = null === (t = e.subscription) || void 0 === t ? void 0 : t.items[0].planId;
  return !(null == s || null == a || Object.values(A.PremiumSubscriptionSKUs).includes(s) || (0, C.isPremiumSubscriptionPlan)(a))
}

function U(e) {
  let t = (0, d.useStateFromStores)([I.default], () => I.default.getPayments()),
    s = (0, d.useStateFromStores)([S.default], () => S.default.getPremiumTypeSubscription()),
    i = n.useMemo(() => new Set(t.filter(D).map(e => {
      let {
        subscription: t
      } = e;
      return null == t ? void 0 : t.items[0].planId
    })), [t]),
    l = n.useMemo(() => new Set(t.filter(D).map(e => {
      let {
        skuId: t
      } = e;
      return t
    })), [t]),
    r = (0, d.useStateFromStoresArray)([N.default], () => N.default.getPlanIdsForSkus(Array.from(l))),
    u = n.useCallback(() => r.length === i.size, [r, i]);
  return n.useEffect(() => {
    !u() && E.default.wait(() => {
      l.forEach(e => (0, p.fetchSubscriptionPlansForSKU)(e, void 0, void 0, !0, void 0))
    })
  }, [u, l]), (0, a.jsx)(x, {
    ...e,
    payments: u() ? t : [],
    subscription: s
  })
}
x.defaultProps = {
  compactMode: !1
}