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
  i = n("803997"),
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
  D = n("661192");

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
    shakeWhilePurchasing: q = !1,
    isLargeModal: Q = !1,
    hideShadow: Z = !1,
    returnRef: $,
    skipConfirm: ee = !1
  } = e, {
    activitySessionId: et,
    purchaseState: en,
    setPurchaseState: eu,
    selectedSkuId: el,
    setSelectedSkuId: ei,
    selectedPlan: ea,
    setSelectedPlanId: er,
    setStep: es,
    setPurchaseError: eo,
    paymentAuthenticationState: ec,
    step: ed,
    contextMetadata: ef,
    purchaseTokenAuthState: e_,
    activeSubscription: eE,
    priceOptions: ep,
    hasPaymentSources: eS,
    paymentSourceId: em,
    paymentSources: eP,
    purchaseType: eT
  } = (0, v.usePaymentContext)(), eM = (0, C.default)(), eI = Q || (null == eM ? void 0 : eM.isLargeModal) ? o.ModalSize.LARGE : o.ModalSize.SMALL, {
    isGift: eA,
    giftRecipient: ey,
    customGiftMessage: eR,
    emojiConfetti: ev,
    soundEffect: eh
  } = (0, R.useGiftContext)(), eN = (0, p.usePremiumDiscountOffer)(), eC = null != M && !eA && (0, p.discountOfferHasTier)(eN, M), [eO, eL] = l.useState({
    load_id: ef.loadId,
    payment_type: b.PurchaseTypeToAnalyticsPaymentType[eT],
    location: null != n ? n : i,
    source: s,
    subscription_type: c,
    subscription_plan_id: null == ea ? void 0 : ea.id,
    is_gift: eA,
    eligible_for_trial: null != L,
    location_stack: t,
    sku_id: J,
    application_id: V,
    guild_id: z,
    payment_modal_version: "v1",
    activity_session_id: et,
    eligible_for_discount: eC
  }), eU = null != em ? eP[em] : null;
  l.useEffect(() => {
    eL(e => {
      let t = null != ea ? (0, y.getPrice)(ea.id, !1, eA, ep) : void 0;
      return {
        ...e,
        subscription_plan_id: null == ea ? void 0 : ea.id,
        price: null == t ? void 0 : t.amount,
        regular_price: null == ea ? void 0 : ea.price,
        currency: ep.currency,
        sku_id: el
      }
    })
  }, [ea, el, eA, ep]), l.useEffect(() => {
    I.default.track(b.AnalyticEvents.PAYMENT_FLOW_STARTED, {
      ...eO,
      has_saved_payment_source: eS
    })
  }, []), l.useEffect(() => {
    if (er(E), null != J) ei(J);
    else if (null != E) {
      var e;
      ei(null === (e = T.default.get(E)) || void 0 === e ? void 0 : e.skuId)
    }
  }, [er, ei, E, J]);
  let eg = l.useCallback(() => {
      let e = (0, A.getGiftExperience)(ey) === A.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        t = Date.now();
      I.default.track(b.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
        ...eO,
        is_custom_message_edited: eA && e && null != eR ? eR !== G.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0,
        is_custom_emoji_sound_available: eA && e,
        emoji_name: eA && e ? null == ev ? void 0 : ev.surrogates : void 0,
        sound_id: eA && e ? null == eh ? void 0 : eh.soundId : void 0,
        duration_ms: t - ef.startTime,
        payment_source_type: null == eU ? void 0 : eU.type
      })
    }, [eO, ev, eR, ey, eA, eh, ef.startTime, eU]),
    ek = l.useMemo(() => () => null == O ? void 0 : O(en === N.PurchaseState.COMPLETED, el), [O, en, el]),
    eb = (0, r.useStableMemo)(() => Date.now(), [ed]),
    ex = l.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          trackedFromStep: n,
          analyticsDataOverride: u,
          fulfillment: l
        } = t,
        i = Date.now();
      if (e === h.Step.CONFIRM && (eg(), null == d || d(l), ee)) {
        ek();
        return
      }
      es(e), eo(null);
      let a = null != n ? n : ed;
      if (null === a) {
        I.default.track(b.AnalyticEvents.PAYMENT_FLOW_LOADED, {
          ...eO,
          initial_step: e,
          has_saved_payment_source: eS
        });
        return
      }
      I.default.track(b.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...eO,
        ...u,
        from_step: a,
        to_step: e === h.Step.ADD_PAYMENT_STEPS ? h.Step.PAYMENT_TYPE : e,
        step_duration_ms: i - eb,
        flow_duration_ms: i - ef.startTime
      })
    }, [eO, ef.startTime, d, eo, es, ed, eb, eS, eg, ek, ee]);
  (0, S.usePaymentStepForAuthentication)(ed, ec, ex), (0, h.usePurchaseStateForStep)(ed, en, eu), (0, m.usePurchaseTokenAuthStep)(ed, e_, ex), (0, _.default)(ek), (0, P.useUnsupportedExternalSubscriptionModalHandler)(eE, () => O(!1), eA), (0, S.usePaymentAuthenticationPoller)(ec);
  let eG = (0, U.PaymentModalHeader)({
    renderHeader: W,
    referralTrialOfferId: X,
    handleClose: ek
  });
  return (0, u.jsx)(o.Shaker, {
    className: D.shaker,
    isShaking: q && en === N.PurchaseState.PURCHASING,
    intensity: 2,
    children: (0, u.jsx)(o.ModalRoot, {
      className: a()(D.root, {
        [D.withHeader]: null != eG
      }),
      transitionState: f,
      hideShadow: Z,
      returnRef: $,
      size: eI,
      children: (0, u.jsx)(k.default, {
        header: eG,
        isLargeModal: Q || (null == eM ? void 0 : eM.isLargeModal),
        initialPlanId: E,
        subscriptionTier: M,
        handleStepChange: ex,
        handleClose: ek,
        analyticsData: eO,
        setAnalyticsData: eL,
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
        skipConfirm: ee
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