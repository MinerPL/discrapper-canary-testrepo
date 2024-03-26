"use strict";
n.r(t), n.d(t, {
  PaymentModalReviewStep: function() {
    return x
  }
}), n("222007"), n("70102");
var s = n("37983"),
  r = n("884691"),
  a = n("627445"),
  i = n.n(a),
  l = n("612039"),
  u = n("916187"),
  o = n("154889"),
  c = n("917247"),
  d = n("527866"),
  m = n("826795"),
  f = n("659632"),
  p = n("635357"),
  _ = n("642906"),
  S = n("85336"),
  I = n("310093"),
  E = n("367767"),
  P = n("176108"),
  T = n("298392"),
  N = n("153727"),
  A = n("39065"),
  C = n("650484"),
  h = n("646718"),
  v = n("843455"),
  g = n("782340");

function x(e) {
  var t, n;
  let a, {
      handleStepChange: x,
      trialId: y,
      trialFooterMessageOverride: O,
      reviewWarningMessage: M,
      planGroup: R,
      openInvoiceId: L,
      analyticsData: b,
      analyticsLocation: j,
      referralTrialOfferId: G,
      initialPlanId: D,
      subscriptionTier: U,
      handleClose: F
    } = e,
    {
      activeSubscription: B,
      setUpdatedSubscription: w,
      contextMetadata: k,
      currencies: H,
      paymentSourceId: Y,
      paymentSources: W,
      priceOptions: Z,
      purchaseError: K,
      purchaseTokenAuthState: V,
      selectedPlan: z,
      selectedSkuId: J,
      setCurrency: X,
      setPaymentSourceId: q,
      setPurchaseState: Q,
      setPurchaseError: $,
      step: ee,
      purchaseState: et,
      isPremium: en,
      setHasAcceptedTerms: es,
      purchaseType: er,
      setEntitlementsGranted: ea,
      startedPaymentFlowWithPaymentSourcesRef: ei
    } = (0, _.usePaymentContext)(),
    {
      isGift: el,
      giftMessage: eu,
      giftRecipient: eo
    } = (0, p.useGiftContext)();
  i(null != ee, "Step should be set");
  let ec = r.useRef(null),
    [ed, em] = (0, l.default)(!1, 500),
    ef = null !== (n = null != y ? y : G) && void 0 !== n ? n : null,
    ep = null != ef && (!en || (0, h.SubscriptionTrials)[ef].skus.includes(J)) ? ef : null,
    e_ = (0, c.usePremiumTrialOffer)(G),
    eS = (0, o.usePremiumDiscountOffer)(),
    eI = {
      user_trial_offer_id: null == e_ ? void 0 : e_.id
    };
  r.useEffect(() => {
    null != K && null != ec.current && ec.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [K]);
  let eE = r.useCallback((e, t) => {
      w(e), null != t && ea(t), x(S.Step.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [x, w, ea]),
    eP = null != Y ? W[Y] : null,
    eT = null != z && h.MULTI_MONTH_PLANS.has(z.id) && null != eP && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(eP) ? Error(g.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
    eN = r.useRef(null),
    [eA, eC] = r.useState(null),
    eh = !el && null != e_ && null != J && (0, h.SubscriptionTrials)[e_.trial_id].skus.includes(J),
    ev = null == eS ? void 0 : null === (t = eS.discount) || void 0 === t ? void 0 : t.plan_ids,
    eg = !el && null != eS && null != ev && null != z && ev.includes(z.id),
    ex = el && (0, f.shouldShowCustomGiftExperience)(eo),
    ey = null == D && null == U && er === v.PurchaseTypes.SUBSCRIPTION,
    eO = (0, P.inOneStepSubscriptionCheckout)({
      isTrial: eh,
      isGift: el,
      selectedSkuId: J,
      startedPaymentFlowWithPaymentSources: ei.current
    }),
    eM = el && er === v.PurchaseTypes.ONE_TIME,
    eR = eM || (eO ? ey && en : en),
    eL = r.useCallback(() => {
      if (eO) {
        x(S.Step.SKU_SELECT);
        return
      }
      return eM ? x(S.Step.GIFT_CUSTOMIZATION) : x(S.Step.PLAN_SELECT)
    }, [x, eO, eM]);
  return er === v.PurchaseTypes.ONE_TIME ? a = (0, s.jsx)(T.default, {
    hasLegalTermsFlash: ed,
    legalTermsNodeRef: eN,
    onPaymentSourceChange: e => q(null != e ? e.id : null),
    handlePaymentSourceAdd: () => x(S.Step.ADD_PAYMENT_STEPS)
  }) : null == B || el ? (i(null != z, "Expected plan to be selected"), a = (0, s.jsx)(d.default, {
    selectedPlanId: z.id,
    paymentSources: W,
    onPaymentSourceChange: e => q(null != e ? e.id : null),
    priceOptions: Z,
    currencies: H,
    onCurrencyChange: e => X(e),
    handlePaymentSourceAdd: () => x(S.Step.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: es,
    legalTermsNodeRef: eN,
    hasLegalTermsFlash: ed,
    trialId: ep,
    trialFooterMessageOverride: O,
    reviewWarningMessage: M,
    purchaseState: et,
    referralTrialOfferId: G,
    isTrial: eh || null != y && null != O,
    isDiscount: eg,
    handleClose: F
  })) : (i(null != z, "Expected plan to be selected"), a = (0, s.jsx)(m.default, {
    premiumSubscription: B,
    paymentSources: W,
    priceOptions: Z,
    onPaymentSourceChange: e => {
      q(null != e ? e.id : null)
    },
    onPaymentSourceAdd: () => {
      x(S.Step.ADD_PAYMENT_STEPS)
    },
    planId: z.id,
    setHasAcceptedTerms: es,
    legalTermsNodeRef: eN,
    hasLegalTermsFlash: ed,
    onInvoiceError: e => eC(e),
    planGroup: R,
    currencies: H,
    onCurrencyChange: e => X(e),
    hasOpenInvoice: null != L,
    purchaseState: et,
    handleClose: F
  })), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(I.GiftNote, {
      giftMessage: eu
    }), !ex && (0, s.jsx)(N.default, {
      isEligibleForTrial: eh
    }), (0, s.jsxs)(C.PaymentPortalBody, {
      children: [(0, s.jsx)(E.default, {}), a]
    }), (0, s.jsx)(C.PaymentPortalFooter, {
      children: (0, s.jsx)(A.default, {
        premiumSubscription: null != B ? B : null,
        setPurchaseState: Q,
        onBack: eL,
        onNext: eE,
        onPurchaseError: e => $(e),
        legalTermsNodeRef: eN,
        flashLegalTerms: () => em(!0),
        invoiceError: eA,
        planError: eT,
        analyticsLocation: j,
        baseAnalyticsData: b,
        flowStartTime: k.startTime,
        trialId: ep,
        planGroup: R,
        purchaseTokenAuthState: V,
        openInvoiceId: L,
        backButtonEligible: eR,
        metadata: eI,
        isTrial: eh,
        disablePurchase: null != eP && er === v.PurchaseTypes.SUBSCRIPTION && eh && !eP.canRedeemTrial()
      })
    })]
  })
}