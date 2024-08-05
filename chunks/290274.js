n.d(t, {
  Z: function() {
return h;
  },
  a: function() {
return i;
  }
});
var r, i, a = n(735250);
n(470079);
var s = n(120356),
  o = n.n(s),
  l = n(481060),
  u = n(239091),
  c = n(180335),
  d = n(27144),
  _ = n(848966),
  E = n(689938),
  f = n(692184);

function h(e) {
  let {
user: t,
activity: n,
entry: r,
display: i,
className: s,
onSelect: h,
onRequestOpen: p
  } = e, m = (0, c.Bq)({
activity: n,
user: t
  }), I = (0, _.Z)({
entry: null != r ? r : m,
activity: n,
user: t,
display: i
  }), {
pastActivityEnabled: T
  } = (0, d.z)({
location: 'UserProfileActivityContextMenu'
  });
  return T && 0 !== I.length ? (0, a.jsx)(l.Popout, {
align: 'top',
position: 'right',
disablePointerEvents: !1,
onRequestOpen: p,
renderPopout: () => (0, a.jsx)(l.Menu, {
  navId: 'content-inventory-context',
  onClose: u.Zy,
  'aria-label': E.Z.Messages.USER_PROFILE_ACTIVITY_ACTION_MENU_A11Y_LABEL,
  onSelect: h,
  children: (0, a.jsx)(l.MenuGroup, {
    children: I
  })
}),
children: e => (0, a.jsx)(l.Clickable, {
  ...e,
  className: o()(f.contextMenu, s),
  children: (0, a.jsx)(l.MoreHorizontalIcon, {
    color: l.tokens.colors.HEADER_PRIMARY,
    size: 'xs'
  })
})
  }) : null;
}
(r = i || (i = {})).LIVE = 'live', r.RECENT = 'recent';