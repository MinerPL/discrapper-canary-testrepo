t.d(n, {
  Z: function() {
return Z;
  }
});
var i = t(735250),
  a = t(470079),
  r = t(512722),
  s = t.n(r),
  l = t(742280),
  o = t(399606),
  c = t(481060),
  u = t(224550),
  d = t(609194),
  _ = t(275850),
  p = t(672971),
  m = t(115130),
  I = t(925329),
  f = t(653798),
  E = t(314182),
  x = t(251660),
  N = t(246946),
  T = t(351402),
  S = t(855775),
  h = t(695103),
  b = t(4912),
  g = t(669079),
  P = t(937615),
  v = t(987209),
  A = t(598),
  C = t(45572),
  M = t(119226),
  y = t(981631),
  O = t(689938),
  R = t(482775);

function L(e) {
  let {
sku: n,
skuPricePreview: t
  } = e;
  s()(null != t.amount, 'SKU must have a price set.');
  let a = t.amount - t.tax;
  return !t.tax_inclusive && t.tax > 0 ? (0, i.jsxs)(f.PO, {
className: R.invoice,
children: [
  (0, i.jsx)(f.R$, {
    label: n.name,
    value: (0, P.T4)(a, t.currency),
    className: R.subscriptionCostRow
  }),
  (0, i.jsx)(f.R$, {
    label: O.Z.Messages.PURCHASE_REVIEW_TAX_LABEL,
    value: (0, P.T4)(t.tax, t.currency),
    className: R.subscriptionCostRow
  }),
  (0, i.jsx)(f.KU, {}),
  (0, i.jsx)(f.Ji, {
    label: O.Z.Messages.BILLING_INVOICE_TOTAL.format(),
    value: (0, P.T4)(t.amount, t.currency),
    className: R.subscriptionCostRow
  })
]
  }) : (0, i.jsx)(f.PO, {
className: R.invoice,
children: (0, i.jsx)(f.R$, {
  label: n.name,
  value: (0, P.T4)(t.amount, t.currency),
  className: R.subscriptionCostRow
})
  });
}

function j(e) {
  let {
application: n,
sku: t,
isEmbeddedIAP: a
  } = e;
  return !0 !== a ? null : (0, i.jsxs)('div', {
className: R.skuHeading,
children: [
  (0, i.jsx)(I.Z, {
    game: n
  }),
  (0, i.jsx)(c.Heading, {
    variant: 'heading-lg/bold',
    className: R.skuHeadingText,
    children: t.name
  })
]
  });
}

function Z(e) {
  let {
hasLegalTermsFlash: n,
legalTermsNodeRef: t,
onPaymentSourceChange: r,
handlePaymentSourceAdd: I
  } = e, {
application: P,
purchaseState: Z,
paymentSources: D,
paymentSourceId: w,
setHasAcceptedTerms: G,
skusById: B,
skuPricePreviewsById: U,
selectedSkuId: k,
isEmbeddedIAP: F,
purchaseType: W,
purchasePreviewError: H
  } = (0, A.usePaymentContext)(), {
isGift: Y,
giftRecipient: K
  } = (0, v.wD)(), V = Y && (0, g.pO)(K);
  s()(null != k, 'Expected selectedSkuId');
  let z = B[k],
X = U[k],
q = null != w ? w : S.c,
J = null != X ? X[q] : null;
  s()(null != z, 'SKU must exist and be fetched.'), s()(null != P, 'Application must exist.');
  let Q = (0, o.e7)([
  m.Z,
  h.Z
], () => h.Z.inTestModeForApplication(P.id) || m.Z.inDevModeForApplication(P.id), [P.id]),
$ = (0, o.e7)([N.Z], () => N.Z.enabled),
ee = l.M.EEA_COUNTRIES.has(T.Z.ipCountryCodeWithFallback),
en = Z === C.A.PURCHASING || Z === C.A.COMPLETED,
et = null != w ? D[w].type : null,
ei = a.useMemo(() => null != J ? (0, i.jsx)(L, {
  sku: z,
  skuPricePreview: J
}) : null == H ? (0, i.jsx)(c.Spinner, {
  type: c.Spinner.Type.WANDERING_CUBES,
  className: R.invoiceSpinner
}) : (0, i.jsx)(f.PO, {
  className: R.invoice,
  children: (0, i.jsx)(f.R$, {
    label: z.name,
    value: null,
    className: R.subscriptionCostRow
  })
}), [
  H,
  z,
  J
]);
  return (0, i.jsxs)('div', {
className: R.stepBody,
children: [
  Q && (0, i.jsx)(d.Z, {
    icon: (0, c.makeIconCompat)(b.Z),
    iconSize: d.Z.Sizes.SMALL,
    color: d.Z.Colors.WARNING,
    className: R.errorBlock,
    children: O.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
  }, 'TEST_MODE'),
  (0, i.jsx)(j, {
    application: P,
    sku: z,
    isEmbeddedIAP: F
  }),
  V && (0, i.jsx)(M.Z, {
    sku: z
  }),
  null != K ? (0, i.jsx)(x.s, {
    giftRecipient: K
  }) : null,
  (0, i.jsx)(c.FormTitle, {
    tag: c.FormTitleTags.H5,
    children: Y ? O.Z.Messages.PREMIUM_GIFTING_BUTTON : O.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
  }),
  ei,
  (0, i.jsxs)('div', {
    className: R.paymentSourceWrapper,
    children: [
      (0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        children: O.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }),
      (0, i.jsx)(_.Z, {
        paymentSources: Object.values(D),
        selectedPaymentSourceId: w,
        onChange: r,
        onPaymentSourceAdd: I,
        hidePersonalInformation: $
      })
    ]
  }),
  (0, i.jsx)(E.Z, {
    isActive: n,
    ref: t,
    children: (0, i.jsx)(p.Z, {
      onChange: G,
      forceShow: !0,
      showWithdrawalWaiver: ee,
      disabled: en,
      subscriptionPlan: null,
      finePrintClassname: R.fineprint,
      purchaseType: W,
      isGift: Y,
      checkboxLabel: z.productLine === y.POd.COLLECTIBLES ? O.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
        paidURL: y.EYA.PAID_TERMS
      }) : void 0,
      finePrint: (0, i.jsx)(u.Z, {
        paymentSourceType: et,
        isEmbeddedIAP: F,
        purchaseType: W,
        productLine: z.productLine,
        isGift: Y
      })
    })
  })
]
  });
}