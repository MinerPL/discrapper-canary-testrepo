n.r(t), n.d(t, {
  MemberListContentSettingsMenu: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  l = n(481060),
  s = n(485267),
  r = n(146282),
  o = n(981631),
  c = n(689938);
let d = e => {
  let {
closePopout: t
  } = e, d = (0, a.e7)([r.Z], () => r.Z.hidden);
  return (0, i.jsx)(l.Menu, {
onSelect: () => {},
navId: 'member-list-settings-menu',
variant: 'fixed',
onClose: null != t ? t : o.dG4,
'aria-label': c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_SETTINGS_ALT,
children: (0, i.jsxs)(l.MenuGroup, {
  children: [
    (0, i.jsx)(l.MenuItem, {
      id: 'about',
      label: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_SETTINGS_ABOUT,
      icon: l.CircleInformationIcon,
      action: () => {
        (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await n.e('71517').then(n.bind(n, 549505));
          return t => (0, i.jsx)(e, {
            ...t
          });
        }), null == t || t();
      }
    }),
    (0, i.jsx)(l.MenuCheckboxItem, {
      id: 'hide',
      label: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_SETTINGS_HIDE,
      checked: d,
      action: () => {
        (0, s.l)(), null == t || t();
      }
    })
  ]
})
  });
};
t.default = () => (0, i.jsx)(l.Popout, {
  animation: l.Popout.Animation.NONE,
  position: 'bottom',
  align: 'right',
  renderPopout: e => {
let {
  closePopout: t
} = e;
return (0, i.jsx)(d, {
  closePopout: t
});
  },
  children: e => (0, i.jsx)(l.Clickable, {
...e,
onClick: t => {
  t.stopPropagation(), e.onClick(t);
},
style: {
  width: '12px',
  height: '12px'
},
children: (0, i.jsx)(l.SettingsIcon, {
  size: 'xxs'
})
  })
});