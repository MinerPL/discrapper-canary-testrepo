"use strict";
t.r(r), t.d(r, {
  default: function() {
    return d
  }
}), t("222007");
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  o = t.n(i),
  l = t("594203"),
  s = t("779274");

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
      className: o(s.subPanelContent, t),
      children: r
    })]
  })
}