"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("512722"),
  l = n.n(a),
  r = n("442837"),
  u = n("481060"),
  o = n("355467"),
  c = n("906732"),
  d = n("160913"),
  m = n("311821"),
  f = n("459965"),
  p = n("858987"),
  S = n("975060"),
  _ = n("882712"),
  I = n("855775"),
  E = n("285952"),
  P = n("626135"),
  T = n("669079"),
  N = n("74538"),
  h = n("987209"),
  x = n("598"),
  v = n("632580"),
  A = n("45572"),
  C = n("919778"),
  g = n("612853"),
  y = n("981631"),
  M = n("525087");

function b(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: a,
    onNext: b,
    legalTermsNodeRef: O,
    flashLegalTerms: R,
    invoiceError: L,
    planError: j,
    onPurchaseError: G,
    baseAnalyticsData: D,
    flowStartTime: F,
    trialId: U,
    planGroup: w,
    analyticsLocation: B,
    purchaseTokenAuthState: k,
    openInvoiceId: H,
    metadata: W,
    backButtonEligible: Y,
    disablePurchase: K,
    isTrial: V = !1
  } = e, {
    selectedPlan: Z,
    priceOptions: z,
    setHasAcceptedTerms: J,
    setPurchaseError: X,
    purchaseType: q,
    paymentSourceId: Q,
    paymentSources: $,
    selectedSkuId: ee,
    skusById: et,
    skuPricePreviewsById: en,
    referralCode: ei,
    contextMetadata: es
  } = (0, x.usePaymentContext)(), {
    isGift: ea,
    selectedGiftStyle: el,
    customGiftMessage: er,
    emojiConfetti: eu,
    soundEffect: eo,
    giftRecipient: ec
  } = (0, h.useGiftContext)(), ed = (0, T.getGiftExperience)(ec), em = {};
  em.gift_style = el, ed === T.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (l()(null != ec, "Gift recipient must be set at purchase review step for these gift options."), em.recipient_id = ec.id, em.custom_message = er, em.emoji_id = null == eu ? void 0 : eu.id, em.emoji_name = null == eu ? void 0 : eu.surrogates, em.sound_id = null == eo ? void 0 : eo.soundId);
  let ef = null == Z ? void 0 : Z.id,
    ep = (0, C.checkNoPaymentTrialEnabled)(U, z.paymentSourceId, ef),
    eS = (0, r.useStateFromStores)([S.default], () => S.default.popupCallbackCalled),
    {
      analyticsLocations: e_
    } = (0, c.default)(),
    eI = null != Q ? $[Q] : null,
    [eE, eP] = s.useState(ep),
    [eT, eN] = s.useState(!1),
    {
      hasEntitlements: eh
    } = (0, f.useSubscriptionEntitlements)(ef, ea),
    ex = (0, N.isPrepaidPaymentSource)(z.paymentSourceId),
    ev = eh || ep,
    eA = (0, d.useIsPrepaidPaymentPastDue)(),
    eC = null,
    eg = null;
  if (q === y.PurchaseTypes.ONE_TIME) {
    var ey;
    l()(null != ee, "SKU must be selected for one-time purchases"), eC = null !== (ey = et[ee]) && void 0 !== ey ? ey : null, l()(null != eC, "SKU must exist and be fetched.");
    let e = en[ee],
      t = null != Q ? Q : I.NO_PAYMENT_SOURCE;
    eg = null != e ? e[t] : null
  }
  let eM = async () => {
    await (0, v.purchaseProduct)({
      setPurchaseState: n,
      setHasAcceptedTerms: J,
      setIsSubmitting: eP,
      setPurchaseError: X,
      hasRedirectURL: eT,
      setHasRedirectURL: eN,
      isGift: ea,
      baseAnalyticsData: D,
      analyticsLocation: B,
      analyticsLocations: e_,
      flowStartTime: F,
      subscriptionPlan: Z,
      planGroup: w,
      trialId: U,
      priceOptions: z,
      paymentSource: eI,
      isPrepaidPaymentPastDue: eA,
      openInvoiceId: H,
      premiumSubscription: t,
      onNext: b,
      metadata: W,
      sku: eC,
      skuPricePreview: eg,
      purchaseType: q,
      referralCode: ei,
      loadId: es.loadId,
      giftInfoOptions: em
    })
  };
  s.useEffect(() => {
    (async () => {
      if (!0 === eS) try {
        if (null == S.default.redirectedPaymentId) return;
        await (0, o.redirectedPaymentSucceeded)(S.default.redirectedPaymentId), n(A.PurchaseState.COMPLETED), b()
      } catch (e) {
        n(A.PurchaseState.FAIL), G(e), P.default.track(y.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...D,
          payment_error_code: null == e ? void 0 : e.code,
          payment_source_id: Q,
          payment_source_type: null == eI ? void 0 : eI.type,
          duration_ms: Date.now() - F
        })
      } finally {
        eP(!1), (0, o.resetPaymentIntentId)()
      } else k === _.PurchaseTokenAuthState.SUCCESS && await eM()
    })()
  }, [eS]), s.useEffect(() => {
    ep && !ea && null == t && eM()
  }, [ep, ea, t]);
  let eb = null != H || q === y.PurchaseTypes.ONE_TIME && !ea;
  return ep ? null : (0, i.jsxs)(u.ModalFooter, {
    align: E.default.Align.CENTER,
    children: [(0, i.jsx)(p.default, {
      legalTermsNodeRef: O,
      invoiceError: L,
      planError: j,
      disablePurchase: K,
      flashLegalTerms: R,
      isSubmitting: eE,
      premiumSubscription: t,
      isGift: ea,
      planGroup: w,
      isPrepaid: ex,
      isTrial: V,
      makePurchase: eM,
      needsPaymentSource: null == eI && !ev
    }), (0, i.jsx)(g.default, {}), Y && !eb ? (0, i.jsx)("div", {
      className: M.back,
      children: (0, i.jsx)(m.default, {
        onClick: a
      })
    }) : null]
  })
}