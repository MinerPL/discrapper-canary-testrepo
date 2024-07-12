n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  s = n(481060),
  r = n(52736),
  o = n(746222);

function c(e) {
  let {
className: t,
roleColor: n,
roleName: a,
hasRemoveIcon: c = !1,
onClick: d,
disabled: u = !1,
verified: h = !1
  } = e;
  return (0, i.jsx)(s.Button, {
className: l()(t, o.button),
look: s.Button.Looks.BLANK,
size: s.Button.Sizes.NONE,
onClick: d,
disabled: u,
children: (0, i.jsx)(r.Z, {
  className: o.role,
  roleColor: n,
  roleName: a,
  verified: h,
  children: c && (0, i.jsx)(s.CloseSmallIcon, {
    size: 'custom',
    color: 'currentColor',
    height: 6,
    width: 6,
    className: o.removeRole,
    colorClass: o.removeRoleIcon
  })
})
  });
}