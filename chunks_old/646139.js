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
  a = n("775433"),
  o = n("812204"),
  u = n("685665"),
  d = n("10514"),
  c = n("521012"),
  p = n("659632"),
  f = n("635357"),
  m = n("642906"),
  S = n("85336"),
  P = n("385179"),
  E = n("262683"),
  _ = n("946359"),
  C = n("307367"),
  x = n("724269"),
  I = n("99836"),
  T = n("992049"),
  h = n("176108"),
  g = n("97461"),
  y = n("403365"),
  M = n("498475"),
  N = n("254350"),
  b = n("49111"),
  A = n("646718"),
  j = n("782340");
let k = [S.Step.PLAN_SELECT, S.Step.ADD_PAYMENT_STEPS, S.Step.REVIEW, S.Step.CONFIRM];

function L(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: s,
    onComplete: o,
    transitionState: c,
    initialPlanId: E,
    subscriptionTier: _,
    onClose: C,
    trialId: x,
    trialFooterMessageOverride: I,
    reviewWarningMessage: T,
    openInvoiceId: h,
    onSubscriptionConfirmation: g,
    renderPurchaseConfirmation: y,
    postSuccessGuild: M,
    followupSKUInfo: N,
    renderHeader: j,
    applicationId: k,
    guildId: L,
    referralTrialOfferId: O,
    skuId: v,
    returnRef: R,
    skipConfirm: B = !1
  } = e, {
    analyticsLocations: U
  } = (0, u.default)();
  i.useEffect(() => {
    !d.default.isLoadedForPremiumSKUs() && l.default.wait(() => (0, a.fetchPremiumSubscriptionPlans)())
  }, []);
  let {
    step: G
  } = (0, m.usePaymentContext)(), {
    isGift: w,
    giftMessage: F,
    giftRecipient: D
  } = (0, f.useGiftContext)(), H = w && (0, p.shouldShowCustomGiftExperience)(D) && G === S.Step.PLAN_SELECT;
  return (0, r.jsx)(P.PaymentModal, {
    analyticsLocations: U,
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: s,
    analyticsSubscriptionType: b.SubscriptionTypes.PREMIUM,
    onComplete: o,
    transitionState: c,
    initialPlanId: E,
    giftMessage: F,
    subscriptionTier: _,
    onClose: C,
    trialId: x,
    isGift: w,
    trialFooterMessageOverride: I,
    reviewWarningMessage: T,
    planGroup: A.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: h,
    onSubscriptionConfirmation: g,
    renderPurchaseConfirmation: y,
    postSuccessGuild: M,
    followupSKUInfo: N,
    renderHeader: j,
    applicationId: k,
    guildId: L,
    referralTrialOfferId: O,
    skuId: v,
    shakeWhilePurchasing: !0,
    isLargeModal: H,
    returnRef: R,
    skipConfirm: B
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
    isGift: a
  } = (0, f.useGiftContext)(), o = (0, N.default)({
    isGift: a,
    skuId: l,
    referralTrialOfferId: i
  }), u = O(o);
  return (0, r.jsx)(r.Fragment, {
    children: (0, r.jsx)(E.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: k,
      onReturn: () => {
        let e = Object.values(s).length < 1 && null == t ? S.Step.PLAN_SELECT : S.Step.REVIEW;
        u && (e = S.Step.REVIEW), n(e, {
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
      return t ? null : j.default.Messages.BILLING_STEP_SELECT_PLAN
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
      return t ? null : j.default.Messages.BILLING_STEP_PAYMENT
    }
  }
}, {
  key: S.Step.AWAITING_BROWSER_CHECKOUT,
  renderStep: e => (0, r.jsx)(C.default, {
    ...e
  })
}, {
  key: S.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, r.jsx)(x.default, {})
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
      return t ? j.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : j.default.Messages.BILLING_STEP_REVIEW
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
      analyticsLocations: n
    } = (0, u.default)(e.analyticsLocations, o.default.PREMIUM_PAYMENT_MODAL),
    {
      subscriptionTier: i,
      isGift: l,
      giftRecipient: a,
      giftMessage: d,
      loadId: p,
      defaultPlanId: S,
      referralCode: P
    } = e;
  if (null != i && !Object.values(A.PremiumSubscriptionSKUs).includes(i)) throw Error("subscriptionTier must be a premium subscription");
  return (0, r.jsx)(u.AnalyticsLocationProvider, {
    value: n,
    children: (0, r.jsx)(m.PaymentContextProvider, {
      loadId: p,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: R,
      skuIDs: [...A.ACTIVE_PREMIUM_SKUS],
      isGift: l,
      defaultPlanId: S,
      referralCode: P,
      children: (0, r.jsx)(f.GiftContextProvider, {
        isGift: l,
        giftRecipient: null == a ? void 0 : a,
        giftMessage: d,
        children: (0, r.jsx)(L, {
          ...e
        })
      })
    })
  })
}