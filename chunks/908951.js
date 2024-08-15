t.d(s, {
  Z: function() {
return D;
  }
}), t(47120), t(411104);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(512722),
  l = t.n(o),
  c = t(442837),
  d = t(481060),
  _ = t(976255),
  E = t(366939),
  u = t(623573),
  I = t(190947),
  T = t(275850),
  S = t(906732),
  N = t(15640),
  C = t(246946),
  m = t(853872),
  A = t(509545),
  g = t(74538),
  O = t(212895),
  h = t(296848),
  p = t(374649),
  R = t(981631),
  x = t(689938),
  M = t(553136),
  f = t(257995);

function D(e) {
  let {
subscription: s,
onPaymentSourceAdded: t,
highlightAddPaymentMethodButton: i,
dropdownClassName: o,
analyticsLocation: D,
currentInvoicePreview: L,
disabled: b = !1
  } = e, Z = (0, c.e7)([C.Z], () => C.Z.hidePersonalInformation), [v, j] = (0, c.Wu)([m.Z], () => [
m.Z.paymentSources,
m.Z.hasFetchedPaymentSources
  ]), B = (0, N.V)((0, h.yb)(s)), {
analyticsLocations: U
  } = (0, S.ZP)(), G = a.useMemo(() => Object.values(v).filter(e => !e.invalid), [v]), [F, y] = a.useState(!1), [V, Y] = a.useState(s.currency), w = async (e, t) => {
if (null == s)
  throw Error('missing subscription and paymentSource');
null == e ? await E.fG(s, t, U, D) : await E.tq(s, e, t, U, D), y(!1), Y(t);
  }, H = async (e, t, n) => {
y(!0);
let a = await (0, p.hz)({
  subscriptionId: s.id,
  paymentSourceId: null == e ? void 0 : e.id,
  renewal: !0,
  currency: t,
  analyticsLocations: U,
  analyticsLocation: D
});
L.currency !== a.currency || L.currency === a.currency && L.total !== a.total ? await P(a, () => {
  n(e, t);
}, () => {
  y(!1);
}) : n(e, t);
  }, k = e => {
let t = A.Z.get(s.planIdForCurrencies);
l()(null != e, 'paymentSource not specified for change'), l()(null != t, 'Unable to fetch plan');
let n = (0, O.DE)(t.id, e.id, !1);
return n.length > 0 ? n[0] : R.pKx.USD;
  }, W = e => {
null != e && H(e, k(e), w);
  }, K = e => {
(0, O.i1)(e.id, (0, h.yb)(s)).then(() => {
  H(e, k(e), w);
}), 'function' == typeof t && t(e.id);
  }, z = () => {
(0, d.openModalLazy)(async () => e => (0, n.jsx)(u.default, {
  ...e,
  onAddPaymentSource: K,
  analyticsLocation: D
}), {
  onCloseCallback: () => {
    (0, _.fw)();
  },
  onCloseRequest: R.dG4
});
  };
  if (s.isPurchasedExternally)
return (e => {
  l()(null != e.paymentGateway, 'Expected payment gateway when managed externally');
  let s = (0, g.JE)(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT');
  return (0, n.jsx)(d.Anchor, {
    href: s,
    useDefaultUnderlineStyles: !1,
    className: M.externalLink,
    children: (0, n.jsx)(d.Button, {
      fullWidth: !0,
      look: d.Button.Looks.FILLED,
      color: d.Button.Colors.PRIMARY,
      children: x.Z.Messages.BILLING_MANAGE_BILLING
    })
  });
})(s);
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
let e = A.Z.get(s.planIdForCurrencies);
l()(null != e, 'Unable to fetch plan');
let t = (0, O.DE)(e, s.paymentSourceId, !1);
return (0, n.jsxs)(n.Fragment, {
  children: [
    (() => {
      let e = s.paymentSourceId;
      return (0, n.jsx)(T.Z, {
        prependOption: null == e ? {
          label: x.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION,
          value: null
        } : null,
        className: o,
        paymentSources: G,
        hidePersonalInformation: Z,
        selectedPaymentSourceId: e,
        onChange: W,
        onPaymentSourceAdd: z,
        dropdownLoading: F,
        disabled: b
      });
    })(),
    null != s.paymentSourceId ? (0, n.jsx)(I.b, {
      currencies: t,
      children: (0, n.jsxs)('div', {
        className: r()(M.currency, f.flex, f.alignCenter),
        children: [
          (0, n.jsx)('div', {
            children: x.Z.Messages.PAYMENT_CURRENCY_PAYING_IN
          }),
          (0, n.jsx)(I.Z, {
            className: M.currencyDropdown,
            selectedCurrency: V,
            currencies: t,
            onChange: e => {
              H(void 0, e, w);
            }
          })
        ]
      })
    }) : null
  ]
});
  }
}
let P = async (e, s, a) => {
  let i = await (0, d.openModalLazy)(async () => {
let {
  default: i
} = await t.e('97516').then(t.bind(t, 358927));
return t => (0, n.jsx)(i, {
  newInvoice: e,
  onConfirm: s,
  onCancel: a,
  modalProps: t
});
  }, {
onCloseRequest: () => {
  null != i && (0, d.closeModal)(i), a();
}
  });
};