"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  l = n("512722"),
  a = n.n(l),
  r = n("442837"),
  u = n("481060"),
  o = n("355467"),
  c = n("906732"),
  d = n("160913"),
  m = n("311821"),
  f = n("459965"),
  p = n("858987"),
  _ = n("975060"),
  S = n("882712"),
  I = n("855775"),
  P = n("285952"),
  E = n("626135"),
  T = n("669079"),
  N = n("74538"),
  v = n("987209"),
  h = n("563132"),
  x = n("632580"),
  A = n("45572"),
  C = n("919778"),
  y = n("612853"),
  g = n("981631"),
  M = n("876475");

function R(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: l,
    onNext: R,
    legalTermsNodeRef: b,
    flashLegalTerms: L,
    invoiceError: O,
    planError: j,
    onPurchaseError: G,
    baseAnalyticsData: D,
    flowStartTime: U,
    trialId: F,
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
    setHasAcceptedTerms: X,
    setPurchaseError: J,
    purchaseType: q,
    paymentSourceId: Q,
    paymentSources: $,
    selectedSkuId: ee,
    skusById: et,
    skuPricePreviewsById: en,
    referralCode: ei,
    contextMetadata: es,
    invoicePreview: el
  } = (0, h.usePaymentContext)(), {
    isGift: ea,
    selectedGiftStyle: er,
    customGiftMessage: eu,
    emojiConfetti: eo,
    soundEffect: ec,
    giftRecipient: ed
  } = (0, v.useGiftContext)(), em = (0, T.getGiftExperience)(ed), ef = {};
  ef.gift_style = er, em === T.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (a()(null != ed, "Gift recipient must be set at purchase review step for these gift options."), ef.recipient_id = ed.id, ef.custom_message = eu, ef.emoji_id = null == eo ? void 0 : eo.id, ef.emoji_name = null == eo ? void 0 : eo.surrogates, ef.sound_id = null == ec ? void 0 : ec.soundId);
  let ep = null == Z ? void 0 : Z.id,
    e_ = (0, C.checkNoPaymentTrialEnabled)(F, z.paymentSourceId, ep),
    eS = (0, r.useStateFromStores)([_.default], () => _.default.popupCallbackCalled),
    {
      analyticsLocations: eI
    } = (0, c.default)(),
    eP = null != Q ? $[Q] : null,
    [eE, eT] = s.useState(e_),
    [eN, ev] = s.useState(!1),
    {
      hasEntitlements: eh
    } = (0, f.useSubscriptionEntitlements)(ep, ea),
    ex = (0, N.isPrepaidPaymentSource)(z.paymentSourceId),
    eA = eh || e_,
    eC = (0, d.useIsPrepaidPaymentPastDue)(),
    ey = null,
    eg = null;
  if (q === g.PurchaseTypes.ONE_TIME) {
    var eM;
    a()(null != ee, "SKU must be selected for one-time purchases"), ey = null !== (eM = et[ee]) && void 0 !== eM ? eM : null, a()(null != ey, "SKU must exist and be fetched.");
    let e = en[ee],
      t = null != Q ? Q : I.NO_PAYMENT_SOURCE;
    eg = null != e ? e[t] : null
  }
  let eR = async () => {
    await (0, x.purchaseProduct)({
      setPurchaseState: n,
      setHasAcceptedTerms: X,
      setIsSubmitting: eT,
      setPurchaseError: J,
      hasRedirectURL: eN,
      setHasRedirectURL: ev,
      isGift: ea,
      baseAnalyticsData: D,
      analyticsLocation: B,
      analyticsLocations: eI,
      flowStartTime: U,
      subscriptionPlan: Z,
      planGroup: w,
      trialId: F,
      priceOptions: z,
      paymentSource: eP,
      isPrepaidPaymentPastDue: eC,
      openInvoiceId: H,
      premiumSubscription: t,
      onNext: R,
      metadata: W,
      sku: ey,
      skuPricePreview: eg,
      purchaseType: q,
      referralCode: ei,
      loadId: es.loadId,
      giftInfoOptions: ef,
      invoicePreview: el
    })
  };
  s.useEffect(() => {
    (async () => {
      if (!0 === eS) try {
        if (null == _.default.redirectedPaymentId) return;
        await (0, o.redirectedPaymentSucceeded)(_.default.redirectedPaymentId), n(A.PurchaseState.COMPLETED), R()
      } catch (e) {
        n(A.PurchaseState.FAIL), G(e), E.default.track(g.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...D,
          payment_error_code: null == e ? void 0 : e.code,
          payment_source_id: Q,
          payment_source_type: null == eP ? void 0 : eP.type,
          duration_ms: Date.now() - U
        })
      } finally {
        eT(!1), (0, o.resetPaymentIntentId)()
      } else k === S.PurchaseTokenAuthState.SUCCESS && await eR()
    })()
  }, [eS]), s.useEffect(() => {
    e_ && !ea && null == t && eR()
  }, [e_, ea, t]);
  let eb = null != H || q === g.PurchaseTypes.ONE_TIME && !ea;
  return e_ ? null : (0, i.jsxs)(u.ModalFooter, {
    align: P.default.Align.CENTER,
    children: [(0, i.jsx)(p.default, {
      legalTermsNodeRef: b,
      invoiceError: O,
      planError: j,
      disablePurchase: K,
      flashLegalTerms: L,
      isSubmitting: eE,
      premiumSubscription: t,
      isGift: ea,
      planGroup: w,
      isPrepaid: ex,
      isTrial: V,
      makePurchase: eR,
      needsPaymentSource: null == eP && !eA
    }), (0, i.jsx)(y.default, {}), Y && !eb ? (0, i.jsx)("div", {
      className: M.back,
      children: (0, i.jsx)(m.default, {
        onClick: l
      })
    }) : null]
  })
}