n.r(t), n.d(t, {
  PaymentContext: function() {
return F;
  },
  PaymentContextProvider: function() {
return g;
  },
  useForwardedPaymentContext: function() {
return y;
  },
  usePaymentContext: function() {
return K;
  }
}), n(47120), n(789020);
var r = n(735250),
  i = n(470079),
  u = n(160612),
  l = n(77866),
  o = n(772848),
  E = n(442837),
  a = n(317381),
  _ = n(964517),
  S = n(211242),
  s = n(270144),
  A = n(882712),
  c = n(855775),
  T = n(551428),
  I = n(975104),
  d = n(630388),
  C = n(74538),
  R = n(960048),
  N = n(735521),
  M = n(583046),
  P = n(897829),
  f = n(74179),
  U = n(896246),
  L = n(320317),
  O = n(994427),
  h = n(814076),
  p = n(712297),
  m = n(585686),
  Z = n(771206),
  G = n(362755),
  D = n(981631),
  B = n(474936);
let [F, K, y] = (0, I.Z)();

function g(e) {
  var t, n;
  let {
loadId: I,
activeSubscription: K,
stepConfigs: y,
breadcrumbs: g = [],
skuIDs: H,
isGift: v = !1,
children: w,
defaultPlanId: Y,
purchaseType: b = D.GZQ.SUBSCRIPTION,
applicationId: W,
referralCode: V,
repeatPurchase: k = !1
  } = e, x = (0, Z.Z)(), X = (0, S.Q)(), J = (0, P.Z)(), {
paymentSources: Q,
hasPaymentSources: j,
paymentSourceId: q,
setPaymentSourceId: z,
hasFetchedPaymentSources: $
  } = (0, f.Z)({
isGift: v,
activeSubscription: K
  }), ee = i.useRef(j), {
hasFetchedSubscriptionPlans: et,
priceOptions: en,
setCurrency: er,
currencyLoading: ei,
currencies: eu
  } = (0, M.Z)({
activeSubscription: K,
skuIDs: H,
paymentSourceId: q,
isGift: v
  }), el = (0, h.Z)(), [eo, eE] = i.useState(!1), {
step: ea,
setStep: e_,
steps: eS,
breadcrumbsData: es,
previousStepRef: eA
  } = (0, m.Z)({
stepConfigs: y,
breadcrumbs: g
  }), [ec, eT] = (0, O.Z)(ea), {
paymentError: eI,
paymentAuthenticationState: ed
  } = (0, U.Z)(), {
purchaseError: eC,
purchaseErrorBlockRef: eR,
setPurchaseError: eN
  } = (0, L.Z)(), eM = (0, l.Z)(() => {
let e = null != I ? I : (0, o.Z)();
return R.Z.addBreadcrumb({
  message: 'Checkout session ID: '.concat(e)
}), {
  loadId: e,
  startTime: Date.now()
};
  }), {
selectedSkuId: eP,
selectedPlan: ef,
setSelectedSkuId: eU,
setSelectedPlanId: eL
  } = (0, N.Z)(), [eO, eh] = (0, E.Wu)([A.Z], () => [
A.Z.purchaseTokenAuthState,
A.Z.purchaseTokenHash
  ]), [ep, em] = (0, E.Wu)([G.Z], () => [
G.Z.browserCheckoutState,
G.Z.loadId
  ]), [eZ, eG] = i.useState(null), [eD, eB] = i.useState(null), [eF, eK] = i.useState(null), [ey, eg] = i.useState(null), [eH, ev] = i.useState(null), [ew, eY] = i.useState(void 0), [eb, eW] = i.useState([]), eV = i.useMemo(() => null == ef || (0, C.PV)(ef.id), [ef]), ek = i.useRef(null != K ? K.planId : null);
  i.useEffect(() => {
null == ek.current && null != K && (ek.current = K.planId);
  }, [K]);
  let {
skusById: ex,
hasFetchedSkus: eX,
skuPricePreviewsById: eJ,
previewErrorsById: eQ
  } = (0, p.Z)({
applicationId: null != W ? W : B.RQ,
skuIDs: H,
currentPaymentSourceId: q,
isGift: v
  }), ej = null != eP ? eQ[eP] : null, eq = i.useMemo(() => {
if (null == eP)
  return null;
let e = eJ[eP];
return null == e ? null : e[null != q ? q : c.c];
  }, [
eP,
eJ,
q
  ]), ez = (0, s.IX)(W), e$ = (0, d.yE)(null !== (t = null == ez ? void 0 : ez.flags) && void 0 !== t ? t : 0, D.udG.EMBEDDED) && (0, d.yE)(null !== (n = null == ez ? void 0 : ez.flags) && void 0 !== n ? n : 0, D.udG.EMBEDDED_IAP), e0 = (0, E.e7)([a.ZP], () => Array.from(a.ZP.getSelfEmbeddedActivities().values()).find(e => {
let {
  applicationId: t
} = e;
return t === W;
  })), e1 = (0, _.Z)(e0), e7 = (0, E.e7)([T.Z], () => null != eP ? T.Z.getForSKU(eP) : null, [eP]), e4 = ex[null != eP ? eP : ''], [e2, e5] = i.useState(null);
  return (0, r.jsx)(F.Provider, {
value: {
  stripe: x,
  contextMetadata: eM,
  blockedPayments: X,
  activeSubscription: K,
  hasFetchedSubscriptions: J,
  hasFetchedSubscriptionPlans: et,
  updatedSubscription: ey,
  setUpdatedSubscription: eg,
  subscriptionMetadataRequest: eH,
  setSubscriptionMetadataRequest: ev,
  hasFetchedPaymentSources: $,
  paymentSources: Q,
  hasPaymentSources: j,
  paymentSourceId: q,
  setPaymentSourceId: z,
  priceOptions: en,
  setCurrency: er,
  currencyLoading: ei,
  currencies: eu,
  ...el,
  hasAcceptedTerms: eo,
  setHasAcceptedTerms: eE,
  step: ea,
  setStep: e_,
  steps: eS,
  stepConfigs: y,
  breadcrumbs: es,
  previousStepRef: eA,
  purchaseState: ec,
  setPurchaseState: eT,
  paymentAuthenticationState: ed,
  paymentError: eI,
  purchaseError: eC,
  setPurchaseError: eN,
  purchasePreviewError: ej,
  purchaseErrorBlockRef: eR,
  purchaseTokenAuthState: eO,
  purchaseTokenHash: eh,
  browserCheckoutState: ep,
  browserCheckoutStateLoadId: em,
  bodyNode: eZ,
  setBodyNode: eG,
  footerNode: eD,
  setFooterNode: eB,
  modalOverlayNode: eF,
  setModalOverlayNode: eK,
  selectedSkuId: eP,
  selectedSku: e4,
  selectedStoreListing: e7,
  selectedPlan: ef,
  setSelectedSkuId: eU,
  setSelectedPlanId: eL,
  readySlideId: ew,
  setReadySlideId: eY,
  defaultPlanId: Y,
  isPremium: eV,
  startedPaymentFlowWithPaymentSourcesRef: ee,
  startingPremiumSubscriptionPlanIdRef: ek,
  hasFetchedSkus: eX,
  skusById: ex,
  skuPricePreviewsById: eJ,
  selectedSkuPricePreview: eq,
  application: ez,
  purchaseType: b,
  isEmbeddedIAP: e$,
  activitySessionId: e1,
  entitlementsGranted: eb,
  setEntitlementsGranted: eW,
  referralCode: V,
  invoicePreview: e2,
  setInvoicePreview: e5,
  repeatPurchase: k
},
children: (0, r.jsx)(u.Elements, {
  options: D.OBo,
  stripe: x,
  children: w
})
  });
}