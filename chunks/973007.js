"use strict";
s.r(t);
var n = s("735250");
s("470079");
var i = s("481060"),
  r = s("823188"),
  l = s("474936"),
  a = s("69769");

function o(e) {
  let {
    onClick: t,
    isGift: s,
    priceOptions: l
  } = e;
  return (0, n.jsx)(i.Clickable, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, n.jsx)(r.Tier2Card, {
      className: a.tier2MarketingCard,
      ctaButton: null,
      showWumpus: !0,
      showYearlyPrice: !0,
      isGift: s,
      isModal: !0,
      priceOptions: l
    })
  })
}

function C(e) {
  let {
    onClick: t,
    isGift: s,
    priceOptions: l
  } = e;
  return (0, n.jsx)(i.Clickable, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, n.jsx)(r.Tier0Card, {
      className: a.tier0MarketingCard,
      ctaButton: null,
      showWumpus: !0,
      showYearlyPrice: !0,
      isGift: s,
      priceOptions: l
    })
  })
}
t.default = function(e) {
  let {
    onSelectSku: t,
    isGift: s,
    priceOptions: i
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o, {
      onClick: () => t(l.PremiumSubscriptionSKUs.TIER_2),
      isGift: s,
      priceOptions: i
    }), (0, n.jsx)(C, {
      onClick: () => t(l.PremiumSubscriptionSKUs.TIER_0),
      isGift: s,
      priceOptions: i
    })]
  })
}