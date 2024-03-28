"use strict";
n.r(t), n.d(t, {
  fetchPremiumMarketingContent: function() {
    return l
  },
  fetchPremiumMarketingContentWithUserOffer: function() {
    return i
  }
});
var a = n("544891"),
  s = n("981631");
async function l() {
  try {
    let e = await a.HTTP.get({
      url: s.Endpoints.PREMIUM_MARKETING
    });
    if (e.ok) return e.body;
    return []
  } catch (e) {
    return []
  }
}
async function i(e) {
  let {
    userTrialOffer: t,
    userDiscount: n,
    userDiscountOffer: l
  } = e;
  try {
    let e = await a.HTTP.post({
      url: s.Endpoints.PREMIUM_MARKETING,
      body: {
        user_trial_offer: t,
        user_discount: n,
        user_discount_offer: l
      }
    });
    if (e.ok) return e.body;
    return []
  } catch (e) {
    return []
  }
}