t.d(n, {
  Z: function() {
return I;
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  s = t(481060),
  l = t(434404),
  r = t(962086),
  o = t(225675),
  d = t(496675),
  c = t(981631),
  u = t(689938);

function I(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.pNK.ROLES;
  return (0, a.e7)([d.Z], () => d.Z.canImpersonateRole(e, n)) ? (0, i.jsx)(s.MenuItem, {
id: 'view-as-role',
label: u.Z.Messages.VIEW_AS_ROLE,
icon: s.ArrowSmallRightIcon,
action: () => {
  l.Z.close(), (0, r.iD)(e.id, {
    type: o.z.ROLES,
    roles: {
      [n.id]: n
    },
    returnToSection: t
  });
}
  }, 'view-as-role') : null;
}