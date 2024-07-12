l.r(n);
var t = l(735250);
l(470079);
var r = l(481060),
  i = l(239091),
  o = l(410575),
  s = l(108843),
  u = l(100527),
  a = l(299206),
  d = l(88966),
  c = l(725119),
  Z = l(931617),
  f = l(981631),
  M = l(689938);
n.default = (0, s.Z)(function(e) {
  let {
user: n,
guildId: l,
analyticsContext: s,
onSelect: u
  } = e, R = (0, c.Z)(n.id), x = (0, Z.Z)(n.id, l), _ = (0, a.Z)({
id: n.id,
label: M.Z.Messages.COPY_ID_USER
  }), h = (0, d.Z)(n.id), p = n.isNonUserBot();
  return (0, t.jsx)(o.Z, {
context: s,
object: f.qAy.CONTEXT_MENU,
children: (0, t.jsxs)(r.Menu, {
  navId: 'user-context',
  onClose: i.Zy,
  'aria-label': M.Z.Messages.USER_ACTIONS_MENU_LABEL,
  onSelect: u,
  children: [
    (0, t.jsxs)(r.MenuGroup, {
      children: [
        !p && R,
        !p && h
      ]
    }),
    (0, t.jsx)(r.MenuGroup, {
      children: !p && x
    }),
    (0, t.jsx)(r.MenuGroup, {
      children: _
    })
  ]
})
  });
}, [
  u.Z.CONTEXT_MENU,
  u.Z.AUDIT_LOG_USER_MENU
]);