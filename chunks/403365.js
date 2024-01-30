"use strict";
n.r(t), n.d(t, {
  PremiumPaymentSKUSelectStep: function() {
    return T
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  r = n.n(a),
  l = n("77078"),
  i = n("182650"),
  u = n("917247"),
  o = n("279171"),
  d = n("49735"),
  c = n("719923"),
  _ = n("635357"),
  f = n("642906"),
  I = n("85336"),
  E = n("176108"),
  m = n("254350"),
  S = n("646718"),
  P = n("782340"),
  p = n("600465");

function T(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: a
  } = e, {
    setSelectedSkuId: r,
    activeSubscription: l,
    startedPaymentFlowWithPaymentSourcesRef: o,
    setSelectedPlanId: d
  } = (0, f.usePaymentContext)(), {
    isGift: P
  } = (0, _.useGiftContext)(), p = (0, u.usePremiumTrialOffer)(a), T = (0, i.useIsInPremiumOfferExperience)();
  return (0, s.jsx)(N, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: s,
        handleStepChange: a,
        isGift: r,
        userTrialOffer: l,
        setSelectedPlanId: i,
        startedPaymentFlowWithPaymentSources: u
      } = e;
      s(n);
      let o = I.Step.PLAN_SELECT,
        d = (0, c.getPremiumSkuIdForSubscription)(t);
      (d === S.PremiumSubscriptionSKUs.TIER_1 || d === S.PremiumSubscriptionSKUs.TIER_2) && n === S.PremiumSubscriptionSKUs.TIER_0 && !r && (o = I.Step.WHAT_YOU_LOSE);
      let _ = (0, m.isInTrialRedemption)({
          userTrialOffer: l,
          isGift: r,
          skuId: n
        }),
        f = (0, E.inOneStepSubscriptionCheckout)({
          isTrial: _,
          isGift: r,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: u
        });
      if (o !== I.Step.WHAT_YOU_LOSE && f) {
        o = I.Step.REVIEW;
        let e = (0, E.getDefaultPlanOneStepCheckout)(n, t);
        i(e)
      }
      a(o, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: l,
      newSkuId: e,
      setSelectedSkuId: r,
      handleStepChange: t,
      isGift: P,
      userTrialOffer: p,
      startedPaymentFlowWithPaymentSources: o.current,
      setSelectedPlanId: d
    }),
    onClose: n,
    isGift: P,
    inOfferExperience: T
  })
}

function N(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: a,
    inOfferExperience: i
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(l.ModalHeader, {
      className: p.skuSelectModalHeader,
      separator: !1,
      children: [(0, s.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H4,
        children: P.default.Messages.BILLING_STEP_SELECT_PLAN
      }), (0, s.jsx)(l.ModalCloseButton, {
        onClick: n
      })]
    }), (0, s.jsxs)(l.ModalContent, {
      className: r(p.skuSelectModalContent, {
        [p.modalPadding]: i
      }),
      children: [(0, s.jsx)(o.default, {
        fromBoostCancelModal: !1,
        className: p.legacyPricingNotice
      }), (0, s.jsx)(d.default, {
        onSelectSku: t,
        isGift: a
      })]
    })]
  })
}