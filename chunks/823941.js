n.d(t, {
  Z: function() {
return j;
  },
  n: function() {
return T;
  }
});
var s = n(735250),
  r = n(470079),
  a = n(120356),
  o = n.n(a),
  i = n(180650),
  c = n(399606),
  l = n(481060),
  d = n(906732),
  u = n(963249),
  f = n(594174),
  p = n(754347),
  g = n(74538),
  C = n(884697),
  _ = n(624377),
  m = n(141011),
  b = n(813083),
  h = n(67938),
  x = n(372654),
  E = n(994896),
  I = n(215023),
  v = n(474936),
  L = n(689938),
  S = n(995184);
let T = (0, C.IC)(96),
  N = {
[i.T.DISXCORE]: {
  left: () => n(136648),
  right: () => n(850298),
  leftLogo: () => n(407848),
  rightLogo: () => n(457734)
},
[i.T.FANTASY]: {
  left: () => n(44602),
  right: () => n(862392),
  leftLogo: () => n(150218),
  rightLogo: () => n(625591)
},
[i.T.CYBERPUNK]: {
  left: () => n(862358),
  right: () => n(604083),
  leftLogo: () => n(519293),
  rightLogo: () => n(769307)
},
[i.T.ELEMENTS]: {
  left: () => n(534572),
  right: () => n(905911),
  leftOverflow: () => n(149653),
  rightOverflow: () => n(183749),
  leftLogo: () => n(201651),
  rightLogo: () => n(47227)
},
[i.T.ANIME_V2]: {
  left: () => n(607668),
  right: () => n(381436),
  leftLogo: () => n(384970),
  rightLogo: () => n(906935)
},
[i.T.SPRINGTOONS]: {
  left: () => n(138272),
  right: () => n(392425),
  leftLogo: () => n(547470),
  rightLogo: () => n(204641)
},
[i.T.LOFI_VIBES]: {
  left: () => n(659813),
  right: () => n(722603),
  leftLogo: () => n(678747),
  rightLogo: () => n(178466)
},
[i.T.GALAXY]: {
  left: () => n(236801),
  right: () => n(537085),
  leftLogo: () => n(818198),
  rightLogo: () => n(959177)
},
[i.T.FEELIN_RETRO]: {
  left: () => n(616442),
  right: () => n(250440),
  leftLogo: () => n(662232),
  rightLogo: () => n(226107)
},
[i.T.PIRATES]: {
  left: () => n(519741),
  right: () => n(980112),
  leftLogo: () => n(379545),
  rightLogo: () => n(31847)
},
[i.T.ARCADE]: {
  left: () => n(6414),
  right: () => n(959436),
  leftLogo: () => n(23695),
  rightLogo: () => n(2235)
},
[i.T.TIDE]: {
  left: () => n(960088),
  right: () => n(402313),
  leftOverflow: () => n(757631),
  rightOverflow: () => n(17142),
  leftLogo: () => n(237457),
  rightLogo: () => n(958609)
}
  },
  O = e => {
let {
  category: t
} = e, {
  analyticsLocations: n
} = (0, d.ZP)(), a = r.useRef(null), o = (0, c.e7)([f.default], () => f.default.getCurrentUser());
return g.ZP.canUseCollectibles(o) ? (0, s.jsx)(s.Fragment, {
  children: t.summary
}) : (0, s.jsx)(s.Fragment, {
  children: L.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
    getPremium: e => (0, s.jsx)(l.Clickable, {
      innerRef: a,
      className: S.getPremiumHook,
      onClick: () => {
        (0, u.Z)({
          subscriptionTier: v.Si.TIER_2,
          analyticsLocations: n,
          returnRef: a
        });
      },
      tag: 'span',
      children: (0, s.jsx)(l.Text, {
        variant: 'text-md/normal',
        color: 'always-white',
        tag: 'span',
        children: e
      })
    })
  })
});
  };

