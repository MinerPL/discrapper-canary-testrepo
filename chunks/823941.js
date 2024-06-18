"use strict";
t.d(s, {
  Z: function() {
    return A
  },
  n: function() {
    return b
  }
});
var n = t(735250),
  a = t(470079),
  i = t(120356),
  l = t.n(i),
  r = t(180650),
  o = t(399606),
  c = t(481060),
  u = t(906732),
  d = t(963249),
  C = t(594174),
  E = t(68972),
  f = t(754347),
  m = t(74538),
  p = t(884697),
  g = t(624377),
  h = t(141011),
  x = t(813083),
  _ = t(372654),
  I = t(994896),
  T = t(215023),
  N = t(474936),
  S = t(689938),
  L = t(897246);
let b = (0, p.IC)(96),
  v = {
    [r.T.DISXCORE]: {
      left: () => t(136648),
      right: () => t(850298)
    },
    [r.T.FANTASY]: {
      left: () => t(44602),
      right: () => t(862392)
    },
    [r.T.CYBERPUNK]: {
      left: () => t(862358),
      right: () => t(604083)
    },
    [r.T.ELEMENTS]: {
      left: () => t(534572),
      right: () => t(905911),
      leftOverflow: () => t(149653),
      rightOverflow: () => t(183749)
    },
    [r.T.ANIME_V2]: {
      left: () => t(607668),
      right: () => t(381436)
    },
    [r.T.SPRINGTOONS]: {
      left: () => t(138272),
      right: () => t(392425)
    },
    [r.T.LOFI_VIBES]: {
      left: () => t(659813),
      right: () => t(722603)
    },
    [r.T.GALAXY]: {
      left: () => t(236801),
      right: () => t(537085)
    },
    [r.T.FEELIN_RETRO]: {
      left: () => t(616442),
      right: () => t(250440)
    },
    [r.T.PIRATES]: {
      left: () => t(519741),
      right: () => t(980112)
    },
    [r.T.ARCADE]: {
      left: () => t(6414),
      right: () => t(959436)
    }
  },
  O = e => {
    let {
      category: s
    } = e, {
      analyticsLocations: t
    } = (0, u.ZP)(), i = a.useRef(null), l = (0, o.e7)([C.default], () => C.default.getCurrentUser());
    return m.ZP.canUseCollectibles(l) ? (0, n.jsx)(n.Fragment, {
      children: s.summary
    }) : (0, n.jsx)(n.Fragment, {
      children: S.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, n.jsx)(c.Clickable, {
          innerRef: i,
          className: L.getPremiumHook,
          onClick: () => {
            (0, d.Z)({
              subscriptionTier: N.Si.TIER_2,
              analyticsLocations: t,
              returnRef: i
            })
          },
          tag: "span",
          children: (0, n.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "always-white",
            tag: "span",
            children: e
          })
        })
      })
    })
  };

function Z(e) {
  var s, t, a, i;
  let {
    category: r,
    index: o
  } = e, c = v[r.skuId], u = o % 2 == 1, d = null !== (i = u ? null == c ? void 0 : c.left() : null == c ? void 0 : c.right()) && void 0 !== i ? i : (0, p.uV)(r.banner, {
    size: _.yV,
    format: "jpg"
  }), C = u ? null == c ? void 0 : null === (s = c.leftOverflow) || void 0 === s ? void 0 : s.call(c) : null == c ? void 0 : null === (t = c.rightOverflow) || void 0 === t ? void 0 : t.call(c), {
    backgroundColors: E
  } = (0, g.Z)(r.styles), f = {
    objectPosition: u ? "left" : "right",
    background: null != E ? "".concat((0, _.nH)(E), " border-box border-box") : void 0,
    outlineColor: null != E ? E.border.toHslString() : void 0
  };
  return (0, n.jsxs)("div", {
    className: l()(L.condensedBannerContainer),
    children: [(0, n.jsx)("img", {
      src: d,
      style: f,
      className: L.condensedBannerImage,
      alt: ""
    }), null != C && (0, n.jsx)("img", {
      src: C,
      className: l()(L.overflowImage, {
        [L.overflowImageLeft]: u
      }),
      alt: ""
    }), (0, n.jsx)("img", {
      className: l()(L.condensedCategoryLogo, {
        [L.condensedCategoryLogoLeft]: !u
      }),
      src: (0, p.uV)(r.logo, {
        size: b
      }),
      alt: r.name,
      style: {
        maxWidth: null === (a = T.Ve[r.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth
      }
    }), (0, n.jsx)(x.Z, {
      category: r,
      className: l()(L.limitedTimeBadge, {
        [L.limitedTimeBadgeLeft]: u
      }),
      display: "banner"
    })]
  })
}

function A(e) {
  var s, t;
  let {
    category: a,
    className: i,
    hideLimitedTimeBadge: o = !1,
    index: u = 0
  } = e, {
    backgroundColors: d
  } = (0, g.Z)(a.styles), C = !!(null === (s = T.Ve[a.skuId]) || void 0 === s ? void 0 : s.showDarkBannerText), {
    condensedBannersEnabled: m
  } = (0, I.O)({
    location: "Collectibles Shop Banner"
  });
  return m ? (0, n.jsx)(Z, {
    category: a,
    index: u
  }) : (0, n.jsxs)(h.Z, {
    asset: a.banner,
    className: l()(L.shopBanner, i),
    style: null != d ? {
      background: "".concat((0, _.nH)(d), " border-box border-box"),
      outlineColor: d.border.toHslString()
    } : void 0,
    children: [(0, n.jsxs)("div", {
      className: L.discordLogo,
      children: [(0, n.jsx)(E.Z, {
        className: L.discordIcon
      }), (0, n.jsx)(f.Z, {
        className: L.discordWordmark
      })]
    }), (0, n.jsx)("img", {
      className: L.categoryLogo,
      src: (0, p.uV)(a.logo, {
        size: b
      }),
      alt: a.name,
      style: {
        maxWidth: null === (t = T.Ve[a.skuId]) || void 0 === t ? void 0 : t.logoMaxWidth
      }
    }), (0, n.jsx)(c.Text, {
      className: l()(L.summary, {
        [L.blackSummary]: C
      }),
      variant: "text-md/normal",
      children: a.skuId === r.T.DISXCORE ? (0, n.jsx)(O, {
        category: a
      }) : a.summary
    }), !o && (0, n.jsx)(x.Z, {
      category: a,
      className: L.limitedTimeBadge,
      display: "banner"
    })]
  })
}