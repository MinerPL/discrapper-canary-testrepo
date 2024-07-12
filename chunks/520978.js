n.d(t, {
  Z: function() {
return _;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(239091),
  o = n(311819),
  s = n(572004),
  l = n(591759),
  u = n(135431),
  c = n(689938),
  d = n(615311);

function _(e) {
  let {
application: t,
className: n
  } = e;
  if (!(0, u.E)({
  customInstallUrl: t.customInstallUrl,
  installParams: t.installParams,
  integrationTypesConfig: t.integrationTypesConfig
}))
return null;
  let _ = null != t.customInstallUrl && !l.Z.isDiscordUrl(t.customInstallUrl);
  return (0, r.jsx)(i.Button, {
color: i.Button.Colors.PRIMARY,
look: i.Button.Looks.FILLED,
size: i.Button.Sizes.SMALL,
onContextMenu: s.wS ? e => {
  (0, a.vq)(e, e => (0, r.jsx)(i.Menu, {
    navId: 'component-button',
    onClose: a.Zy,
    'aria-label': c.Z.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
    onSelect: void 0,
    ...e,
    children: (0, r.jsx)(i.MenuGroup, {
      children: (0, r.jsx)(i.MenuItem, {
        id: 'copy',
        label: c.Z.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
        action: () => (0, s.JG)((0, o.J)(t))
      })
    })
  }));
} : void 0,
onClick: () => {
  (0, u.L)({
    applicationId: t.id,
    customInstallUrl: t.customInstallUrl,
    installParams: t.installParams,
    integrationTypesConfig: t.integrationTypesConfig
  });
},
className: n,
children: (0, r.jsxs)('div', {
  className: d.applicationInstallButtonContent,
  children: [
    !_ && (0, r.jsx)(i.CirclePlusIcon, {
      size: 'xs',
      color: 'currentColor'
    }),
    (0, r.jsx)(i.Spacer, {
      size: 4,
      horizontal: !0
    }),
    (0, r.jsx)('span', {
      className: d.applicationInstallButtonText,
      children: c.Z.Messages.APPLICATION_ADD_BUTTON
    }),
    _ && (0, r.jsx)(i.WindowLaunchIcon, {
      size: 'xs',
      color: 'currentColor',
      className: d.launchIcon
    })
  ]
})
  });
}