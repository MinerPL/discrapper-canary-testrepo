"use strict";
n.r(t);
var s = n("735250");
n("470079");
var r = n("481060"),
  i = n("823188"),
  l = n("474936"),
  a = n("531128");

function o(e) {
  let {
    onClick: t,
    isGift: n,
    priceOptions: l
  } = e;
  return (0, s.jsx)(r.Clickable, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, s.jsx)(i.Tier2Card, {
      className: a.tier2MarketingCard,
      ctaButton: null,
      showWumpus: !0,
      showYearlyPrice: !0,
      isGift: n,
      isModal: !0,
      priceOptions: l
    })
  })
}

function u(e) {
  let {
    onClick: t,
    isGift: n,
    priceOptions: l
  } = e;
  return (0, s.jsx)(r.Clickable, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, s.jsx)(i.Tier0Card, {
      className: a.tier0MarketingCard,
      ctaButton: null,
      showWumpus: !0,
      showYearlyPrice: !0,
      isGift: n,
      priceOptions: l
    })
  })
}
t.default = function(e) {
  let {
    onSelectSku: t,
    isGift: n,
    priceOptions: r
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(o, {
      onClick: () => t(l.PremiumSubscriptionSKUs.TIER_2),
      isGift: n,
      priceOptions: r
    }), (0, s.jsx)(u, {
      onClick: () => t(l.PremiumSubscriptionSKUs.TIER_0),
      isGift: n,
      priceOptions: r
    })]
  })
}