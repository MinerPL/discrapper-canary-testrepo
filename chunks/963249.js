n.d(t, {
  Z: function() {
return m;
  }
});
var r = n(735250);
n(470079);
var i = n(97613),
  a = n.n(i),
  s = n(772848),
  o = n(481060),
  l = n(976255),
  u = n(667),
  c = n(138464),
  d = n(594174),
  _ = n(626135),
  E = n(585483),
  f = n(74538),
  h = n(981631),
  p = n(474936);

function m(e) {
  let {
initialPlanId: t,
followupSKUInfo: i,
onClose: m,
onComplete: I,
onSubscriptionConfirmation: T,
analyticsLocations: g,
analyticsObject: S,
analyticsLocation: A,
analyticsSourceLocation: N,
isGift: v = !1,
giftMessage: O,
giftStyle: R,
subscriptionTier: C,
trialId: y,
postSuccessGuild: D,
openInvoiceId: L,
applicationId: b,
referralTrialOfferId: M,
giftRecipient: P,
returnRef: U,
subscription: w,
skipConfirm: x,
repeatPurchase: G
  } = null != e ? e : {}, k = !1, B = (0, s.Z)(), F = d.default.getCurrentUser(), V = (0, f.M5)(F, p.p9.TIER_2), H = a()('payment-modal');
  return (0, o.openModalLazy)(async () => {
let {
  default: e
} = await Promise.all([
  n.e('96427'),
  n.e('77298'),
  n.e('23357'),
  n.e('52249'),
  n.e('29549'),
  n.e('54803'),
  n.e('15685'),
  n.e('47006'),
  n.e('32776'),
  n.e('18209'),
  n.e('8016'),
  n.e('31605'),
  n.e('30671'),
  n.e('68136'),
  n.e('51199'),
  n.e('48453')
]).then(n.bind(n, 7305));
return n => {
  let {
    onClose: a,
    ...s
  } = n;
  return (0, r.jsx)(e, {
    ...s,
    loadId: B,
    subscriptionTier: C,
    skuId: (0, f.Wz)(C),
    isGift: v,
    giftMessage: O,
    giftStyle: R,
    giftRecipient: P,
    initialPlanId: t,
    followupSKUInfo: i,
    onClose: (e, t) => {
      a(), null == m || m(e), e && (null == T || T(), !v && null != t && t === p.Si.TIER_2 && !V && E.S.dispatch(h.CkL.PREMIUM_SUBSCRIPTION_CREATED));
    },
    onComplete: () => {
      k = !0, null == I || I(), !v && (0, c.H)(!0);
    },
    onSubscriptionConfirmation: T,
    analyticsLocations: g,
    analyticsObject: S,
    analyticsLocation: A,
    analyticsSourceLocation: N,
    trialId: y,
    postSuccessGuild: D,
    planGroup: p.Y1,
    openInvoiceId: L,
    applicationId: b,
    referralTrialOfferId: M,
    returnRef: U,
    subscription: w,
    skipConfirm: !!x,
    repeatPurchase: G
  });
};
  }, {
modalKey: H,
onCloseCallback: () => {
  !k && _.default.track(h.rMx.PAYMENT_FLOW_CANCELED, {
    load_id: B,
    payment_type: h.Zuq[h.GZQ.SUBSCRIPTION],
    location: null != A ? A : S,
    source: N,
    subscription_type: h.NYc.PREMIUM,
    is_gift: v,
    eligible_for_trial: null != y,
    application_id: b,
    location_stack: g
  }), (0, l.fw)(), (0, u.p)(), null == m || m(k), k && (null == T || T());
}
  });
}