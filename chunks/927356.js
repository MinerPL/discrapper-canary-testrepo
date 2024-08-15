n.d(t, {
  Z: function() {
return u;
  }
});
var a = n(735250),
  i = n(470079),
  l = n(120356),
  r = n.n(l),
  s = n(481060),
  c = n(689938),
  o = n(826254),
  d = n(902294);

function u(e) {
  let {
heading: t = c.Z.Messages.APP_DIRECTORY_ERROR_HEADING,
body: n = c.Z.Messages.APP_DIRECTORY_ERROR_BODY,
className: l
  } = e;
  return (0, a.jsxs)('div', {
className: r()(o.container, l),
children: [
  (0, a.jsx)('img', {
    className: o.image,
    src: d,
    alt: c.Z.Messages.APP_DIRECTORY_CONFUSED_CLYDE_IMAGE_ALT
  }),
  (0, a.jsxs)(i.Fragment, {
    children: [
      (0, a.jsx)(s.Heading, {
        className: o.header,
        variant: 'heading-xl/semibold',
        children: t
      }),
      (0, a.jsx)(s.Text, {
        variant: 'text-md/normal',
        children: n
      })
    ]
  })
]
  });
}