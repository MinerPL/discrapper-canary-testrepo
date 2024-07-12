var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(481060),
  l = n(843505);
t.Z = e => {
  let {
icon: t,
iconClassName: n,
header: a,
description: o
  } = e;
  return (0, s.jsxs)('div', {
className: l.container,
children: [
  (0, s.jsx)('div', {
    className: l.circle,
    children: (0, s.jsx)(t, {
      className: r()(l.icon, n),
      size: 'custom',
      width: 20,
      height: 20,
      color: 'currentColor'
    })
  }),
  (0, s.jsxs)('div', {
    children: [
      (0, s.jsx)(i.Heading, {
        variant: 'heading-md/bold',
        className: l.header,
        children: (0, s.jsx)(i.HeadingLevel, {
          children: a
        })
      }),
      (0, s.jsx)(i.Text, {
        variant: 'text-sm/medium',
        color: 'text-muted',
        children: o
      })
    ]
  })
]
  });
};