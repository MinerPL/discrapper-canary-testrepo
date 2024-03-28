"use strict";
n.r(t), n.d(t, {
  PremiumPaymentSKUSelectStep: function() {
    return C
  }
});
var s = n("735250");
n("470079");
var r = n("803997"),
  i = n.n(r),
  l = n("481060"),
  a = n("140465"),
  o = n("639119"),
  u = n("55610"),
  d = n("973007"),
  c = n("74538"),
  p = n("987209"),
  f = n("598"),
  m = n("409813"),
  S = n("614223"),
  E = n("48175"),
  P = n("474936"),
  x = n("689938"),
  h = n("300561");

function C(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: r
  } = e, {
    setSelectedSkuId: i,
    activeSubscription: l,
    startedPaymentFlowWithPaymentSourcesRef: u,
    setSelectedPlanId: d,
    priceOptions: x
  } = (0, f.usePaymentContext)(), {
    isGift: h
  } = (0, p.useGiftContext)(), C = (0, o.usePremiumTrialOffer)(r), T = (0, a.useIsInPremiumOfferExperience)();
  return (0, s.jsx)(_, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: s,
        handleStepChange: r,
        isGift: i,
        userTrialOffer: l,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o
      } = e;
      s(n);
      let u = m.Step.PLAN_SELECT,
        d = (0, c.getPremiumSkuIdForSubscription)(t);
      (d === P.PremiumSubscriptionSKUs.TIER_1 || d === P.PremiumSubscriptionSKUs.TIER_2) && n === P.PremiumSubscriptionSKUs.TIER_0 && !i && (u = m.Step.WHAT_YOU_LOSE);
      let p = (0, E.isInTrialRedemption)({
          userTrialOffer: l,
          isGift: i,
          skuId: n
        }),
        f = (0, S.inOneStepSubscriptionCheckout)({
          isTrial: p,
          isGift: i,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      u !== m.Step.WHAT_YOU_LOSE && f && (u = m.Step.REVIEW, a((0, S.getDefaultPlanOneStepCheckout)(n, t))), r(u, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: l,
      newSkuId: e,
      setSelectedSkuId: i,
      handleStepChange: t,
      isGift: h,
      userTrialOffer: C,
      startedPaymentFlowWithPaymentSources: u.current,
      setSelectedPlanId: d
    }),
    onClose: n,
    isGift: h,
    inOfferExperience: T,
    priceOptions: x
  })
}

function _(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: r,
    inOfferExperience: a,
    priceOptions: o
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(l.ModalHeader, {
      className: h.skuSelectModalHeader,
      separator: !1,
      children: [(0, s.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H4,
        children: x.default.Messages.BILLING_STEP_SELECT_PLAN
      }), (0, s.jsx)(l.ModalCloseButton, {
        onClick: n
      })]
    }), (0, s.jsxs)(l.ModalContent, {
      className: i()(h.skuSelectModalContent, {
        [h.modalPadding]: a
      }),
      children: [(0, s.jsx)(u.default, {
        fromBoostCancelModal: !1,
        className: h.legacyPricingNotice
      }), (0, s.jsx)(d.default, {
        onSelectSku: e => t((0, c.castPremiumSubscriptionAsSkuId)(e)),
        isGift: r,
        priceOptions: o
      })]
    })]
  })
}