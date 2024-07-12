n.d(t, {
  Z: function() {
return I;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  o = n(782568),
  s = n(100527),
  l = n(906732),
  u = n(326135),
  c = n(299206),
  d = n(389052),
  _ = n(622724),
  E = n(706454),
  f = n(785717),
  h = n(621853),
  p = n(475413),
  m = n(689938);

function I(e) {
  var t;
  let {
user: n,
guildId: I,
viewProfileItem: T
  } = e, {
trackUserProfileAction: g
  } = (0, f.KZ)(), {
analyticsLocations: S,
newestAnalyticsLocation: A
  } = (0, l.ZP)(s.Z.USER_PROFILE_OVERFLOW_MENU), N = (0, i.e7)([E.default], () => E.default.locale), v = (0, i.e7)([h.Z], () => h.Z.getUserProfile(n.id)), O = null == v ? void 0 : v.application, R = (0, d.Z)({
user: n,
location: A,
color: 'danger',
onBlock: () => g({
  action: 'BLOCK',
  analyticsLocations: S
}),
onUnblock: () => g({
  action: 'UNBLOCK',
  analyticsLocations: S
})
  }), C = (0, _.Z)({
user: n,
guildId: I,
location: A,
color: 'danger',
onAction: () => g({
  action: 'REPORT',
  analyticsLocations: S
})
  }), y = null == O ? null : (0, r.jsx)(a.MenuItem, {
id: 'report-app',
label: m.Z.Messages.REPORT_APP,
color: 'danger',
action: () => {
  g({
    action: 'REPORT_APP',
    analyticsLocations: S
  }), (0, o.Z)((0, u.G)({
    id: O.id,
    name: n.username,
    locale: N
  }));
}
  }), D = [
[T],
[
  R,
  C,
  y
],
[(0, c.Z)({
  id: null == v ? void 0 : null === (t = v.application) || void 0 === t ? void 0 : t.id,
  label: m.Z.Messages.COPY_ID_APPLICATION,
  onSuccess: () => g({
    action: 'COPY_APP_ID',
    analyticsLocations: S
  })
})]
  ];
  return D.every(e => e.every(e => null == e)) ? null : (0, r.jsx)(a.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(a.Menu, {
    navId: 'user-bot-profile-overflow-menu',
    onSelect: void 0,
    onClose: t,
    'aria-label': m.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
    children: D.map((e, t) => (0, r.jsx)(a.MenuGroup, {
      children: e.map(e => e)
    }, t))
  });
},
children: e => (0, r.jsx)(p.oY, {
  action: 'PRESS_OPTIONS',
  icon: a.MoreHorizontalIcon,
  tooltipText: m.Z.Messages.MORE,
  ...e
})
  });
}