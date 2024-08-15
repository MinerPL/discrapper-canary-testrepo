var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(442837),
  o = n(239091),
  c = n(146773),
  u = n(592125),
  d = n(984933),
  h = n(496675),
  p = n(98597),
  _ = n(473403),
  f = n(981631),
  g = n(490897),
  m = n(391463);
let C = (0, c.B)(function(e) {
  let {
guild: t,
selectedChannelId: r,
position: c,
disableManageChannels: C,
sorting: I,
sortingType: E,
sortingPosition: N,
connectChannelDragSource: x,
connectChannelDropTarget: S,
tabIndex: Z
  } = e, v = (0, s.e7)([
u.Z,
d.ZP
  ], () => {
let e = d.ZP.getDirectoryChannelIds(t.id);
return 0 === e.length ? null : u.Z.getChannel(e[0]);
  }), T = (0, s.e7)([u.Z], () => u.Z.getChannel(null == v ? void 0 : v.parent_id)), L = r === (null == v ? void 0 : v.id), A = (0, s.e7)([h.Z], () => null != T ? h.Z.can(f.Plq.MANAGE_CHANNELS, T) : null != t && h.Z.can(f.Plq.MANAGE_CHANNELS, t)), b = l.useCallback(e => {
null != v && (0, o.jW)(e, async () => {
  let {
    default: e
  } = await n.e('70623').then(n.bind(n, 99334));
  return t => (0, i.jsx)(e, {
    ...t,
    channel: v
  });
});
  }, [v]);
  if (null == v)
return null;
  let M = (0, p.jo)(c, N),
R = (0, p.CN)(v, I, E),
P = (0, i.jsx)('div', {
  className: a()(M, {
    [m.disabled]: R,
    [m.selected]: L
  }),
  'data-dnd-name': v.name,
  children: (0, i.jsxs)(_.Z, {
    className: m.iconVisibility,
    channel: v,
    guild: t,
    selected: L,
    onContextMenu: b,
    forceInteractable: !0,
    resolvedUnreadSetting: g.i.ONLY_MENTIONS,
    children: [
      (0, i.jsx)(p.eP, {
        channel: v,
        tabIndex: Z
      }),
      (0, i.jsx)(p.hR, {
        channel: v,
        disableManageChannels: C,
        tabIndex: Z
      })
    ]
  })
});
  return A && (P = S(x(P))), P;
});
t.Z = C;