"use strict";
n.r(t), n.d(t, {
  PaymentModal: function() {
    return Y
  },
  PaymentPredicateStep: function() {
    return j
  }
}), n("222007");
var l = n("37983"),
  u = n("884691"),
  a = n("414456"),
  i = n.n(a),
  s = n("775560"),
  r = n("65597"),
  o = n("77078"),
  c = n("316718"),
  d = n("856413"),
  f = n("245187"),
  _ = n("996808"),
  E = n("669073"),
  p = n("154889"),
  m = n("877261"),
  S = n("429070"),
  P = n("661128"),
  T = n("10514"),
  M = n("437712"),
  A = n("599110"),
  I = n("659632"),
  N = n("719923"),
  y = n("635357"),
  h = n("642906"),
  C = n("85336"),
  R = n("286350"),
  O = n("359371"),
  v = n("176108"),
  g = n("254350"),
  L = n("622271"),
  k = n("628738"),
  x = n("650484"),
  U = n("49111"),
  b = n("646718"),
  D = n("782340"),
  G = n("283750");

function Y(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: n,
    analyticsObject: a,
    analyticsSourceLocation: r,
    analyticsSubscriptionType: c = U.SubscriptionTypes.PREMIUM,
    onComplete: d,
    transitionState: f,
    initialPlanId: E,
    subscriptionTier: M,
    onClose: v,
    trialId: g,
    trialFooterMessageOverride: k,
    reviewWarningMessage: Y,
    planGroup: j = b.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: H,
    onSubscriptionConfirmation: B,
    renderPurchaseConfirmation: w,
    postSuccessGuild: K,
    followupSKUInfo: F,
    renderHeader: W,
    applicationId: V,
    guildId: z,
    referralTrialOfferId: J,
    skuId: X,
    shakeWhilePurchasing: q = !1,
    isLargeModal: Q = !1,
    hideShadow: Z = !1,
    returnRef: $,
    skipConfirm: ee = !1
  } = e, {
    activitySessionId: et,
    purchaseState: en,
    setPurchaseState: el,
    selectedSkuId: eu,
    setSelectedSkuId: ea,
    selectedPlan: ei,
    setSelectedPlanId: es,
    setStep: er,
    setPurchaseError: eo,
    paymentAuthenticationState: ec,
    step: ed,
    contextMetadata: ef,
    purchaseTokenAuthState: e_,
    activeSubscription: eE,
    priceOptions: ep,
    hasPaymentSources: em,
    paymentSourceId: eS,
    paymentSources: eP,
    purchaseType: eT
  } = (0, h.usePaymentContext)(), eM = (0, O.default)(), eA = Q || (null == eM ? void 0 : eM.isLargeModal) ? o.ModalSize.LARGE : o.ModalSize.SMALL, {
    isGift: eI,
    giftRecipient: eN,
    customGiftMessage: ey,
    emojiConfetti: eh,
    soundEffect: eC
  } = (0, y.useGiftContext)(), eR = (0, p.usePremiumDiscountOffer)(), eO = null != M && !eI && (0, p.discountOfferHasTier)(eR, M), [ev, eg] = u.useState({
    load_id: ef.loadId,
    payment_type: U.PurchaseTypeToAnalyticsPaymentType[eT],
    location: null != n ? n : a,
    source: r,
    subscription_type: c,
    subscription_plan_id: null == ei ? void 0 : ei.id,
    is_gift: eI,
    eligible_for_trial: null != g,
    location_stack: t,
    sku_id: X,
    application_id: V,
    guild_id: z,
    payment_modal_version: "v1",
    activity_session_id: et,
    eligible_for_discount: eO
  }), eL = null != eS ? eP[eS] : null;
  u.useEffect(() => {
    eg(e => {
      let t = null != ei ? (0, N.getPrice)(ei.id, !1, eI, ep) : void 0,
        n = {
          ...e,
          subscription_plan_id: null == ei ? void 0 : ei.id,
          price: null == t ? void 0 : t.amount,
          regular_price: null == ei ? void 0 : ei.price,
          currency: ep.currency,
          sku_id: eu
        };
      return n
    })
  }, [ei, eu, eI, ep]), u.useEffect(() => {
    A.default.track(U.AnalyticEvents.PAYMENT_FLOW_STARTED, {
      ...ev,
      has_saved_payment_source: em
    })
  }, []), u.useEffect(() => {
    if (es(E), null != X) ea(X);
    else if (null != E) {
      var e;
      ea(null === (e = T.default.get(E)) || void 0 === e ? void 0 : e.skuId)
    }
  }, [es, ea, E, X]);
  let ek = u.useCallback(() => {
      let e = (0, I.getGiftExperience)(eN),
        t = e === I.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        n = Date.now();
      A.default.track(U.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
        ...ev,
        is_custom_message_edited: eI && t && null != ey ? ey !== D.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0,
        is_custom_emoji_sound_available: eI && t,
        emoji_name: eI && t ? null == eh ? void 0 : eh.surrogates : void 0,
        sound_id: eI && t ? null == eC ? void 0 : eC.soundId : void 0,
        duration_ms: n - ef.startTime,
        payment_source_type: null == eL ? void 0 : eL.type
      })
    }, [ev, eh, ey, eN, eI, eC, ef.startTime, eL]),
    ex = u.useMemo(() => () => null == v ? void 0 : v(en === R.PurchaseState.COMPLETED, eu), [v, en, eu]),
    eU = (0, s.useStableMemo)(() => Date.now(), [ed]),
    eb = u.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          trackedFromStep: n,
          analyticsDataOverride: l,
          fulfillment: u
        } = t,
        a = Date.now();
      if (e === C.Step.CONFIRM && (ek(), null == d || d(u), ee)) {
        ex();
        return
      }
      er(e), eo(null);
      let i = null != n ? n : ed;
      if (null === i) {
        A.default.track(U.AnalyticEvents.PAYMENT_FLOW_LOADED, {
          ...ev,
          initial_step: e,
          has_saved_payment_source: em
        });
        return
      }
      A.default.track(U.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...ev,
        ...l,
        from_step: i,
        to_step: e === C.Step.ADD_PAYMENT_STEPS ? C.Step.PAYMENT_TYPE : e,
        step_duration_ms: a - eU,
        flow_duration_ms: a - ef.startTime
      })
    }, [ev, ef.startTime, d, eo, er, ed, eU, em, ek, ex, ee]);
  (0, m.usePaymentStepForAuthentication)(ed, ec, eb), (0, C.usePurchaseStateForStep)(ed, en, el), (0, S.usePurchaseTokenAuthStep)(ed, e_, eb), (0, _.default)(ex), (0, P.useUnsupportedExternalSubscriptionModalHandler)(eE, () => v(!1), eI), (0, m.usePaymentAuthenticationPoller)(ec);
  let eD = (0, L.PaymentModalHeader)({
    renderHeader: W,
    referralTrialOfferId: J,
    handleClose: ex
  });
  return (0, l.jsx)(o.Shaker, {
    className: G.shaker,
    isShaking: q && en === R.PurchaseState.PURCHASING,
    intensity: 2,
    children: (0, l.jsx)(o.ModalRoot, {
      className: i(G.root, {
        [G.withHeader]: null != eD
      }),
      transitionState: f,
      hideShadow: Z,
      returnRef: $,
      size: eA,
      children: (0, l.jsx)(x.default, {
        header: eD,
        isLargeModal: Q || (null == eM ? void 0 : eM.isLargeModal),
        initialPlanId: E,
        subscriptionTier: M,
        handleStepChange: eb,
        handleClose: ex,
        analyticsData: ev,
        setAnalyticsData: eg,
        trialId: g,
        trialFooterMessageOverride: k,
        reviewWarningMessage: Y,
        planGroup: j,
        openInvoiceId: H,
        analyticsLocation: n,
        onSubscriptionConfirmation: B,
        renderPurchaseConfirmation: w,
        postSuccessGuild: K,
        followupSKUInfo: F,
        referralTrialOfferId: J,
        skipConfirm: ee
      })
    })
  })
}

