"use strict";
a.r(t), a.d(t, {
  default: function() {
    return v
  },
  useLightningCheckoutEligibility: function() {
    return L
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("512722"),
  n = a.n(r),
  i = a("481060"),
  o = a("16084"),
  u = a("244526"),
  c = a("881052"),
  d = a("128069"),
  f = a("176919"),
  m = a("63063"),
  C = a("937615"),
  p = a("563132"),
  h = a("409813"),
  E = a("333867"),
  g = a("74179"),
  x = a("981631"),
  S = a("255094");
let b = e => {
    let {
      children: t,
      style: a,
      className: s,
      ...r
    } = e;
    return (0, l.jsx)(i.Button, {
      size: i.ButtonSizes.SMALL,
      fullWidth: !0,
      look: i.Button.Looks.FILLED,
      color: i.ButtonColors.GREEN,
      style: a,
      className: s,
      ...r,
      children: t
    })
  },
  T = e => {
    let {
      children: t,
      className: a,
      ...s
    } = e;
    return (0, l.jsx)(i.Button, {
      size: i.ButtonSizes.SMALL,
      look: i.ButtonLooks.BLANK,
      color: i.ButtonColors.TRANSPARENT,
      className: a,
      fullWidth: !0,
      ...s,
      children: t
    })
  };

function L() {
  let {
    defaultPaymentSource: e
  } = (0, g.default)({
    isGift: !1,
    activeSubscription: null
  });
  return {
    userIsEligible: null !== e && !x.REDIRECTED_PAYMENT_SOURCES.has(e.type)
  }
}

function v(e) {
  let {
    onPurchaseComplete: t,
    onError: a,
    onReviewPurchase: r,
    paymentSource: g,
    loadId: L,
    skuId: v,
    isGift: I = !1,
    analyticsLocations: N
  } = e, {
    step: _,
    setStep: y,
    paymentError: O,
    paymentAuthenticationState: k,
    application: A,
    skuPricePreviewsById: R
  } = (0, p.usePaymentContext)(), [j, P] = s.useState(!1), B = s.useRef(null), D = R[v], F = null != D ? D[g.id] : null, M = null != F ? (0, C.formatPrice)(null == F ? void 0 : F.amount, null == F ? void 0 : F.currency) : null;
  s.useEffect(() => {
    _ !== h.Step.REVIEW && y(h.Step.REVIEW)
  }), s.useEffect(() => {
    k === f.PaymentAuthenticationState.ERROR && a(O)
  }, [a, O, k]);
  let w = async () => {
    n()(null != F, "skuPricePreview can't be null"), n()(null != A, "application can't be null");
    try {
      await (0, o.purchaseSKU)(A.id, v, {
        expectedAmount: F.amount,
        expectedCurrency: F.currency,
        isGift: I,
        paymentSource: g,
        loadId: L
      }), P(!1), t()
    } catch (t) {
      let e = t instanceof c.BillingError ? t : new c.BillingError(t);
      e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED && e.code !== d.ErrorCodes.AUTHENTICATION_REQUIRED && a(t)
    }
  }, H = s.useCallback(e => {
    e === h.Step.CONFIRM && (P(!1), t()), y(e)
  }, [y, t]);
  return (0, f.usePaymentStepForAuthentication)(_, k, H), (0, l.jsxs)("div", {
    className: S.reviewContainer,
    children: [(0, l.jsx)(i.FormSection, {
      children: (0, l.jsx)(i.FormItem, {
        children: (0, l.jsx)(u.default, {
          paymentSource: g,
          isDefault: !0,
          showSubtext: !1,
          showPaymentSourceIcon: !1,
          showDefaultLabel: !1,
          locale: "en-US"
        })
      })
    }), (0, l.jsx)("div", {
      className: S.legalTerms,
      children: (0, l.jsxs)("p", {
        children: ["Non-refundable. By clicking, you are agreeing to our", " ", (0, l.jsx)(i.Anchor, {
          href: m.default.getArticleURL(x.HelpdeskArticles.PAID_TERMS),
          children: "Paid Services Terms."
        })]
      })
    }), (0, l.jsx)(b, {
      className: S.buyButton,
      submitting: j,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        P(!0), await w()
      },
      children: null !== M ? "Pay " + M : (0, l.jsx)(i.Spinner, {
        type: i.Spinner.Type.PULSING_ELLIPSIS
      })
    }), !j && (0, l.jsx)(T, {
      className: S.reviewButton,
      onClick: () => {
        r(), (0, E.default)({
          skuId: v,
          analyticsLocations: N,
          returnRef: B
        })
      },
      children: "Review Purchase"
    })]
  })
}