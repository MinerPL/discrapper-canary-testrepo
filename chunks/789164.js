"use strict";
n.d(t, {
  h: function() {
    return u
  }
});
var i = n(735250),
  r = n(470079),
  s = n(337033),
  o = n(15127),
  a = n(512983),
  l = n(740720);
let u = r.forwardRef(function(e, t) {
  var n;
  let {
    children: u,
    className: _,
    titleClassName: d,
    title: c,
    icon: E,
    disabled: I,
    htmlFor: T,
    tag: h = "h5",
    ...S
  } = e, f = r.useId(), N = null !== (n = S.titleId) && void 0 !== n ? n : f;
  return (0, i.jsx)("div", {
    ref: t,
    className: _,
    children: null != c ? (0, i.jsx)(s.y, {
      component: (0, i.jsxs)("div", {
        className: l.sectionTitle,
        children: [E, null != c ? (0, i.jsx)(a.v, {
          tag: h,
          id: N,
          htmlFor: T,
          disabled: I,
          className: d,
          children: c
        }) : null]
      }),
      children: (0, i.jsx)("div", {
        className: l.children,
        children: (0, i.jsx)(o.ol, {
          titleId: N,
          children: u
        })
      })
    }) : u
  })
})