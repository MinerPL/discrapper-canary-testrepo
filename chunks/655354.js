n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(481060),
  o = n(689938),
  c = n(645438);

function d(e) {
  let {
className: t,
onJump: n
  } = e, [s, d] = a.useState(!1);
  return (0, i.jsx)(l.Clickable, {
className: r()(c.jumpButton, t),
onClick: e => {
  d(!0), n(e);
},
children: s ? (0, i.jsx)(l.Spinner, {
  type: l.Spinner.Type.PULSING_ELLIPSIS
}) : (0, i.jsx)(l.Text, {
  variant: 'text-xs/normal',
  className: c.text,
  children: o.Z.Messages.JUMP
})
  });
}