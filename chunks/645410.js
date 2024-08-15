n.d(t, {
  Z: function() {
return E;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(311819),
  o = n(572004),
  l = n(591759),
  u = n(135431),
  c = n(621853),
  d = n(475413),
  _ = n(689938);

function E(e) {
  let {
user: t,
...n
  } = e, E = (0, i.e7)([c.Z], () => {
var e;
return null === (e = c.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
  });
  if (null == E || !(0, u.E)(E))
return null;
  let {
customInstallUrl: f
  } = E, h = null == f || l.Z.isDiscordUrl(f) ? a.PlusSmallIcon : a.LinkExternalSmallIcon;
  return o.wS ? (0, r.jsx)(a.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(a.Menu, {
    navId: 'user-bot-profile-add-app',
    onClose: t,
    'aria-label': _.Z.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
    onSelect: void 0,
    children: (0, r.jsx)(a.MenuGroup, {
      children: (0, r.jsx)(a.MenuItem, {
        id: 'copy',
        label: _.Z.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
        action: () => (0, o.JG)((0, s.J)(E))
      })
    })
  });
},
children: e => {
  let {
    onClick: t,
    ...i
  } = e;
  return (0, r.jsx)(d.tG, {
    action: 'PRESS_ADD_APP',
    text: _.Z.Messages.APPLICATION_ADD_BUTTON,
    icon: h,
    onContextMenu: t,
    onClick: () => (0, u.L)({
      applicationId: E.id,
      ...E
    }),
    ...i,
    ...n
  });
}
  }) : (0, r.jsx)(d.tG, {
action: 'PRESS_ADD_APP',
text: _.Z.Messages.APPLICATION_ADD_BUTTON,
icon: h,
onClick: () => (0, u.L)({
  applicationId: E.id,
  ...E
}),
...n
  });
}