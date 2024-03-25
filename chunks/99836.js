"use strict";
n.r(t), n.d(t, {
  PaymentModalReviewStep: function() {
    return y
  }
}), n("222007"), n("70102");
var s = n("37983"),
  r = n("884691"),
  a = n("627445"),
  i = n.n(a),
  l = n("612039"),
  u = n("916187"),
  c = n("154889"),
  o = n("917247"),
  d = n("527866"),
  m = n("826795"),
  f = n("501768"),
  p = n("659632"),
  _ = n("635357"),
  I = n("642906"),
  S = n("85336"),
  E = n("310093"),
  P = n("367767"),
  T = n("176108"),
  N = n("298392"),
  A = n("153727"),
  C = n("39065"),
  h = n("650484"),
  v = n("646718"),
  g = n("843455"),
  x = n("782340");

function y(e) {
  var t, n;
  let a, {
      handleStepChange: y,
      trialId: O,
      trialFooterMessageOverride: M,
      reviewWarningMessage: R,
      planGroup: L,
      openInvoiceId: b,
      analyticsData: j,
      analyticsLocation: G,
      referralTrialOfferId: D,
      initialPlanId: U,
      subscriptionTier: F,
      handleClose: B
    } = e,
    {
      activeSubscription: w,
      setUpdatedSubscription: k,
      contextMetadata: H,
      currencies: Y,
      paymentSourceId: W,
      paymentSources: Z,
      priceOptions: K,
      purchaseError: V,
      purchaseTokenAuthState: z,
      selectedPlan: J,
      selectedSkuId: X,
      setCurrency: q,
      setPaymentSourceId: Q,
      setPurchaseState: $,
      setPurchaseError: ee,
      step: et,
      purchaseState: en,
      isPremium: es,
      setHasAcceptedTerms: er,
      purchaseType: ea,
      setEntitlementsGranted: ei,
      startedPaymentFlowWithPaymentSourcesRef: el
    } = (0, I.usePaymentContext)(),
    {
      isGift: eu,
      giftMessage: ec,
      giftRecipient: eo
    } = (0, _.useGiftContext)();
  i(null != et, "Step should be set");
  let ed = r.useRef(null),
    [em, ef] = (0, l.default)(!1, 500);
  (0, f.default)();
  let ep = null !== (n = null != O ? O : D) && void 0 !== n ? n : null,
    e_ = null != ep && (!es || (0, v.SubscriptionTrials)[ep].skus.includes(X)) ? ep : null,
    eI = (0, o.usePremiumTrialOffer)(D),
    eS = (0, c.usePremiumDiscountOffer)(),
    eE = {
      user_trial_offer_id: null == eI ? void 0 : eI.id
    };
  r.useEffect(() => {
    null != V && null != ed.current && ed.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [V]);
  let eP = r.useCallback((e, t) => {
      k(e), null != t && ei(t), y(S.Step.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [y, k, ei]),
    eT = null != W ? Z[W] : null,
    eN = null != J && v.MULTI_MONTH_PLANS.has(J.id) && null != eT && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(eT) ? Error(x.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
    eA = r.useRef(null),
    [eC, eh] = r.useState(null),
    ev = !eu && null != eI && null != X && (0, v.SubscriptionTrials)[eI.trial_id].skus.includes(X),
    eg = null == eS ? void 0 : null === (t = eS.discount) || void 0 === t ? void 0 : t.plan_ids,
    ex = !eu && null != eS && null != eg && null != J && eg.includes(J.id),
    ey = eu && (0, p.shouldShowCustomGiftExperience)(eo),
    eO = null == U && null == F && ea === g.PurchaseTypes.SUBSCRIPTION,
    eM = (0, T.inOneStepSubscriptionCheckout)({
      isTrial: ev,
      isGift: eu,
      selectedSkuId: X,
      startedPaymentFlowWithPaymentSources: el.current
    }),
    eR = eu && ea === g.PurchaseTypes.ONE_TIME,
    eL = eR || (eM ? eO && es : es),
    eb = r.useCallback(() => {
      if (eM) {
        y(S.Step.SKU_SELECT);
        return
      }
      return eR ? y(S.Step.GIFT_CUSTOMIZATION) : y(S.Step.PLAN_SELECT)
    }, [y, eM, eR]);
  return ea === g.PurchaseTypes.ONE_TIME ? a = (0, s.jsx)(N.default, {
    hasLegalTermsFlash: em,
    legalTermsNodeRef: eA,
    onPaymentSourceChange: e => Q(null != e ? e.id : null),
    handlePaymentSourceAdd: () => y(S.Step.ADD_PAYMENT_STEPS)
  }) : null == w || eu ? (i(null != J, "Expected plan to be selected"), a = (0, s.jsx)(d.default, {
    selectedPlanId: J.id,
    paymentSources: Z,
    onPaymentSourceChange: e => Q(null != e ? e.id : null),
    priceOptions: K,
    currencies: Y,
    onCurrencyChange: e => q(e),
    handlePaymentSourceAdd: () => y(S.Step.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: er,
    legalTermsNodeRef: eA,
    hasLegalTermsFlash: em,
    trialId: e_,
    trialFooterMessageOverride: M,
    reviewWarningMessage: R,
    purchaseState: en,
    referralTrialOfferId: D,
    isTrial: ev || null != O && null != M,
    isDiscount: ex,
    handleClose: B
  })) : (i(null != J, "Expected plan to be selected"), a = (0, s.jsx)(m.default, {
    premiumSubscription: w,
    paymentSources: Z,
    priceOptions: K,
    onPaymentSourceChange: e => {
      Q(null != e ? e.id : null)
    },
    onPaymentSourceAdd: () => {
      y(S.Step.ADD_PAYMENT_STEPS)
    },
    planId: J.id,
    setHasAcceptedTerms: er,
    legalTermsNodeRef: eA,
    hasLegalTermsFlash: em,
    onInvoiceError: e => eh(e),
    planGroup: L,
    currencies: Y,
    onCurrencyChange: e => q(e),
    hasOpenInvoice: null != b,
    purchaseState: en,
    handleClose: B
  })), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(E.GiftNote, {
      giftMessage: ec
    }), !ey && (0, s.jsx)(A.default, {
      isEligibleForTrial: ev
    }), (0, s.jsxs)(h.PaymentPortalBody, {
      children: [(0, s.jsx)(P.default, {}), a]
    }), (0, s.jsx)(h.PaymentPortalFooter, {
      children: (0, s.jsx)(C.default, {
        premiumSubscription: null != w ? w : null,
        setPurchaseState: $,
        onBack: eb,
        onNext: eP,
        onPurchaseError: e => ee(e),
        legalTermsNodeRef: eA,
        flashLegalTerms: () => ef(!0),
        invoiceError: eC,
        planError: eN,
        analyticsLocation: G,
        baseAnalyticsData: j,
        flowStartTime: H.startTime,
        trialId: e_,
        planGroup: L,
        purchaseTokenAuthState: z,
        openInvoiceId: b,
        backButtonEligible: eL,
        metadata: eE,
        isTrial: ev,
        disablePurchase: null != eT && ea === g.PurchaseTypes.SUBSCRIPTION && ev && !eT.canRedeemTrial()
      })
    })]
  })
}