n.d(s, {
  q: function() {
return E;
  }
});
var t = n(735250);
n(470079);
var i = n(120356),
  r = n.n(i),
  l = n(481060),
  a = n(140465),
  o = n(639119),
  C = n(55610),
  d = n(973007),
  u = n(74538),
  c = n(987209),
  _ = n(598),
  p = n(409813),
  x = n(614223),
  L = n(48175),
  h = n(474936),
  f = n(689938),
  I = n(745102);

function E(e) {
  let {
handleStepChange: s,
handleClose: n,
referralTrialOfferId: i
  } = e, {
setSelectedSkuId: r,
activeSubscription: l,
startedPaymentFlowWithPaymentSourcesRef: C,
setSelectedPlanId: d,
priceOptions: f
  } = (0, _.usePaymentContext)(), {
isGift: I
  } = (0, c.wD)(), E = (0, o.N)(i), N = (0, a.Nx)();
  return (0, t.jsx)(M, {
selectSku: e => function(e) {
  let {
    activeSubscription: s,
    newSkuId: n,
    setSelectedSkuId: t,
    handleStepChange: i,
    isGift: r,
    userTrialOffer: l,
    setSelectedPlanId: a,
    startedPaymentFlowWithPaymentSources: o
  } = e;
  t(n);
  let C = p.h8.PLAN_SELECT,
    d = (0, u.k5)(s);
  (d === h.Si.TIER_1 || d === h.Si.TIER_2) && n === h.Si.TIER_0 && !r && (C = p.h8.WHAT_YOU_LOSE);
  let c = (0, L.T)({
      userTrialOffer: l,
      isGift: r,
      skuId: n
    }),
    _ = (0, x.Kp)({
      isTrial: c,
      isGift: r,
      selectedSkuId: n,
      startedPaymentFlowWithPaymentSources: o
    });
  C !== p.h8.WHAT_YOU_LOSE && _ && (C = p.h8.REVIEW, a((0, x.nA)(n, s))), i(C, {
    analyticsDataOverride: {
      sku_id: n
    }
  });
}({
  activeSubscription: l,
  newSkuId: e,
  setSelectedSkuId: r,
  handleStepChange: s,
  isGift: I,
  userTrialOffer: E,
  startedPaymentFlowWithPaymentSources: C.current,
  setSelectedPlanId: d
}),
onClose: n,
isGift: I,
inOfferExperience: N,
priceOptions: f
  });
}

function M(e) {
  let {
selectSku: s,
onClose: n,
isGift: i,
inOfferExperience: a,
priceOptions: o
  } = e;
  return (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsxs)(l.ModalHeader, {
    className: I.skuSelectModalHeader,
    separator: !1,
    children: [
      (0, t.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H4,
        children: f.Z.Messages.BILLING_STEP_SELECT_PLAN
      }),
      (0, t.jsx)(l.ModalCloseButton, {
        onClick: n
      })
    ]
  }),
  (0, t.jsxs)(l.ModalContent, {
    className: r()(I.skuSelectModalContent, {
      [I.modalPadding]: a
    }),
    children: [
      (0, t.jsx)(C.Z, {
        fromBoostCancelModal: !1,
        className: I.legacyPricingNotice
      }),
      (0, t.jsx)(d.Z, {
        onSelectSku: e => s((0, u.Wz)(e)),
        isGift: i,
        priceOptions: o
      })
    ]
  })
]
  });
}