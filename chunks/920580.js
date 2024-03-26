"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var s = a("37983");
a("884691");
var l = a("414456"),
  r = a.n(l),
  n = a("65597"),
  o = a("755854"),
  i = a("77078"),
  u = a("161778"),
  c = a("697218"),
  d = a("216422"),
  f = a("719923"),
  m = a("491232"),
  p = a("791309"),
  g = a("49111"),
  C = a("782340"),
  h = a("193527");

function E(e) {
  let {
    product: t,
    className: a,
    innerClassName: l,
    disableTooltipPointerEvents: E,
    alwaysWhiteText: b = !0,
    nitroWheelColor: S
  } = e, x = (0, n.useStateFromStores)([c.default], () => c.default.getCurrentUser()), T = (0, n.useStateFromStores)([u.default], () => (0, o.isThemeDark)(u.default.theme)), v = (0, m.extractPriceByPurchaseTypes)(t, g.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == v) return null;
  if (v.amount <= 0) return (0, s.jsx)("div", {
    className: r(h.priceTagsContainer, a),
    children: (0, s.jsx)(p.default, {
      alwaysWhiteText: b,
      price: v,
      className: l
    })
  });
  let L = (0, m.extractPriceByPurchaseTypes)(t, g.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    I = !f.default.canUseCollectibles(x);
  return (0, s.jsxs)("div", {
    className: r(h.priceTagsContainer, a),
    children: [(0, s.jsx)(p.default, {
      alwaysWhiteText: b,
      price: v,
      className: r([l, I ? void 0 : h.strikedPrice])
    }), null != L && (0, s.jsx)(p.default, {
      price: L,
      alwaysWhiteText: b,
      renderPrice: I ? e => C.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: r([l, I ? h.fullPrice : void 0]),
      variant: I ? "text-xs/semibold" : void 0,
      icon: (0, s.jsx)(i.Tooltip, {
        text: C.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": C.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        disableTooltipPointerEvents: E,
        children: e => {
          let {
            ...t
          } = e;
          return (0, s.jsx)(d.default, {
            ...t,
            className: r(h.premiumIcon, {
              [h.fullPrice]: I
            }),
            color: null != S ? S : b || T ? "white" : "black"
          })
        }
      })
    })]
  })
}