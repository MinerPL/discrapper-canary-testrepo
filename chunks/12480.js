"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var s = a("862205");
a("773336");
let r = (0, s.createExperiment)({
  kind: "user",
  id: "2024-01_mobile_shop",
  label: "Mobile Shop Experiment",
  defaultConfig: {
    mobileShopEnabled: !1,
    showPaymentSuccessViewInsteadOfPDP: !1,
    shouldAnimateAvatarDecorationsInIndexPages: !1,
    shouldFakePurchaseSuccessFlowLocally: !1
  },
  treatments: [{
    id: 1,
    label: "Enables mobile shop",
    config: {
      mobileShopEnabled: !0,
      showPaymentSuccessViewInsteadOfPDP: !1,
      shouldAnimateAvatarDecorationsInIndexPages: !1,
      shouldFakePurchaseSuccessFlowLocally: !1
    }
  }, {
    id: 601,
    label: "Show payment success view instead of PDP",
    config: {
      mobileShopEnabled: !0,
      showPaymentSuccessViewInsteadOfPDP: !0,
      shouldAnimateAvatarDecorationsInIndexPages: !1,
      shouldFakePurchaseSuccessFlowLocally: !1
    }
  }, {
    id: 602,
    label: "Animate decorations in home/index page",
    config: {
      mobileShopEnabled: !0,
      showPaymentSuccessViewInsteadOfPDP: !1,
      shouldAnimateAvatarDecorationsInIndexPages: !0,
      shouldFakePurchaseSuccessFlowLocally: !1
    }
  }, {
    id: 603,
    label: "Simulate Success Flow Locally",
    config: {
      mobileShopEnabled: !0,
      showPaymentSuccessViewInsteadOfPDP: !0,
      shouldAnimateAvatarDecorationsInIndexPages: !1,
      shouldFakePurchaseSuccessFlowLocally: !0
    }
  }]
});
var l = e => {
  let {
    location: t
  } = e;
  return r.useExperiment({
    location: t
  })
}