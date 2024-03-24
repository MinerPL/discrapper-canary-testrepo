"use strict";
n.r(t), n.d(t, {
  PremiumPaymentModal: function() {
    return L
  },
  STEPS: function() {
    return R
  },
  default: function() {
    return B
  }
}), n("70102"), n("222007");
var r = n("37983"),
  i = n("884691"),
  s = n("446674"),
  l = n("913144"),
  u = n("775433"),
  a = n("812204"),
  o = n("685665"),
  d = n("10514"),
  c = n("521012"),
  p = n("659632"),
  f = n("635357"),
  m = n("642906"),
  S = n("85336"),
  P = n("385179"),
  E = n("262683"),
  _ = n("946359"),
  x = n("307367"),
  C = n("724269"),
  I = n("99836"),
  T = n("992049"),
  h = n("176108"),
  g = n("97461"),
  y = n("403365"),
  M = n("498475"),
  N = n("254350"),
  b = n("49111"),
  j = n("646718"),
  A = n("782340");
let k = [S.Step.PLAN_SELECT, S.Step.ADD_PAYMENT_STEPS, S.Step.REVIEW, S.Step.CONFIRM];

function L(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: s,
    onComplete: a,
    transitionState: c,
    initialPlanId: E,
    subscriptionTier: _,
    onClose: x,
    trialId: C,
    trialFooterMessageOverride: I,
    reviewWarningMessage: T,
    openInvoiceId: h,
    onSubscriptionConfirmation: g,
    renderPurchaseConfirmation: y,
    postSuccessGuild: M,
    followupSKUInfo: N,
    renderHeader: A,
    applicationId: k,
    guildId: L,
    referralTrialOfferId: O,
    skuId: v,
    returnRef: R
  } = e, {
    analyticsLocations: B
  } = (0, o.default)();
  i.useEffect(() => {
    !d.default.isLoadedForPremiumSKUs() && l.default.wait(() => (0, u.fetchPremiumSubscriptionPlans)())
  }, []);
  let {
    step: U
  } = (0, m.usePaymentContext)(), {
    isGift: G,
    giftMessage: w,
    giftRecipient: F
  } = (0, f.useGiftContext)(), D = G && (0, p.shouldShowCustomGiftExperience)(F) && U === S.Step.PLAN_SELECT;
  return (0, r.jsx)(P.PaymentModal, {
    analyticsLocations: B,
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: s,
    analyticsSubscriptionType: b.SubscriptionTypes.PREMIUM,
    onComplete: a,
    transitionState: c,
    initialPlanId: E,
    giftMessage: w,
    subscriptionTier: _,
    onClose: x,
    trialId: C,
    isGift: G,
    trialFooterMessageOverride: I,
    reviewWarningMessage: T,
    planGroup: j.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: h,
    onSubscriptionConfirmation: g,
    renderPurchaseConfirmation: y,
    postSuccessGuild: M,
    followupSKUInfo: N,
    renderHeader: A,
    applicationId: k,
    guildId: L,
    referralTrialOfferId: O,
    skuId: v,
    shakeWhilePurchasing: !0,
    isLargeModal: D,
    returnRef: R
  })
}

function O(e) {
  let {
    startedPaymentFlowWithPaymentSourcesRef: t,
    selectedSkuId: n
  } = (0, m.usePaymentContext)(), {
    isGift: r
  } = (0, f.useGiftContext)();
  return (0, h.inOneStepSubscriptionCheckout)({
    isTrial: null != e && e,
    isGift: r,
    selectedSkuId: n,
    startedPaymentFlowWithPaymentSources: t.current
  })
}

function v(e) {
  let {
    initialPlanId: t,
    handleStepChange: n,
    referralTrialOfferId: i
  } = e, {
    paymentSources: s,
    selectedSkuId: l
  } = (0, m.usePaymentContext)(), {
    isGift: u
  } = (0, f.useGiftContext)(), a = (0, N.default)({
    isGift: u,
    skuId: l,
    referralTrialOfferId: i
  }), o = O(a);
  return (0, r.jsx)(r.Fragment, {
    children: (0, r.jsx)(E.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: k,
      onReturn: () => {
        let e = Object.values(s).length < 1 && null == t ? S.Step.PLAN_SELECT : S.Step.REVIEW;
        o && (e = S.Step.REVIEW), n(e, {
          trackedFromStep: S.Step.PAYMENT_TYPE
        })
      }
    })
  })
}
let R = [{
  key: null,
  renderStep: e => (0, r.jsx)(P.PaymentPredicateStep, {
    ...e
  })
}, {
  key: S.Step.SKU_SELECT,
  renderStep: e => (0, r.jsx)(y.PremiumPaymentSKUSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: S.Step.WHAT_YOU_LOSE,
  renderStep: e => (0, r.jsx)(M.PremiumPaymentWhatYouLoseStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: S.Step.PLAN_SELECT,
  renderStep: e => (0, r.jsx)(g.PremiumPaymentPlanSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => {
      let t = O(e);
      return t ? null : A.default.Messages.BILLING_STEP_SELECT_PLAN
    }
  }
}, {
  key: S.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(r.Fragment, {
    children: (0, r.jsx)(v, {
      ...e
    })
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => {
      let t = O(e);
      return t ? null : A.default.Messages.BILLING_STEP_PAYMENT
    }
  }
}, {
  key: S.Step.AWAITING_BROWSER_CHECKOUT,
  renderStep: e => (0, r.jsx)(x.default, {
    ...e
  })
}, {
  key: S.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, r.jsx)(C.default, {})
}, {
  key: S.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, r.jsx)(_.default, {})
}, {
  key: S.Step.REVIEW,
  renderStep: e => (0, r.jsx)(I.PaymentModalReviewStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => {
      let t = O(e);
      return t ? A.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : A.default.Messages.BILLING_STEP_REVIEW
    }
  }
}, {
  key: S.Step.CONFIRM,
  renderStep: e => (0, r.jsx)(T.PremiumPaymentConfirmStep, {
    ...e
  })
}];

function B(e) {
  let t = (0, s.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
    {
      AnalyticsLocationProvider: n
    } = (0, o.default)(e.analyticsLocations, a.default.PREMIUM_PAYMENT_MODAL),
    {
      subscriptionTier: i,
      isGift: l,
      giftRecipient: u,
      giftMessage: d,
      loadId: p,
      defaultPlanId: S,
      referralCode: P
    } = e;
  if (null != i && !Object.values(j.PremiumSubscriptionSKUs).includes(i)) throw Error("subscriptionTier must be a premium subscription");
  return (0, r.jsx)(n, {
    children: (0, r.jsx)(m.PaymentContextProvider, {
      loadId: p,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: R,
      skuIDs: [...j.ACTIVE_PREMIUM_SKUS],
      isGift: l,
      defaultPlanId: S,
      referralCode: P,
      children: (0, r.jsx)(f.GiftContextProvider, {
        isGift: l,
        giftRecipient: null == u ? void 0 : u,
        giftMessage: d,
        children: (0, r.jsx)(L, {
          ...e
        })
      })
    })
  })
}