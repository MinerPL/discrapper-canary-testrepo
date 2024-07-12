var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(481060),
  l = n(147915),
  u = n(689938),
  c = n(12882);
t.Z = i.memo(function(e) {
  let {
onClick: t,
disabled: n = !1
  } = e;
  return (0, r.jsx)('div', {
className: c.separator,
children: (0, r.jsx)('div', {
  className: c.buttonContainer,
  children: (0, r.jsx)(l.Z, {
    className: c.button,
    innerClassName: c.innerButton,
    childClassName: o()(c.buttonChild, {
      [c.disabled]: n,
      [c.activeButtonChild]: !n
    }),
    onClick: t,
    disabled: n,
    isActive: !1,
    'aria-label': u.Z.Messages.SEND_MESSAGE,
    children: (0, r.jsx)(s.SendMessageIcon, {
      size: 'xs',
      color: 'currentColor',
      className: c.sendIcon
    })
  })
})
  });
});