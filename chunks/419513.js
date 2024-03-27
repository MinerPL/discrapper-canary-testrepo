"use strict";
a.r(t), a.d(t, {
  LOGO_SIZE: function() {
    return y
  },
  default: function() {
    return _
  }
});
var s = a("37983"),
  l = a("884691"),
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
  S = a("56690"),
  x = a("408381"),
  v = a("380171"),
  T = a("646718"),
  L = a("782340"),
  I = a("858422");
let y = (0, g.getLogoSize)(96),
  N = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: a
    } = (0, c.default)(), r = l.useRef(null), n = (0, i.useStateFromStores)([f.default], () => f.default.getCurrentUser());
    return p.default.canUseCollectibles(n) ? (0, s.jsx)(s.Fragment, {
      children: t.summary
    }) : (0, s.jsx)(s.Fragment, {
      children: L.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, s.jsx)(u.Clickable, {
          innerRef: r,
          className: I.getPremiumHook,
          onClick: () => {
            (0, d.default)({
              subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: a,
              returnRef: r
            })
          },
          tag: "span",
          children: (0, s.jsx)(u.Text, {
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
    category: l,
    className: r,
    hideLimitedTimeBadge: i = !1
  } = e, {
    backgroundColors: c
  } = (0, h.default)(l.styles), d = !!(null === (t = v.categoryBannerOverrides[l.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText);
  return l.skuId === o.CollectiblesCategorySkuId.SHY ? (0, s.jsx)(S.ShyBanner, {
    category: l
  }) : (0, s.jsxs)(E.default, {
    asset: l.banner,
    className: n(I.shopBanner, r),
    style: null != c ? {
      background: "".concat((0, x.getBackgroundGradient)(c), " border-box border-box"),
      outlineColor: c.border.toHslString()
    } : void 0,
    children: [(0, s.jsxs)("div", {
      className: I.discordLogo,
      children: [(0, s.jsx)(m.default, {
        className: I.discordIcon
      }), (0, s.jsx)(C.default, {
        className: I.discordWordmark
      })]
    }), (0, s.jsx)("img", {
      className: I.categoryLogo,
      src: (0, g.getCollectiblesAssetURL)(l.logo, {
        size: y
      }),
      alt: l.name,
      style: {
        maxWidth: null === (a = v.categoryBannerOverrides[l.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth
      }
    }), (0, s.jsx)(u.Text, {
      className: n(I.summary, {
        [I.blackSummary]: d
      }),
      variant: "text-md/normal",
      children: l.skuId === o.CollectiblesCategorySkuId.DISXCORE ? (0, s.jsx)(N, {
        category: l
      }) : l.summary
    }), !i && (0, s.jsx)(b.default, {
      category: l,
      className: I.limitedTimeBadge,
      display: "banner"
    })]
  })
}