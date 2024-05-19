"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var i = n("735250");
n("470079");
var s = n("512722"),
  l = n.n(s),
  a = n("742280"),
  r = n("399606"),
  u = n("481060"),
  o = n("224550"),
  c = n("609194"),
  d = n("275850"),
  m = n("672971"),
  f = n("115130"),
  p = n("653798"),
  _ = n("314182"),
  S = n("251660"),
  I = n("246946"),
  P = n("351402"),
  E = n("855775"),
  T = n("695103"),
  N = n("366695"),
  v = n("4912"),
  h = n("669079"),
  x = n("937615"),
  A = n("987209"),
  C = n("598"),
  y = n("45572"),
  g = n("916616"),
  M = n("981631"),
  R = n("689938"),
  b = n("674122");

function L(e) {
  let {
    sku: t,
    skuPricePreview: n
  } = e;
  l()(null != n.amount, "SKU must have a price set.");
  let s = n.amount - n.tax;
  return !n.tax_inclusive && n.tax > 0 ? (0, i.jsxs)(p.PremiumInvoiceTable, {
    className: b.invoice,
    children: [(0, i.jsx)(p.PremiumInvoiceTableRow, {
      label: t.name,
      value: (0, x.formatPrice)(s, n.currency),
      className: b.subscriptionCostRow
    }), (0, i.jsx)(p.PremiumInvoiceTableRow, {
      label: R.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
      value: (0, x.formatPrice)(n.tax, n.currency),
      className: b.subscriptionCostRow
    }), (0, i.jsx)(p.PremiumInvoiceTableDivider, {}), (0, i.jsx)(p.PremiumInvoiceTableTotalRow, {
      label: R.default.Messages.BILLING_INVOICE_TOTAL.format(),
      value: (0, x.formatPrice)(n.amount, n.currency),
      className: b.subscriptionCostRow
    })]
  }) : (0, i.jsx)(p.PremiumInvoiceTable, {
    className: b.invoice,
    children: (0, i.jsx)(p.PremiumInvoiceTableRow, {
      label: t.name,
      value: (0, x.formatPrice)(n.amount, n.currency),
      className: b.subscriptionCostRow
    })
  })
}

function O(e) {
  let {
    application: t,
    sku: n,
    isEmbeddedIAP: s
  } = e;
  return !0 !== s ? null : (0, i.jsxs)("div", {
    className: b.skuHeading,
    children: [(0, i.jsx)(N.default, {
      game: t
    }), (0, i.jsx)(u.Heading, {
      variant: "heading-lg/bold",
      className: b.skuHeadingText,
      children: n.name
    })]
  })
}

function j(e) {
  let {
    hasLegalTermsFlash: t,
    legalTermsNodeRef: n,
    onPaymentSourceChange: s,
    handlePaymentSourceAdd: p
  } = e, {
    application: N,
    purchaseState: x,
    paymentSources: j,
    paymentSourceId: G,
    setHasAcceptedTerms: D,
    skusById: U,
    skuPricePreviewsById: F,
    selectedSkuId: w,
    isEmbeddedIAP: B,
    purchaseType: k
  } = (0, C.usePaymentContext)(), {
    isGift: H,
    giftRecipient: W
  } = (0, A.useGiftContext)(), Y = H && (0, h.shouldShowCustomGiftExperience)(W);
  l()(null != w, "Expected selectedSkuId");
  let K = U[w],
    V = F[w],
    Z = null != G ? G : E.NO_PAYMENT_SOURCE,
    z = null != V ? V[Z] : null;
  l()(null != K, "SKU must exist and be fetched."), l()(null != N, "Application must exist.");
  let X = (0, r.useStateFromStores)([f.default, T.default], () => T.default.inTestModeForApplication(N.id) || f.default.inDevModeForApplication(N.id), [N.id]),
    J = (0, r.useStateFromStores)([I.default], () => I.default.enabled),
    q = a.CountryCodesSets.EEA_COUNTRIES.has(P.default.ipCountryCodeWithFallback),
    Q = x === y.PurchaseState.PURCHASING || x === y.PurchaseState.COMPLETED,
    $ = null != G ? j[G].type : null;
  return (0, i.jsxs)("div", {
    className: b.stepBody,
    children: [X && (0, i.jsx)(c.default, {
      icon: v.default,
      iconSize: c.default.Sizes.SMALL,
      color: c.default.Colors.WARNING,
      className: b.errorBlock,
      children: R.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
    }, "TEST_MODE"), (0, i.jsx)(O, {
      application: N,
      sku: K,
      isEmbeddedIAP: B
    }), Y && (0, i.jsx)(g.default, {
      sku: K
    }), null != W ? (0, i.jsx)(S.SendGiftToUser, {
      giftRecipient: W
    }) : null, (0, i.jsx)(u.FormTitle, {
      tag: u.FormTitleTags.H5,
      children: H ? R.default.Messages.PREMIUM_GIFTING_BUTTON : R.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
    }), null == z ? (0, i.jsx)(u.Spinner, {
      type: u.Spinner.Type.WANDERING_CUBES,
      className: b.invoiceSpinner
    }) : (0, i.jsx)(L, {
      sku: K,
      skuPricePreview: z
    }), (0, i.jsxs)("div", {
      className: b.paymentSourceWrapper,
      children: [(0, i.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        children: R.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(d.default, {
        paymentSources: Object.values(j),
        selectedPaymentSourceId: G,
        onChange: s,
        onPaymentSourceAdd: p,
        hidePersonalInformation: J
      })]
    }), (0, i.jsx)(_.default, {
      isActive: t,
      ref: n,
      children: (0, i.jsx)(m.default, {
        onChange: D,
        forceShow: !0,
        showWithdrawalWaiver: q,
        disabled: Q,
        subscriptionPlan: null,
        finePrintClassname: b.fineprint,
        purchaseType: k,
        isGift: H,
        checkboxLabel: K.productLine === M.SKUProductLines.COLLECTIBLES ? R.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
          paidURL: M.MarketingURLs.PAID_TERMS
        }) : void 0,
        finePrint: (0, i.jsx)(o.default, {
          paymentSourceType: $,
          isEmbeddedIAP: B,
          purchaseType: k,
          productLine: K.productLine,
          isGift: H
        })
      })
    })]
  })
}