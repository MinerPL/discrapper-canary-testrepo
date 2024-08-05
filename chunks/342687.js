var r = n(735250),
  i = n(470079),
  a = n(392711),
  s = n.n(a),
  o = n(826298),
  l = n(283078);
t.Z = e => {
  let {
showImage: t
  } = e, {
usageWidth: n,
descriptionWidth: a,
sourceWidth: u
  } = i.useMemo(() => ({
usageWidth: s().random(60, 120),
descriptionWidth: s().random(200, 600),
sourceWidth: s().random(45, 90)
  }), []);
  return (0, r.jsxs)('div', {
className: l.wrapper,
children: [
  t ? (0, r.jsx)('div', {
    className: l.image
  }) : null,
  (0, r.jsxs)('div', {
    className: l.infoWrapper,
    children: [
      (0, r.jsx)('div', {
        style: {
          maxWidth: (0, o.Q1)(n)
        },
        className: l.usageWrapper
      }),
      (0, r.jsx)('div', {
        style: {
          maxWidth: (0, o.Q1)(a)
        },
        className: l.description
      })
    ]
  }),
  (0, r.jsx)('div', {
    style: {
      width: (0, o.Q1)(u)
    },
    className: l.source
  })
]
  });
};