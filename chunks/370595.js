n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(50493),
  l = n(689938),
  r = n(556802),
  o = n(749348);

function c(e) {
  let {
onNavigate: t,
backPanel: n = s.k.INFO
  } = e;
  return (0, i.jsxs)('div', {
className: o.header,
children: [
  (0, i.jsx)('div', {
    className: o.headerTitle,
    children: (0, i.jsxs)(a.Clickable, {
      className: r.backButton,
      onClick: () => null == t ? void 0 : t(n),
      children: [
        (0, i.jsx)(a.ArrowSmallLeftIcon, {
          size: 'custom',
          width: 20,
          height: 20
        }),
        (0, i.jsx)(a.Heading, {
          variant: 'heading-md/semibold',
          children: l.Z.Messages.BACK
        })
      ]
    })
  }),
  (0, i.jsx)(a.KeyCombo, {
    shortcut: 'esc',
    keyClassName: r.keyComboInner,
    className: r.keyComboContainer
  })
]
  });
}