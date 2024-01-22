"use strict";
n.r(t), n.d(t, {
  FormItem: function() {
    return o
  }
});
var i = n("37983"),
  s = n("884691"),
  r = n("516826"),
  a = n("818810");
let o = s.forwardRef(function(e, t) {
  var n, o;
  let {
    children: l,
    disabled: u = !1,
    className: d,
    titleClassName: c,
    tag: f = "h5",
    required: _ = !1,
    style: h,
    title: g,
    error: m,
    ...E
  } = e, p = s.useId(), v = s.useId(), S = null !== (n = E.titleId) && void 0 !== n ? n : p, T = null != m ? null !== (o = E.errorId) && void 0 !== o ? o : v : void 0;
  return (0, i.jsxs)("div", {
    ref: t,
    className: null != d ? d : void 0,
    style: null != h ? h : void 0,
    children: [null != g || null != m ? (0, i.jsx)(a.FormTitle, {
      tag: f,
      disabled: u,
      required: _,
      error: m,
      className: c,
      id: S,
      errorId: T,
      ...E,
      children: g
    }) : null, (0, i.jsx)(r.FormContextProvider, {
      titleId: S,
      errorId: T,
      error: null != m ? m : void 0,
      children: l
    })]
  })
})