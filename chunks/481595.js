s.d(n, {
  Z: function() {
return b;
  }
});
var l = s(735250),
  t = s(470079),
  i = s(512722),
  r = s.n(i),
  a = s(742280),
  c = s(399606),
  o = s(481060),
  u = s(224550),
  d = s(609194),
  _ = s(275850),
  m = s(672971),
  E = s(115130),
  I = s(653798),
  p = s(314182),
  N = s(251660),
  T = s(246946),
  x = s(351402),
  S = s(855775),
  h = s(695103),
  P = s(366695),
  f = s(4912),
  A = s(669079),
  v = s(937615),
  M = s(987209),
  g = s(598),
  C = s(45572),
  O = s(119226),
  R = s(981631),
  j = s(689938),
  L = s(482775);

function y(e) {
  let {
sku: n,
skuPricePreview: s
  } = e;
  r()(null != s.amount, 'SKU must have a price set.');
  let t = s.amount - s.tax;
  return !s.tax_inclusive && s.tax > 0 ? (0, l.jsxs)(I.PO, {
className: L.invoice,
children: [
  (0, l.jsx)(I.R$, {
    label: n.name,
    value: (0, v.T4)(t, s.currency),
    className: L.subscriptionCostRow
  }),
  (0, l.jsx)(I.R$, {
    label: j.Z.Messages.PURCHASE_REVIEW_TAX_LABEL,
    value: (0, v.T4)(s.tax, s.currency),
    className: L.subscriptionCostRow
  }),
  (0, l.jsx)(I.KU, {}),
  (0, l.jsx)(I.Ji, {
    label: j.Z.Messages.BILLING_INVOICE_TOTAL.format(),
    value: (0, v.T4)(s.amount, s.currency),
    className: L.subscriptionCostRow
  })
]
  }) : (0, l.jsx)(I.PO, {
className: L.invoice,
children: (0, l.jsx)(I.R$, {
  label: n.name,
  value: (0, v.T4)(s.amount, s.currency),
  className: L.subscriptionCostRow
})
  });
}

function Z(e) {
  let {
application: n,
sku: s,
isEmbeddedIAP: t
  } = e;
  return !0 !== t ? null : (0, l.jsxs)('div', {
className: L.skuHeading,
children: [
  (0, l.jsx)(P.Z, {
    game: n
  }),
  (0, l.jsx)(o.Heading, {
    variant: 'heading-lg/bold',
    className: L.skuHeadingText,
    children: s.name
  })
]
  });
}

function b(e) {
  let {
hasLegalTermsFlash: n,
legalTermsNodeRef: s,
onPaymentSourceChange: i,
handlePaymentSourceAdd: P
  } = e, {
application: v,
purchaseState: b,
paymentSources: D,
paymentSourceId: G,
setHasAcceptedTerms: U,
skusById: F,
skuPricePreviewsById: B,
selectedSkuId: w,
isEmbeddedIAP: H,
purchaseType: k,
purchasePreviewError: W
  } = (0, g.usePaymentContext)(), {
isGift: Y,
giftRecipient: K
  } = (0, M.wD)(), V = Y && (0, A.pO)(K);
  r()(null != w, 'Expected selectedSkuId');
  let z = F[w],
X = B[w],
J = null != G ? G : S.c,
q = null != X ? X[J] : null;
  r()(null != z, 'SKU must exist and be fetched.'), r()(null != v, 'Application must exist.');
  let Q = (0, c.e7)([
  E.Z,
  h.Z
], () => h.Z.inTestModeForApplication(v.id) || E.Z.inDevModeForApplication(v.id), [v.id]),
$ = (0, c.e7)([T.Z], () => T.Z.enabled),
ee = a.M.EEA_COUNTRIES.has(x.Z.ipCountryCodeWithFallback),
en = b === C.A.PURCHASING || b === C.A.COMPLETED,
es = null != G ? D[G].type : null,
el = t.useMemo(() => null != q ? (0, l.jsx)(y, {
  sku: z,
  skuPricePreview: q
}) : null == W ? (0, l.jsx)(o.Spinner, {
  type: o.Spinner.Type.WANDERING_CUBES,
  className: L.invoiceSpinner
}) : (0, l.jsx)(I.PO, {
  className: L.invoice,
  children: (0, l.jsx)(I.R$, {
    label: z.name,
    value: null,
    className: L.subscriptionCostRow
  })
}), [
  W,
  z,
  q
]);
  return (0, l.jsxs)('div', {
className: L.stepBody,
children: [
  Q && (0, l.jsx)(d.Z, {
    icon: (0, o.makeIconCompat)(f.Z),
    iconSize: d.Z.Sizes.SMALL,
    color: d.Z.Colors.WARNING,
    className: L.errorBlock,
    children: j.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
  }, 'TEST_MODE'),
  (0, l.jsx)(Z, {
    application: v,
    sku: z,
    isEmbeddedIAP: H
  }),
  V && (0, l.jsx)(O.Z, {
    sku: z
  }),
  null != K ? (0, l.jsx)(N.s, {
    giftRecipient: K
  }) : null,
  (0, l.jsx)(o.FormTitle, {
    tag: o.FormTitleTags.H5,
    children: Y ? j.Z.Messages.PREMIUM_GIFTING_BUTTON : j.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
  }),
  el,
  (0, l.jsxs)('div', {
    className: L.paymentSourceWrapper,
    children: [
      (0, l.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: j.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }),
      (0, l.jsx)(_.Z, {
        paymentSources: Object.values(D),
        selectedPaymentSourceId: G,
        onChange: i,
        onPaymentSourceAdd: P,
        hidePersonalInformation: $
      })
    ]
  }),
  (0, l.jsx)(p.Z, {
    isActive: n,
    ref: s,
    children: (0, l.jsx)(m.Z, {
      onChange: U,
      forceShow: !0,
      showWithdrawalWaiver: ee,
      disabled: en,
      subscriptionPlan: null,
      finePrintClassname: L.fineprint,
      purchaseType: k,
      isGift: Y,
      checkboxLabel: z.productLine === R.POd.COLLECTIBLES ? j.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
        paidURL: R.EYA.PAID_TERMS
      }) : void 0,
      finePrint: (0, l.jsx)(u.Z, {
        paymentSourceType: es,
        isEmbeddedIAP: H,
        purchaseType: k,
        productLine: z.productLine,
        isGift: Y
      })
    })
  })
]
  });
}