function k(e) {
  var t, n, r;
  let {
config: a,
category: c,
index: l,
hideLimitedTimeBadge: d = !1
  } = e, u = l % 2 == 1, f = null !== (r = u ? a.left() : a.right()) && void 0 !== r ? r : (0, C.uV)(c.banner, {
size: x.yV,
format: 'jpg'
  }), p = u ? null === (t = a.leftOverflow) || void 0 === t ? void 0 : t.call(a) : null === (n = a.rightOverflow) || void 0 === n ? void 0 : n.call(a), g = u ? a.rightLogo() : a.leftLogo(), {
backgroundColors: m
  } = (0, _.Z)(c.styles), h = {
objectPosition: u ? 'left' : 'right',
background: null != m ? ''.concat((0, x.nH)(m), ' border-box border-box') : void 0,
outlineColor: null != m ? m.border.toHslString() : void 0
  };
  return (0, s.jsxs)('div', {
className: o()(S.condensedBannerContainer),
children: [
  (0, s.jsx)('img', {
    src: f,
    style: h,
    className: S.condensedBannerImage,
    alt: ''
  }),
  null != p && (0, s.jsx)('img', {
    src: p,
    className: o()(S.overflowImage, {
      [S.overflowImageLeft]: u,
      [S.tideOverflowImage]: c.skuId === i.T.TIDE
    }),
    alt: ''
  }),
  (0, s.jsx)('img', {
    className: o()(S.condensedCategoryLogo, {
      [S.condensedCategoryLogoLeft]: !u
    }),
    src: g,
    alt: c.name
  }),
  !d && (0, s.jsx)(b.Z, {
    category: c,
    className: o()(S.limitedTimeBadge, {
      [S.limitedTimeBadgeLeft]: u
    }),
    display: 'banner'
  })
]
  });
}

function j(e) {
  var t, n, r, a;
  let {
category: c,
className: d,
hideLimitedTimeBadge: u = !1,
index: f = 0
  } = e, {
backgroundColors: g
  } = (0, _.Z)(c.styles), v = !!(null === (t = I.Ve[c.skuId]) || void 0 === t ? void 0 : t.showDarkBannerText), {
condensedBannersEnabled: L
  } = (0, E.O)({
location: 'Collectibles Shop Banner'
  });
  if (L) {
let e = N[c.skuId];
if (null != e)
  return (0, s.jsx)(k, {
    config: e,
    category: c,
    index: f,
    hideLimitedTimeBadge: u
  });
  }
  return c.skuId === i.T.TIDE ? (0, s.jsx)(h.G, {
category: c
  }) : (0, s.jsxs)(m.Z, {
asset: c.banner,
className: o()(S.shopBanner, d),
style: null != g ? {
  background: ''.concat((0, x.nH)(g), ' border-box border-box'),
  outlineColor: g.border.toHslString()
} : void 0,
children: [
  (null === (n = I.Ve[c.skuId]) || void 0 === n ? void 0 : n.hideAttributionLogos) === !0 ? (0, s.jsx)(l.Spacer, {
    size: 28
  }) : (0, s.jsxs)('div', {
    className: S.discordLogo,
    children: [
      (0, s.jsx)(l.ClydeIcon, {
        size: 'custom',
        width: 28,
        height: 28,
        color: 'currentColor',
        className: S.discordIcon
      }),
      (0, s.jsx)(p.Z, {
        className: S.discordWordmark
      })
    ]
  }),
  (null === (r = I.Ve[c.skuId]) || void 0 === r ? void 0 : r.hideLogoOnBanner) === !0 ? (0, s.jsx)(l.Spacer, {
    size: 96
  }) : (0, s.jsx)('img', {
    className: S.categoryLogo,
    src: (0, C.uV)(c.logo, {
      size: T
    }),
    alt: c.name,
    style: {
      maxWidth: null === (a = I.Ve[c.skuId]) || void 0 === a ? void 0 : a.logoMaxWidth
    }
  }),
  (0, s.jsx)(l.Text, {
    className: o()(S.summary, {
      [S.blackSummary]: v
    }),
    variant: 'text-md/normal',
    children: c.skuId === i.T.DISXCORE ? (0, s.jsx)(O, {
      category: c
    }) : c.summary
  }),
  !u && (0, s.jsx)(b.Z, {
    category: c,
    className: S.limitedTimeBadge,
    display: 'banner'
  })
]
  });
}