n.d(t, {
  q: function() {
return m;
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  o = n.n(r),
  a = n(481060),
  s = n(140465),
  l = n(639119),
  d = n(55610),
  c = n(973007),
  C = n(74538),
  u = n(987209),
  _ = n(598),
  p = n(409813),
  f = n(614223),
  x = n(48175),
  h = n(474936),
  b = n(689938),
  g = n(745102);

function m(e) {
  let {
handleStepChange: t,
handleClose: n,
referralTrialOfferId: r
  } = e, {
setSelectedSkuId: o,
activeSubscription: a,
startedPaymentFlowWithPaymentSourcesRef: d,
setSelectedPlanId: c,
priceOptions: b
  } = (0, _.usePaymentContext)(), {
isGift: g
  } = (0, u.wD)(), m = (0, l.N)(r), I = (0, s.Nx)();
  return (0, i.jsx)(L, {
selectSku: e => function(e) {
  let {
    activeSubscription: t,
    newSkuId: n,
    setSelectedSkuId: i,
    handleStepChange: r,
    isGift: o,
    userTrialOffer: a,
    setSelectedPlanId: s,
    startedPaymentFlowWithPaymentSources: l
  } = e;
  i(n);
  let d = p.h8.PLAN_SELECT,
    c = (0, C.k5)(t);
  (c === h.Si.TIER_1 || c === h.Si.TIER_2) && n === h.Si.TIER_0 && !o && (d = p.h8.WHAT_YOU_LOSE);
  let u = (0, x.T)({
      userTrialOffer: a,
      isGift: o,
      skuId: n
    }),
    _ = (0, f.Kp)({
      isTrial: u,
      isGift: o,
      selectedSkuId: n,
      startedPaymentFlowWithPaymentSources: l
    });
  d !== p.h8.WHAT_YOU_LOSE && _ && (d = p.h8.REVIEW, s((0, f.nA)(n, t))), r(d, {
    analyticsDataOverride: {
      sku_id: n
    }
  });
}({
  activeSubscription: a,
  newSkuId: e,
  setSelectedSkuId: o,
  handleStepChange: t,
  isGift: g,
  userTrialOffer: m,
  startedPaymentFlowWithPaymentSources: d.current,
  setSelectedPlanId: c
}),
onClose: n,
isGift: g,
inOfferExperience: I,
priceOptions: b
  });
}

function L(e) {
  let {
selectSku: t,
onClose: n,
isGift: r,
inOfferExperience: s,
priceOptions: l
  } = e;
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)(a.ModalHeader, {
    className: g.skuSelectModalHeader,
    separator: !1,
    children: [
      (0, i.jsx)(a.FormTitle, {
        tag: a.FormTitleTags.H4,
        children: b.Z.Messages.BILLING_STEP_SELECT_PLAN
      }),
      (0, i.jsx)(a.ModalCloseButton, {
        onClick: n
      })
    ]
  }),
  (0, i.jsxs)(a.ModalContent, {
    className: o()(g.skuSelectModalContent, {
      [g.modalPadding]: s
    }),
    children: [
      (0, i.jsx)(d.Z, {
        fromBoostCancelModal: !1,
        className: g.legacyPricingNotice
      }),
      (0, i.jsx)(c.Z, {
        onSelectSku: e => t((0, C.Wz)(e)),
        isGift: r,
        priceOptions: l
      })
    ]
  })
]
  });
}