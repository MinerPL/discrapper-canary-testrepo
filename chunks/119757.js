n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(889347);
let o = e => {
  let {
title: t,
subtitle: n,
icon: o
  } = e;
  return (0, r.jsxs)('div', {
className: a.wrapper,
children: [
  null != o && (0, r.jsx)(o, {
    size: 'xs',
    color: 'currentColor',
    className: a.icon
  }),
  (0, r.jsx)(i.Text, {
    variant: 'text-md/normal',
    className: a.title,
    children: t
  }),
  null != n && '' !== n ? (0, r.jsx)(i.Text, {
    variant: 'text-xs/semibold',
    className: a.subtitle,
    children: n
  }) : null
]
  });
};