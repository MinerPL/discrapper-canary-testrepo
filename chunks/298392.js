"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var s = n("37983");
n("884691");
var r = n("627445"),
  a = n.n(r),
  i = n("976979"),
  l = n("65597"),
  u = n("77078"),
  c = n("703332"),
  o = n("812952"),
  d = n("740055"),
  m = n("545876"),
  f = n("84460"),
  p = n("883662"),
  _ = n("623003"),
  I = n("617223"),
  S = n("102985"),
  E = n("160299"),
  P = n("622839"),
  T = n("167726"),
  N = n("953109"),
  A = n("315585"),
  C = n("659632"),
  h = n("153160"),
  v = n("635357"),
  g = n("642906"),
  x = n("286350"),
  y = n("628135"),
  O = n("49111"),
  M = n("782340"),
  R = n("816845");

function L(e) {
  let {
    sku: t,
    skuPricePreview: n
  } = e;
  a(null != n.amount, "SKU must have a price set.");
  let r = n.amount - n.tax;
  return !n.tax_inclusive && n.tax > 0 ? (0, s.jsxs)(p.PremiumInvoiceTable, {
    className: R.invoice,
    children: [(0, s.jsx)(p.PremiumInvoiceTableRow, {
      label: t.name,
      value: (0, h.formatPrice)(r, n.currency),
      className: R.subscriptionCostRow
    }), (0, s.jsx)(p.PremiumInvoiceTableRow, {
      label: M.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
      value: (0, h.formatPrice)(n.tax, n.currency),
      className: R.subscriptionCostRow
    }), (0, s.jsx)(p.PremiumInvoiceTableDivider, {}), (0, s.jsx)(p.PremiumInvoiceTableTotalRow, {
      label: M.default.Messages.BILLING_INVOICE_TOTAL.format(),
      value: (0, h.formatPrice)(n.amount, n.currency),
      className: R.subscriptionCostRow
    })]
  }) : (0, s.jsx)(p.PremiumInvoiceTable, {
    className: R.invoice,
    children: (0, s.jsx)(p.PremiumInvoiceTableRow, {
      label: t.name,
      value: (0, h.formatPrice)(n.amount, n.currency),
      className: R.subscriptionCostRow
    })
  })
}

function b(e) {
  let {
    application: t,
    sku: n,
    isEmbeddedIAP: r
  } = e;
  return !0 !== r ? null : (0, s.jsxs)("div", {
    className: R.skuHeading,
    children: [(0, s.jsx)(N.default, {
      game: t
    }), (0, s.jsx)(u.Heading, {
      variant: "heading-lg/bold",
      className: R.skuHeadingText,
      children: n.name
    })]
  })
}

function j(e) {
  let {
    hasLegalTermsFlash: t,
    legalTermsNodeRef: n,
    onPaymentSourceChange: r,
    handlePaymentSourceAdd: p
  } = e, {
    application: N,
    purchaseState: h,
    paymentSources: j,
    paymentSourceId: G,
    setHasAcceptedTerms: D,
    skusById: U,
    skuPricePreviewsById: F,
    selectedSkuId: B,
    isEmbeddedIAP: w,
    purchaseType: k
  } = (0, g.usePaymentContext)(), {
    isGift: H,
    giftRecipient: Y
  } = (0, v.useGiftContext)(), W = H && (0, C.shouldShowCustomGiftExperience)(Y);
  a(null != B, "Expected selectedSkuId");
  let Z = U[B],
    K = F[B],
    V = null != G ? G : P.NO_PAYMENT_SOURCE,
    z = null != K ? K[V] : null;
  a(null != Z, "SKU must exist and be fetched."), a(null != N, "Application must exist.");
  let J = (0, l.useStateFromStores)([f.default, T.default], () => T.default.inTestModeForApplication(N.id) || f.default.inDevModeForApplication(N.id), [N.id]),
    X = (0, l.useStateFromStores)([S.default], () => S.default.enabled),
    q = i.CountryCodesSets.EEA_COUNTRIES.has(E.default.ipCountryCodeWithFallback),
    Q = h === x.PurchaseState.PURCHASING || h === x.PurchaseState.COMPLETED,
    $ = null != G ? j[G].type : null;
  return (0, s.jsxs)("div", {
    className: R.stepBody,
    children: [J && (0, s.jsx)(o.default, {
      icon: A.default,
      iconSize: o.default.Sizes.SMALL,
      color: o.default.Colors.WARNING,
      className: R.errorBlock,
      children: M.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
    }, "TEST_MODE"), (0, s.jsx)(b, {
      application: N,
      sku: Z,
      isEmbeddedIAP: w
    }), W && (0, s.jsx)(y.default, {
      sku: Z
    }), null != Y ? (0, s.jsx)(I.SendGiftToUser, {
      giftRecipient: Y
    }) : null, (0, s.jsx)(u.FormTitle, {
      tag: u.FormTitleTags.H5,
      children: H ? M.default.Messages.PREMIUM_GIFTING_BUTTON : M.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
    }), null == z ? (0, s.jsx)(u.Spinner, {
      type: u.Spinner.Type.WANDERING_CUBES,
      className: R.invoiceSpinner
    }) : (0, s.jsx)(L, {
      sku: Z,
      skuPricePreview: z
    }), (0, s.jsxs)("div", {
      className: R.paymentSourceWrapper,
      children: [(0, s.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        children: M.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, s.jsx)(d.default, {
        paymentSources: Object.values(j),
        selectedPaymentSourceId: G,
        onChange: r,
        onPaymentSourceAdd: p,
        hidePersonalInformation: X
      })]
    }), (0, s.jsx)(_.default, {
      isActive: t,
      ref: n,
      children: (0, s.jsx)(m.default, {
        onChange: D,
        forceShow: !0,
        showWithdrawalWaiver: q,
        disabled: Q,
        subscriptionPlan: null,
        finePrintClassname: R.fineprint,
        purchaseType: k,
        isGift: H,
        checkboxLabel: Z.productLine === O.SKUProductLines.COLLECTIBLES ? M.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
          paidURL: O.MarketingURLs.PAID_TERMS
        }) : void 0,
        finePrint: (0, s.jsx)(c.default, {
          paymentSourceType: $,
          isEmbeddedIAP: w,
          purchaseType: k,
          productLine: Z.productLine,
          isGift: H
        })
      })
    })]
  })
}