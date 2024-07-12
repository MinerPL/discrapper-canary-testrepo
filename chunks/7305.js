n.r(t), n.d(t, {
  PremiumPaymentModal: function() {
return P;
  },
  STEPS: function() {
return v;
  },
  default: function() {
return B;
  }
}), n(411104), n(47120);
var i = n(735250),
  r = n(470079),
  o = n(442837),
  a = n(570140),
  s = n(821849),
  l = n(100527),
  d = n(906732),
  c = n(509545),
  C = n(78839),
  u = n(669079),
  _ = n(987209),
  p = n(598),
  f = n(409813),
  x = n(791785),
  h = n(276442),
  b = n(793541),
  g = n(380898),
  m = n(710094),
  L = n(293858),
  I = n(614223),
  E = n(174827),
  T = n(846464),
  M = n(184160),
  N = n(48175),
  S = n(981631),
  j = n(474936),
  O = n(689938);
let A = [
  f.h8.PLAN_SELECT,
  f.h8.ADD_PAYMENT_STEPS,
  f.h8.REVIEW,
  f.h8.CONFIRM
];

function P(e) {
  let {
analyticsLocation: t,
analyticsObject: n,
analyticsSourceLocation: o,
onComplete: l,
transitionState: C,
initialPlanId: h,
subscriptionTier: b,
onClose: g,
trialId: m,
trialFooterMessageOverride: L,
reviewWarningMessage: I,
openInvoiceId: E,
onSubscriptionConfirmation: T,
renderPurchaseConfirmation: M,
postSuccessGuild: N,
followupSKUInfo: O,
renderHeader: A,
applicationId: P,
guildId: R,
referralTrialOfferId: y,
skuId: v,
returnRef: B,
skipConfirm: k = !1,
continueSession: Z = !1
  } = e, {
analyticsLocations: H
  } = (0, d.ZP)();
  r.useEffect(() => {
!c.Z.isLoadedForPremiumSKUs() && a.Z.wait(() => (0, s.Y2)());
  }, []);
  let {
step: U
  } = (0, p.usePaymentContext)(), {
isGift: F,
giftMessage: G,
giftRecipient: w
  } = (0, _.wD)(), W = F && (0, u.pO)(w) && U === f.h8.PLAN_SELECT;
  return (0, i.jsx)(x.PaymentModal, {
analyticsLocations: H,
analyticsLocation: t,
analyticsObject: n,
analyticsSourceLocation: o,
analyticsSubscriptionType: S.NYc.PREMIUM,
onComplete: l,
transitionState: C,
initialPlanId: h,
giftMessage: G,
subscriptionTier: b,
onClose: g,
trialId: m,
isGift: F,
trialFooterMessageOverride: L,
reviewWarningMessage: I,
planGroup: j.Y1,
openInvoiceId: E,
onSubscriptionConfirmation: T,
renderPurchaseConfirmation: M,
postSuccessGuild: N,
followupSKUInfo: O,
renderHeader: A,
applicationId: P,
guildId: R,
referralTrialOfferId: y,
skuId: v,
shakeWhilePurchasing: !0,
isLargeModal: W,
returnRef: B,
skipConfirm: k,
continueSession: Z
  });
}

function R(e) {
  let {
startedPaymentFlowWithPaymentSourcesRef: t,
selectedSkuId: n
  } = (0, p.usePaymentContext)(), {
isGift: i
  } = (0, _.wD)();
  return (0, I.Kp)({
isTrial: null != e && e,
isGift: i,
selectedSkuId: n,
startedPaymentFlowWithPaymentSources: t.current
  });
}

function y(e) {
  let {
initialPlanId: t,
handleStepChange: n,
referralTrialOfferId: r
  } = e, {
paymentSources: o,
selectedSkuId: a
  } = (0, p.usePaymentContext)(), {
isGift: s
  } = (0, _.wD)(), l = R((0, N.Z)({
isGift: s,
skuId: a,
referralTrialOfferId: r
  }));
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsx)(h.J, {
  ...e,
  breadcrumbSteps: A,
  onReturn: () => {
    let e = Object.values(o).length < 1 && null == t ? f.h8.PLAN_SELECT : f.h8.REVIEW;
    l && (e = f.h8.REVIEW), n(e, {
      trackedFromStep: f.h8.PAYMENT_TYPE
    });
  }
})
  });
}
let v = [{
key: null,
renderStep: e => (0, i.jsx)(x.PaymentPredicateStep, {
  ...e
})
  },
  {
key: f.h8.SKU_SELECT,
renderStep: e => (0, i.jsx)(T.q, {
  ...e
}),
options: {
  renderHeader: !1,
  hideSlider: !0
}
  },
  {
key: f.h8.WHAT_YOU_LOSE,
renderStep: e => (0, i.jsx)(M.x, {
  ...e
}),
options: {
  renderHeader: !1,
  hideSlider: !0
}
  },
  {
key: f.h8.PLAN_SELECT,
renderStep: e => (0, i.jsx)(E.x, {
  ...e
}),
options: {
  renderHeader: !0,
  useBreadcrumbLabel: e => R(e) ? null : O.Z.Messages.BILLING_STEP_SELECT_PLAN
}
  },
  {
key: f.h8.ADD_PAYMENT_STEPS,
renderStep: e => (0, i.jsx)(i.Fragment, {
  children: (0, i.jsx)(y, {
    ...e
  })
}),
options: {
  renderHeader: !0,
  useBreadcrumbLabel: e => R(e) ? null : O.Z.Messages.BILLING_STEP_PAYMENT
}
  },
  {
key: f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
renderStep: () => (0, i.jsx)(g.Z, {})
  },
  {
key: f.h8.AWAITING_AUTHENTICATION,
renderStep: () => (0, i.jsx)(b.Z, {})
  },
  {
key: f.h8.REVIEW,
renderStep: e => (0, i.jsx)(m.l, {
  ...e
}),
options: {
  renderHeader: !0,
  useBreadcrumbLabel: e => R(e) ? O.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT : O.Z.Messages.BILLING_STEP_REVIEW
}
  },
  {
key: f.h8.CONFIRM,
renderStep: e => (0, i.jsx)(L.b, {
  ...e
})
  }
];

function B(e) {
  let t = (0, o.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
{
  analyticsLocations: n
} = (0, d.ZP)(e.analyticsLocations, l.Z.PREMIUM_PAYMENT_MODAL),
{
  subscriptionTier: r,
  isGift: a,
  giftRecipient: s,
  giftMessage: c,
  giftStyle: u,
  loadId: f,
  defaultPlanId: x,
  referralCode: h,
  repeatPurchase: b
} = e;
  if (null != r && !Object.values(j.Si).includes(r))
throw Error('subscriptionTier must be a premium subscription');
  return (0, i.jsx)(d.Gt, {
value: n,
children: (0, i.jsx)(p.PaymentContextProvider, {
  loadId: f,
  activeSubscription: null != e.subscription ? e.subscription : t,
  stepConfigs: v,
  skuIDs: [...j.YQ],
  isGift: a,
  defaultPlanId: x,
  referralCode: h,
  repeatPurchase: b,
  children: (0, i.jsx)(_.KB, {
    isGift: a,
    giftRecipient: null == s ? void 0 : s,
    giftMessage: c,
    giftStyle: u,
    children: (0, i.jsx)(P, {
      ...e
    })
  })
})
  });
}