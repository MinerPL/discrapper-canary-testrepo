"use strict";
n.r(l), n.d(l, {
  default: function() {
    return s
  }
}), n("47120");
var t = n("735250"),
  a = n("470079"),
  o = n("225433"),
  i = n("405885");

function s(e) {
  let {
    hasSetEmoji: l,
    onClick: n,
    children: s
  } = e, [u, d] = a.useState(!1);
  return (0, t.jsxs)("div", {
    className: i.container,
    onMouseEnter: () => {
      if (l) {
        d(!0);
        return
      }
      d(!1)
    },
    onMouseLeave: () => {
      d(!1)
    },
    children: [s, l && u && (0, t.jsx)(o.default, {
      onClick: n,
      className: i.removeButton
    })]
  })
}