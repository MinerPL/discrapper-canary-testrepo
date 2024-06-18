"use strict";
var i = n(735250),
  r = n(470079),
  s = n(374470),
  o = n(442837),
  a = n(607070),
  l = n(768760);
let u = e => {
  let {
    externalRef: t,
    autoPlay: n,
    playOnHover: u,
    responsive: _,
    mediaLayoutType: d,
    ...c
  } = e, E = (0, o.e7)([a.Z], () => a.Z.useReducedMotion), I = r.useRef(null);

  function T() {
    var e;
    u && (null == I || null === (e = I.current) || void 0 === e || e.play())
  }

  function h() {
    var e;
    u && (null == I || null === (e = I.current) || void 0 === e || e.pause())
  }
  return r.useLayoutEffect(() => () => {
    let {
      current: e
    } = I;
    null != e && function(e) {
      e.removeAttribute("src"), Array.from(e.children).forEach(e => {
        (0, s.k)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, s.k)(e, HTMLImageElement) && e.removeAttribute("src")
      });
      try {
        e.load()
      } catch (e) {}
    }(e)
  }, []), r.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(I.current)) : null != t && (t.current = I.current), () => {
    "function" == typeof t ? t(null) : null != t && (t.current = null)
  }), [t, I]), (0, i.jsx)("video", {
    ref: I,
    autoPlay: !E && !u && n,
    onMouseEnter: T,
    onMouseLeave: h,
    onFocus: T,
    onBlur: h,
    style: d === l.hV.MOSAIC ? {
      width: "100%",
      height: "100%",
      maxHeight: "inherit",
      objectFit: "cover"
    } : _ ? function() {
      return {
        maxWidth: c.width,
        maxHeight: c.height,
        width: "100%",
        height: "100%"
      }
    }() : {},
    ...c
  })
};
t.Z = r.forwardRef((e, t) => (0, i.jsx)(u, {
  ...e,
  externalRef: t
}))