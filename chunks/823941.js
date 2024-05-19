"use strict";
a.r(t), a.d(t, {
  LOGO_SIZE: function() {
    return N
  },
  default: function() {
    return A
  }
});
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("180650"),
  o = a("399606"),
  u = a("481060"),
  c = a("906732"),
  d = a("963249"),
  f = a("594174"),
  C = a("68972"),
  m = a("754347"),
  p = a("74538"),
  E = a("884697"),
  h = a("624377"),
  g = a("141011"),
  x = a("813083"),
  v = a("372654"),
  b = a("994896"),
  T = a("215023"),
  L = a("474936"),
  S = a("689938"),
  I = a("897246");
let N = (0, E.getLogoSize)(96),
  _ = {
    [i.CollectiblesCategorySkuId.DISXCORE]: {
      left: () => a("136648"),
      right: () => a("850298")
    },
    [i.CollectiblesCategorySkuId.FANTASY]: {
      left: () => a("44602"),
      right: () => a("862392")
    },
    [i.CollectiblesCategorySkuId.CYBERPUNK]: {
      left: () => a("862358"),
      right: () => a("604083")
    },
    [i.CollectiblesCategorySkuId.ELEMENTS]: {
      left: () => a("534572"),
      right: () => a("905911"),
      leftOverflow: () => a("149653"),
      rightOverflow: () => a("183749")
    },
    [i.CollectiblesCategorySkuId.ANIME_V2]: {
      left: () => a("607668"),
      right: () => a("381436")
    },
    [i.CollectiblesCategorySkuId.SPRINGTOONS]: {
      left: () => a("138272"),
      right: () => a("392425")
    },
    [i.CollectiblesCategorySkuId.LOFI_VIBES]: {
      left: () => a("659813"),
      right: () => a("722603")
    },
    [i.CollectiblesCategorySkuId.GALAXY]: {
      left: () => a("236801"),
      right: () => a("537085")
    },
    [i.CollectiblesCategorySkuId.FEELIN_RETRO]: {
      left: () => a("616442"),
      right: () => a("250440")
    },
    [i.CollectiblesCategorySkuId.PIRATES]: {
      left: () => a("519741"),
      right: () => a("980112")
    }
  },
  y = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: a
    } = (0, c.default)(), r = s.useRef(null), n = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser());
    return p.default.canUseCollectibles(n) ? (0, l.jsx)(l.Fragment, {
      children: t.summary
    }) : (0, l.jsx)(l.Fragment, {
      children: S.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, l.jsx)(u.Clickable, {
          innerRef: r,
          className: I.getPremiumHook,
          onClick: () => {
            (0, d.default)({
              subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2,
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

function O(e) {
  var t, a, s, r;
  let {
    category: i,
    index: o
  } = e, u = _[i.skuId], c = o % 2 == 1, d = null !== (r = c ? null == u ? void 0 : u.left() : null == u ? void 0 : u.right()) && void 0 !== r ? r : (0, E.getCollectiblesAssetURL)(i.banner, {
    size: v.MAX_CONTENT_WIDTH,
    format: "jpg"
  }), f = c ? null == u ? void 0 : null === (t = u.leftOverflow) || void 0 === t ? void 0 : t.call(u) : null == u ? void 0 : null === (a = u.rightOverflow) || void 0 === a ? void 0 : a.call(u), {
    backgroundColors: C
  } = (0, h.default)(i.styles), m = {
    objectPosition: c ? "left" : "right",
    background: null != C ? "".concat((0, v.getBackgroundGradient)(C), " border-box border-box") : void 0,
    outlineColor: null != C ? C.border.toHslString() : void 0
  };
  return (0, l.jsxs)("div", {
    className: n()(I.condensedBannerContainer),
    children: [(0, l.jsx)("img", {
      src: d,
      style: m,
      className: I.condensedBannerImage,
      alt: ""
    }), null != f && (0, l.jsx)("img", {
      src: f,
      className: n()(I.overflowImage, {
        [I.overflowImageLeft]: c
      }),
      alt: ""
    }), (0, l.jsx)("img", {
      className: n()(I.condensedCategoryLogo, {
        [I.condensedCategoryLogoLeft]: !c
      }),
      src: (0, E.getCollectiblesAssetURL)(i.logo, {
        size: N
      }),
      alt: i.name,
      style: {
        maxWidth: null === (s = T.categoryBannerOverrides[i.skuId]) || void 0 === s ? void 0 : s.logoMaxWidth
      }
    }), (0, l.jsx)(x.default, {
      category: i,
      className: n()(I.limitedTimeBadge, {
        [I.limitedTimeBadgeLeft]: c
      }),
      display: "banner"
    })]
  })
}

function A(e) {
  var t, a;
  let {
    category: s,
    className: r,
    hideLimitedTimeBadge: o = !1,
    index: c = 0
  } = e, {
    backgroundColors: d
  } = (0, h.default)(s.styles), f = !!(null === (t = T.categoryBannerOverrides[s.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText), {
    condensedBannersEnabled: p
  } = (0, b.useCollectiblesCondensedBannersExperiment)({
    location: "Collectibles Shop Banner"
  });
  return p ? (0, l.jsx)(O, {
    category: s,
    index: c
  }) : (0, l.jsxs)(g.default, {
    asset: s.banner,
    className: n()(I.shopBanner, r),
    style: null != d ? {
      background: "".concat((0, v.getBackgroundGradient)(d), " border-box border-box"),
      outlineColor: d.border.toHslString()
    } : void 0,
    children: [(0, l.jsxs)("div", {
      className: I.discordLogo,
      children: [(0, l.jsx)(C.default, {
        className: I.discordIcon
      }), (0, l.jsx)(m.default, {
        className: I.discordWordmark
      })]
    }), (0, l.jsx)("img", {
      className: I.categoryLogo,
      src: (0, E.getCollectiblesAssetURL)(s.logo, {
        size: N
      }),
      alt: s.name,
      style: {
        maxWidth: null === (a = T.categoryBannerOverrides[s.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth
      }
    }), (0, l.jsx)(u.Text, {
      className: n()(I.summary, {
        [I.blackSummary]: f
      }),
      variant: "text-md/normal",
      children: s.skuId === i.CollectiblesCategorySkuId.DISXCORE ? (0, l.jsx)(y, {
        category: s
      }) : s.summary
    }), !o && (0, l.jsx)(x.default, {
      category: s,
      className: I.limitedTimeBadge,
      display: "banner"
    })]
  })
}