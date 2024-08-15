n.d(r, {
  Z: function() {
return a;
  }
});
var l = n(735250);
n(470079);
var o = n(120356),
  s = n.n(o),
  t = n(758229);

function a(e) {
  let {
icon: r,
iconClassName: n,
description: o,
color: a
  } = e;
  return (0, l.jsxs)('div', {
className: t.perkRow,
children: [
  (0, l.jsx)('div', {
    className: t.perkIconContainer,
    children: (0, l.jsx)(r, {
      color: null != a ? a : 'currentColor',
      className: s()(t.perkIcon, n)
    })
  }),
  (0, l.jsx)('div', {
    className: t.perkDescription,
    children: o
  })
]
  });
}