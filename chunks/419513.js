"use strict";
a.r(t), a.d(t, {
  LOGO_SIZE: function() {
    return I
  },
  default: function() {
    return _
  }
});
var s = a("37983"),
  r = a("884691"),
  l = a("414456"),
  n = a.n(l),
  i = a("635058"),
  o = a("65597"),
  c = a("77078"),
  u = a("685665"),
  d = a("649844"),
  f = a("697218"),
  m = a("153769"),
  p = a("270227"),
  g = a("719923"),
  C = a("491232"),
  h = a("677257"),
  E = a("716120"),
  b = a("342676"),
  S = a("408381"),
  x = a("380171"),
  T = a("646718"),
  v = a("782340"),
  L = a("858422");
let I = (0, C.getLogoSize)(96),
  N = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: a
    } = (0, u.default)(), l = r.useRef(null), n = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser());
    return g.default.canUseCollectibles(n) ? (0, s.jsx)(s.Fragment, {
      children: t.summary
    }) : (0, s.jsx)(s.Fragment, {
      children: v.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, s.jsx)(c.Clickable, {
          innerRef: l,
          className: L.getPremiumHook,
          onClick: () => {
            (0, d.default)({
              subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: a,
              returnRef: l
            })
          },
          tag: "span",
          children: (0, s.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "always-white",
            tag: "span",
            children: e
          })
        })
      })
    })
  };

function _(e) {
  var t, a;
  let {
    category: r,
    className: l
  } = e, {
    backgroundColors: o
  } = (0, h.default)(r.styles), u = !!(null === (t = x.categoryBannerOverrides[r.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText);
  return (0, s.jsxs)(E.default, {
    asset: r.banner,
    className: n(L.shopBanner, l),
    style: null != o ? {
      background: "".concat((0, S.getBackgroundGradient)(o), " border-box border-box"),
      outlineColor: o.border.toHslString()
    } : void 0,
    children: [(0, s.jsxs)("div", {
      className: L.discordLogo,
      children: [(0, s.jsx)(m.default, {
        className: L.discordIcon
      }), (0, s.jsx)(p.default, {
        className: L.discordWordmark
      })]
    }), (0, s.jsx)("img", {
      className: L.categoryLogo,
      src: (0, C.getCollectiblesAssetURL)(r.logo, {
        size: I
      }),
      alt: r.name,
      style: {
        maxWidth: null === (a = x.categoryBannerOverrides[r.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth
      }
    }), (0, s.jsx)(c.Text, {
      className: n(L.summary, {
        [L.blackSummary]: u
      }),
      variant: "text-md/normal",
      children: r.skuId === i.CollectiblesCategorySkuId.DISXCORE ? (0, s.jsx)(N, {
        category: r
      }) : r.summary
    }), (0, s.jsx)(b.default, {
      category: r,
      className: L.limitedTimeBadge,
      display: "banner"
    })]
  })
}