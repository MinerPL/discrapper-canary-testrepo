n(627341);
var r = n(735250),
  s = n(470079),
  i = n(120356),
  l = n.n(i),
  o = n(278074),
  a = n(831209),
  c = n(399606),
  d = n(481060),
  u = n(37234),
  f = n(597688),
  m = n(884697),
  E = n(74538),
  p = n(731896),
  _ = n(528439),
  h = n(981631),
  I = n(689938),
  g = n(812939),
  v = n(223223);
let C = () => 80,
  x = e => {
let {
  children: t,
  className: n,
  isSelected: s = !1,
  ...i
} = e;
return (0, r.jsx)(d.Clickable, {
  className: l()(g.effectGridItem, n, {
    [g.selected]: s
  }),
  ...i,
  onClick: i.onSelect,
  children: t
});
  },
  P = e => {
var t;
let {
  user: n,
  profileEffect: i,
  innerRef: l,
  section: o,
  isSelected: u,
  ...h
} = e, C = (0, p.V)(i.id), P = (0, c.e7)([f.Z], () => {
  let e = f.Z.getProduct(i.skuId);
  return (0, m.G1)(e);
}), Z = (0, m.Yq)(i.skuId), A = s.useRef(null), {
  accessibilityLabel: T,
  thumbnailPreviewSrc: N,
  title: S
} = null !== (t = null == C ? void 0 : C.config) && void 0 !== t ? t : {}, j = E.ZP.canUseCollectibles(n), R = o === _.$0.PREMIUM_PURCHASE && !j;
return (0, r.jsxs)(x, {
  className: R && !u ? g.decorationGridItemChurned : void 0,
  innerRef: null != l ? l : A,
  isSelected: u,
  ...h,
  children: [
    (0, r.jsx)('img', {
      src: v,
      alt: T,
      className: g.presetEffectBackground
    }),
    (0, r.jsx)('img', {
      className: g.presetEffectImg,
      src: N,
      alt: S
    }),
    o === _.$0.PURCHASE || o === _.$0.PREMIUM_PURCHASE && j ? null : Z ? (0, r.jsx)(d.PremiumBadge, {
      className: g.newBadge,
      text: (0, r.jsxs)('div', {
        className: g.newBadgeText,
        children: [
          (0, r.jsx)(d.LockIcon, {
            size: 'xxs',
            color: 'currentColor'
          }),
          I.Z.Messages.NEW
        ]
      })
    }) : (0, r.jsx)(d.IconBadge, {
      icon: P ? () => (0, r.jsx)(d.NitroWheelIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 14,
        height: 14
      }) : () => (0, r.jsx)(d.LockIcon, {
        size: 'xxs',
        color: 'currentColor'
      }),
      color: a.Z.BACKGROUND_ACCENT,
      className: g.lockBadge
    })
  ]
});
  };
t.Z = e => {
  let {
user: t,
guild: n,
pendingProfileEffect: s,
selectedProfileEffectRef: i,
onSelect: l,
onClose: a
  } = e, c = () => {
a(), (0, u.jN)(h.S9g.COLLECTIBLES_SHOP);
  }, f = (0, _.ZP)(), m = null != s;
  return (0, r.jsx)('section', {
className: g.section,
children: (0, r.jsx)(d.MasonryList, {
  fade: !0,
  itemGutter: 12,
  sectionGutter: 16,
  paddingVertical: 0,
  paddingHorizontal: 12,
  className: g.list,
  columns: 3,
  sections: f.map(e => {
    let {
      items: t
    } = e;
    return t.length;
  }),
  renderItem: (e, a, u, E) => {
    let {
      section: p,
      items: h
    } = f[e];
    return (0, o.EQ)(h[a]).with(_.Tm, () => (0, r.jsxs)(x, {
      style: {
        ...u
      },
      isSelected: !m,
      onSelect: () => l(null),
      children: [
        (0, r.jsx)(d.DenyIcon, {
          size: 'md',
          color: 'currentColor',
          className: g.notAllowedIcon
        }),
        (0, r.jsx)(d.Text, {
          variant: 'text-xs/normal',
          color: 'header-primary',
          children: null != n ? I.Z.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : I.Z.Messages.NONE
        })
      ]
    }, E)).with(_.oT, () => (0, r.jsxs)(x, {
      style: u,
      onSelect: c,
      children: [
        (0, r.jsx)(d.ShopIcon, {
          size: 'custom',
          width: 23,
          height: 23,
          color: 'currentColor',
          className: g.shopIcon
        }),
        (0, r.jsx)(d.Text, {
          variant: 'text-xs/normal',
          color: 'header-primary',
          children: I.Z.Messages.COLLECTIBLES_SHOP
        })
      ]
    }, E)).otherwise(e => {
      let n = s === e.id;
      return (0, r.jsx)(P, {
        user: t,
        style: {
          ...u
        },
        section: p,
        profileEffect: e,
        innerRef: n ? i : void 0,
        isSelected: n,
        onSelect: () => l(e.id)
      }, E);
    });
  },
  renderSection: (e, t) => {
    let {
      header: n
    } = f[e];
    return (0, r.jsx)('div', {
      style: {
        ...t,
        height: ''.concat(16, 'px'),
        position: 'absolute'
      },
      children: (0, r.jsx)(d.FormTitle, {
        children: n
      })
    });
  },
  getSectionHeight: () => 16,
  getItemKey: (e, t) => {
    var n, r;
    return null !== (r = null === (n = f[e].items[t]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : null;
  },
  getItemHeight: C,
  removeEdgeItemGutters: !0
})
  });
};