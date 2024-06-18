"use strict";
n.d(t, {
  I: function() {
    return u
  }
});
var i = n(735250),
  r = n(470079),
  s = n(803997),
  o = n.n(s),
  a = n(789978),
  l = n(780900);

function u(e, t, n) {
  let s = (0, l.G6)(e);
  return r.forwardRef(function(u, _) {
    let {
      children: d,
      className: c,
      dir: E = "ltr",
      orientation: I = "vertical",
      fade: T = !1,
      customTheme: h = !1,
      paddingFix: S = !0,
      style: f,
      ...N
    } = u, {
      scrollerRef: A,
      getScrollerState: m
    } = (0, l.Ke)(), O = (0, l.t2)(A, I);
    r.useImperativeHandle(_, () => ({
      getScrollerNode: () => A.current,
      getScrollerState: m,
      ...(0, l.Ue)(A, m, O, I)
    }), [A, m, I, O]);
    let R = (0, l.tT)({
      paddingFix: S,
      orientation: I,
      dir: E,
      className: c,
      scrollerRef: A,
      specs: s
    });
    return (0, i.jsx)("div", {
      ref: A,
      className: o()(c, {
        [e]: !0,
        [t]: T,
        [n]: h
      }),
      style: (0, l.uT)(f, I),
      dir: E,
      ...N,
      children: (0, i.jsxs)(a.Jc, {
        containerRef: A,
        children: [d, R]
      })
    })
  })
}