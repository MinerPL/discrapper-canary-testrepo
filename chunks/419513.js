"use strict";
a.r(t), a.d(t, {
  LOGO_SIZE: function() {
    return I
  },
  default: function() {
    return N
  }
});
var l = a("37983"),
  r = a("884691"),
  s = a("414456"),
  n = a.n(s),
  o = a("635058"),
  i = a("65597"),
  u = a("77078"),
  c = a("685665"),
  d = a("649844"),
  f = a("697218"),
  m = a("153769"),
  C = a("270227"),
  p = a("719923"),
  g = a("491232"),
  h = a("677257"),
  E = a("716120"),
  b = a("342676"),
  S = a("408381"),
  T = a("380171"),
  v = a("646718"),
  L = a("782340"),
  x = a("858422");
let I = (0, g.getLogoSize)(96),
  _ = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: a
    } = (0, c.default)(), s = r.useRef(null), n = (0, i.useStateFromStores)([f.default], () => f.default.getCurrentUser());
    return p.default.canUseCollectibles(n) ? (0, l.jsx)(l.Fragment, {
      children: t.summary
    }) : (0, l.jsx)(l.Fragment, {
      children: L.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, l.jsx)(u.Clickable, {
          innerRef: s,
          className: x.getPremiumHook,
          onClick: () => {
            (0, d.default)({
              subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: a,
              returnRef: s
            })
          },
          tag: "span",
          children: (0, l.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "always-white",
            tag: "span",
            children: e
          })
        })
      })
    })
  };

function N(e) {
  var t, a;
  let {
    category: r,
    className: s
  } = e, {
    backgroundColors: i
  } = (0, h.default)(r.styles), c = !!(null === (t = T.categoryBannerOverrides[r.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText);
  return (0, l.jsxs)(E.default, {
    asset: r.banner,
    className: n(x.shopBanner, s),
    style: null != i ? {
      background: "".concat((0, S.getBackgroundGradient)(i), " border-box border-box"),
      outlineColor: i.border.toHslString()
    } : void 0,
    children: [(0, l.jsxs)("div", {
      className: x.discordLogo,
      children: [(0, l.jsx)(m.default, {
        className: x.discordIcon
      }), (0, l.jsx)(C.default, {
        className: x.discordWordmark
      })]
    }), (0, l.jsx)("img", {
      className: x.categoryLogo,
      src: (0, g.getCollectiblesAssetURL)(r.logo, {
        size: I
      }),
      alt: r.name,
      style: {
        maxWidth: null === (a = T.categoryBannerOverrides[r.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth
      }
    }), (0, l.jsx)(u.Text, {
      className: n(x.summary, {
        [x.blackSummary]: c
      }),
      variant: "text-md/normal",
      children: r.skuId === o.CollectiblesCategorySkuId.DISXCORE ? (0, l.jsx)(_, {
        category: r
      }) : r.summary
    }), (0, l.jsx)(b.default, {
      category: r,
      className: x.limitedTimeBadge,
      display: "banner"
    })]
  })
}