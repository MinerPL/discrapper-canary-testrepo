s.d(t, {
  Z: function() {
return f;
  }
}), s(47120), s(411104);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(512722),
  l = s.n(o),
  c = s(442837),
  d = s(481060),
  _ = s(976255),
  E = s(366939),
  u = s(623573),
  T = s(190947),
  I = s(275850),
  S = s(906732),
  N = s(15640),
  C = s(246946),
  m = s(853872),
  A = s(509545),
  h = s(74538),
  g = s(212895),
  O = s(296848),
  p = s(374649),
  R = s(981631),
  x = s(689938),
  M = s(332580),
  D = s(483085);

function f(e) {
  let {
subscription: t,
onPaymentSourceAdded: s,
highlightAddPaymentMethodButton: i,
dropdownClassName: o,
analyticsLocation: f,
currentInvoicePreview: L,
disabled: Z = !1
  } = e, b = (0, c.e7)([C.Z], () => C.Z.hidePersonalInformation), [v, j] = (0, c.Wu)([m.Z], () => [
m.Z.paymentSources,
m.Z.hasFetchedPaymentSources
  ]), B = (0, N.V)((0, O.yb)(t)), {
analyticsLocations: U
  } = (0, S.ZP)(), G = a.useMemo(() => Object.values(v).filter(e => !e.invalid), [v]), [F, y] = a.useState(!1), [V, Y] = a.useState(t.currency), w = async (e, s) => {
if (null == t)
  throw Error('missing subscription and paymentSource');
null == e ? await E.fG(t, s, U, f) : await E.tq(t, e, s, U, f), y(!1), Y(s);
  }, k = async (e, s, n) => {
y(!0);
let a = await (0, p.hz)({
  subscriptionId: t.id,
  paymentSourceId: null == e ? void 0 : e.id,
  renewal: !0,
  currency: s,
  analyticsLocations: U,
  analyticsLocation: f
});
L.currency !== a.currency || L.currency === a.currency && L.total !== a.total ? await P(a, () => {
  n(e, s);
}, () => {
  y(!1);
}) : n(e, s);
  }, H = e => {
let s = A.Z.get(t.planIdForCurrencies);
l()(null != e, 'paymentSource not specified for change'), l()(null != s, 'Unable to fetch plan');
let n = (0, g.DE)(s.id, e.id, !1);
return n.length > 0 ? n[0] : R.pKx.USD;
  }, W = e => {
null != e && k(e, H(e), w);
  }, K = e => {
(0, g.i1)(e.id, (0, O.yb)(t)).then(() => {
  k(e, H(e), w);
}), 'function' == typeof s && s(e.id);
  }, z = () => {
(0, d.openModalLazy)(async () => e => (0, n.jsx)(u.default, {
  ...e,
  onAddPaymentSource: K,
  analyticsLocation: f
}), {
  onCloseCallback: () => {
    (0, _.fw)();
  },
  onCloseRequest: R.dG4
});
  };
  if (t.isPurchasedExternally)
return (e => {
  l()(null != e.paymentGateway, 'Expected payment gateway when managed externally');
  let t = (0, h.JE)(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT');
  return (0, n.jsx)(d.Anchor, {
    href: t,
    useDefaultUnderlineStyles: !1,
    className: M.externalLink,
    children: (0, n.jsx)(d.Button, {
      fullWidth: !0,
      look: d.Button.Looks.FILLED,
      color: d.Button.Colors.PRIMARY,
      children: x.Z.Messages.BILLING_MANAGE_BILLING
    })
  });
})(t);
  if (!j || !B)
return (0, n.jsx)(d.Spinner, {});
  if (!(G.length > 0))
return (0, n.jsx)(d.Button, {
  fullWidth: !0,
  look: d.Button.Looks.FILLED,
  color: i ? d.Button.Colors.BRAND : d.Button.Colors.PRIMARY,
  onClick: z,
  children: x.Z.Messages.BILLING_ADD_PAYMENT_METHOD
});
  else {
let e = A.Z.get(t.planIdForCurrencies);
l()(null != e, 'Unable to fetch plan');
let s = (0, g.DE)(e, t.paymentSourceId, !1);
return (0, n.jsxs)(n.Fragment, {
  children: [
    (() => {
      let e = t.paymentSourceId;
      return (0, n.jsx)(I.Z, {
        prependOption: null == e ? {
          label: x.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION,
          value: null
        } : null,
        className: o,
        paymentSources: G,
        hidePersonalInformation: b,
        selectedPaymentSourceId: e,
        onChange: W,
        onPaymentSourceAdd: z,
        dropdownLoading: F,
        disabled: Z
      });
    })(),
    null != t.paymentSourceId ? (0, n.jsx)(T.b, {
      currencies: s,
      children: (0, n.jsxs)('div', {
        className: r()(M.currency, D.flex, D.alignCenter),
        children: [
          (0, n.jsx)('div', {
            children: x.Z.Messages.PAYMENT_CURRENCY_PAYING_IN
          }),
          (0, n.jsx)(T.Z, {
            className: M.currencyDropdown,
            selectedCurrency: V,
            currencies: s,
            onChange: e => {
              k(void 0, e, w);
            }
          })
        ]
      })
    }) : null
  ]
});
  }
}
let P = async (e, t, a) => {
  let i = await (0, d.openModalLazy)(async () => {
let {
  default: i
} = await s.e('97516').then(s.bind(s, 358927));
return s => (0, n.jsx)(i, {
  newInvoice: e,
  onConfirm: t,
  onCancel: a,
  modalProps: s
});
  }, {
onCloseRequest: () => {
  null != i && (0, d.closeModal)(i), a();
}
  });
};