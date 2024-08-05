n(47120);
var r = n(735250);
n(470079);
var i = n(658722),
  a = n.n(i),
  s = n(392711),
  o = n.n(s),
  l = n(866442),
  u = n(442837),
  c = n(481060),
  d = n(430824),
  _ = n(981631),
  E = n(689938),
  f = n(489148);
t.Z = function(e) {
  let {
className: t,
guild: n,
roleStyle: i,
roleFilter: s,
onSelect: h,
onClose: p
  } = e, m = (0, u.e7)([d.Z], () => d.Z.getRoles(n.id)), I = e => o()(m).filter(s).filter(t => a()(e.toLowerCase(), t.name.toLowerCase())).value();
  return (0, r.jsx)(c.ComboboxPopout, {
className: t,
value: new Set(),
onChange: h,
placeholder: E.Z.Messages.ADD_ROLE_PLACEHOLDER,
'aria-label': E.Z.Messages.ADD_ROLE_A11Y_LABEL,
onClose: p,
children: e => I(e).map(e => {
  var t, n;
  return (0, r.jsxs)(c.ComboboxItem, {
    value: e.id,
    children: [
      'dot' === i ? (0, r.jsx)(c.RoleDot, {
        className: f.popoutRoleDot,
        color: null !== (t = e.colorString) && void 0 !== t ? t : (0, l.Rf)(_.p6O),
        background: !1,
        tooltip: !1
      }) : (0, r.jsx)(c.RoleCircle, {
        className: f.popoutRoleCircle,
        color: null !== (n = e.colorString) && void 0 !== n ? n : (0, l.Rf)(_.p6O)
      }),
      (0, r.jsx)(c.ComboboxItem.Label, {
        children: e.name
      })
    ]
  }, e.id);
})
  });
};