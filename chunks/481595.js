"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var i = n("735250");
n("470079");
var s = n("512722"),
  a = n.n(s),
  l = n("742280"),
  r = n("399606"),
  u = n("481060"),
  o = n("224550"),
  c = n("609194"),
  d = n("275850"),
  m = n("672971"),
  f = n("115130"),
  p = n("653798"),
  S = n("314182"),
  _ = n("251660"),
  I = n("246946"),
  E = n("351402"),
  P = n("855775"),
  T = n("695103"),
  N = n("366695"),
  h = n("4912"),
  x = n("669079"),
  v = n("937615"),
  A = n("987209"),
  C = n("598"),
  g = n("45572"),
  y = n("916616"),
  M = n("981631"),
  b = n("689938"),
  O = n("812011");

function R(e) {
  let {
    sku: t,
    skuPricePreview: n
  } = e;
  a()(null != n.amount, "SKU must have a price set.");
  let s = n.amount - n.tax;
  return !n.tax_inclusive && n.tax > 0 ? (0, i.jsxs)(p.PremiumInvoiceTable, {
    className: O.invoice,
    children: [(0, i.jsx)(p.PremiumInvoiceTableRow, {
      label: t.name,
      value: (0, v.formatPrice)(s, n.currency),
      className: O.subscriptionCostRow
    }), (0, i.jsx)(p.PremiumInvoiceTableRow, {
      label: b.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
      value: (0, v.formatPrice)(n.tax, n.currency),
      className: O.subscriptionCostRow
    }), (0, i.jsx)(p.PremiumInvoiceTableDivider, {}), (0, i.jsx)(p.PremiumInvoiceTableTotalRow, {
      label: b.default.Messages.BILLING_INVOICE_TOTAL.format(),
      value: (0, v.formatPrice)(n.amount, n.currency),
      className: O.subscriptionCostRow
    })]
  }) : (0, i.jsx)(p.PremiumInvoiceTable, {
    className: O.invoice,
    children: (0, i.jsx)(p.PremiumInvoiceTableRow, {
      label: t.name,
      value: (0, v.formatPrice)(n.amount, n.currency),
      className: O.subscriptionCostRow
    })
  })
}

function L(e) {
  let {
    application: t,
    sku: n,
    isEmbeddedIAP: s
  } = e;
  return !0 !== s ? null : (0, i.jsxs)("div", {
    className: O.skuHeading,
    children: [(0, i.jsx)(N.default, {
      game: t
    }), (0, i.jsx)(u.Heading, {
      variant: "heading-lg/bold",
      className: O.skuHeadingText,
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
    purchaseState: v,
    paymentSources: j,
    paymentSourceId: G,
    setHasAcceptedTerms: D,
    skusById: F,
    skuPricePreviewsById: U,
    selectedSkuId: w,
    isEmbeddedIAP: B,
    purchaseType: k
  } = (0, C.usePaymentContext)(), {
    isGift: H,
    giftRecipient: W
  } = (0, A.useGiftContext)(), Y = H && (0, x.shouldShowCustomGiftExperience)(W);
  a()(null != w, "Expected selectedSkuId");
  let K = F[w],
    V = U[w],
    Z = null != G ? G : P.NO_PAYMENT_SOURCE,
    z = null != V ? V[Z] : null;
  a()(null != K, "SKU must exist and be fetched."), a()(null != N, "Application must exist.");
  let J = (0, r.useStateFromStores)([f.default, T.default], () => T.default.inTestModeForApplication(N.id) || f.default.inDevModeForApplication(N.id), [N.id]),
    X = (0, r.useStateFromStores)([I.default], () => I.default.enabled),
    q = l.CountryCodesSets.EEA_COUNTRIES.has(E.default.ipCountryCodeWithFallback),
    Q = v === g.PurchaseState.PURCHASING || v === g.PurchaseState.COMPLETED,
    $ = null != G ? j[G].type : null;
  return (0, i.jsxs)("div", {
    className: O.stepBody,
    children: [J && (0, i.jsx)(c.default, {
      icon: h.default,
      iconSize: c.default.Sizes.SMALL,
      color: c.default.Colors.WARNING,
      className: O.errorBlock,
      children: b.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
    }, "TEST_MODE"), (0, i.jsx)(L, {
      application: N,
      sku: K,
      isEmbeddedIAP: B
    }), Y && (0, i.jsx)(y.default, {
      sku: K
    }), null != W ? (0, i.jsx)(_.SendGiftToUser, {
      giftRecipient: W
    }) : null, (0, i.jsx)(u.FormTitle, {
      tag: u.FormTitleTags.H5,
      children: H ? b.default.Messages.PREMIUM_GIFTING_BUTTON : b.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
    }), null == z ? (0, i.jsx)(u.Spinner, {
      type: u.Spinner.Type.WANDERING_CUBES,
      className: O.invoiceSpinner
    }) : (0, i.jsx)(R, {
      sku: K,
      skuPricePreview: z
    }), (0, i.jsxs)("div", {
      className: O.paymentSourceWrapper,
      children: [(0, i.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        children: b.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(d.default, {
        paymentSources: Object.values(j),
        selectedPaymentSourceId: G,
        onChange: s,
        onPaymentSourceAdd: p,
        hidePersonalInformation: X
      })]
    }), (0, i.jsx)(S.default, {
      isActive: t,
      ref: n,
      children: (0, i.jsx)(m.default, {
        onChange: D,
        forceShow: !0,
        showWithdrawalWaiver: q,
        disabled: Q,
        subscriptionPlan: null,
        finePrintClassname: O.fineprint,
        purchaseType: k,
        isGift: H,
        checkboxLabel: K.productLine === M.SKUProductLines.COLLECTIBLES ? b.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
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