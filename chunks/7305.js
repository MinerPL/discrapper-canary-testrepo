"use strict";
s.r(t), s.d(t, {
  PremiumPaymentModal: function() {
    return O
  },
  STEPS: function() {
    return b
  },
  default: function() {
    return k
  }
}), s("411104"), s("47120");
var n = s("735250"),
  i = s("470079"),
  r = s("442837"),
  l = s("570140"),
  a = s("821849"),
  o = s("100527"),
  C = s("906732"),
  u = s("509545"),
  d = s("78839"),
  c = s("669079"),
  p = s("987209"),
  f = s("563132"),
  x = s("409813"),
  _ = s("791785"),
  m = s("276442"),
  L = s("793541"),
  E = s("274247"),
  S = s("380898"),
  h = s("710094"),
  j = s("293858"),
  P = s("614223"),
  M = s("174827"),
  A = s("846464"),
  y = s("184160"),
  g = s("48175"),
  T = s("981631"),
  I = s("474936"),
  N = s("689938");
let v = [x.Step.PLAN_SELECT, x.Step.ADD_PAYMENT_STEPS, x.Step.REVIEW, x.Step.CONFIRM];

function O(e) {
  let {
    analyticsLocation: t,
    analyticsObject: s,
    analyticsSourceLocation: r,
    onComplete: o,
    transitionState: d,
    initialPlanId: m,
    subscriptionTier: L,
    onClose: E,
    trialId: S,
    trialFooterMessageOverride: h,
    reviewWarningMessage: j,
    openInvoiceId: P,
    onSubscriptionConfirmation: M,
    renderPurchaseConfirmation: A,
    postSuccessGuild: y,
    followupSKUInfo: g,
    renderHeader: N,
    applicationId: v,
    guildId: O,
    referralTrialOfferId: R,
    skuId: U,
    returnRef: b,
    skipConfirm: k = !1
  } = e, {
    analyticsLocations: B
  } = (0, C.default)();
  i.useEffect(() => {
    !u.default.isLoadedForPremiumSKUs() && l.default.wait(() => (0, a.fetchPremiumSubscriptionPlans)())
  }, []);
  let {
    step: G
  } = (0, f.usePaymentContext)(), {
    isGift: H,
    giftMessage: F,
    giftRecipient: w
  } = (0, p.useGiftContext)(), D = H && (0, c.shouldShowCustomGiftExperience)(w) && G === x.Step.PLAN_SELECT;
  return (0, n.jsx)(_.PaymentModal, {
    analyticsLocations: B,
    analyticsLocation: t,
    analyticsObject: s,
    analyticsSourceLocation: r,
    analyticsSubscriptionType: T.SubscriptionTypes.PREMIUM,
    onComplete: o,
    transitionState: d,
    initialPlanId: m,
    giftMessage: F,
    subscriptionTier: L,
    onClose: E,
    trialId: S,
    isGift: H,
    trialFooterMessageOverride: h,
    reviewWarningMessage: j,
    planGroup: I.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: P,
    onSubscriptionConfirmation: M,
    renderPurchaseConfirmation: A,
    postSuccessGuild: y,
    followupSKUInfo: g,
    renderHeader: N,
    applicationId: v,
    guildId: O,
    referralTrialOfferId: R,
    skuId: U,
    shakeWhilePurchasing: !0,
    isLargeModal: D,
    returnRef: b,
    skipConfirm: k
  })
}

function R(e) {
  let {
    startedPaymentFlowWithPaymentSourcesRef: t,
    selectedSkuId: s
  } = (0, f.usePaymentContext)(), {
    isGift: n
  } = (0, p.useGiftContext)();
  return (0, P.inOneStepSubscriptionCheckout)({
    isTrial: null != e && e,
    isGift: n,
    selectedSkuId: s,
    startedPaymentFlowWithPaymentSources: t.current
  })
}

function U(e) {
  let {
    initialPlanId: t,
    handleStepChange: s,
    referralTrialOfferId: i
  } = e, {
    paymentSources: r,
    selectedSkuId: l
  } = (0, f.usePaymentContext)(), {
    isGift: a
  } = (0, p.useGiftContext)(), o = R((0, g.default)({
    isGift: a,
    skuId: l,
    referralTrialOfferId: i
  }));
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)(m.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: v,
      onReturn: () => {
        let e = Object.values(r).length < 1 && null == t ? x.Step.PLAN_SELECT : x.Step.REVIEW;
        o && (e = x.Step.REVIEW), s(e, {
          trackedFromStep: x.Step.PAYMENT_TYPE
        })
      }
    })
  })
}
let b = [{
  key: null,
  renderStep: e => (0, n.jsx)(_.PaymentPredicateStep, {
    ...e
  })
}, {
  key: x.Step.SKU_SELECT,
  renderStep: e => (0, n.jsx)(A.PremiumPaymentSKUSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: x.Step.WHAT_YOU_LOSE,
  renderStep: e => (0, n.jsx)(y.PremiumPaymentWhatYouLoseStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: x.Step.PLAN_SELECT,
  renderStep: e => (0, n.jsx)(M.PremiumPaymentPlanSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => R(e) ? null : N.default.Messages.BILLING_STEP_SELECT_PLAN
  }
}, {
  key: x.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)(U, {
      ...e
    })
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => R(e) ? null : N.default.Messages.BILLING_STEP_PAYMENT
  }
}, {
  key: x.Step.AWAITING_BROWSER_CHECKOUT,
  renderStep: e => (0, n.jsx)(E.default, {
    ...e
  })
}, {
  key: x.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, n.jsx)(S.default, {})
}, {
  key: x.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, n.jsx)(L.default, {})
}, {
  key: x.Step.REVIEW,
  renderStep: e => (0, n.jsx)(h.PaymentModalReviewStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => R(e) ? N.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : N.default.Messages.BILLING_STEP_REVIEW
  }
}, {
  key: x.Step.CONFIRM,
  renderStep: e => (0, n.jsx)(j.PremiumPaymentConfirmStep, {
    ...e
  })
}];

function k(e) {
  let t = (0, r.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
    {
      analyticsLocations: s
    } = (0, C.default)(e.analyticsLocations, o.default.PREMIUM_PAYMENT_MODAL),
    {
      subscriptionTier: i,
      isGift: l,
      giftRecipient: a,
      giftMessage: u,
      loadId: c,
      defaultPlanId: x,
      referralCode: _
    } = e;
  if (null != i && !Object.values(I.PremiumSubscriptionSKUs).includes(i)) throw Error("subscriptionTier must be a premium subscription");
  return (0, n.jsx)(C.AnalyticsLocationProvider, {
    value: s,
    children: (0, n.jsx)(f.PaymentContextProvider, {
      loadId: c,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: b,
      skuIDs: [...I.ACTIVE_PREMIUM_SKUS],
      isGift: l,
      defaultPlanId: x,
      referralCode: _,
      children: (0, n.jsx)(p.GiftContextProvider, {
        isGift: l,
        giftRecipient: null == a ? void 0 : a,
        giftMessage: u,
        children: (0, n.jsx)(O, {
          ...e
        })
      })
    })
  })
}