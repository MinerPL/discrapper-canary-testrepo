"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("434650"),
  o = n("393903"),
  u = n("979264"),
  d = n("267461");
t.default = l.memo(function(e) {
  let {
    children: t,
    isOverlay: n,
    contextGuildId: s,
    ...c
  } = e, f = l.useRef(null), [h, m] = l.useState({
    maskImage: "none"
  }), p = l.useCallback(() => {
    var e, t;
    if (n) {
      m({
        maskImage: "none"
      });
      return
    }
    let a = null === (e = E.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
      l = null === (t = f.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
    if (null == a || null == l) {
      m({
        maskImage: "none"
      });
      return
    }
    let s = l.right - a.right,
      i = l.width - s;
    if (i > l.width) {
      m({
        maskImage: "none"
      });
      return
    }
    m({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(i, "px)")
    })
  }, []), E = (0, o.useResizeObserver)(p), C = (0, u.useShouldDisplayClanTag)(c.userId, s);
  l.useEffect(() => {
    null != E.current && p()
  }, [C]);
  let g = (0, r.useIsVisible)(p);
  return (0, a.jsxs)("div", {
    className: i()(d.container, n && d.isOverlayContainer),
    ref: E,
    children: [(0, a.jsx)("div", {
      className: d.usernameContainer,
      children: t
    }), (0, a.jsx)("div", {
      className: d.chipletParent,
      ref: g,
      children: (0, a.jsx)("span", {
        className: i()(d.chipletContainer, !C && n && d.noPadding),
        ref: f,
        style: h,
        children: (0, a.jsx)(u.default, {
          ...c,
          contextGuildId: s,
          className: i()(c.className, n && d.isOverlayTag)
        })
      })
    })]
  })
})