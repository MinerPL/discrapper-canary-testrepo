"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
});
var n = s("37983"),
  l = s("884691");
let o = e => t => {
  null == t || t.stopPropagation(), e()
};

function a(e) {
  let {
    onClick: t,
    className: s,
    children: a
  } = e, r = l.useRef(null);
  return (0, n.jsx)("div", {
    onClick: t,
    ref: r,
    className: s,
    children: a({
      areaRef: r,
      handleStopPropagation: o
    })
  })
}