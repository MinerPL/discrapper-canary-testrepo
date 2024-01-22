"use strict";
n.r(t), n.d(t, {
  PremiumPaymentSKUSelectStep: function() {
    return m
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("917247"),
  r = n("279171"),
  i = n("49735"),
  u = n("719923"),
  o = n("635357"),
  d = n("642906"),
  c = n("85336"),
  _ = n("176108"),
  f = n("254350"),
  I = n("646718"),
  E = n("782340"),
  S = n("600465");

function m(e) {
  let {
    handleStepChange: t,
    handleClose: n,
    referralTrialOfferId: a
  } = e, {
    setSelectedSkuId: r,
    activeSubscription: i,
    startedPaymentFlowWithPaymentSourcesRef: E,
    setSelectedPlanId: S
  } = (0, d.usePaymentContext)(), {
    isGift: m
  } = (0, o.useGiftContext)(), p = (0, l.usePremiumTrialOffer)(a);
  return (0, s.jsx)(P, {
    selectSku: e => (function(e) {
      let {
        activeSubscription: t,
        newSkuId: n,
        setSelectedSkuId: s,
        handleStepChange: a,
        isGift: l,
        userTrialOffer: r,
        setSelectedPlanId: i,
        startedPaymentFlowWithPaymentSources: o
      } = e;
      s(n);
      let d = c.Step.PLAN_SELECT,
        E = (0, u.getPremiumSkuIdForSubscription)(t);
      (E === I.PremiumSubscriptionSKUs.TIER_1 || E === I.PremiumSubscriptionSKUs.TIER_2) && n === I.PremiumSubscriptionSKUs.TIER_0 && !l && (d = c.Step.WHAT_YOU_LOSE);
      let S = (0, f.isInTrialRedemption)({
          userTrialOffer: r,
          isGift: l,
          skuId: n
        }),
        m = (0, _.inOneStepSubscriptionCheckout)({
          isTrial: S,
          isGift: l,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: o
        });
      if (d !== c.Step.WHAT_YOU_LOSE && m) {
        d = c.Step.REVIEW;
        let e = (0, _.getDefaultPlanOneStepCheckout)(n, t);
        i(e)
      }
      a(d, {
        analyticsDataOverride: {
          sku_id: n
        }
      })
    })({
      activeSubscription: i,
      newSkuId: e,
      setSelectedSkuId: r,
      handleStepChange: t,
      isGift: m,
      userTrialOffer: p,
      startedPaymentFlowWithPaymentSources: E.current,
      setSelectedPlanId: S
    }),
    onClose: n,
    isGift: m
  })
}

function P(e) {
  let {
    selectSku: t,
    onClose: n,
    isGift: l
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(a.ModalHeader, {
      className: S.skuSelectModalHeader,
      separator: !1,
      children: [(0, s.jsx)(a.FormTitle, {
        tag: a.FormTitleTags.H4,
        children: E.default.Messages.BILLING_STEP_SELECT_PLAN
      }), (0, s.jsx)(a.ModalCloseButton, {
        onClick: n
      })]
    }), (0, s.jsxs)(a.ModalContent, {
      className: S.skuSelectModalContent,
      children: [(0, s.jsx)(r.default, {
        fromBoostCancelModal: !1,
        className: S.legacyPricingNotice
      }), (0, s.jsx)(i.default, {
        onSelectSku: t,
        isGift: l
      })]
    })]
  })
}