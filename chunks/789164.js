n.d(t, {
  h: function() {
return u;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(337033),
  s = n(15127),
  o = n(512983),
  l = n(505903);
let u = i.forwardRef(function(e, t) {
  var n;
  let {
children: u,
className: c,
titleClassName: d,
title: _,
icon: E,
disabled: f,
htmlFor: h,
tag: p = 'h5',
...m
  } = e, I = i.useId(), T = null !== (n = m.titleId) && void 0 !== n ? n : I;
  return (0, r.jsx)('div', {
ref: t,
className: c,
children: null != _ ? (0, r.jsx)(a.y, {
  component: (0, r.jsxs)('div', {
    className: l.sectionTitle,
    children: [
      E,
      null != _ ? (0, r.jsx)(o.v, {
        tag: p,
        id: T,
        htmlFor: h,
        disabled: f,
        className: d,
        children: _
      }) : null
    ]
  }),
  children: (0, r.jsx)('div', {
    className: l.children,
    children: (0, r.jsx)(s.ol, {
      titleId: T,
      children: u
    })
  })
}) : u
  });
});