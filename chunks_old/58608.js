"use strict";
l.r(t), l.d(t, {
  default: function() {
    return d
  }
});
var a = l("37983"),
  i = l("884691"),
  n = l("118810"),
  s = l("446674"),
  r = l("206230"),
  o = l("719347");
let u = e => {
  let {
    externalRef: t,
    autoPlay: l,
    playOnHover: u,
    responsive: d,
    mediaLayoutType: c,
    ...E
  } = e, I = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), _ = i.useRef(null);

  function f() {
    var e;
    u && (null == _ || null === (e = _.current) || void 0 === e || e.play())
  }

  function T() {
    var e;
    u && (null == _ || null === (e = _.current) || void 0 === e || e.pause())
  }
  return i.useLayoutEffect(() => () => {
    let {
      current: e
    } = _;
    null != e && function(e) {
      e.removeAttribute("src"), Array.from(e.children).forEach(e => {
        (0, n.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, n.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
      });
      try {
        e.load()
      } catch (e) {}
    }(e)
  }, []), i.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(_.current)) : null != t && (t.current = _.current), () => {
    "function" == typeof t ? t(null) : null != t && (t.current = null)
  }), [t, _]), (0, a.jsx)("video", {
    ref: _,
    autoPlay: !I && !u && l,
    onMouseEnter: f,
    onMouseLeave: T,
    onFocus: f,
    onBlur: T,
    style: c === o.MediaLayoutType.MOSAIC ? {
      width: "100%",
      height: "100%",
      maxHeight: "inherit",
      objectFit: "cover"
    } : d ? function() {
      return {
        maxWidth: E.width,
        maxHeight: E.height,
        width: "100%",
        height: "100%"
      }
    }() : {},
    ...E
  })
};
var d = i.forwardRef((e, t) => (0, a.jsx)(u, {
  ...e,
  externalRef: t
}))