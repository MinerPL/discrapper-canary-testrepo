"use strict";
n.r(t), n.d(t, {
  PaymentModal: function() {
    return Y
  },
  PaymentPredicateStep: function() {
    return w
  }
}), n("47120");
var u = n("735250"),
  l = n("470079"),
  i = n("120356"),
  a = n.n(i),
  r = n("207561"),
  s = n("399606"),
  o = n("481060"),
  c = n("496929"),
  d = n("975608"),
  f = n("89057"),
  _ = n("382577"),
  E = n("439017"),
  p = n("104494"),
  S = n("176919"),
  m = n("711007"),
  P = n("459965"),
  T = n("509545"),
  M = n("580130"),
  I = n("626135"),
  A = n("669079"),
  y = n("74538"),
  R = n("987209"),
  v = n("598"),
  h = n("409813"),
  N = n("45572"),
  C = n("784707"),
  O = n("614223"),
  L = n("48175"),
  U = n("928886"),
  g = n("456251"),
  k = n("614277"),
  b = n("981631"),
  x = n("474936"),
  G = n("689938"),
  D = n("648161");

function Y(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: n,
    analyticsObject: i,
    analyticsSourceLocation: s,
    analyticsSubscriptionType: c = b.SubscriptionTypes.PREMIUM,
    onComplete: d,
    transitionState: f,
    initialPlanId: E,
    subscriptionTier: M,
    onClose: O,
    trialId: L,
    trialFooterMessageOverride: g,
    reviewWarningMessage: Y,
    planGroup: w = x.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: H,
    onSubscriptionConfirmation: F,
    renderPurchaseConfirmation: K,
    postSuccessGuild: B,
    followupSKUInfo: j,
    renderHeader: W,
    applicationId: V,
    guildId: z,
    referralTrialOfferId: X,
    skuId: J,
    onStepChange: q,
    shakeWhilePurchasing: Q = !1,
    isLargeModal: Z = !1,
    hideShadow: $ = !1,
    returnRef: ee,
    skipConfirm: et = !1
  } = e, {
    activitySessionId: en,
    purchaseState: eu,
    setPurchaseState: el,
    selectedSkuId: ei,
    setSelectedSkuId: ea,
    selectedPlan: er,
    setSelectedPlanId: es,
    setStep: eo,
    setPurchaseError: ec,
    paymentAuthenticationState: ed,
    step: ef,
    contextMetadata: e_,
    purchaseTokenAuthState: eE,
    activeSubscription: ep,
    priceOptions: eS,
    hasPaymentSources: em,
    paymentSourceId: eP,
    paymentSources: eT,
    purchaseType: eM
  } = (0, v.usePaymentContext)(), eI = (0, C.default)(), eA = Z || (null == eI ? void 0 : eI.isLargeModal) ? o.ModalSize.LARGE : o.ModalSize.SMALL, {
    isGift: ey,
    giftRecipient: eR,
    customGiftMessage: ev,
    emojiConfetti: eh,
    soundEffect: eN
  } = (0, R.useGiftContext)(), eC = (0, p.usePremiumDiscountOffer)(), eO = null != M && !ey && (0, p.discountOfferHasTier)(eC, M), [eL, eU] = l.useState({
    load_id: e_.loadId,
    payment_type: b.PurchaseTypeToAnalyticsPaymentType[eM],
    location: null != n ? n : i,
    source: s,
    subscription_type: c,
    subscription_plan_id: null == er ? void 0 : er.id,
    is_gift: ey,
    eligible_for_trial: null != L,
    location_stack: t,
    sku_id: J,
    application_id: V,
    guild_id: z,
    payment_modal_version: "v1",
    activity_session_id: en,
    eligible_for_discount: eO
  }), eg = null != eP ? eT[eP] : null;
  l.useEffect(() => {
    eU(e => {
      let t = null != er ? (0, y.getPrice)(er.id, !1, ey, eS) : void 0;
      return {
        ...e,
        subscription_plan_id: null == er ? void 0 : er.id,
        price: null == t ? void 0 : t.amount,
        regular_price: null == er ? void 0 : er.price,
        currency: eS.currency,
        sku_id: ei
      }
    })
  }, [er, ei, ey, eS]), l.useEffect(() => {
    I.default.track(b.AnalyticEvents.PAYMENT_FLOW_STARTED, {
      ...eL,
      has_saved_payment_source: em
    })
  }, []), l.useEffect(() => {
    if (es(E), null != J) ea(J);
    else if (null != E) {
      var e;
      ea(null === (e = T.default.get(E)) || void 0 === e ? void 0 : e.skuId)
    }
  }, [es, ea, E, J]);
  let ek = l.useCallback(() => {
      let e = (0, A.getGiftExperience)(eR) === A.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        t = Date.now();
      I.default.track(b.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
        ...eL,
        is_custom_message_edited: ey && e && null != ev ? ev !== G.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0,
        is_custom_emoji_sound_available: ey && e,
        emoji_name: ey && e && (null == eh ? void 0 : eh.id) == null ? null == eh ? void 0 : eh.surrogates : void 0,
        sound_id: ey && e ? null == eN ? void 0 : eN.soundId : void 0,
        duration_ms: t - e_.startTime,
        payment_source_type: null == eg ? void 0 : eg.type
      })
    }, [eL, eh, ev, eR, ey, eN, e_.startTime, eg]),
    eb = l.useMemo(() => () => null == O ? void 0 : O(eu === N.PurchaseState.COMPLETED, ei), [O, eu, ei]),
    ex = (0, r.useStableMemo)(() => Date.now(), [ef]),
    eG = l.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          trackedFromStep: n,
          analyticsDataOverride: u,
          fulfillment: l
        } = t,
        i = Date.now();
      if (e === h.Step.CONFIRM && (ek(), null == d || d(l), et)) {
        eb();
        return
      }
      eo(e), null == q || q(e), ec(null);
      let a = null != n ? n : ef;
      if (null === a) {
        I.default.track(b.AnalyticEvents.PAYMENT_FLOW_LOADED, {
          ...eL,
          initial_step: e,
          has_saved_payment_source: em
        });
        return
      }
      I.default.track(b.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...eL,
        ...u,
        from_step: a,
        to_step: e === h.Step.ADD_PAYMENT_STEPS ? h.Step.PAYMENT_TYPE : e,
        step_duration_ms: i - ex,
        flow_duration_ms: i - e_.startTime
      })
    }, [eo, q, ec, ef, eL, ex, e_.startTime, ek, d, et, eb, em]);
  (0, S.usePaymentStepForAuthentication)(ef, ed, eG), (0, h.usePurchaseStateForStep)(ef, eu, el), (0, m.usePurchaseTokenAuthStep)(ef, eE, eG), (0, _.default)(eb), (0, P.useUnsupportedExternalSubscriptionModalHandler)(ep, () => O(!1), ey), (0, S.usePaymentAuthenticationPoller)(ed);
  let eD = (0, U.PaymentModalHeader)({
    renderHeader: W,
    referralTrialOfferId: X,
    handleClose: eb
  });
  return (0, u.jsx)(o.Shaker, {
    className: D.shaker,
    isShaking: Q && eu === N.PurchaseState.PURCHASING,
    intensity: 2,
    children: (0, u.jsx)(o.ModalRoot, {
      className: a()(D.root, {
        [D.withHeader]: null != eD
      }),
      transitionState: f,
      hideShadow: $,
      returnRef: ee,
      size: eA,
      children: (0, u.jsx)(k.default, {
        header: eD,
        isLargeModal: Z || (null == eI ? void 0 : eI.isLargeModal),
        initialPlanId: E,
        subscriptionTier: M,
        handleStepChange: eG,
        handleClose: eb,
        analyticsData: eL,
        setAnalyticsData: eU,
        trialId: L,
        trialFooterMessageOverride: g,
        reviewWarningMessage: Y,
        planGroup: w,
        openInvoiceId: H,
        analyticsLocation: n,
        onSubscriptionConfirmation: F,
        renderPurchaseConfirmation: K,
        postSuccessGuild: B,
        followupSKUInfo: j,
        referralTrialOfferId: X,
        skipConfirm: et
      })
    })
  })
}

