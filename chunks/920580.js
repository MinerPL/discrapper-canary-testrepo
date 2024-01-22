"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var l = a("37983");
a("884691");
var s = a("414456"),
  r = a.n(s),
  n = a("65597"),
  i = a("755854"),
  o = a("77078"),
  c = a("161778"),
  u = a("697218"),
  d = a("216422"),
  f = a("719923"),
  m = a("491232"),
  C = a("791309"),
  p = a("49111"),
  g = a("782340"),
  E = a("173046");

function h(e) {
  let {
    product: t,
    className: a,
    disableTooltipPointerEvents: s,
    alwaysWhiteText: h = !0
  } = e, b = (0, n.default)([u.default], () => u.default.getCurrentUser()), T = (0, n.default)([c.default], () => (0, i.isThemeDark)(c.default.theme)), x = (0, m.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == x) return null;
  if (x.amount <= 0) return (0, l.jsx)("div", {
    className: r(E.priceTagsContainer, a),
    children: (0, l.jsx)(C.default, {
      alwaysWhiteText: h,
      price: x
    })
  });
  let L = (0, m.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    S = !f.default.canUseCollectibles(b);
  return (0, l.jsxs)("div", {
    className: r(E.priceTagsContainer, a),
    children: [(0, l.jsx)(C.default, {
      alwaysWhiteText: h,
      price: x,
      className: S ? void 0 : E.strikedPrice
    }), null != L && (0, l.jsx)(C.default, {
      price: L,
      alwaysWhiteText: h,
      renderPrice: S ? e => g.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: S ? E.fullPrice : void 0,
      variant: S ? "text-xs/semibold" : void 0,
      icon: (0, l.jsx)(o.Tooltip, {
        text: g.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": g.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        disableTooltipPointerEvents: s,
        children: e => {
          let {
            ...t
          } = e;
          return (0, l.jsx)(d.default, {
            ...t,
            className: r(E.premiumIcon, {
              [E.fullPrice]: S
            }),
            color: h || T ? "white" : "black"
          })
        }
      })
    })]
  })
}