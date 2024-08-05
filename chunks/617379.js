n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(110255),
  r = n(64247),
  l = n(981631),
  o = n(689938);

function c(e) {
  let {
channel: t
  } = e;
  return (0, i.jsx)(s.Popout, {
align: 'right',
animation: s.Popout.Animation.NONE,
position: 'bottom',
renderPopout: e => t.isThread() ? (0, i.jsx)(r.Z, {
  ...e,
  channel: t,
  navId: 'recents-thread-notifications',
  label: o.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL
}) : (0, i.jsx)(a.Z, {
  ...e,
  channel: t,
  navId: 'recents-notifications',
  label: o.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
  location: {
    section: l.jXE.INBOX
  },
  includeGuildMute: !0
}),
children: e => {
  let {
    onClick: t
  } = e;
  return (0, i.jsx)(s.CircleIconButton, {
    tooltip: o.Z.Messages.NOTIFICATION_SETTINGS,
    color: s.CircleIconButtonColors.TERTIARY,
    icon: (0, i.jsx)(s.BellIcon, {
      size: 'xs',
      color: 'currentColor'
    }),
    onClick: t
  });
}
  });
}