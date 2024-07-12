s.d(n, {
  l: function() {
return C;
  }
}), s(47120), s(411104);
var l = s(735250),
  t = s(470079),
  i = s(512722),
  r = s.n(i),
  a = s(330726),
  c = s(711459),
  o = s(104494),
  u = s(639119),
  d = s(716534),
  _ = s(664891),
  m = s(911367),
  E = s(669079),
  I = s(987209),
  p = s(598),
  N = s(409813),
  T = s(809144),
  x = s(698708),
  S = s(614223),
  h = s(481595),
  P = s(51499),
  f = s(678334),
  A = s(614277),
  v = s(474936),
  M = s(231338),
  g = s(689938);

function C(e) {
  var n, s;
  let i, {
  handleStepChange: C,
  trialId: O,
  trialFooterMessageOverride: R,
  reviewWarningMessage: j,
  planGroup: L,
  openInvoiceId: y,
  analyticsData: Z,
  analyticsLocation: b,
  referralTrialOfferId: D,
  initialPlanId: G,
  subscriptionTier: U,
  handleClose: F
} = e,
{
  activeSubscription: B,
  setUpdatedSubscription: w,
  contextMetadata: H,
  currencies: k,
  paymentSourceId: W,
  paymentSources: Y,
  priceOptions: K,
  purchaseError: V,
  purchaseTokenAuthState: z,
  selectedPlan: X,
  selectedSkuId: J,
  setCurrency: q,
  setPaymentSourceId: Q,
  setPurchaseState: $,
  setPurchaseError: ee,
  step: en,
  purchaseState: es,
  isPremium: el,
  setHasAcceptedTerms: et,
  purchaseType: ei,
  setEntitlementsGranted: er,
  startedPaymentFlowWithPaymentSourcesRef: ea,
  invoicePreview: ec
} = (0, p.usePaymentContext)(),
{
  isGift: eo,
  giftMessage: eu,
  giftRecipient: ed
} = (0, I.wD)();
  r()(null != en, 'Step should be set');
  let e_ = t.useRef(null),
[em, eE] = (0, a.Z)(!1, 500);
  (0, m.t)();
  let eI = null !== (s = null != O ? O : D) && void 0 !== s ? s : null,
ep = null != eI && (!el || v.nG[eI].skus.includes(J)) ? eI : null,
eN = (0, u.N)(D),
eT = (0, o.Ng)(),
ex = {
  user_trial_offer_id: null == eN ? void 0 : eN.id
};
  t.useEffect(() => {
null != V && null != e_.current && e_.current.scrollIntoView({
  behavior: 'smooth'
});
  }, [V]);
  let eS = t.useCallback((e, n) => {
  w(e), null != n && er(n), C(N.h8.CONFIRM, {
    fulfillment: {
      subscription: e,
      entitlements: n
    }
  });
}, [
  C,
  w,
  er
]),
eh = null != W ? Y[W] : null,
eP = null != X && v.o4.has(X.id) && null != eh && !(0, c.aQ)(eh) ? Error(g.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
ef = t.useRef(null),
[eA, ev] = t.useState(null),
eM = !eo && null != eN && null != J && v.nG[eN.trial_id].skus.includes(J),
eg = null == eT ? void 0 : null === (n = eT.discount) || void 0 === n ? void 0 : n.plan_ids,
eC = !eo && null != eT && null != eg && null != X && eg.includes(X.id),
eO = eo && (0, E.pO)(ed),
eR = null == G && null == U && ei === M.GZ.SUBSCRIPTION,
ej = (0, S.Kp)({
  isTrial: eM,
  isGift: eo,
  selectedSkuId: J,
  startedPaymentFlowWithPaymentSources: ea.current
}),
eL = eo && ei === M.GZ.ONE_TIME,
ey = eL || (ej ? eR && el : el),
eZ = t.useCallback(() => {
  if (ej) {
    C(N.h8.SKU_SELECT);
    return;
  }
  return eL ? C(N.h8.GIFT_CUSTOMIZATION) : C(N.h8.PLAN_SELECT);
}, [
  C,
  ej,
  eL
]),
eb = !1;
  return ei === M.GZ.ONE_TIME ? i = (0, l.jsx)(h.Z, {
hasLegalTermsFlash: em,
legalTermsNodeRef: ef,
onPaymentSourceChange: e => Q(null != e ? e.id : null),
handlePaymentSourceAdd: () => C(N.h8.ADD_PAYMENT_STEPS)
  }) : (eb = eo ? null == ec : null != eh && ei === M.GZ.SUBSCRIPTION && eM && !eh.canRedeemTrial(), null == B || eo ? (r()(null != X, 'Expected plan to be selected'), i = (0, l.jsx)(d.Z, {
selectedPlanId: X.id,
paymentSources: Y,
onPaymentSourceChange: e => Q(null != e ? e.id : null),
priceOptions: K,
currencies: k,
onCurrencyChange: e => q(e),
handlePaymentSourceAdd: () => C(N.h8.ADD_PAYMENT_STEPS),
setHasAcceptedTerms: et,
legalTermsNodeRef: ef,
hasLegalTermsFlash: em,
trialId: ep,
trialFooterMessageOverride: R,
reviewWarningMessage: j,
purchaseState: es,
referralTrialOfferId: D,
isTrial: eM || null != O && null != R,
isDiscount: eC,
handleClose: F
  })) : (r()(null != X, 'Expected plan to be selected'), i = (0, l.jsx)(_.Z, {
premiumSubscription: B,
paymentSources: Y,
priceOptions: K,
onPaymentSourceChange: e => {
  Q(null != e ? e.id : null);
},
onPaymentSourceAdd: () => {
  C(N.h8.ADD_PAYMENT_STEPS);
},
planId: X.id,
setHasAcceptedTerms: et,
legalTermsNodeRef: ef,
hasLegalTermsFlash: em,
onInvoiceError: e => ev(e),
planGroup: L,
currencies: k,
onCurrencyChange: e => q(e),
hasOpenInvoice: null != y,
purchaseState: es,
handleClose: F
  }))), (0, l.jsxs)(l.Fragment, {
children: [
  (0, l.jsx)(T.P, {
    giftMessage: eu
  }),
  !eO && (0, l.jsx)(P.Z, {
    isEligibleForTrial: eM
  }),
  (0, l.jsxs)(A.C3, {
    children: [
      (0, l.jsx)(x.Z, {}),
      i
    ]
  }),
  (0, l.jsx)(A.O3, {
    children: (0, l.jsx)(f.Z, {
      premiumSubscription: null != B ? B : null,
      setPurchaseState: $,
      onBack: eZ,
      onNext: eS,
      onPurchaseError: e => ee(e),
      legalTermsNodeRef: ef,
      flashLegalTerms: () => eE(!0),
      invoiceError: eA,
      planError: eP,
      analyticsLocation: b,
      baseAnalyticsData: Z,
      flowStartTime: H.startTime,
      trialId: ep,
      planGroup: L,
      purchaseTokenAuthState: z,
      openInvoiceId: y,
      backButtonEligible: ey,
      metadata: ex,
      isTrial: eM,
      disablePurchase: eb
    })
  })
]
  });
}