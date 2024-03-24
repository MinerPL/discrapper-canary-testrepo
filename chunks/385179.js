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
    returnRef: $
  } = e, {
    activitySessionId: ee,
    purchaseState: et,
    setPurchaseState: en,
    selectedSkuId: el,
    setSelectedSkuId: eu,
    selectedPlan: ea,
    setSelectedPlanId: ei,
    setStep: es,
    setPurchaseError: er,
    paymentAuthenticationState: eo,
    step: ec,
    contextMetadata: ed,
    purchaseTokenAuthState: ef,
    activeSubscription: e_,
    priceOptions: eE,
    hasPaymentSources: ep,
    paymentSourceId: em,
    paymentSources: eS,
    purchaseType: eP
  } = (0, h.usePaymentContext)(), eT = (0, O.default)(), eM = Q || (null == eT ? void 0 : eT.isLargeModal) ? o.ModalSize.LARGE : o.ModalSize.SMALL, {
    isGift: eA,
    giftRecipient: eI,
    customGiftMessage: eN,
    emojiConfetti: ey,
    soundEffect: eh
  } = (0, y.useGiftContext)(), eC = (0, p.usePremiumDiscountOffer)(), eR = null != M && !eA && (0, p.discountOfferHasTier)(eC, M), [eO, ev] = u.useState({
    load_id: ed.loadId,
    payment_type: U.PurchaseTypeToAnalyticsPaymentType[eP],
    location: null != n ? n : a,
    source: r,
    subscription_type: c,
    subscription_plan_id: null == ea ? void 0 : ea.id,
    is_gift: eA,
    eligible_for_trial: null != g,
    location_stack: t,
    sku_id: X,
    application_id: V,
    guild_id: z,
    payment_modal_version: "v1",
    activity_session_id: ee,
    eligible_for_discount: eR
  }), eg = null != em ? eS[em] : null;
  u.useEffect(() => {
    ev(e => {
      let t = null != ea ? (0, N.getPrice)(ea.id, !1, eA, eE) : void 0,
        n = {
          ...e,
          subscription_plan_id: null == ea ? void 0 : ea.id,
          price: null == t ? void 0 : t.amount,
          regular_price: null == ea ? void 0 : ea.price,
          currency: eE.currency,
          sku_id: el
        };
      return n
    })
  }, [ea, el, eA, eE]), u.useEffect(() => {
    A.default.track(U.AnalyticEvents.PAYMENT_FLOW_STARTED, {
      ...eO,
      has_saved_payment_source: ep
    })
  }, []), u.useEffect(() => {
    if (ei(E), null != X) eu(X);
    else if (null != E) {
      var e;
      eu(null === (e = T.default.get(E)) || void 0 === e ? void 0 : e.skuId)
    }
  }, [ei, eu, E, X]);
  let eL = u.useCallback(() => {
      let e = (0, I.getGiftExperience)(eI),
        t = e === I.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        n = Date.now();
      A.default.track(U.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
        ...eO,
        is_custom_message_edited: eA && t && null != eN ? eN !== D.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0,
        is_custom_emoji_sound_available: eA && t,
        emoji_name: eA && t ? null == ey ? void 0 : ey.surrogates : void 0,
        sound_id: eA && t ? null == eh ? void 0 : eh.soundId : void 0,
        duration_ms: n - ed.startTime,
        payment_source_type: null == eg ? void 0 : eg.type
      })
    }, [eO, ey, eN, eI, eA, eh, ed.startTime, eg]),
    ek = (0, s.useStableMemo)(() => Date.now(), [ec]),
    ex = u.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          trackedFromStep: n,
          analyticsDataOverride: l,
          fulfillment: u
        } = t,
        a = Date.now();
      e === C.Step.CONFIRM && (eL(), null == d || d(u)), es(e), er(null);
      let i = null != n ? n : ec;
      if (null === i) {
        A.default.track(U.AnalyticEvents.PAYMENT_FLOW_LOADED, {
          ...eO,
          initial_step: e,
          has_saved_payment_source: ep
        });
        return
      }
      A.default.track(U.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...eO,
        ...l,
        from_step: i,
        to_step: e === C.Step.ADD_PAYMENT_STEPS ? C.Step.PAYMENT_TYPE : e,
        step_duration_ms: a - ek,
        flow_duration_ms: a - ed.startTime
      })
    }, [eO, ed.startTime, d, er, es, ec, ek, ep, eL]),
    eU = u.useMemo(() => () => null == v ? void 0 : v(et === R.PurchaseState.COMPLETED, el), [v, et, el]);
  (0, m.usePaymentStepForAuthentication)(ec, eo, ex), (0, C.usePurchaseStateForStep)(ec, et, en), (0, S.usePurchaseTokenAuthStep)(ec, ef, ex), (0, _.default)(eU), (0, P.useUnsupportedExternalSubscriptionModalHandler)(e_, () => v(!1), eA), (0, m.usePaymentAuthenticationPoller)(eo);
  let eb = (0, L.PaymentModalHeader)({
    renderHeader: W,
    referralTrialOfferId: J,
    handleClose: eU
  });
  return (0, l.jsx)(o.Shaker, {
    className: G.shaker,
    isShaking: q && et === R.PurchaseState.PURCHASING,
    intensity: 2,
    children: (0, l.jsx)(o.ModalRoot, {
      className: i(G.root, {
        [G.withHeader]: null != eb
      }),
      transitionState: f,
      hideShadow: Z,
      returnRef: $,
      size: eM,
      children: (0, l.jsx)(x.default, {
        header: eb,
        isLargeModal: Q || (null == eT ? void 0 : eT.isLargeModal),
        initialPlanId: E,
        subscriptionTier: M,
        handleStepChange: ex,
        handleClose: eU,
        analyticsData: eO,
        setAnalyticsData: ev,
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
        referralTrialOfferId: J
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