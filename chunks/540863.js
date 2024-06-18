"use strict";
n.d(t, {
  x: function() {
    return a
  }
});
var i = n(735250),
  r = n(470079),
  s = n(15127),
  o = n(512983);
let a = r.forwardRef(function(e, t) {
  var n, a;
  let {
    children: l,
    disabled: u = !1,
    className: _,
    titleClassName: d,
    tag: c = "h5",
    required: E = !1,
    style: I,
    title: T,
    error: h,
    ...S
  } = e, f = r.useId(), N = r.useId(), A = null !== (n = S.titleId) && void 0 !== n ? n : f, m = null != h ? null !== (a = S.errorId) && void 0 !== a ? a : N : void 0;
  return (0, i.jsxs)("div", {
    ref: t,
    className: null != _ ? _ : void 0,
    style: null != I ? I : void 0,
    children: [null != T || null != h ? (0, i.jsx)(o.v, {
      tag: c,
      disabled: u,
      required: E,
      error: h,
      className: d,
      id: A,
      errorId: m,
      ...S,
      children: T
    }) : null, (0, i.jsx)(s.ol, {
      titleId: A,
      errorId: m,
      error: null != h ? h : void 0,
      children: l
    })]
  })
})