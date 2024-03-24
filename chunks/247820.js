"use strict";
n.r(t), n.d(t, {
  fetchPremiumMarketingContent: function() {
    return l
  }
});
var a = n("872717"),
  s = n("49111");
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