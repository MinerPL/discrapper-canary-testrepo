n.d(t, {
  Z: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(24311),
  s = n(785717),
  o = n(475413),
  l = n(689938),
  u = n(363224);

function c(e) {
  let {
user: t,
onClose: n,
className: c
  } = e, {
trackUserProfileAction: d
  } = (0, s.KZ)(), _ = (0, r.jsxs)('div', {
className: u.menuItemLabel,
children: [
  (0, r.jsx)(i.PhoneCallIcon, {
    size: 'xs'
  }),
  ' ',
  l.Z.Messages.START_VOICE_CALL
]
  }), E = (0, a.Z)({
user: t,
label: _,
id: 'voice-call',
onCall: () => {
  d({
    action: 'VOICE_CALL'
  }), null == n || n();
}
  }), f = (0, r.jsxs)('div', {
className: u.menuItemLabel,
children: [
  (0, r.jsx)(i.VideoIcon, {
    size: 'xs'
  }),
  ' ',
  l.Z.Messages.START_VIDEO_CALL
]
  }), h = (0, a.Z)({
user: t,
label: f,
joinCallVideo: !0,
id: 'video-call',
onCall: () => {
  d({
    action: 'VIDEO_CALL'
  }), null == n || n();
}
  });
  return t.bot ? null : (0, r.jsx)(i.Popout, {
position: 'bottom',
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(i.Menu, {
    navId: 'user-profile-action-call-button',
    onSelect: void 0,
    onClose: t,
    'aria-label': l.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
    children: (0, r.jsxs)(i.MenuGroup, {
      children: [
        E,
        h
      ]
    })
  });
},
children: e => (0, r.jsx)(o.ef, {
  action: 'PRESS_CALL',
  icon: i.PhoneCallIcon,
  tooltipText: l.Z.Messages.CALL,
  className: c,
  ...e
})
  });
}