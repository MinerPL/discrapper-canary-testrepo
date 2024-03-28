"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var n = s("735250"),
  l = s("470079");
let a = e => t => {
  null == t || t.stopPropagation(), e()
};

function o(e) {
  let {
    onClick: t,
    className: s,
    children: o
  } = e, i = l.useRef(null);
  return (0, n.jsx)("div", {
    onClick: t,
    ref: i,
    className: s,
    children: o({
      areaRef: i,
      handleStopPropagation: a
    })
  })
}