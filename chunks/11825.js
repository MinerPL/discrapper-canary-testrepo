n.d(t, {
  z: function() {
return c;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(833592),
  l = n(689938);
let o = e => {
let {
  item: t,
  closePopout: n
} = e;
return (0, i.jsx)(a.Menu, {
  navId: 'notification-actions',
  onClose: n,
  onSelect: n,
  'aria-label': l.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
  children: (0, i.jsx)(a.MenuItem, {
    id: 'delete',
    label: l.Z.Messages.DELETE,
    icon: a.TrashIcon,
    action: async () => {
      await (0, r.g3)(t);
    }
  })
});
  },
  c = s.memo(function(e) {
let {
  item: t
} = e;
return (0, i.jsx)(a.Popout, {
  renderPopout: e => (0, i.jsx)(o, {
    ...e,
    item: t
  }),
  position: 'bottom',
  align: 'right',
  animation: a.Popout.Animation.NONE,
  children: e => {
    let {
      onClick: t
    } = e;
    return (0, i.jsx)(a.CircleIconButton, {
      tooltip: l.Z.Messages.MORE,
      color: a.CircleIconButtonColors.TERTIARY,
      icon: (0, i.jsx)(a.MoreHorizontalIcon, {
        size: 'xs',
        color: 'currentColor'
      }),
      onClick: e => {
        e.stopPropagation(), t(e);
      },
      'aria-haspopup': 'menu'
    });
  }
});
  });