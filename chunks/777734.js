var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(477975);
let l = s.forwardRef(function(e, t) {
  let {
title: n,
subtitle: s,
icon: l,
style: o
  } = e;
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    style: o,
    className: r.sectionHeader,
    children: [
      (0, i.jsxs)('div', {
        className: r.sectionHeaderTitle,
        children: [
          l,
          (0, i.jsx)(a.Heading, {
            variant: 'heading-md/medium',
            color: 'header-primary',
            children: n
          })
        ]
      }),
      null != s && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)('div', {
            className: r.sectionHeaderSpacer
          }),
          (0, i.jsx)(a.Text, {
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: s
          })
        ]
      })
    ]
  }),
  (0, i.jsx)('div', {
    ref: t
  })
]
  });
});
t.Z = s.memo(l);