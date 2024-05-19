"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120"), s("411104");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("512722"),
  u = s.n(r),
  o = s("442837"),
  d = s("481060"),
  c = s("976255"),
  p = s("366939"),
  m = s("623573"),
  f = s("190947"),
  E = s("275850"),
  _ = s("906732"),
  I = s("15640"),
  S = s("246946"),
  N = s("853872"),
  P = s("509545"),
  C = s("74538"),
  h = s("212895"),
  T = s("296848"),
  A = s("374649"),
  R = s("981631"),
  y = s("689938"),
  M = s("581339"),
  L = s("961047");

function g(e) {
  let {
    subscription: t,
    onPaymentSourceAdded: s,
    highlightAddPaymentMethodButton: i,
    dropdownClassName: r,
    analyticsLocation: g,
    currentInvoicePreview: D,
    disabled: b = !1
  } = e, U = (0, o.useStateFromStores)([S.default], () => S.default.hidePersonalInformation), [v, B] = (0, o.useStateFromStoresArray)([N.default], () => [N.default.paymentSources, N.default.hasFetchedPaymentSources]), O = (0, I.useSubscriptionPlansLoaded)((0, T.getSubscriptionSKUs)(t)), {
    analyticsLocations: j
  } = (0, _.default)(), G = n.useMemo(() => Object.values(v).filter(e => !e.invalid), [v]), [k, w] = n.useState(!1), [F, Y] = n.useState(t.currency), H = async (e, s) => {
    if (null == t) throw Error("missing subscription and paymentSource");
    null == e ? await p.changeSubscriptionCurrency(t, s, j, g) : await p.changePaymentSource(t, e, s, j, g), w(!1), Y(s)
  }, W = async (e, s, a) => {
    w(!0);
    let n = await (0, A.updateSubscriptionInvoicePreview)({
      subscriptionId: t.id,
      paymentSourceId: null == e ? void 0 : e.id,
      renewal: !0,
      currency: s,
      analyticsLocations: j,
      analyticsLocation: g
    });
    D.currency !== n.currency || D.currency === n.currency && D.total !== n.total ? await x(n, () => {
      a(e, s)
    }, () => {
      w(!1)
    }) : a(e, s)
  }, V = e => {
    let s = P.default.get(t.planIdForCurrencies);
    u()(null != e, "paymentSource not specified for change"), u()(null != s, "Unable to fetch plan");
    let a = (0, h.getCurrencies)(s.id, e.id, !1);
    return a.length > 0 ? a[0] : R.CurrencyCodes.USD
  }, K = e => {
    null != e && W(e, V(e), H)
  }, z = e => {
    (0, h.fetchSubscriptionPlansOnNewPaymentSource)(e.id, (0, T.getSubscriptionSKUs)(t)).then(() => {
      W(e, V(e), H)
    }), "function" == typeof s && s(e.id)
  }, q = () => {
    (0, d.openModalLazy)(async () => e => (0, a.jsx)(m.default, {
      ...e,
      onAddPaymentSource: z,
      analyticsLocation: g
    }), {
      onCloseCallback: () => {
        (0, c.clearError)()
      },
      onCloseRequest: R.NOOP
    })
  };
  if (t.isPurchasedExternally) return (e => {
    u()(null != e.paymentGateway, "Expected payment gateway when managed externally");
    let t = (0, C.getExternalSubscriptionMethodUrl)(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
    return (0, a.jsx)(d.Anchor, {
      href: t,
      useDefaultUnderlineStyles: !1,
      className: M.externalLink,
      children: (0, a.jsx)(d.Button, {
        fullWidth: !0,
        look: d.Button.Looks.FILLED,
        color: d.Button.Colors.PRIMARY,
        children: y.default.Messages.BILLING_MANAGE_BILLING
      })
    })
  })(t);
  if (!B || !O) return (0, a.jsx)(d.Spinner, {});
  if (!(G.length > 0)) return (0, a.jsx)(d.Button, {
    fullWidth: !0,
    look: d.Button.Looks.FILLED,
    color: i ? d.Button.Colors.BRAND : d.Button.Colors.PRIMARY,
    onClick: q,
    children: y.default.Messages.BILLING_ADD_PAYMENT_METHOD
  });
  else {
    let e = P.default.get(t.planIdForCurrencies);
    u()(null != e, "Unable to fetch plan");
    let s = (0, h.getCurrencies)(e, t.paymentSourceId, !1);
    return (0, a.jsxs)(a.Fragment, {
      children: [(() => {
        let e = t.paymentSourceId;
        return (0, a.jsx)(E.default, {
          prependOption: null == e ? {
            label: y.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION,
            value: null
          } : null,
          className: r,
          paymentSources: G,
          hidePersonalInformation: U,
          selectedPaymentSourceId: e,
          onChange: K,
          onPaymentSourceAdd: q,
          dropdownLoading: k,
          disabled: b
        })
      })(), null != t.paymentSourceId ? (0, a.jsx)(f.CurrencyWrapper, {
        currencies: s,
        children: (0, a.jsxs)("div", {
          className: l()(M.currency, L.flex, L.alignCenter),
          children: [(0, a.jsx)("div", {
            children: y.default.Messages.PAYMENT_CURRENCY_PAYING_IN
          }), (0, a.jsx)(f.default, {
            className: M.currencyDropdown,
            selectedCurrency: F,
            currencies: s,
            onChange: e => {
              W(void 0, e, H)
            }
          })]
        })
      }) : null]
    })
  }
}
let x = async (e, t, n) => {
  let i = await (0, d.openModalLazy)(async () => {
    let {
      default: i
    } = await s.e("97516").then(s.bind(s, "358927"));
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