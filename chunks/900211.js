"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("347469"),
  i = n("437695");

function r(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: r,
    minHeight: o,
    maxHeight: u
  } = e, [d, c] = l.useState(null);
  l.useEffect(() => {
    var e, n;
    c(null !== (n = null === (e = t.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : null)
  }, [t]);
  let f = (0, s.default)({
    initialElementDimension: d,
    minDimension: o,
    maxDimension: u,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: r,
    orientation: s.ResizeOrientation.VERTICAL_BOTTOM
  });
  return (0, a.jsx)("div", {
    onMouseDown: f,
    className: i.resizeHandle
  })
}