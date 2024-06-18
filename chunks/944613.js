"use strict";
n(47120);
var i = n(735250);
n(470079);
var r = n(658722),
  s = n.n(r),
  o = n(392711),
  a = n.n(o),
  l = n(866442),
  u = n(442837),
  _ = n(481060),
  d = n(430824),
  c = n(981631),
  E = n(689938),
  I = n(352313);
t.Z = function(e) {
  let {
    className: t,
    guild: n,
    roleStyle: r,
    roleFilter: o,
    onSelect: T,
    onClose: h
  } = e, S = (0, u.e7)([d.Z], () => d.Z.getRoles(n.id)), f = e => a()(S).filter(o).filter(t => s()(e.toLowerCase(), t.name.toLowerCase())).value();
  return (0, i.jsx)(_.ComboboxPopout, {
    className: t,
    value: new Set,
    onChange: T,
    placeholder: E.Z.Messages.ADD_ROLE_PLACEHOLDER,
    "aria-label": E.Z.Messages.ADD_ROLE_A11Y_LABEL,
    onClose: h,
    children: e => f(e).map(e => {
      var t, n;
      return (0, i.jsxs)(_.ComboboxItem, {
        value: e.id,
        children: ["dot" === r ? (0, i.jsx)(_.RoleDot, {
          className: I.popoutRoleDot,
          color: null !== (t = e.colorString) && void 0 !== t ? t : (0, l.Rf)(c.p6O),
          background: !1,
          tooltip: !1
        }) : (0, i.jsx)(_.RoleCircle, {
          className: I.popoutRoleCircle,
          color: null !== (n = e.colorString) && void 0 !== n ? n : (0, l.Rf)(c.p6O)
        }), (0, i.jsx)(_.ComboboxItem.Label, {
          children: e.name
        })]
      }, e.id)
    })
  })
}