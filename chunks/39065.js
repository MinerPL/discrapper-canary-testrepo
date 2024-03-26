"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("627445"),
  i = n.n(a),
  l = n("446674"),
  u = n("77078"),
  o = n("850068"),
  c = n("685665"),
  d = n("921149"),
  m = n("177998"),
  f = n("661128"),
  p = n("868869"),
  _ = n("926223"),
  S = n("467292"),
  I = n("622839"),
  E = n("145131"),
  P = n("599110"),
  T = n("659632"),
  N = n("719923"),
  A = n("635357"),
  C = n("642906"),
  h = n("605886"),
  v = n("286350"),
  g = n("102492"),
  x = n("376641"),
  y = n("49111"),
  O = n("252182");

function M(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: a,
    onNext: M,
    legalTermsNodeRef: R,
    flashLegalTerms: L,
    invoiceError: b,
    planError: j,
    onPurchaseError: G,
    baseAnalyticsData: D,
    flowStartTime: U,
    trialId: F,
    planGroup: B,
    analyticsLocation: w,
    purchaseTokenAuthState: k,
    openInvoiceId: H,
    metadata: Y,
    backButtonEligible: W,
    disablePurchase: Z,
    isTrial: K = !1
  } = e, {
    selectedPlan: V,
    priceOptions: z,
    setHasAcceptedTerms: J,
    setPurchaseError: X,
    purchaseType: q,
    paymentSourceId: Q,
    paymentSources: $,
    selectedSkuId: ee,
    skusById: et,
    skuPricePreviewsById: en,
    referralCode: es,
    contextMetadata: er
  } = (0, C.usePaymentContext)(), {
    isGift: ea,
    selectedGiftStyle: ei,
    customGiftMessage: el,
    emojiConfetti: eu,
    soundEffect: eo,
    giftRecipient: ec
  } = (0, A.useGiftContext)(), ed = (0, T.getGiftExperience)(ec), em = {};
  em.gift_style = ei, ed === T.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (i(null != ec, "Gift recipient must be set at purchase review step for these gift options."), em.recipient_id = ec.id, em.custom_message = el, em.emoji_id = null == eu ? void 0 : eu.id, em.emoji_name = null == eu ? void 0 : eu.surrogates, em.sound_id = null == eo ? void 0 : eo.soundId);
  let ef = null == V ? void 0 : V.id,
    ep = (0, g.checkNoPaymentTrialEnabled)(F, z.paymentSourceId, ef),
    e_ = (0, l.useStateFromStores)([_.default], () => _.default.popupCallbackCalled),
    {
      analyticsLocations: eS
    } = (0, c.default)(),
    eI = null != Q ? $[Q] : null,
    [eE, eP] = r.useState(ep),
    [eT, eN] = r.useState(!1),
    {
      hasEntitlements: eA
    } = (0, f.useSubscriptionEntitlements)(ef, ea),
    eC = (0, N.isPrepaidPaymentSource)(z.paymentSourceId),
    eh = eA || ep,
    ev = (0, d.useIsPrepaidPaymentPastDue)(),
    eg = null,
    ex = null;
  if (q === y.PurchaseTypes.ONE_TIME) {
    var ey;
    i(null != ee, "SKU must be selected for one-time purchases"), i(null != (eg = null !== (ey = et[ee]) && void 0 !== ey ? ey : null), "SKU must exist and be fetched.");
    let e = en[ee],
      t = null != Q ? Q : I.NO_PAYMENT_SOURCE;
    ex = null != e ? e[t] : null
  }
  let eO = async () => {
    await (0, h.purchaseProduct)({
      setPurchaseState: n,
      setHasAcceptedTerms: J,
      setIsSubmitting: eP,
      setPurchaseError: X,
      hasRedirectURL: eT,
      setHasRedirectURL: eN,
      isGift: ea,
      baseAnalyticsData: D,
      analyticsLocation: w,
      analyticsLocations: eS,
      flowStartTime: U,
      subscriptionPlan: V,
      planGroup: B,
      trialId: F,
      priceOptions: z,
      paymentSource: eI,
      isPrepaidPaymentPastDue: ev,
      openInvoiceId: H,
      premiumSubscription: t,
      onNext: M,
      metadata: Y,
      sku: eg,
      skuPricePreview: ex,
      purchaseType: q,
      referralCode: es,
      loadId: er.loadId,
      giftInfoOptions: em
    })
  };
  r.useEffect(() => {
    let e = async () => {
      if (!0 === e_) try {
        if (null == _.default.redirectedPaymentId) return;
        await (0, o.redirectedPaymentSucceeded)(_.default.redirectedPaymentId), n(v.PurchaseState.COMPLETED), M()
      } catch (e) {
        n(v.PurchaseState.FAIL), G(e), P.default.track(y.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...D,
          payment_error_code: null == e ? void 0 : e.code,
          payment_source_id: Q,
          payment_source_type: null == eI ? void 0 : eI.type,
          duration_ms: Date.now() - U
        })
      } finally {
        eP(!1), (0, o.resetPaymentIntentId)()
      } else k === S.PurchaseTokenAuthState.SUCCESS && await eO()
    };
    e()
  }, [e_]), r.useEffect(() => {
    ep && !ea && null == t && eO()
  }, [ep, ea, t]);
  let eM = null != H || q === y.PurchaseTypes.ONE_TIME && !ea;
  return ep ? null : (0, s.jsxs)(u.ModalFooter, {
    align: E.default.Align.CENTER,
    children: [(0, s.jsx)(p.default, {
      legalTermsNodeRef: R,
      invoiceError: b,
      planError: j,
      disablePurchase: Z,
      flashLegalTerms: L,
      isSubmitting: eE,
      premiumSubscription: t,
      isGift: ea,
      planGroup: B,
      isPrepaid: eC,
      isTrial: K,
      makePurchase: eO,
      needsPaymentSource: null == eI && !eh
    }), (0, s.jsx)(x.default, {}), W && !eM ? (0, s.jsx)("div", {
      className: O.back,
      children: (0, s.jsx)(m.default, {
        onClick: a
      })
    }) : null]
  })
}