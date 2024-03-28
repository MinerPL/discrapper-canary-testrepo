"use strict";
n.r(t), n.d(t, {
  PremiumPaymentModal: function() {
    return v
  },
  STEPS: function() {
    return R
  },
  default: function() {
    return B
  }
}), n("411104"), n("47120");
var s = n("735250"),
  r = n("470079"),
  i = n("442837"),
  l = n("570140"),
  a = n("821849"),
  o = n("100527"),
  u = n("906732"),
  d = n("509545"),
  c = n("78839"),
  p = n("669079"),
  f = n("987209"),
  m = n("598"),
  S = n("409813"),
  E = n("791785"),
  P = n("276442"),
  x = n("793541"),
  h = n("274247"),
  C = n("380898"),
  _ = n("710094"),
  T = n("293858"),
  g = n("614223"),
  I = n("174827"),
  N = n("846464"),
  y = n("184160"),
  j = n("48175"),
  M = n("981631"),
  b = n("474936"),
  A = n("689938");
let k = [S.Step.PLAN_SELECT, S.Step.ADD_PAYMENT_STEPS, S.Step.REVIEW, S.Step.CONFIRM];

function v(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: i,
    onComplete: o,
    transitionState: c,
    initialPlanId: P,
    subscriptionTier: x,
    onClose: h,
    trialId: C,
    trialFooterMessageOverride: _,
    reviewWarningMessage: T,
    openInvoiceId: g,
    onSubscriptionConfirmation: I,
    renderPurchaseConfirmation: N,
    postSuccessGuild: y,
    followupSKUInfo: j,
    renderHeader: A,
    applicationId: k,
    guildId: v,
    referralTrialOfferId: L,
    skuId: O,
    returnRef: R,
    skipConfirm: B = !1
  } = e, {
    analyticsLocations: w
  } = (0, u.default)();
  r.useEffect(() => {
    !d.default.isLoadedForPremiumSKUs() && l.default.wait(() => (0, a.fetchPremiumSubscriptionPlans)())
  }, []);
  let {
    step: U
  } = (0, m.usePaymentContext)(), {
    isGift: G,
    giftMessage: D,
    giftRecipient: H
  } = (0, f.useGiftContext)(), F = G && (0, p.shouldShowCustomGiftExperience)(H) && U === S.Step.PLAN_SELECT;
  return (0, s.jsx)(E.PaymentModal, {
    analyticsLocations: w,
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: i,
    analyticsSubscriptionType: M.SubscriptionTypes.PREMIUM,
    onComplete: o,
    transitionState: c,
    initialPlanId: P,
    giftMessage: D,
    subscriptionTier: x,
    onClose: h,
    trialId: C,
    isGift: G,
    trialFooterMessageOverride: _,
    reviewWarningMessage: T,
    planGroup: b.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: g,
    onSubscriptionConfirmation: I,
    renderPurchaseConfirmation: N,
    postSuccessGuild: y,
    followupSKUInfo: j,
    renderHeader: A,
    applicationId: k,
    guildId: v,
    referralTrialOfferId: L,
    skuId: O,
    shakeWhilePurchasing: !0,
    isLargeModal: F,
    returnRef: R,
    skipConfirm: B
  })
}

function L(e) {
  let {
    startedPaymentFlowWithPaymentSourcesRef: t,
    selectedSkuId: n
  } = (0, m.usePaymentContext)(), {
    isGift: s
  } = (0, f.useGiftContext)();
  return (0, g.inOneStepSubscriptionCheckout)({
    isTrial: null != e && e,
    isGift: s,
    selectedSkuId: n,
    startedPaymentFlowWithPaymentSources: t.current
  })
}

function O(e) {
  let {
    initialPlanId: t,
    handleStepChange: n,
    referralTrialOfferId: r
  } = e, {
    paymentSources: i,
    selectedSkuId: l
  } = (0, m.usePaymentContext)(), {
    isGift: a
  } = (0, f.useGiftContext)(), o = L((0, j.default)({
    isGift: a,
    skuId: l,
    referralTrialOfferId: r
  }));
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(P.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: k,
      onReturn: () => {
        let e = Object.values(i).length < 1 && null == t ? S.Step.PLAN_SELECT : S.Step.REVIEW;
        o && (e = S.Step.REVIEW), n(e, {
          trackedFromStep: S.Step.PAYMENT_TYPE
        })
      }
    })
  })
}
let R = [{
  key: null,
  renderStep: e => (0, s.jsx)(E.PaymentPredicateStep, {
    ...e
  })
}, {
  key: S.Step.SKU_SELECT,
  renderStep: e => (0, s.jsx)(N.PremiumPaymentSKUSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: S.Step.WHAT_YOU_LOSE,
  renderStep: e => (0, s.jsx)(y.PremiumPaymentWhatYouLoseStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: S.Step.PLAN_SELECT,
  renderStep: e => (0, s.jsx)(I.PremiumPaymentPlanSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => L(e) ? null : A.default.Messages.BILLING_STEP_SELECT_PLAN
  }
}, {
  key: S.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(O, {
      ...e
    })
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => L(e) ? null : A.default.Messages.BILLING_STEP_PAYMENT
  }
}, {
  key: S.Step.AWAITING_BROWSER_CHECKOUT,
  renderStep: e => (0, s.jsx)(h.default, {
    ...e
  })
}, {
  key: S.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, s.jsx)(C.default, {})
}, {
  key: S.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, s.jsx)(x.default, {})
}, {
  key: S.Step.REVIEW,
  renderStep: e => (0, s.jsx)(_.PaymentModalReviewStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => L(e) ? A.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : A.default.Messages.BILLING_STEP_REVIEW
  }
}, {
  key: S.Step.CONFIRM,
  renderStep: e => (0, s.jsx)(T.PremiumPaymentConfirmStep, {
    ...e
  })
}];

function B(e) {
  let t = (0, i.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
    {
      analyticsLocations: n
    } = (0, u.default)(e.analyticsLocations, o.default.PREMIUM_PAYMENT_MODAL),
    {
      subscriptionTier: r,
      isGift: l,
      giftRecipient: a,
      giftMessage: d,
      loadId: p,
      defaultPlanId: S,
      referralCode: E
    } = e;
  if (null != r && !Object.values(b.PremiumSubscriptionSKUs).includes(r)) throw Error("subscriptionTier must be a premium subscription");
  return (0, s.jsx)(u.AnalyticsLocationProvider, {
    value: n,
    children: (0, s.jsx)(m.PaymentContextProvider, {
      loadId: p,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: R,
      skuIDs: [...b.ACTIVE_PREMIUM_SKUS],
      isGift: l,
      defaultPlanId: S,
      referralCode: E,
      children: (0, s.jsx)(f.GiftContextProvider, {
        isGift: l,
        giftRecipient: null == a ? void 0 : a,
        giftMessage: d,
        children: (0, s.jsx)(v, {
          ...e
        })
      })
    })
  })
}