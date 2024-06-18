"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(911969),
  u = n(509545),
  _ = n(78839),
  d = n(74538),
  c = n(937615),
  E = n(104494),
  I = n(639119),
  T = n(230927),
  h = n(474936),
  S = n(689938),
  f = n(778959);
t.Z = function(e) {
  var t, n, r, N;
  let {
    subscriptionTier: A,
    interval: m = h.rV.MONTH,
    className: O,
    isGift: R = !1,
    variant: C,
    priceOptions: p,
    shouldUseModifiedCopy: g
  } = e, L = (0, E.z1)(), v = (0, I.N)(), D = (0, o.e7)([u.Z], () => u.Z.isLoadedForPremiumSKUs()), M = (0, o.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()), {
    annualInvoicePreview: P
  } = (0, T.g)({
    priceOptions: null != p ? p : {
      currency: "null"
    },
    preventFetch: null == L || null == p || null != v || A !== h.Si.TIER_2 || m !== h.rV.YEAR,
    selectedSkuId: h.Si.TIER_2,
    planGroup: h.Y1,
    activeSubscription: M
  }), y = null == P ? void 0 : null === (N = P.invoiceItems) || void 0 === N ? void 0 : null === (r = N.find(e => e.subscriptionPlanId === h.Xh.PREMIUM_YEAR_TIER_2)) || void 0 === r ? void 0 : null === (n = r.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === l.eW.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount;
  if (!D) return (0, i.jsx)(a.Spinner, {
    type: a.Spinner.Type.PULSING_ELLIPSIS,
    className: f.priceSpinner
  });
  let U = u.Z.getForSkuAndInterval((0, d.Wz)(A), m),
    b = null != y ? (0, d.aS)(h.Xh.PREMIUM_YEAR_TIER_2, !1, R, p) : null,
    G = null != U ? (0, d.gy)(U, p, !1, R) : null;
  return (0, i.jsx)(a.Heading, {
    color: "always-white",
    variant: null != C ? C : "heading-md/medium",
    className: s()(f.pricePerInterval, O),
    children: null != b && null != y ? (0, i.jsxs)("div", {
      className: f.annualDiscountString,
      children: [S.Z.Messages.BILLING_ANNUAL_DISCOUNT_TIER_CARD_YEARLY_PRICE.format({
        discountedPrice: (0, c.T4)(b.amount - y, b.currency)
      }), S.Z.Messages.BILLING_ANNUAL_DISCOUNT_TIER_CARD_YEARLY_PRICE_SUBTEXT.format({
        regularPrice: G
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("span", {
        className: g ? void 0 : f.price,
        children: G
      }), " / ", (0, d.eP)(m)]
    })
  })
}