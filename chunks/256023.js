"use strict";
n.r(t), n.d(t, {
  createScroller: function() {
    return u
  }
}), n("70102");
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("718776"),
  l = n("462977");

function u(e, t) {
  let n = (0, l.getScrollbarSpecs)(e);
  return s.forwardRef(function(r, u) {
    let {
      children: d,
      className: c,
      dir: f = "ltr",
      orientation: _ = "vertical",
      paddingFix: h = !0,
      fade: g = !1,
      onScroll: m,
      style: E,
      ...p
    } = r, v = s.useRef(null), S = (0, l.usePaddingFixes)({
      paddingFix: h,
      orientation: _,
      dir: f,
      className: c,
      scrollerRef: v,
      specs: n
    });
    return (0, i.jsx)("div", {
      ref: e => {
        "function" == typeof u ? u(e) : null != u && (u.current = e), v.current = e
      },
      className: a(c, {
        [e]: !0,
        [t]: g
      }),
      style: (0, l.getMergedOrientationStyles)(E, _),
      dir: f,
      ...p,
      children: (0, i.jsxs)(o.FocusRingScope, {
        containerRef: v,
        children: [d, S]
      })
    })
  })
}