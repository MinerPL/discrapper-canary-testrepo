"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  u = n("709945");

function o(e) {
  let {
    children: t,
    "aria-label": n,
    className: s,
    position: o
  } = e, d = a.useRef(null), c = null != n ? n : "string" == typeof t && t;
  return (0, l.jsx)(r.Tooltip, {
    position: null != o ? o : "top",
    delay: 500,
    text: t,
    "aria-label": c,
    children: n => {
      let {
        onMouseEnter: a,
        onMouseLeave: r
      } = n;
      return (0, l.jsx)("div", {
        className: i(s, u.overflow),
        ref: d,
        "aria-hidden": e["aria-hidden"],
        onMouseEnter: () => {
          let {
            current: e
          } = d;
          null != e && e.offsetWidth < e.scrollWidth && (null == a || a())
        },
        onMouseLeave: r,
        children: t
      })
    }
  })
}