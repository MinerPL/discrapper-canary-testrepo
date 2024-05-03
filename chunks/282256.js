"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("434650"),
  i = n("393903"),
  r = n("979264"),
  o = n("915432");
t.default = l.memo(function(e) {
  let {
    children: t,
    ...n
  } = e, u = l.useRef(null), [d, c] = l.useState({
    maskImage: "none"
  }), f = l.useCallback(() => {
    var e, t;
    let n = null === (e = h.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
      a = null === (t = u.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
    if (null == n || null == a) {
      c({
        maskImage: "none"
      });
      return
    }
    let l = a.right - n.right,
      s = a.width - l;
    if (s > a.width) {
      c({
        maskImage: "none"
      });
      return
    }
    c({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(s, "px)")
    })
  }, []), h = (0, i.useResizeObserver)(f), m = (0, r.useShouldDisplayClanTag)(n.userId);
  l.useEffect(() => {
    null != h.current && f()
  }, [m]);
  let p = (0, s.useIsVisible)(f);
  return (0, a.jsxs)("div", {
    className: o.container,
    ref: h,
    children: [(0, a.jsx)("div", {
      className: o.usernameContainer,
      children: t
    }), (0, a.jsx)("div", {
      className: o.chipletParent,
      ref: p,
      children: (0, a.jsx)("span", {
        className: o.chipletContainer,
        ref: u,
        style: d,
        children: (0, a.jsx)(r.default, {
          ...n
        })
      })
    })]
  })
})