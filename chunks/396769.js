n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(285952),
  l = n(630471);

function r(e) {
  let {
icon: t,
onClick: n,
label: r
  } = e;
  return (0, i.jsx)(a.Button, {
look: a.Button.Looks.BLANK,
size: a.Button.Sizes.MIN,
className: l.button,
onClick: n,
children: (0, i.jsxs)(s.Z, {
  align: s.Z.Align.CENTER,
  children: [
    (0, i.jsx)('div', {
      className: l.buttonIcon,
      children: t
    }),
    (0, i.jsx)(a.Text, {
      variant: 'text-md/normal',
      color: 'none',
      children: r
    })
  ]
})
  });
}