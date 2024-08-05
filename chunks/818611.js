n(627341);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(278074),
  l = n(831209),
  u = n(399606),
  c = n(481060),
  d = n(727637),
  _ = n(597688),
  E = n(884697),
  f = n(74538),
  h = n(864106),
  p = n(439959),
  m = n(125988),
  I = n(689938),
  T = n(96235);
let g = () => 80,
  S = e => {
let {
  children: t,
  className: n,
  onSelect: i,
  isSelected: a = !1,
  ...o
} = e;
return (0, r.jsx)(c.Clickable, {
  className: s()(T.decorationGridItem, a ? T.selected : void 0, n),
  ...o,
  onClick: i,
  children: t
});
  },
  A = e => {
let {
  user: t,
  avatarDecoration: n,
  innerRef: a,
  section: s,
  isSelected: o = !1,
  ...h
} = e, g = (0, u.e7)([_.Z], () => {
  let e = _.Z.getProduct(n.skuId);
  return (0, E.G1)(e);
}), A = (0, E.Yq)(n.skuId), N = f.ZP.canUseCollectibles(t), v = s === p.$0.PREMIUM_PURCHASE && !N, O = i.useRef(null), R = (0, d.Z)(null != a ? a : O), {
  avatarDecorationSrc: C
} = (0, m.Z)({
  user: t,
  avatarDecorationOverride: n,
  size: 80,
  onlyAnimateOnHover: !R
});
return (0, r.jsxs)(S, {
  className: v ? T.decorationGridItemChurned : void 0,
  innerRef: null != a ? a : O,
  isSelected: o,
  ...h,
  children: [
    (0, r.jsx)('img', {
      className: T.presetDecorationImg,
      src: C,
      alt: n.label
    }),
    s === p.$0.PURCHASE || s === p.$0.PREMIUM_PURCHASE && N ? null : A ? (0, r.jsx)(c.PremiumBadge, {
      className: T.newBadge,
      text: (0, r.jsxs)('div', {
        className: T.newBadgeText,
        children: [
          (0, r.jsx)(c.LockIcon, {
            size: 'xxs',
            color: 'currentColor'
          }),
          I.Z.Messages.NEW
        ]
      })
    }) : (0, r.jsx)(c.IconBadge, {
      icon: g ? () => (0, r.jsx)(c.NitroWheelIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 14,
        height: 14
      }) : () => (0, r.jsx)(c.LockIcon, {
        size: 'xxs',
        color: 'currentColor'
      }),
      color: l.Z.BACKGROUND_ACCENT,
      className: T.iconBadge
    })
  ]
});
  };
t.Z = e => {
  let {
user: t,
guild: n,
pendingAvatarDecoration: a,
selectedAvatarDecorationRef: s,
onSelect: l,
onOpenShop: u
  } = e, d = (0, p.ZP)(), _ = i.useCallback(() => {
u(void 0);
  }, [u]);
  return (0, r.jsx)(c.MasonryList, {
fade: !0,
className: T.list,
columns: 3,
sections: d.map(e => {
  let {
    items: t
  } = e;
  return t.length;
}),
sectionGutter: 16,
itemGutter: 12,
paddingHorizontal: 12,
paddingVertical: 0,
removeEdgeItemGutters: !0,
renderItem: (e, i, u, E) => {
  let {
    section: f,
    items: m
  } = d[e];
  return (0, o.EQ)(m[i]).with(p.Tm, () => (0, r.jsxs)(S, {
    style: {
      ...u
    },
    isSelected: null === a,
    onSelect: () => l(null),
    children: [
      (0, r.jsx)(c.DenyIcon, {
        size: 'md',
        color: 'currentColor',
        className: T.notAllowedIcon
      }),
      (0, r.jsx)(c.Text, {
        variant: 'text-xs/normal',
        color: 'header-primary',
        children: (0, h.ad)(t, n) ? I.Z.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : I.Z.Messages.NONE
      })
    ]
  }, E)).with(p.oT, () => (0, r.jsxs)(S, {
    style: u,
    onSelect: _,
    children: [
      (0, r.jsx)(c.ShopIcon, {
        size: 'custom',
        width: 23,
        height: 23,
        color: 'currentColor',
        className: T.shopIcon
      }),
      (0, r.jsx)(c.Text, {
        variant: 'text-xs/normal',
        color: 'header-primary',
        children: I.Z.Messages.COLLECTIBLES_SHOP
      })
    ]
  }, E)).otherwise(e => {
    let n = (null == a ? void 0 : a.id) === e.id;
    return (0, r.jsx)(A, {
      style: {
        ...u
      },
      user: t,
      avatarDecoration: e,
      section: f,
      innerRef: n ? s : void 0,
      isSelected: n,
      onSelect: () => l(e)
    }, E);
  });
},
renderSection: (e, t) => {
  let {
    header: n
  } = d[e];
  return (0, r.jsx)('div', {
    className: T.headings,
    style: {
      ...t,
      position: 'absolute'
    },
    children: (0, r.jsx)(c.HeadingLevel, {
      forceLevel: 5,
      children: (0, r.jsx)(c.Heading, {
        variant: 'eyebrow',
        color: 'header-secondary',
        children: n
      })
    })
  });
},
getSectionHeight: e => d[e].height,
getItemKey: (e, t) => d[e].items[t].id,
getItemHeight: g
  });
};