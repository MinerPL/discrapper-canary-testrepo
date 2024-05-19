"use strict";
n.r(t), n.d(t, {
  PaymentContext: function() {
    return B
  },
  PaymentContextProvider: function() {
    return H
  },
  useForwardedPaymentContext: function() {
    return K
  },
  usePaymentContext: function() {
    return D
  }
}), n("47120"), n("789020");
var r = n("735250"),
  u = n("470079"),
  i = n("160612"),
  a = n("207561"),
  l = n("153832"),
  o = n("442837"),
  s = n("317381"),
  E = n("964517"),
  S = n("211242"),
  d = n("270144"),
  _ = n("882712"),
  c = n("855775"),
  A = n("551428"),
  f = n("975104"),
  T = n("630388"),
  I = n("74538"),
  C = n("960048"),
  P = n("735521"),
  R = n("583046"),
  N = n("897829"),
  U = n("74179"),
  M = n("896246"),
  p = n("320317"),
  h = n("994427"),
  O = n("814076"),
  L = n("712297"),
  m = n("585686"),
  y = n("771206"),
  F = n("362755"),
  G = n("981631"),
  g = n("474936");
let [B, D, K] = (0, f.default)();

function H(e) {
  var t, n;
  let {
    loadId: f,
    activeSubscription: D,
    stepConfigs: K,
    breadcrumbs: H = [],
    skuIDs: v,
    isGift: b = !1,
    children: w,
    defaultPlanId: Y,
    purchaseType: W = G.PurchaseTypes.SUBSCRIPTION,
    applicationId: V,
    referralCode: k
  } = e, Z = (0, y.default)(), x = (0, S.useBlockedPaymentsConfig)(), J = (0, N.default)(), {
    paymentSources: Q,
    hasPaymentSources: X,
    paymentSourceId: j,
    setPaymentSourceId: z,
    hasFetchedPaymentSources: q
  } = (0, U.default)({
    isGift: b,
    activeSubscription: D
  }), $ = u.useRef(X), {
    hasFetchedSubscriptionPlans: ee,
    priceOptions: et,
    setCurrency: en,
    currencyLoading: er,
    currencies: eu
  } = (0, R.default)({
    activeSubscription: D,
    skuIDs: v,
    paymentSourceId: j,
    isGift: b
  }), ei = (0, O.default)(), [ea, el] = u.useState(!1), {
    step: eo,
    setStep: es,
    steps: eE,
    breadcrumbsData: eS
  } = (0, m.default)({
    stepConfigs: K,
    breadcrumbs: H
  }), [ed, e_] = (0, h.default)(eo), {
    paymentError: ec,
    paymentAuthenticationState: eA
  } = (0, M.default)(), {
    purchaseError: ef,
    purchaseErrorBlockRef: eT,
    setPurchaseError: eI
  } = (0, p.default)(), eC = (0, a.useLazyValue)(() => {
    let e = null != f ? f : (0, l.v4)();
    return C.default.addBreadcrumb({
      message: "Checkout session ID: ".concat(e)
    }), {
      loadId: e,
      startTime: Date.now()
    }
  }), {
    selectedSkuId: eP,
    selectedPlan: eR,
    setSelectedSkuId: eN,
    setSelectedPlanId: eU
  } = (0, P.default)(), [eM, ep] = (0, o.useStateFromStoresArray)([_.default], () => [_.default.purchaseTokenAuthState, _.default.purchaseTokenHash]), [eh, eO] = (0, o.useStateFromStoresArray)([F.default], () => [F.default.browserCheckoutState, F.default.loadId]), [eL, em] = u.useState(null), [ey, eF] = u.useState(null), [eG, eg] = u.useState(null), [eB, eD] = u.useState(null), [eK, eH] = u.useState(null), [ev, eb] = u.useState(void 0), [ew, eY] = u.useState([]), eW = u.useMemo(() => null == eR || (0, I.isPremiumSubscriptionPlan)(eR.id), [eR]), eV = u.useRef(null != D ? D.planId : null);
  u.useEffect(() => {
    null == eV.current && null != D && (eV.current = D.planId)
  }, [D]);
  let {
    skusById: ek,
    hasFetchedSkus: eZ,
    skuPricePreviewsById: ex
  } = (0, L.default)({
    applicationId: null != V ? V : g.PREMIUM_SUBSCRIPTION_APPLICATION,
    skuIDs: v,
    currentPaymentSourceId: j,
    isGift: b
  }), eJ = u.useMemo(() => {
    if (null == eP) return null;
    let e = ex[eP];
    return null == e ? null : e[null != j ? j : c.NO_PAYMENT_SOURCE]
  }, [eP, ex, j]), eQ = (0, d.useApplication)(V), eX = (0, T.hasFlag)(null !== (t = null == eQ ? void 0 : eQ.flags) && void 0 !== t ? t : 0, G.ApplicationFlags.EMBEDDED) && (0, T.hasFlag)(null !== (n = null == eQ ? void 0 : eQ.flags) && void 0 !== n ? n : 0, G.ApplicationFlags.EMBEDDED_IAP), ej = (0, o.useStateFromStores)([s.default], () => Array.from(s.default.getSelfEmbeddedActivities().values()).find(e => {
    let {
      applicationId: t
    } = e;
    return t === V
  })), ez = (0, E.default)(ej), eq = (0, o.useStateFromStores)([A.default], () => null != eP ? A.default.getForSKU(eP) : null, [eP]), e$ = ek[null != eP ? eP : ""], [e0, e1] = u.useState(null), [e4, e7] = u.useState(null);
  return (0, r.jsx)(B.Provider, {
    value: {
      stripe: Z,
      contextMetadata: eC,
      blockedPayments: x,
      activeSubscription: D,
      hasFetchedSubscriptions: J,
      hasFetchedSubscriptionPlans: ee,
      updatedSubscription: eB,
      setUpdatedSubscription: eD,
      subscriptionMetadataRequest: eK,
      setSubscriptionMetadataRequest: eH,
      hasFetchedPaymentSources: q,
      paymentSources: Q,
      hasPaymentSources: X,
      paymentSourceId: j,
      setPaymentSourceId: z,
      priceOptions: et,
      setCurrency: en,
      currencyLoading: er,
      currencies: eu,
      ...ei,
      hasAcceptedTerms: ea,
      setHasAcceptedTerms: el,
      step: eo,
      setStep: es,
      steps: eE,
      stepConfigs: K,
      breadcrumbs: eS,
      purchaseState: ed,
      setPurchaseState: e_,
      paymentAuthenticationState: eA,
      paymentError: ec,
      purchaseError: ef,
      setPurchaseError: eI,
      purchaseErrorBlockRef: eT,
      purchaseTokenAuthState: eM,
      purchaseTokenHash: ep,
      browserCheckoutState: eh,
      browserCheckoutStateLoadId: eO,
      bodyNode: eL,
      setBodyNode: em,
      footerNode: ey,
      setFooterNode: eF,
      modalOverlayNode: eG,
      setModalOverlayNode: eg,
      selectedSkuId: eP,
      selectedSku: e$,
      selectedStoreListing: eq,
      selectedPlan: eR,
      setSelectedSkuId: eN,
      setSelectedPlanId: eU,
      readySlideId: ev,
      setReadySlideId: eb,
      defaultPlanId: Y,
      isPremium: eW,
      startedPaymentFlowWithPaymentSourcesRef: $,
      startingPremiumSubscriptionPlanIdRef: eV,
      hasFetchedSkus: eZ,
      skusById: ek,
      skuPricePreviewsById: ex,
      selectedSkuPricePreview: eJ,
      application: eQ,
      purchaseType: W,
      isEmbeddedIAP: eX,
      activitySessionId: ez,
      entitlementsGranted: ew,
      setEntitlementsGranted: eY,
      referralCode: k,
      invoicePreview: e0,
      setInvoicePreview: e1,
      setAnnualDiscountInvoicePreview: e7,
      annualDiscountInvoicePreview: e4
    },
    children: (0, r.jsx)(i.Elements, {
      options: G.StripeElementsOptions,
      stripe: Z,
      children: w
    })
  })
}