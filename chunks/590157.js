t.d(n, {
  Z: function() {
return N;
  }
});
var i = t(735250),
  a = t(470079),
  s = t(442837),
  l = t(481060),
  o = t(366598),
  r = t(821864),
  c = t(905753),
  d = t(995390),
  u = t(469880),
  I = t(665578),
  m = t(689938),
  _ = t(607211);

function N(e) {
  let {
application: n,
canNavigate: t,
guildId: d
  } = e, I = (0, s.e7)([c.Z], () => c.Z.isUnavailable());
  return (a.useEffect(() => (r.I4(n.id), r.kZ), [n.id]), a.useEffect(() => {
r.gq(n.id, d, n.id), r.Sn(d, n.id);
  }, [
n.id,
d
  ]), I) ? null : (0, i.jsxs)(a.Fragment, {
children: [
  (0, i.jsx)(o.Z, {
    icon: (0, i.jsx)(l.SlashBoxIcon, {
      size: 'md',
      color: 'currentColor'
    }),
    title: m.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS
  }),
  (0, i.jsx)(l.Text, {
    color: 'text-muted',
    variant: 'text-sm/normal',
    children: m.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_DESCRIPTION
  }),
  (0, i.jsx)(E, {
    guildId: d,
    applicationId: n.id
  }),
  (0, i.jsx)(u.Z, {
    applicationIcon: n.icon,
    applicationName: n.name,
    canNavigate: t,
    guildId: d
  })
]
  });
}

function E(e) {
  let {
applicationId: n,
guildId: t
  } = e, {
originalApplicationPermissions: a,
editedTargetPermissions: s,
selectedPermissionCount: l
  } = (0, d.Z)(t, n);
  return (0, i.jsx)('div', {
className: _.applicationPermissions,
children: (0, i.jsx)(I.Z, {
  applicationId: n,
  guildId: t,
  inModal: !1,
  editedTargetPermissions: s,
  originalApplicationPermissions: a,
  selectedPermissionCount: l
})
  });
}