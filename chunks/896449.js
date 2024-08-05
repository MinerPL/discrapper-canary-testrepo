n.d(t, {
  Z: function() {
return m;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(481060),
  l = n(239091),
  r = n(299206),
  o = n(810568),
  c = n(168524),
  u = n(725119),
  d = n(26033),
  h = n(689938),
  p = n(910331);

function m(e) {
  var t;
  let {
user: n,
guildId: m,
channel: _,
entry: f,
onSelect: E
  } = e, g = (0, u.Z)({
userId: n.id,
guildId: m,
channelId: _.id
  }), C = (0, r.Z)({
id: n.id,
label: h.Z.Messages.COPY_ID_USER
  }), I = (0, d.dX)(f), x = (0, c.Z)({
location: 'ContentPopoutContextMenu',
applicationId: I ? null === (t = f.extra) || void 0 === t ? void 0 : t.application_id : void 0,
source: o.m1.ActivityCardContextMenu,
trackEntryPointImpression: !0,
sourceUserId: f.author_id
  }), [T, N] = a.useState(!1);
  return (0, i.jsx)(s.Popout, {
align: 'top',
position: 'right',
shouldShow: T,
disablePointerEvents: !1,
renderPopout: () => (0, i.jsx)(s.Menu, {
  navId: 'content-inventory-context',
  onClose: l.Zy,
  'aria-label': h.Z.Messages.USER_ACTIONS_MENU_LABEL,
  onSelect: E,
  children: (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)(s.MenuGroup, {
        children: [
          g,
          null != x && (0, i.jsx)(s.MenuItem, {
            id: 'game-profile',
            label: h.Z.Messages.GAME_PROFILE,
            action: x
          })
        ]
      }),
      (0, i.jsx)(s.MenuGroup, {
        children: C
      })
    ]
  })
}),
children: () => (0, i.jsx)(s.Clickable, {
  className: p.menuIcon,
  onClick: () => {
    N(!0);
  },
  children: (0, i.jsx)(s.MoreHorizontalIcon, {
    color: 'currentColor',
    size: 'custom',
    width: 16,
    height: 16
  })
})
  });
}