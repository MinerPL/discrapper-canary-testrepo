"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("133403"),
  s = n("164527");

function a(e) {
  let {
    hasSetEmoji: t,
    onClick: n,
    children: a
  } = e, [o, u] = r.useState(!1);
  return (0, i.jsxs)("div", {
    className: s.container,
    onMouseEnter: () => {
      if (t) {
        u(!0);
        return
      }
      u(!1)
    },
    onMouseLeave: () => {
      u(!1)
    },
    children: [a, t && o && (0, i.jsx)(l.default, {
      onClick: n,
      className: s.removeButton
    })]
  })
}