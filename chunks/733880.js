"use strict";
n.r(t);
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  o = n("734711");
let u = a.forwardRef(function(e, t) {
  let {
    className: n,
    focusProps: a,
    ...s
  } = e;
  return (0, l.jsx)(r.FocusRing, {
    ...a,
    children: (0, l.jsx)("li", {
      className: i()(n, o.container),
      ...s,
      ref: t
    })
  })
});
t.default = u