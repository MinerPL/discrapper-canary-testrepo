t.r(e), t.d(e, {
  PaymentModal: function() {
return b;
  },
  PaymentPredicateStep: function() {
return Y;
  }
}), t(47120);
var l = t(735250),
  u = t(470079),
  i = t(120356),
  a = t.n(i),
  r = t(792986),
  o = t(399606),
  s = t(481060),
  c = t(496929),
  d = t(975608),
  _ = t(89057),
  E = t(382577),
  f = t(522489),
  p = t(439017),
  m = t(104494),
  T = t(176919),
  M = t(711007),
  I = t(459965),
  A = t(509545),
  S = t(580130),
  v = t(626135),
  h = t(669079),
  P = t(74538),
  N = t(987209),
  R = t(598),
  y = t(409813),
  g = t(45572),
  C = t(784707),
  L = t(614223),
  Z = t(48175),
  k = t(928886),
  x = t(456251),
  O = t(614277),
  U = t(981631),
  D = t(474936),
  G = t(689938),
  w = t(980077);

function b(n) {
  let {
analyticsLocations: e,
analyticsLocation: t,
analyticsObject: i,
analyticsSourceLocation: o,
analyticsSubscriptionType: c = U.NYc.PREMIUM,
onComplete: d,
transitionState: _,
initialPlanId: f,
subscriptionTier: p,
onClose: S,
trialId: L,
trialFooterMessageOverride: Z,
reviewWarningMessage: x,
planGroup: b = D.Y1,
openInvoiceId: Y,
onSubscriptionConfirmation: H,
renderPurchaseConfirmation: W,
postSuccessGuild: j,
followupSKUInfo: K,
renderHeader: B,
applicationId: F,
guildId: V,
referralTrialOfferId: X,
skuId: z,
onStepChange: Q,
shakeWhilePurchasing: q = !1,
isLargeModal: J = !1,
hideShadow: $ = !1,
returnRef: nn,
skipConfirm: ne = !1,
continueSession: nt = !1
  } = n, {
activitySessionId: nl,
purchaseState: nu,
setPurchaseState: ni,
selectedSkuId: na,
setSelectedSkuId: nr,
selectedPlan: no,
setSelectedPlanId: ns,
setStep: nc,
setPurchaseError: nd,
paymentAuthenticationState: n_,
step: nE,
contextMetadata: nf,
purchaseTokenAuthState: np,
activeSubscription: nm,
priceOptions: nT,
hasPaymentSources: nM,
paymentSourceId: nI,
paymentSources: nA,
purchaseType: nS,
defaultPlanId: nv
  } = (0, R.usePaymentContext)(), nh = (0, C.Z)(), nP = J || (null == nh ? void 0 : nh.isLargeModal) ? s.ModalSize.LARGE : s.ModalSize.SMALL, {
isGift: nN,
giftRecipient: nR,
customGiftMessage: ny,
emojiConfetti: ng,
soundEffect: nC
  } = (0, N.wD)(), nL = (0, m.Ng)(), nZ = null != p && !nN && (0, m.Wp)(nL, p), [nk, nx] = u.useState({
load_id: nf.loadId,
payment_type: U.Zuq[nS],
location: null != t ? t : i,
source: o,
subscription_type: c,
subscription_plan_id: null == no ? void 0 : no.id,
is_gift: nN,
eligible_for_trial: null != L,
location_stack: e,
sku_id: z,
application_id: F,
guild_id: V,
payment_modal_version: 'v1',
activity_session_id: nl,
eligible_for_discount: nZ
  }), nO = null != nI ? nA[nI] : null;
  u.useEffect(() => {
nx(n => {
  let e = null != no ? (0, P.aS)(no.id, !1, nN, nT) : void 0;
  return {
    ...n,
    subscription_plan_id: null == no ? void 0 : no.id,
    price: null == e ? void 0 : e.amount,
    regular_price: null == no ? void 0 : no.price,
    currency: nT.currency,
    sku_id: na
  };
});
  }, [
no,
na,
nN,
nT
  ]), u.useEffect(() => {
v.default.track(U.rMx.PAYMENT_FLOW_STARTED, {
  ...nk,
  has_saved_payment_source: nM
});
  }, []), u.useEffect(() => {
if (null != nv && nt ? ns(nv) : ns(f), null != z)
  nr(z);
else if (null != f) {
  var n;
  nr(null === (n = A.Z.get(f)) || void 0 === n ? void 0 : n.skuId);
}
  }, [
ns,
nr,
f,
z,
nv,
nt
  ]);
  let nU = u.useCallback(() => {
  let n = (0, h.MY)(nR) === h.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
    e = Date.now();
  v.default.track(U.rMx.PAYMENT_FLOW_SUCCEEDED, {
    ...nk,
    is_custom_message_edited: nN && n && null != ny ? ny !== G.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0,
    is_custom_emoji_sound_available: nN && n,
    emoji_name: nN && n && (null == ng ? void 0 : ng.id) == null ? null == ng ? void 0 : ng.surrogates : void 0,
    sound_id: nN && n ? null == nC ? void 0 : nC.soundId : void 0,
    duration_ms: e - nf.startTime,
    payment_source_type: null == nO ? void 0 : nO.type
  });
}, [
  nk,
  ng,
  ny,
  nR,
  nN,
  nC,
  nf.startTime,
  nO
]),
nD = u.useMemo(() => () => null == S ? void 0 : S(nu === g.A.COMPLETED, na), [
  S,
  nu,
  na
]),
nG = (0, r.Z)(() => Date.now(), [nE]),
nw = u.useCallback(function(n) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      trackedFromStep: t,
      analyticsDataOverride: l,
      fulfillment: u
    } = e,
    i = Date.now();
  if (n === y.h8.CONFIRM && (nU(), null == d || d(u), ne)) {
    nD();
    return;
  }
  nc(n), null == Q || Q(n), nd(null);
  let a = null != t ? t : nE;
  if (null === a) {
    v.default.track(U.rMx.PAYMENT_FLOW_LOADED, {
      ...nk,
      initial_step: n,
      has_saved_payment_source: nM
    });
    return;
  }
  v.default.track(U.rMx.PAYMENT_FLOW_STEP, {
    ...nk,
    ...l,
    from_step: a,
    to_step: n === y.h8.ADD_PAYMENT_STEPS ? y.h8.PAYMENT_TYPE : n,
    step_duration_ms: i - nG,
    flow_duration_ms: i - nf.startTime
  });
}, [
  nc,
  Q,
  nd,
  nE,
  nk,
  nG,
  nf.startTime,
  nU,
  d,
  ne,
  nD,
  nM
]);
  (0, T.bp)(nE, n_, nw, ni), (0, y.dZ)(nE, nu, ni), (0, M.p)(nE, np, nw), (0, E.Z)(nD), (0, I.w)(nm, () => S(!1), nN), (0, T.D6)(n_);
  let nb = (0, k.U)({
renderHeader: B,
referralTrialOfferId: X,
handleClose: nD
  });
  return (0, l.jsx)(s.Shaker, {
className: w.shaker,
isShaking: q && nu === g.A.PURCHASING,
intensity: 2,
children: (0, l.jsx)(s.ModalRoot, {
  className: a()(w.root, {
    [w.withHeader]: null != nb
  }),
  transitionState: _,
  hideShadow: $,
  returnRef: nn,
  size: nP,
  children: (0, l.jsx)(O.ZP, {
    header: nb,
    isLargeModal: J || (null == nh ? void 0 : nh.isLargeModal),
    initialPlanId: f,
    subscriptionTier: p,
    handleStepChange: nw,
    handleClose: nD,
    analyticsData: nk,
    setAnalyticsData: nx,
    trialId: L,
    trialFooterMessageOverride: Z,
    reviewWarningMessage: x,
    planGroup: b,
    openInvoiceId: Y,
    analyticsLocation: t,
    onSubscriptionConfirmation: H,
    renderPurchaseConfirmation: W,
    postSuccessGuild: j,
    followupSKUInfo: K,
    referralTrialOfferId: X,
    skipConfirm: ne,
    continueSession: nt
  })
})
  });
}