function w(e) {
  let {
    subscriptionTier: t,
    initialPlanId: n,
    handleStepChange: i,
    referralTrialOfferId: a,
    handleClose: r
  } = e, {
    activeSubscription: o,
    blockedPayments: _,
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: S,
    currencyLoading: m,
    selectedSkuId: P,
    setSelectedPlanId: T,
    defaultPlanId: I,
    startedPaymentFlowWithPaymentSourcesRef: A
  } = (0, v.usePaymentContext)(), {
    isGift: y
  } = (0, R.useGiftContext)(), N = A.current, C = (0, L.default)({
    isGift: y,
    skuId: P,
    referralTrialOfferId: a
  }), {
    defaultToMonthlyPlan: U
  } = E.TrialRedemptionDefaultPlanExperiment.getCurrentConfig({
    location: "055ec5_1"
  }, {
    autoTrackExposure: !1
  }), [k, b] = l.useState(!0), G = (0, s.useStateFromStores)([M.default], () => M.default.applicationIdsFetched.has(x.PREMIUM_SUBSCRIPTION_APPLICATION));
  return (l.useEffect(() => {
    b(!p || !S || m)
  }, [m, S, p]), (0, d.default)("Payment Modal", k, 5, {
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: S,
    currencyLoading: m
  }, {
    tags: {
      app_context: "billing"
    }
  }), l.useEffect(() => {
    if (!G && (0, c.fetchUserEntitlementsForApplication)(x.PREMIUM_SUBSCRIPTION_APPLICATION), k || _) return;
    let e = (0, O.inOneStepSubscriptionCheckout)({
      isTrial: C,
      isGift: y,
      selectedSkuId: P,
      startedPaymentFlowWithPaymentSources: N
    });
    null != n ? i(h.Step.REVIEW) : e ? (T((0, O.getDefaultPlanOneStepCheckout)(P, o, I)), i(h.Step.REVIEW)) : null != t ? i(h.Step.PLAN_SELECT) : i(h.Step.SKU_SELECT)
  }, [o, _, G, n, k, i, t, P, T, U, C, I, y, N]), k) ? (0, u.jsx)(g.default, {}) : _ ? (0, u.jsx)(f.BlockedPaymentsContentModal, {
    onClose: r
  }) : null
}