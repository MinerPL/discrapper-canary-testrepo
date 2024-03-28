"use strict";
a.r(t), a.d(t, {
  LOGO_SIZE: function() {
    return _
  },
  default: function() {
    return y
  }
});
var s = a("735250"),
  l = a("470079"),
  r = a("803997"),
  n = a.n(r),
  o = a("180650"),
  i = a("399606"),
  u = a("481060"),
  c = a("906732"),
  d = a("963249"),
  f = a("594174"),
  m = a("68972"),
  C = a("754347"),
  p = a("74538"),
  g = a("884697"),
  h = a("624377"),
  E = a("141011"),
  b = a("813083"),
  S = a("67938"),
  x = a("372654"),
  T = a("414592"),
  v = a("474936"),
  L = a("689938"),
  I = a("380762");
let _ = (0, g.getLogoSize)(96),
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
              subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2,
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

function y(e) {
  var t, a;
  let {
    category: l,
    className: r,
    hideLimitedTimeBadge: i = !1
  } = e, {
    backgroundColors: c
  } = (0, h.default)(l.styles), d = !!(null === (t = T.categoryBannerOverrides[l.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText);
  return l.skuId === o.CollectiblesCategorySkuId.SHY ? (0, s.jsx)(S.ShyBanner, {
    category: l
  }) : (0, s.jsxs)(E.default, {
    asset: l.banner,
    className: n()(I.shopBanner, r),
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
        size: _
      }),
      alt: l.name,
      style: {
        maxWidth: null === (a = T.categoryBannerOverrides[l.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth
      }
    }), (0, s.jsx)(u.Text, {
      className: n()(I.summary, {
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