function Y(n) {
  let {
subscriptionTier: e,
initialPlanId: t,
handleStepChange: i,
referralTrialOfferId: a,
handleClose: r,
continueSession: s
  } = n, {
activeSubscription: E,
blockedPayments: m,
hasFetchedSubscriptions: T,
hasFetchedSubscriptionPlans: M,
currencyLoading: I,
selectedSkuId: A,
setSelectedPlanId: v,
defaultPlanId: h,
startedPaymentFlowWithPaymentSourcesRef: P,
repeatPurchase: g
  } = (0, R.usePaymentContext)(), {
isGift: C
  } = (0, N.wD)(), k = P.current, O = (0, Z.Z)({
isGift: C,
skuId: A,
referralTrialOfferId: a
  }), {
defaultToMonthlyPlan: U
  } = p.k.getCurrentConfig({
location: '055ec5_1'
  }, {
autoTrackExposure: !1
  }), {
redirectToPlanSelectStep: G
  } = f.m.useExperiment({
location: 'PaymentPredicateStep'
  }, {
autoTrackExposure: !1
  }), [w, b] = u.useState(!0), Y = (0, o.e7)([S.Z], () => S.Z.applicationIdsFetched.has(D.RQ));
  return (u.useEffect(() => {
b(!T || !M || I);
  }, [
I,
M,
T
  ]), (0, d.Z)('Payment Modal', w, 5, {
hasFetchedSubscriptions: T,
hasFetchedSubscriptionPlans: M,
currencyLoading: I
  }, {
tags: {
  app_context: 'billing'
}
  }), u.useEffect(() => {
if (!Y && (0, c.yD)(D.RQ), w || m)
  return;
let n = (0, L.Kp)({
  isTrial: O,
  isGift: C,
  selectedSkuId: A,
  startedPaymentFlowWithPaymentSources: k
});
s ? i(y.h8.ADD_PAYMENT_STEPS) : null != t ? i(g && G ? y.h8.PLAN_SELECT : y.h8.REVIEW) : n ? (v((0, L.nA)(A, E, h)), i(y.h8.REVIEW)) : null != e ? i(y.h8.PLAN_SELECT) : i(y.h8.SKU_SELECT);
  }, [
E,
m,
Y,
t,
w,
i,
e,
A,
v,
U,
O,
h,
C,
k,
s,
g,
G
  ]), w) ? (0, l.jsx)(x.Z, {}) : m ? (0, l.jsx)(_.Vq, {
onClose: r
  }) : null;
}