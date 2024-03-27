"use strict";
n.r(t), n.d(t, {
  PremiumPaymentSKUSelectStep: function() {
    return x
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  l = n("77078"),
  a = n("182650"),
  o = n("917247"),
  u = n("279171"),
  d = n("49735"),
  c = n("719923"),
  p = n("635357"),
  f = n("642906"),
  m = n("85336"),
  S = n("176108"),
  P = n("254350"),
  E = n("646718"),
  _ = n("782340"),
  C = n("63069");

function x(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: i
  } = e, {
    setSelectedSkuId: s,
    activeSubscription: l,
    startedPaymentFlowWithPaymentSourcesRef: u,
    setSelectedPlanId: d,
    priceOptions: _
  } = (0, f.usePaymentContext)(), {
    isGift: C
  } = (0, p.useGiftContext)(), x = (0, o.usePremiumTrialOffer)(i), T = (0, a.useIsInPremiumOfferExperience)();
  return (0, r.jsx)(I, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: r,
        handleStepChange: i,
        isGift: s,
        userTrialOffer: l,
        setSelectedPlanId: a,
        startedPaymentFlowWithPaymentSources: o
      } = e;
      r(n);
      let u = m.Step.PLAN_SELECT,
        d = (0, c.getPremiumSkuIdForSubscription)(t);
      (d === E.PremiumSubscriptionSKUs.TIER_1 || d === E.PremiumSubscriptionSKUs.TIER_2) && n === E.PremiumSubscriptionSKUs.TIER_0 && !s && (u = m.Step.WHAT_YOU_LOSE);
      let p = (0, P.isInTrialRedemption)({
          userTrialOffer: l,
          isGift: s,
          skuId: n
        }),
        f = (0, S.inOneStepSubscriptionCheckout)({
          isTrial: p,
          isGift: s,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      if (u !== m.Step.WHAT_YOU_LOSE && f) {
        u = m.Step.REVIEW;
        let e = (0, S.getDefaultPlanOneStepCheckout)(n, t);
        a(e)
      }
      i(u, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: l,
      newSkuId: e,
      setSelectedSkuId: s,
      handleStepChange: t,
      isGift: C,
      userTrialOffer: x,
      startedPaymentFlowWithPaymentSources: u.current,
      setSelectedPlanId: d
    }),
    onClose: n,
    isGift: C,
    inOfferExperience: T,
    priceOptions: _
  })
}

function I(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: i,
    inOfferExperience: a,
    priceOptions: o
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(l.ModalHeader, {
      className: C.skuSelectModalHeader,
      separator: !1,
      children: [(0, r.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H4,
        children: _.default.Messages.BILLING_STEP_SELECT_PLAN
      }), (0, r.jsx)(l.ModalCloseButton, {
        onClick: n
      })]
    }), (0, r.jsxs)(l.ModalContent, {
      className: s(C.skuSelectModalContent, {
        [C.modalPadding]: a
      }),
      children: [(0, r.jsx)(u.default, {
        fromBoostCancelModal: !1,
        className: C.legacyPricingNotice
      }), (0, r.jsx)(d.default, {
        onSelectSku: e => t((0, c.castPremiumSubscriptionAsSkuId)(e)),
        isGift: i,
        priceOptions: o
      })]
    })]
  })
}