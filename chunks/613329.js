t.r(e), t.d(e, {
  default: function() {
return a;
  }
});
var r = t(735250);
t(470079);
var i = t(481060),
  s = t(239091),
  u = t(299660),
  o = t(517640),
  c = t(689938);

function a(n) {
  let {
guild: e,
onSelect: t
  } = n, a = (0, o.Z)(e), l = (0, u.Z)(e.id);
  return (0, r.jsx)(i.Menu, {
navId: 'role-subscription-context',
'aria-label': c.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTION_MENU_LABEL,
onClose: s.Zy,
onSelect: t,
children: (0, r.jsxs)(i.MenuGroup, {
  children: [
    a,
    l
  ]
})
  });
}