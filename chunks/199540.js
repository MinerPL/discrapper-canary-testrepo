n.d(t, {
  Z: function() {
return S;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(338545),
  o = n(866442),
  c = n(442837),
  u = n(477690),
  d = n(481060),
  h = n(430824),
  p = n(346656),
  _ = n(624138),
  f = n(674552),
  m = n(981631),
  g = n(689938),
  C = n(524343);
let I = (0, _.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
  E = (0, _.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE);

function N(e) {
  let {
guildId: t,
animate: n
  } = e, l = (0, c.e7)([h.Z], () => h.Z.getGuild(t), [t]);
  return null == l ? (0, i.jsx)('div', {
className: C.guildIconUnavailable,
children: '!'
  }) : (0, i.jsx)(p.Z, {
guild: l,
animate: n,
size: p.Z.Sizes.SMOL,
className: C.guildIcon,
tabIndex: -1
  });
}

function x(e) {
  let t, n, {
  folderNode: r,
  hovered: a,
  expanded: c
} = e,
{
  color: u,
  children: h
} = r,
p = null != u ? u : m.Wyy,
_ = h.map(e => e.id),
[f, g] = l.useState(!1),
[x, S] = l.useState(c),
v = c ? 0 : -E,
Z = (0, s.useSpring)({
  transform: 'translate3d(0, '.concat(v, 'px, 0)'),
  config: {
    duration: I
  },
  onStart() {
    g(!0), S(c);
  },
  onRest() {
    g(!1), S(c);
  }
}),
T = f ? Z : void 0;
  return (f || x) && (t = (0, i.jsx)(s.animated.div, {
style: T,
className: C.expandedFolderIconWrapper,
children: (0, i.jsx)(d.FolderIcon, {
  size: 'md',
  color: 'currentColor',
  style: {
    color: (0, o.Rf)(p)
  }
})
  })), (f || !x) && (n = (0, i.jsx)(s.animated.div, {
style: T,
className: C.closedFolderIconWrapper,
children: _.slice(0, 4).map(e => (0, i.jsx)(N, {
  guildId: e,
  animate: a
}, e))
  })), (0, i.jsxs)('div', {
'aria-hidden': !0,
style: c ? void 0 : {
  backgroundColor: (0, o.br)(p, 0.4)
},
className: C.folderIconWrapper,
children: [
  t,
  n
]
  });
}

function S(e) {
  let {
folderNode: t,
forceCircular: n,
expanded: r,
sorting: s,
mediaState: o,
mentionCount: c = 0,
tooltipName: u,
folderGroupId: h,
folderIconContent: p,
onClick: _,
onContextMenu: m,
onHoverChange: I,
onKeyDown: E,
treeItemProps: {
  onFocus: N,
  ...S
}
  } = e, [v, Z] = l.useState(!1), T = l.useCallback(() => {
s || Z(!0), null == I || I(!0);
  }, [
s,
I
  ]), L = l.useCallback(() => {
s || Z(!1), null == I || I(!1);
  }, [
s,
I
  ]), A = r || null == o ? null : (0, f.Or)(o), b = !r && c > 0 ? (0, f.Ne)(c) : null;
  return (0, i.jsx)(d.BlobMask, {
selected: !n,
upperBadge: A,
lowerBadge: b,
lowerBadgeSize: {
  width: (0, d.getBadgeWidthForValue)(c)
},
children: (0, i.jsx)(d.Clickable, {
  className: a()(C.folder, {
    [C.hover]: v
  }),
  onClick: _,
  onContextMenu: m,
  onMouseEnter: T,
  onMouseLeave: L,
  onKeyDown: E,
  onFocus: N,
  'aria-label': g.Z.Messages.GUILD_FOLDER_TOOLTIP_A11Y_LABEL.format({
    folderName: u,
    mentions: c
  }),
  'aria-expanded': r,
  'aria-owns': h,
  focusProps: {
    enabled: !1
  },
  ...S,
  role: 'treeitem',
  children: null != p ? (0, i.jsx)('div', {
    className: C.expandedFolderIconWrapper,
    children: p
  }) : (0, i.jsx)(x, {
    folderNode: t,
    hovered: v,
    expanded: r
  })
})
  });
}