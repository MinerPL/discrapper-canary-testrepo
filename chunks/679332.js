n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(100527),
  o = n(906732),
  s = n(299206),
  l = n(785717),
  u = n(475413),
  c = n(689938);

function d(e) {
  let {
user: t,
viewProfileItem: n
  } = e, {
trackUserProfileAction: d
  } = (0, l.KZ)(), {
analyticsLocations: _
  } = (0, o.ZP)(a.Z.USER_PROFILE_OVERFLOW_MENU), E = [
[n],
[(0, s.Z)({
  id: t.id,
  label: c.Z.Messages.COPY_ID_USER,
  onSuccess: () => d({
    action: 'COPY_USER_ID',
    analyticsLocations: _
  })
})]
  ];
  return E.every(e => e.every(e => null == e)) ? null : (0, r.jsx)(i.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(i.Menu, {
    navId: 'non-user-bot-profile-overflow-menu',
    onSelect: void 0,
    onClose: t,
    'aria-label': c.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
    children: E.map((e, t) => (0, r.jsx)(i.MenuGroup, {
      children: e.map(e => e)
    }, t))
  });
},
children: e => (0, r.jsx)(u.oY, {
  action: 'PRESS_OPTIONS',
  icon: i.MoreHorizontalIcon,
  tooltipText: c.Z.Messages.MORE,
  ...e
})
  });
}