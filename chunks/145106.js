"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("133403"),
  o = n("49622");

function s(e) {
  let {
    hasSetEmoji: t,
    onClick: n,
    children: s
  } = e, [a, u] = r.useState(!1);
  return (0, i.jsxs)("div", {
    className: o.container,
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
    children: [s, t && a && (0, i.jsx)(l.default, {
      onClick: n,
      className: o.removeButton
    })]
  })
}