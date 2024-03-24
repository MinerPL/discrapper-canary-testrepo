"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var r = n("37983");
n("884691");
var i = n("77078"),
  s = n("400307"),
  l = n("646718"),
  u = n("932865");

function a(e) {
  let {
    onClick: t,
    isGift: n,
    priceOptions: l
  } = e;
  return (0, r.jsx)(i.Clickable, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, r.jsx)(s.Tier2Card, {
      className: u.tier2MarketingCard,
      ctaButton: null,
      showWumpus: !0,
      showYearlyPrice: !0,
      isGift: n,
      isModal: !0,
      priceOptions: l
    })
  })
}

function o(e) {
  let {
    onClick: t,
    isGift: n,
    priceOptions: l
  } = e;
  return (0, r.jsx)(i.Clickable, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, r.jsx)(s.Tier0Card, {
      className: u.tier0MarketingCard,
      ctaButton: null,
      showWumpus: !0,
      showYearlyPrice: !0,
      isGift: n,
      priceOptions: l
    })
  })
}
var d = function(e) {
  let {
    onSelectSku: t,
    isGift: n,
    priceOptions: i
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a, {
      onClick: () => t(l.PremiumSubscriptionSKUs.TIER_2),
      isGift: n,
      priceOptions: i
    }), (0, r.jsx)(o, {
      onClick: () => t(l.PremiumSubscriptionSKUs.TIER_0),
      isGift: n,
      priceOptions: i
    })]
  })
}