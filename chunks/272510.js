n.d(t, {
  Z: function() {
return E;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(100527),
  o = n(906732),
  s = n(299206),
  l = n(389052),
  u = n(622724),
  c = n(785717),
  d = n(475413),
  _ = n(689938);

function E(e) {
  let {
user: t,
guildId: n,
viewProfileItem: E
  } = e, {
trackUserProfileAction: f
  } = (0, c.KZ)(), {
analyticsLocations: h,
newestAnalyticsLocation: p
  } = (0, o.ZP)(a.Z.USER_PROFILE_OVERFLOW_MENU), m = (0, l.Z)({
user: t,
location: p,
color: 'danger',
onBlock: () => f({
  action: 'BLOCK',
  analyticsLocations: h
}),
onUnblock: () => f({
  action: 'UNBLOCK',
  analyticsLocations: h
})
  }), I = (0, u.Z)({
user: t,
guildId: n,
location: p,
color: 'danger',
onAction: () => f({
  action: 'REPORT',
  analyticsLocations: h
})
  }), T = [
[E],
[
  m,
  I
],
[(0, s.Z)({
  id: t.id,
  label: _.Z.Messages.COPY_ID_USER,
  onSuccess: () => f({
    action: 'COPY_USER_ID',
    analyticsLocations: h
  })
})]
  ];
  return T.every(e => e.every(e => null == e)) ? null : (0, r.jsx)(o.Gt, {
value: h,
children: (0, r.jsx)(i.Popout, {
  renderPopout: e => {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)(i.Menu, {
      navId: 'user-profile-overflow-menu',
      onSelect: void 0,
      onClose: t,
      'aria-label': _.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
      children: T.map((e, t) => (0, r.jsx)(i.MenuGroup, {
        children: e.map(e => e)
      }, t))
    });
  },
  children: e => (0, r.jsx)(d.oY, {
    action: 'PRESS_OPTIONS',
    icon: i.MoreHorizontalIcon,
    tooltipText: _.Z.Messages.MORE,
    ...e
  })
})
  });
}