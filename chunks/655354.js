n.d(t, {
  Z: function() {
return u;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(481060),
  o = n(689938),
  c = n(645438);

function u(e) {
  let {
className: t,
onJump: n
  } = e, [a, u] = s.useState(!1);
  return (0, i.jsx)(l.Clickable, {
className: r()(c.jumpButton, t),
onClick: e => {
  u(!0), n(e);
},
children: a ? (0, i.jsx)(l.Spinner, {
  type: l.Spinner.Type.PULSING_ELLIPSIS
}) : (0, i.jsx)(l.Text, {
  variant: 'text-xs/normal',
  className: c.text,
  children: o.Z.Messages.JUMP
})
  });
}