"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("222007"), s("70102");
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  l = s.n(i),
  r = s("627445"),
  u = s.n(r),
  o = s("446674"),
  d = s("77078"),
  c = s("112679"),
  E = s("596523"),
  f = s("335430"),
  _ = s("740055"),
  p = s("685665"),
  m = s("308592"),
  I = s("102985"),
  N = s("357957"),
  S = s("10514"),
  T = s("719923"),
  C = s("713518"),
  P = s("380186"),
  R = s("809071"),
  A = s("49111"),
  M = s("782340"),
  h = s("229647"),
  L = s("125047");

function g(e) {
  let {
    subscription: t,
    onPaymentSourceAdded: i,
    highlightAddPaymentMethodButton: r,
    dropdownClassName: g,
    analyticsLocation: x,
    currentInvoicePreview: D,
    disabled: U = !1
  } = e, O = (0, o.useStateFromStores)([I.default], () => I.default.hidePersonalInformation), [v, b] = (0, o.useStateFromStoresArray)([N.default], () => [N.default.paymentSources, N.default.hasFetchedPaymentSources]), B = (0, m.useSubscriptionPlansLoaded)((0, P.getSubscriptionSKUs)(t)), {
    analyticsLocations: j
  } = (0, p.default)(), G = n.useMemo(() => Object.values(v).filter(e => !e.invalid), [v]), [F, k] = n.useState(!1), [w, H] = n.useState(t.currency), Y = async (e, s) => {
    if (null == t) throw Error("missing subscription and paymentSource");
    null == e ? await E.changeSubscriptionCurrency(t, s, j, x) : await E.changePaymentSource(t, e, s, j, x), k(!1), H(s)
  }, W = async (e, s, a) => {
    k(!0);
    let n = await (0, R.updateSubscriptionInvoicePreview)({
      subscriptionId: t.id,
      paymentSourceId: null == e ? void 0 : e.id,
      renewal: !0,
      currency: s,
      analyticsLocations: j,
      analyticsLocation: x
    });
    D.currency !== n.currency || D.currency === n.currency && D.total !== n.total ? await y(n, () => {
      a(e, s)
    }, () => {
      k(!1)
    }) : a(e, s)
  }, V = e => {
    let s = S.default.get(t.planIdForCurrencies);
    u(null != e, "paymentSource not specified for change"), u(null != s, "Unable to fetch plan");
    let a = (0, C.getCurrencies)(s.id, e.id, !1),
      n = a.length > 0 ? a[0] : A.CurrencyCodes.USD;
    return n
  }, K = e => {
    null != e && W(e, V(e), Y)
  }, z = e => {
    (0, C.fetchSubscriptionPlansOnNewPaymentSource)(e.id, (0, P.getSubscriptionSKUs)(t)).then(() => {
      W(e, V(e), Y)
    }), "function" == typeof i && i(e.id)
  }, Z = () => {
    (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("960391").then(s.bind(s, "960391"));
      return t => (0, a.jsx)(e, {
        ...t,
        onAddPaymentSource: z,
        analyticsLocation: x
      })
    }, {
      onCloseCallback: () => {
        (0, c.clearError)()
      },
      onCloseRequest: A.NOOP
    })
  };
  if (t.isPurchasedExternally) return (e => {
    u(null != e.paymentGateway, "Expected payment gateway when managed externally");
    let t = (0, T.getExternalSubscriptionMethodUrl)(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
    return (0, a.jsx)(d.Anchor, {
      href: t,
      useDefaultUnderlineStyles: !1,
      className: h.externalLink,
      children: (0, a.jsx)(d.Button, {
        fullWidth: !0,
        look: d.Button.Looks.FILLED,
        color: d.Button.Colors.PRIMARY,
        children: M.default.Messages.BILLING_MANAGE_BILLING
      })
    })
  })(t);
  if (!b || !B) return (0, a.jsx)(d.Spinner, {});
  if (!(G.length > 0)) return (0, a.jsx)(d.Button, {
    fullWidth: !0,
    look: d.Button.Looks.FILLED,
    color: r ? d.Button.Colors.BRAND : d.Button.Colors.PRIMARY,
    onClick: Z,
    children: M.default.Messages.BILLING_ADD_PAYMENT_METHOD
  });
  else {
    let e = S.default.get(t.planIdForCurrencies);
    u(null != e, "Unable to fetch plan");
    let s = (0, C.getCurrencies)(e, t.paymentSourceId, !1);
    return (0, a.jsxs)(a.Fragment, {
      children: [(() => {
        let e = t.paymentSourceId;
        return (0, a.jsx)(_.default, {
          prependOption: null == e ? {
            label: M.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION,
            value: null
          } : null,
          className: g,
          paymentSources: G,
          hidePersonalInformation: O,
          selectedPaymentSourceId: e,
          onChange: K,
          onPaymentSourceAdd: Z,
          dropdownLoading: F,
          disabled: U
        })
      })(), null != t.paymentSourceId ? (0, a.jsx)(f.CurrencyWrapper, {
        currencies: s,
        children: (0, a.jsxs)("div", {
          className: l(h.currency, L.flex, L.alignCenter),
          children: [(0, a.jsx)("div", {
            children: M.default.Messages.PAYMENT_CURRENCY_PAYING_IN
          }), (0, a.jsx)(f.default, {
            className: h.currencyDropdown,
            selectedCurrency: w,
            currencies: s,
            onChange: e => {
              W(void 0, e, Y)
            }
          })]
        })
      }) : null]
    })
  }
}
let y = async (e, t, n) => {
  let i = await (0, d.openModalLazy)(async () => {
    let {
      default: i
    } = await s.el("336811").then(s.bind(s, "336811"));
    return s => (0, a.jsx)(i, {
      newInvoice: e,
      onConfirm: t,
      onCancel: n,
      modalProps: s
    })
  }, {
    onCloseRequest: () => {
      null != i && (0, d.closeModal)(i), n()
    }
  })
}