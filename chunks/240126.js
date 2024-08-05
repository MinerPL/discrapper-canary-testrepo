n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(499033),
  r = n(689938),
  l = n(371965);

function o(e) {
  let {
Icon: t,
header: n,
tip: o,
disableStars: c
  } = e;
  return (0, i.jsxs)('div', {
className: l.container,
children: [
  (0, i.jsxs)('div', {
    className: l.iconContainer,
    children: [
      (0, i.jsx)(t, {
        color: 'currentColor',
        size: 'custom',
        className: l.icon,
        width: 36,
        height: 36
      }),
      c ? null : (0, i.jsx)(a.Z, {
        className: l.stars
      })
    ]
  }),
  (0, i.jsx)(s.Heading, {
    className: l.header,
    variant: 'heading-xl/semibold',
    children: n
  }),
  (0, i.jsxs)(s.Text, {
    color: 'header-secondary',
    variant: 'text-xs/normal',
    children: [
      c ? null : (0, i.jsxs)(s.Text, {
        tag: 'span',
        className: l.protip,
        variant: 'text-xs/bold',
        color: 'text-positive',
        children: [
          r.Z.Messages.FORM_LABEL_ROLES_PRO_TIP,
          ':',
          ' '
        ]
      }),
      o
    ]
  })
]
  });
}