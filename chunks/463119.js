n.d(t, {
  i: function() {
return M;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(91192),
  o = n(442837),
  c = n(780384),
  d = n(481060),
  u = n(596454),
  _ = n(515753),
  h = n(410030),
  E = n(607070),
  I = n(100527),
  m = n(906732),
  g = n(821982),
  p = n(377171),
  T = n(633302),
  S = n(153066),
  C = n(335131),
  f = n(141594),
  N = n(302800),
  A = n(981631),
  Z = n(689938),
  L = n(383980);
let v = e => {
let {
  color: t
} = e;
return (0, i.jsx)(d.TextBadge, {
  className: L.newBadge,
  color: null != t ? t : p.Z.STATUS_DANGER_BACKGROUND,
  text: Z.Z.Messages.NEW
});
  },
  O = e => {
let {
  selected: t,
  locationState: n,
  onMouseEnter: a,
  onMouseLeave: r,
  children: o,
  ...c
} = e, u = (0, l.JA)('shop'), h = I.Z.HOME_PAGE_SHOP_TAB, {
  analyticsLocations: E
} = (0, m.ZP)(h), g = s.useCallback(() => (0, C.mK)({
  openInLayer: !1,
  analyticsSource: h,
  analyticsLocations: E
}), [
  h,
  E
]);
return (0, i.jsx)(_.Qj, {
  selected: t,
  route: A.Z5c.COLLECTIBLES_SHOP,
  icon: d.ShopIcon,
  text: Z.Z.Messages.COLLECTIBLES_SHOP,
  locationState: n,
  ...u,
  ...c,
  onMouseEnter: a,
  onMouseLeave: r,
  onClick: g,
  children: o
});
  },
  R = e => {
let {
  selected: t,
  locationState: n
} = e;
return (0, i.jsx)(O, {
  selected: t,
  locationState: n,
  children: (0, i.jsx)(v, {})
});
  },
  x = s.memo(function(e) {
let {
  displayOptions: t,
  assetId: n
} = e, s = (0, o.e7)([E.Z], () => E.Z.useReducedMotion), a = null != n ? (0, g.Z)(n, d.AvatarSizes.SIZE_80, !s) : void 0, r = t.title(), l = t.type === N.k2.COACHTIP_HEADLINE_ONLY;
return (0, i.jsxs)('div', {
  className: L.shopMarketingTooltipContent,
  children: [
    (0, i.jsx)('div', {
      className: L.avatarContainer,
      children: (0, i.jsx)(d.Avatar, {
        className: L.avatar,
        src: t.imageSrc,
        avatarDecoration: a,
        size: d.AvatarSizes.SIZE_80,
        'aria-hidden': !0
      })
    }),
    (0, i.jsxs)('div', {
      className: L.shopMarketingTooltipText,
      children: [
        (0, i.jsx)(d.Heading, {
          variant: l ? 'heading-sm/medium' : 'heading-sm/bold',
          children: 'string' == typeof r ? r : r.format()
        }),
        null != t.body && (0, i.jsx)(d.Text, {
          variant: 'text-xs/normal',
          className: L.marketingBadgeTooltipContent,
          children: t.body()
        })
      ]
    })
  ]
});
  }),
  b = e => {
let {
  selected: t,
  locationState: n,
  displayOptions: a
} = e, [l, o] = s.useState(0), [u, _] = s.useState(!1), E = (0, h.ZP)(), I = a.entrypointDecorationAssets, m = s.useCallback(e => {
  o(e => (e + 1) % a.assetIds.length), _(!0), null == e || e();
}, [a.assetIds]), g = s.useCallback(e => {
  _(!1), null == e || e();
}, []), p = a.title();
return (0, i.jsx)(d.Tooltip, {
  text: (0, i.jsx)(x, {
    displayOptions: a,
    assetId: a.assetIds[l]
  }),
  tooltipClassName: L.marketingBadgeTooltip,
  position: 'right',
  delay: 100,
  allowOverflow: !0,
  hideOnClick: !1,
  'aria-label': 'string' == typeof p ? p : Z.Z.Messages.COLLECTIBLES_SEE_WHATS_NEW,
  children: e => (0, i.jsxs)(O, {
    className: null != a.entryPointClassName ? (0, S.l)(L, a.entryPointClassName) : void 0,
    selected: t,
    locationState: n,
    ...e,
    onMouseEnter: () => m(e.onMouseEnter),
    onMouseLeave: () => g(e.onMouseLeave),
    children: [
      null != I && (0, i.jsx)('img', {
        src: (0, c.wj)(E) ? I.srcDark : I.srcLight,
        className: r()(L.marketingButtonImage, {
          [L.marketingButtonImageHovered]: u
        }),
        alt: '',
        'aria-hidden': !0
      }),
      (0, i.jsx)(v, {
        color: a.badgeColor
      })
    ]
  })
});
  },
  P = e => {
let {
  selected: t,
  locationState: n,
  displayOptions: a
} = e, r = s.useMemo(() => {
  var e;
  let t = null != a.emojiName ? null === (e = T.ZP.getByName(a.emojiName)) || void 0 === e ? void 0 : e.surrogates : null;
  return (0, i.jsxs)(d.Text, {
    variant: 'text-sm/medium',
    className: L.marketingBadgeTooltipContent,
    children: [
      null != t && (0, i.jsx)(u.Z, {
        emojiName: t
      }),
      a.title()
    ]
  });
}, [a]);
return (0, i.jsx)(d.Tooltip, {
  text: r,
  tooltipClassName: L.marketingBadgeTooltip,
  position: 'right',
  delay: 100,
  hideOnClick: !1,
  'aria-label': a.title(),
  children: e => (0, i.jsx)(O, {
    selected: t,
    locationState: n,
    ...e,
    children: (0, i.jsx)(v, {
      color: a.badgeColor
    })
  })
});
  },
  M = e => {
let {
  selected: t,
  locationState: n
} = e, {
  collectiblesShopTabNewBadgeDisplayOptions: s
} = (0, f.Z)();
if (null != s)
  switch (s.type) {
    case N.k2.TOOLTIP:
      return (0, i.jsx)(P, {
        selected: t,
        locationState: n,
        displayOptions: s
      });
    case N.k2.COACHTIP_HEADLINE_ONLY:
    case N.k2.COACHTIP:
      return (0, i.jsx)(b, {
        selected: t,
        locationState: n,
        displayOptions: s
      });
    case N.k2.BADGE:
      return (0, i.jsx)(R, {
        selected: t,
        locationState: n
      });
  }
return (0, i.jsx)(O, {
  selected: t,
  locationState: n
});
  };