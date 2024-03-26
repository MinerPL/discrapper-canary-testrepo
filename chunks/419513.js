"use strict";
a.r(t), a.d(t, {
  LOGO_SIZE: function() {
    return I
  },
  default: function() {
    return _
  }
});
var l = a("37983"),
  s = a("884691"),
  r = a("414456"),
  n = a.n(r),
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
  x = a("782340"),
  L = a("858422");
let I = (0, g.getLogoSize)(96),
  N = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: a
    } = (0, c.default)(), r = s.useRef(null), n = (0, i.useStateFromStores)([f.default], () => f.default.getCurrentUser());
    return p.default.canUseCollectibles(n) ? (0, l.jsx)(l.Fragment, {
      children: t.summary
    }) : (0, l.jsx)(l.Fragment, {
      children: x.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, l.jsx)(u.Clickable, {
          innerRef: r,
          className: L.getPremiumHook,
          onClick: () => {
            (0, d.default)({
              subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: a,
              returnRef: r
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

function _(e) {
  var t, a;
  let {
    category: s,
    className: r,
    hideLimitedTimeBadge: i = !1
  } = e, {
    backgroundColors: c
  } = (0, h.default)(s.styles), d = !!(null === (t = T.categoryBannerOverrides[s.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText);
  return (0, l.jsxs)(E.default, {
    asset: s.banner,
    className: n(L.shopBanner, r),
    style: null != c ? {
      background: "".concat((0, S.getBackgroundGradient)(c), " border-box border-box"),
      outlineColor: c.border.toHslString()
    } : void 0,
    children: [(0, l.jsxs)("div", {
      className: L.discordLogo,
      children: [(0, l.jsx)(m.default, {
        className: L.discordIcon
      }), (0, l.jsx)(C.default, {
        className: L.discordWordmark
      })]
    }), (0, l.jsx)("img", {
      className: L.categoryLogo,
      src: (0, g.getCollectiblesAssetURL)(s.logo, {
        size: I
      }),
      alt: s.name,
      style: {
        maxWidth: null === (a = T.categoryBannerOverrides[s.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth
      }
    }), (0, l.jsx)(u.Text, {
      className: n(L.summary, {
        [L.blackSummary]: d
      }),
      variant: "text-md/normal",
      children: s.skuId === o.CollectiblesCategorySkuId.DISXCORE ? (0, l.jsx)(N, {
        category: s
      }) : s.summary
    }), !i && (0, l.jsx)(b.default, {
      category: s,
      className: L.limitedTimeBadge,
      display: "banner"
    })]
  })
}