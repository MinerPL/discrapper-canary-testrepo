"use strict";
n.d(t, {
  g: function() {
    return u
  }
}), n(47120);
var i = n(442837),
  r = n(509545),
  s = n(74538),
  o = n(374649),
  a = n(104494),
  l = n(474936);

function u(e) {
  var t, n;
  let {
    priceOptions: u,
    preventFetch: _,
    selectedSkuId: d,
    isGift: c = !1,
    planGroup: E,
    activeSubscription: I
  } = e, T = (0, a.z1)(), h = (0, i.e7)([r.Z], () => r.Z.get(l.Xh.PREMIUM_YEAR_TIER_2)), S = null == T ? void 0 : null === (t = T.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => l.GP[e].skuId === d), f = null != I && null != h ? (0, s.al)(I, h.id, 1, new Set(E)) : null, N = !c && null != T && null != d && S, [A, m] = (0, o.ED)({
    subscriptionId: null !== (n = null == I ? void 0 : I.id) && void 0 !== n ? n : "null",
    items: f,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: u.paymentSourceId,
    currency: u.currency,
    preventFetch: !N || null == I || _
  }), [O, R] = (0, o.ED)({
    items: [{
      planId: l.Xh.PREMIUM_YEAR_TIER_2,
      quantity: 1
    }],
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: u.paymentSourceId,
    currency: u.currency,
    preventFetch: !N || null != I || _
  });
  return null != A ? {
    annualInvoicePreview: A,
    annualInvoicePreviewError: m,
    isEligibleForAnnualDiscount: N
  } : null != O ? {
    annualInvoicePreview: O,
    annualInvoicePreviewError: R,
    isEligibleForAnnualDiscount: N
  } : {
    annualInvoicePreview: null,
    annualInvoicePreviewError: null,
    isEligibleForAnnualDiscount: N
  }
}