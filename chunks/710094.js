"use strict";
n.r(t), n.d(t, {
  PaymentModalReviewStep: function() {
    return L
  }
}), n("47120"), n("411104");
var i = n("735250"),
  s = n("470079"),
  l = n("512722"),
  a = n.n(l),
  r = n("330726"),
  u = n("711459"),
  o = n("424082"),
  c = n("104494"),
  d = n("639119"),
  m = n("716534"),
  f = n("664891"),
  p = n("230927"),
  _ = n("911367"),
  S = n("669079"),
  I = n("987209"),
  P = n("563132"),
  E = n("409813"),
  T = n("45572"),
  N = n("809144"),
  v = n("698708"),
  h = n("614223"),
  x = n("481595"),
  A = n("51499"),
  C = n("678334"),
  y = n("614277"),
  g = n("981631"),
  M = n("474936"),
  R = n("231338"),
  b = n("689938");

function L(e) {
  var t, n;
  let l, {
      handleStepChange: L,
      trialId: O,
      trialFooterMessageOverride: j,
      reviewWarningMessage: G,
      planGroup: D,
      openInvoiceId: U,
      analyticsData: F,
      analyticsLocation: w,
      referralTrialOfferId: B,
      initialPlanId: k,
      subscriptionTier: H,
      handleClose: W
    } = e,
    {
      activeSubscription: Y,
      setUpdatedSubscription: K,
      contextMetadata: V,
      currencies: Z,
      paymentSourceId: z,
      paymentSources: X,
      priceOptions: J,
      purchaseError: q,
      purchaseTokenAuthState: Q,
      selectedPlan: $,
      selectedSkuId: ee,
      setCurrency: et,
      setPaymentSourceId: en,
      setPurchaseState: ei,
      setPurchaseError: es,
      step: el,
      purchaseState: ea,
      isPremium: er,
      setHasAcceptedTerms: eu,
      purchaseType: eo,
      setEntitlementsGranted: ec,
      startedPaymentFlowWithPaymentSourcesRef: ed,
      invoicePreview: em,
      setAnnualDiscountInvoicePreview: ef
    } = (0, P.usePaymentContext)(),
    {
      isGift: ep,
      giftMessage: e_,
      giftRecipient: eS
    } = (0, I.useGiftContext)();
  a()(null != el, "Step should be set");
  let eI = s.useRef(null),
    [eP, eE] = (0, r.default)(!1, 500);
  (0, _.useFetchProfileEffects)();
  let eT = null !== (n = null != O ? O : B) && void 0 !== n ? n : null,
    eN = null != eT && (!er || (0, M.SubscriptionTrials)[eT].skus.includes(ee)) ? eT : null,
    ev = (0, d.usePremiumTrialOffer)(B);
  (0, o.useAnnualDiscountExperiment)("PaymentModalReviewStep", null == ev);
  let eh = (0, c.usePremiumDiscountOffer)(),
    ex = {
      user_trial_offer_id: null == ev ? void 0 : ev.id
    };
  s.useEffect(() => {
    null != q && null != eI.current && eI.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [q]);
  let eA = s.useCallback((e, t) => {
      K(e), null != t && ec(t), L(E.Step.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [L, K, ec]),
    eC = null != z ? X[z] : null,
    ey = null != $ && M.MULTI_MONTH_PLANS.has($.id) && null != eC && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(eC) ? Error(b.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
    eg = s.useRef(null),
    [eM, eR] = s.useState(null),
    eb = !ep && null != ev && null != ee && (0, M.SubscriptionTrials)[ev.trial_id].skus.includes(ee),
    eL = null == eh ? void 0 : null === (t = eh.discount) || void 0 === t ? void 0 : t.plan_ids,
    eO = !ep && null != eh && null != eL && null != $ && eL.includes($.id),
    ej = ea === T.PurchaseState.PURCHASING || ea === T.PurchaseState.COMPLETED || (null == Y ? void 0 : Y.status) === g.SubscriptionStatusTypes.PAUSED || null != U,
    {
      annualInvoicePreview: eG
    } = (0, p.useGetAnnualDiscountInvoicePreview)({
      priceOptions: J,
      preventFetch: ej,
      selectedSkuId: ee,
      isGift: ep,
      planGroup: D,
      activeSubscription: Y
    });
  null != eG && ef(eG);
  let eD = ep && (0, S.shouldShowCustomGiftExperience)(eS),
    eU = null == k && null == H && eo === R.PurchaseTypes.SUBSCRIPTION,
    eF = (0, h.inOneStepSubscriptionCheckout)({
      isTrial: eb,
      isGift: ep,
      selectedSkuId: ee,
      startedPaymentFlowWithPaymentSources: ed.current
    }),
    ew = ep && eo === R.PurchaseTypes.ONE_TIME,
    eB = ew || (eF ? eU && er : er),
    ek = s.useCallback(() => {
      if (eF) {
        L(E.Step.SKU_SELECT);
        return
      }
      return ew ? L(E.Step.GIFT_CUSTOMIZATION) : L(E.Step.PLAN_SELECT)
    }, [L, eF, ew]),
    eH = !1;
  return eo === R.PurchaseTypes.ONE_TIME ? l = (0, i.jsx)(x.default, {
    hasLegalTermsFlash: eP,
    legalTermsNodeRef: eg,
    onPaymentSourceChange: e => en(null != e ? e.id : null),
    handlePaymentSourceAdd: () => L(E.Step.ADD_PAYMENT_STEPS)
  }) : (eH = ep ? null == em : null != eC && eo === R.PurchaseTypes.SUBSCRIPTION && eb && !eC.canRedeemTrial(), null == Y || ep ? (a()(null != $, "Expected plan to be selected"), l = (0, i.jsx)(m.default, {
    selectedPlanId: $.id,
    paymentSources: X,
    onPaymentSourceChange: e => en(null != e ? e.id : null),
    priceOptions: J,
    currencies: Z,
    onCurrencyChange: e => et(e),
    handlePaymentSourceAdd: () => L(E.Step.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: eu,
    legalTermsNodeRef: eg,
    hasLegalTermsFlash: eP,
    trialId: eN,
    trialFooterMessageOverride: j,
    reviewWarningMessage: G,
    purchaseState: ea,
    referralTrialOfferId: B,
    isTrial: eb || null != O && null != j,
    isDiscount: eO,
    handleClose: W
  })) : (a()(null != $, "Expected plan to be selected"), l = (0, i.jsx)(f.default, {
    premiumSubscription: Y,
    paymentSources: X,
    priceOptions: J,
    onPaymentSourceChange: e => {
      en(null != e ? e.id : null)
    },
    onPaymentSourceAdd: () => {
      L(E.Step.ADD_PAYMENT_STEPS)
    },
    planId: $.id,
    setHasAcceptedTerms: eu,
    legalTermsNodeRef: eg,
    hasLegalTermsFlash: eP,
    onInvoiceError: e => eR(e),
    planGroup: D,
    currencies: Z,
    onCurrencyChange: e => et(e),
    hasOpenInvoice: null != U,
    purchaseState: ea,
    handleClose: W
  }))), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(N.GiftNote, {
      giftMessage: e_
    }), !eD && (0, i.jsx)(A.default, {
      isEligibleForTrial: eb
    }), (0, i.jsxs)(y.PaymentPortalBody, {
      children: [(0, i.jsx)(v.default, {}), l]
    }), (0, i.jsx)(y.PaymentPortalFooter, {
      children: (0, i.jsx)(C.default, {
        premiumSubscription: null != Y ? Y : null,
        setPurchaseState: ei,
        onBack: ek,
        onNext: eA,
        onPurchaseError: e => es(e),
        legalTermsNodeRef: eg,
        flashLegalTerms: () => eE(!0),
        invoiceError: eM,
        planError: ey,
        analyticsLocation: w,
        baseAnalyticsData: F,
        flowStartTime: V.startTime,
        trialId: eN,
        planGroup: D,
        purchaseTokenAuthState: Q,
        openInvoiceId: U,
        backButtonEligible: eB,
        metadata: ex,
        isTrial: eb,
        disablePurchase: eH
      })
    })]
  })
}