function j(e) {
  let {
    subscriptionTier: t,
    initialPlanId: n,
    handleStepChange: a,
    referralTrialOfferId: i,
    handleClose: s
  } = e, {
    activeSubscription: o,
    blockedPayments: _,
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: m,
    currencyLoading: S,
    selectedSkuId: P,
    setSelectedPlanId: T,
    defaultPlanId: A,
    startedPaymentFlowWithPaymentSourcesRef: I
  } = (0, h.usePaymentContext)(), {
    isGift: N
  } = (0, y.useGiftContext)(), R = I.current, O = (0, g.default)({
    isGift: N,
    skuId: P,
    referralTrialOfferId: i
  }), {
    defaultToMonthlyPlan: L
  } = E.TrialRedemptionDefaultPlanExperiment.getCurrentConfig({
    location: "055ec5_1"
  }, {
    autoTrackExposure: !1
  }), [x, U] = u.useState(!0), D = (0, r.useStateFromStores)([M.default], () => M.default.applicationIdsFetched.has(b.PREMIUM_SUBSCRIPTION_APPLICATION));
  return (u.useEffect(() => {
    U(!p || !m || S)
  }, [S, m, p]), (0, d.default)("Payment Modal", x, 5, {
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: m,
    currencyLoading: S
  }, {
    tags: {
      app_context: "billing"
    }
  }), u.useEffect(() => {
    if (!D && (0, c.fetchUserEntitlementsForApplication)(b.PREMIUM_SUBSCRIPTION_APPLICATION), x || _) return;
    let e = (0, v.inOneStepSubscriptionCheckout)({
      isTrial: O,
      isGift: N,
      selectedSkuId: P,
      startedPaymentFlowWithPaymentSources: R
    });
    if (null != n) a(C.Step.REVIEW);
    else if (e) {
      let e = (0, v.getDefaultPlanOneStepCheckout)(P, o, A);
      T(e), a(C.Step.REVIEW)
    } else null != t ? a(C.Step.PLAN_SELECT) : a(C.Step.SKU_SELECT)
  }, [o, _, D, n, x, a, t, P, T, L, O, A, N, R]), x) ? (0, l.jsx)(k.default, {}) : _ ? (0, l.jsx)(f.BlockedPaymentsContentModal, {
    onClose: s
  }) : null
}