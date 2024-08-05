t.d(n, {
  Z: function() {
return w;
  }
});
var i = t(735250),
  a = t(470079),
  r = t(512722),
  s = t.n(r),
  l = t(742280),
  o = t(399606),
  c = t(481060),
  u = t(16084),
  d = t(224550),
  _ = t(609194),
  p = t(275850),
  m = t(672971),
  I = t(115130),
  f = t(925329),
  E = t(653798),
  x = t(314182),
  N = t(251660),
  S = t(246946),
  T = t(351402),
  h = t(853872),
  b = t(855775),
  g = t(695103),
  P = t(4912),
  v = t(669079),
  A = t(937615),
  C = t(987209),
  M = t(598),
  y = t(45572),
  O = t(119226),
  R = t(981631),
  L = t(689938),
  j = t(482775);

function Z(e) {
  let {
sku: n,
skuPricePreview: t
  } = e;
  s()(null != t.amount, 'SKU must have a price set.');
  let a = t.amount - t.tax;
  return !t.tax_inclusive && t.tax > 0 ? (0, i.jsxs)(E.PO, {
className: j.invoice,
children: [
  (0, i.jsx)(E.R$, {
    label: n.name,
    value: (0, A.T4)(a, t.currency),
    className: j.subscriptionCostRow
  }),
  (0, i.jsx)(E.R$, {
    label: L.Z.Messages.PURCHASE_REVIEW_TAX_LABEL,
    value: (0, A.T4)(t.tax, t.currency),
    className: j.subscriptionCostRow
  }),
  (0, i.jsx)(E.KU, {}),
  (0, i.jsx)(E.Ji, {
    label: L.Z.Messages.BILLING_INVOICE_TOTAL.format(),
    value: (0, A.T4)(t.amount, t.currency),
    className: j.subscriptionCostRow
  })
]
  }) : (0, i.jsx)(E.PO, {
className: j.invoice,
children: (0, i.jsx)(E.R$, {
  label: n.name,
  value: (0, A.T4)(t.amount, t.currency),
  className: j.subscriptionCostRow
})
  });
}

function D(e) {
  let {
application: n,
sku: t,
isEmbeddedIAP: a
  } = e;
  return !0 !== a ? null : (0, i.jsxs)('div', {
className: j.skuHeading,
children: [
  (0, i.jsx)(f.Z, {
    game: n
  }),
  (0, i.jsx)(c.Heading, {
    variant: 'heading-lg/bold',
    className: j.skuHeadingText,
    children: t.name
  })
]
  });
}

function w(e) {
  let {
hasLegalTermsFlash: n,
legalTermsNodeRef: t,
onPaymentSourceChange: r,
handlePaymentSourceAdd: f
  } = e, {
application: A,
purchaseState: w,
paymentSources: G,
paymentSourceId: B,
setHasAcceptedTerms: U,
skusById: k,
skuPricePreviewsById: F,
selectedSkuId: W,
isEmbeddedIAP: H,
purchaseType: Y,
purchasePreviewError: K
  } = (0, M.usePaymentContext)(), {
isGift: V,
giftRecipient: z
  } = (0, C.wD)(), X = V && (0, v.pO)(z), {
defaultPaymentSourceId: q,
hasFetchedPaymentSources: J
  } = (0, o.cj)([h.Z], () => ({
defaultPaymentSourceId: h.Z.defaultPaymentSourceId,
hasFetchedPaymentSources: h.Z.hasFetchedPaymentSources
  }));
  s()(null != W, 'Expected selectedSkuId');
  let Q = k[W],
$ = F[W],
ee = null != B ? B : b.c,
en = null != $ ? $[ee] : null;
  s()(null != Q, 'SKU must exist and be fetched.'), s()(null != A, 'Application must exist.');
  let et = (0, o.e7)([
  I.Z,
  g.Z
], () => g.Z.inTestModeForApplication(A.id) || I.Z.inDevModeForApplication(A.id), [A.id]),
ei = (0, o.e7)([S.Z], () => S.Z.enabled),
ea = l.M.EEA_COUNTRIES.has(T.Z.ipCountryCodeWithFallback),
er = w === y.A.PURCHASING || w === y.A.COMPLETED,
es = null != B ? G[B].type : null;
  return a.useEffect(() => {
J && q !== b.c && null == en && (0, u.x2)(Q.applicationId, Q.id, q);
  }, [
q,
J,
Q.applicationId,
Q.id,
en
  ]), (0, i.jsxs)('div', {
className: j.stepBody,
children: [
  et && (0, i.jsx)(_.Z, {
    icon: (0, c.makeIconCompat)(P.Z),
    iconSize: _.Z.Sizes.SMALL,
    color: _.Z.Colors.WARNING,
    className: j.errorBlock,
    children: L.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
  }, 'TEST_MODE'),
  (0, i.jsx)(D, {
    application: A,
    sku: Q,
    isEmbeddedIAP: H
  }),
  X && (0, i.jsx)(O.Z, {
    sku: Q
  }),
  null != z ? (0, i.jsx)(N.s, {
    giftRecipient: z
  }) : null,
  (0, i.jsx)(c.FormTitle, {
    tag: c.FormTitleTags.H5,
    children: V ? L.Z.Messages.PREMIUM_GIFTING_BUTTON : L.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
  }),
  null != en ? (0, i.jsx)(Z, {
    sku: Q,
    skuPricePreview: en
  }) : null == K ? (0, i.jsx)(c.Spinner, {
    type: c.Spinner.Type.WANDERING_CUBES,
    className: j.invoiceSpinner
  }) : (0, i.jsx)(E.PO, {
    className: j.invoice,
    children: (0, i.jsx)(E.R$, {
      label: Q.name,
      value: null,
      className: j.subscriptionCostRow
    })
  }),
  (0, i.jsxs)('div', {
    className: j.paymentSourceWrapper,
    children: [
      (0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        children: L.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }),
      (0, i.jsx)(p.Z, {
        paymentSources: Object.values(G),
        selectedPaymentSourceId: B,
        onChange: r,
        onPaymentSourceAdd: f,
        hidePersonalInformation: ei
      })
    ]
  }),
  (0, i.jsx)(x.Z, {
    isActive: n,
    ref: t,
    children: (0, i.jsx)(m.Z, {
      onChange: U,
      forceShow: !0,
      showWithdrawalWaiver: ea,
      disabled: er,
      subscriptionPlan: null,
      finePrintClassname: j.fineprint,
      purchaseType: Y,
      isGift: V,
      checkboxLabel: Q.productLine === R.POd.COLLECTIBLES ? L.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
        paidURL: R.EYA.PAID_TERMS
      }) : void 0,
      finePrint: (0, i.jsx)(d.Z, {
        paymentSourceType: es,
        isEmbeddedIAP: H,
        purchaseType: Y,
        productLine: Q.productLine,
        isGift: V
      })
    })
  })
]
  });
}