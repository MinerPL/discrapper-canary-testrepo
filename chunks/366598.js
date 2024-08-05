t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250),
  a = t(470079),
  s = t(120356),
  l = t.n(s),
  o = t(481060),
  r = t(663989);

function d(e) {
  let {
children: n,
icon: t,
title: s
  } = e;
  return (0, i.jsxs)('header', {
className: r.header,
children: [
  (0, i.jsxs)('div', {
    className: r.name,
    children: [
      a.cloneElement(t, {
        className: l()(t.props.className, r.icon),
        height: 24,
        width: 24
      }),
      (0, i.jsx)(o.Heading, {
        variant: 'heading-md/semibold',
        className: r.title,
        children: s
      })
    ]
  }),
  n
]
  });
}