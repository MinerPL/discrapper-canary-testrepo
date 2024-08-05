t.d(n, {
  l: function() {
return C;
  }
}), t(47120), t(411104);
var i = t(735250),
  a = t(470079),
  r = t(512722),
  s = t.n(r),
  l = t(330726),
  o = t(711459),
  c = t(104494),
  u = t(639119),
  d = t(716534),
  _ = t(664891),
  p = t(911367),
  m = t(669079),
  I = t(987209),
  f = t(598),
  E = t(409813),
  x = t(809144),
  N = t(698708),
  S = t(614223),
  T = t(481595),
  h = t(51499),
  b = t(678334),
  g = t(614277),
  P = t(474936),
  v = t(231338),
  A = t(689938);

function C(e) {
  var n, t;
  let r, {
  handleStepChange: C,
  trialId: M,
  trialFooterMessageOverride: y,
  reviewWarningMessage: O,
  planGroup: R,
  openInvoiceId: L,
  analyticsData: j,
  analyticsLocation: Z,
  referralTrialOfferId: D,
  initialPlanId: w,
  subscriptionTier: G,
  handleClose: B
} = e,
{
  activeSubscription: U,
  setUpdatedSubscription: k,
  contextMetadata: F,
  currencies: W,
  paymentSourceId: H,
  paymentSources: Y,
  priceOptions: K,
  purchaseError: V,
  purchaseTokenAuthState: z,
  selectedPlan: X,
  selectedSkuId: q,
  setCurrency: J,
  setPaymentSourceId: Q,
  setPurchaseState: $,
  setPurchaseError: ee,
  step: en,
  purchaseState: et,
  isPremium: ei,
  setHasAcceptedTerms: ea,
  purchaseType: er,
  setEntitlementsGranted: es,
  startedPaymentFlowWithPaymentSourcesRef: el,
  invoicePreview: eo
} = (0, f.usePaymentContext)(),
{
  isGift: ec,
  giftMessage: eu,
  giftRecipient: ed
} = (0, I.wD)();
  s()(null != en, 'Step should be set');
  let e_ = a.useRef(null),
[ep, em] = (0, l.Z)(!1, 500);
  (0, p.t)();
  let eI = null !== (t = null != M ? M : D) && void 0 !== t ? t : null,
ef = null != eI && (!ei || P.nG[eI].skus.includes(q)) ? eI : null,
eE = (0, u.N)(D),
ex = (0, c.Ng)(),
eN = {
  user_trial_offer_id: null == eE ? void 0 : eE.id
};
  a.useEffect(() => {
null != V && null != e_.current && e_.current.scrollIntoView({
  behavior: 'smooth'
});
  }, [V]);
  let eS = a.useCallback((e, n) => {
  k(e), null != n && es(n), C(E.h8.CONFIRM, {
    fulfillment: {
      subscription: e,
      entitlements: n
    }
  });
}, [
  C,
  k,
  es
]),
eT = null != H ? Y[H] : null,
eh = null != X && P.o4.has(X.id) && null != eT && !(0, o.aQ)(eT) ? Error(A.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
eb = a.useRef(null),
[eg, eP] = a.useState(null),
ev = !ec && null != eE && null != q && P.nG[eE.trial_id].skus.includes(q),
eA = null == ex ? void 0 : null === (n = ex.discount) || void 0 === n ? void 0 : n.plan_ids,
eC = !ec && null != ex && null != eA && null != X && eA.includes(X.id),
eM = ec && (0, m.pO)(ed),
ey = null == w && null == G && er === v.GZ.SUBSCRIPTION,
eO = (0, S.Kp)({
  isTrial: ev,
  isGift: ec,
  selectedSkuId: q,
  startedPaymentFlowWithPaymentSources: el.current
}),
eR = ec && er === v.GZ.ONE_TIME,
eL = eR || (eO ? ey && ei : ei),
ej = a.useCallback(() => {
  if (eO) {
    C(E.h8.SKU_SELECT);
    return;
  }
  return eR ? C(E.h8.GIFT_CUSTOMIZATION) : C(E.h8.PLAN_SELECT);
}, [
  C,
  eO,
  eR
]),
eZ = !1;
  return er === v.GZ.ONE_TIME ? r = (0, i.jsx)(T.Z, {
hasLegalTermsFlash: ep,
legalTermsNodeRef: eb,
onPaymentSourceChange: e => Q(null != e ? e.id : null),
handlePaymentSourceAdd: () => C(E.h8.ADD_PAYMENT_STEPS)
  }) : (eZ = ec ? null == eo : null != eT && er === v.GZ.SUBSCRIPTION && ev && !eT.canRedeemTrial(), null == U || ec ? (s()(null != X, 'Expected plan to be selected'), r = (0, i.jsx)(d.Z, {
selectedPlanId: X.id,
paymentSources: Y,
onPaymentSourceChange: e => Q(null != e ? e.id : null),
priceOptions: K,
currencies: W,
onCurrencyChange: e => J(e),
handlePaymentSourceAdd: () => C(E.h8.ADD_PAYMENT_STEPS),
setHasAcceptedTerms: ea,
legalTermsNodeRef: eb,
hasLegalTermsFlash: ep,
trialId: ef,
trialFooterMessageOverride: y,
reviewWarningMessage: O,
purchaseState: et,
referralTrialOfferId: D,
isTrial: ev || null != M && null != y,
isDiscount: eC,
handleClose: B
  })) : (s()(null != X, 'Expected plan to be selected'), r = (0, i.jsx)(_.Z, {
premiumSubscription: U,
paymentSources: Y,
priceOptions: K,
onPaymentSourceChange: e => {
  Q(null != e ? e.id : null);
},
onPaymentSourceAdd: () => {
  C(E.h8.ADD_PAYMENT_STEPS);
},
planId: X.id,
setHasAcceptedTerms: ea,
legalTermsNodeRef: eb,
hasLegalTermsFlash: ep,
onInvoiceError: e => eP(e),
planGroup: R,
currencies: W,
onCurrencyChange: e => J(e),
hasOpenInvoice: null != L,
purchaseState: et,
handleClose: B
  }))), (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(x.P, {
    giftMessage: eu
  }),
  !eM && (0, i.jsx)(h.Z, {
    isEligibleForTrial: ev
  }),
  (0, i.jsxs)(g.C3, {
    children: [
      (0, i.jsx)(N.Z, {}),
      r
    ]
  }),
  (0, i.jsx)(g.O3, {
    children: (0, i.jsx)(b.Z, {
      premiumSubscription: null != U ? U : null,
      setPurchaseState: $,
      onBack: ej,
      onNext: eS,
      onPurchaseError: e => ee(e),
      legalTermsNodeRef: eb,
      flashLegalTerms: () => em(!0),
      invoiceError: eg,
      planError: eh,
      analyticsLocation: Z,
      baseAnalyticsData: j,
      flowStartTime: F.startTime,
      trialId: ef,
      planGroup: R,
      purchaseTokenAuthState: z,
      openInvoiceId: L,
      backButtonEligible: eL,
      metadata: eN,
      isTrial: ev,
      disablePurchase: eZ
    })
  })
]
  });
}