var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(266489);
let l = a.forwardRef(function(e, t) {
  let {
title: n,
subtitle: a,
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
          (0, i.jsx)(s.Heading, {
            variant: 'heading-lg/medium',
            color: 'header-primary',
            children: n
          })
        ]
      }),
      null != a && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)('div', {
            className: r.sectionHeaderSpacer
          }),
          (0, i.jsx)(s.Text, {
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: a
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
t.Z = a.memo(l);