"use strict";
t.r(r), t.d(r, {
  default: function() {
    return d
  }
}), t("47120");
var a = t("735250"),
  n = t("470079"),
  i = t("803997"),
  o = t.n(i),
  l = t("347469"),
  s = t("923619");

function c(e) {
  let {
    resizableNode: r,
    minHeight: t,
    onResize: n
  } = e, i = (0, l.default)({
    minDimension: t,
    resizableDomNodeRef: r,
    onElementResize: n,
    orientation: l.ResizeOrientation.VERTICAL_TOP,
    usePointerEvents: !0
  });
  return (0, a.jsx)("div", {
    onPointerDown: i,
    className: s.resizeHandle
  })
}

function d(e) {
  let {
    children: r,
    className: t,
    initialHeight: i,
    minHeight: l
  } = e, d = n.useRef(null), [u, h] = n.useState(i);
  return (0, a.jsxs)("div", {
    ref: d,
    className: s.container,
    style: {
      minHeight: l,
      height: u
    },
    children: [(0, a.jsx)(c, {
      resizableNode: d,
      minHeight: l,
      onResize: h
    }), (0, a.jsx)("div", {
      className: o()(s.subPanelContent, t),
      children: r
    })]
  })
}