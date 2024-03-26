"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var s = a("37983");
a("884691");
var r = a("414456"),
  l = a.n(r),
  n = a("65597"),
  o = a("755854"),
  i = a("77078"),
  u = a("161778"),
  c = a("697218"),
  d = a("216422"),
  f = a("719923"),
  m = a("491232"),
  C = a("791309"),
  p = a("49111"),
  g = a("782340"),
  h = a("193527");

function E(e) {
  let {
    product: t,
    className: a,
    innerClassName: r,
    disableTooltipPointerEvents: E,
    alwaysWhiteText: b = !0,
    nitroWheelColor: S
  } = e, x = (0, n.useStateFromStores)([c.default], () => c.default.getCurrentUser()), v = (0, n.useStateFromStores)([u.default], () => (0, o.isThemeDark)(u.default.theme)), T = (0, m.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == T) return null;
  if (T.amount <= 0) return (0, s.jsx)("div", {
    className: l(h.priceTagsContainer, a),
    children: (0, s.jsx)(C.default, {
      alwaysWhiteText: b,
      price: T,
      className: r
    })
  });
  let L = (0, m.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    I = !f.default.canUseCollectibles(x);
  return (0, s.jsxs)("div", {
    className: l(h.priceTagsContainer, a),
    children: [(0, s.jsx)(C.default, {
      alwaysWhiteText: b,
      price: T,
      className: l([r, I ? void 0 : h.strikedPrice])
    }), null != L && (0, s.jsx)(C.default, {
      price: L,
      alwaysWhiteText: b,
      renderPrice: I ? e => g.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: l([r, I ? h.fullPrice : void 0]),
      variant: I ? "text-xs/semibold" : void 0,
      icon: (0, s.jsx)(i.Tooltip, {
        text: g.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": g.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        disableTooltipPointerEvents: E,
        children: e => {
          let {
            ...t
          } = e;
          return (0, s.jsx)(d.default, {
            ...t,
            className: l(h.premiumIcon, {
              [h.fullPrice]: I
            }),
            color: null != S ? S : b || v ? "white" : "black"
          })
        }
      })
    })]
  })
}