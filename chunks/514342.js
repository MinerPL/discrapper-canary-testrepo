"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(69649);

function u(e) {
  let {
    children: t,
    "aria-label": n,
    className: s,
    position: u,
    ..._
  } = e, d = r.useRef(null), c = null != n ? n : "string" == typeof t && t;
  return (0, i.jsx)(a.Tooltip, {
    ..._,
    position: null != u ? u : "top",
    delay: 500,
    text: t,
    "aria-label": c,
    children: n => {
      let {
        onMouseEnter: r,
        onMouseLeave: a
      } = n;
      return (0, i.jsx)("div", {
        className: o()(s, l.overflow),
        ref: d,
        "aria-hidden": e["aria-hidden"],
        onMouseEnter: () => {
          let {
            current: e
          } = d;
          null != e && e.offsetWidth < e.scrollWidth && (null == r || r())
        },
        onMouseLeave: a,
        children: t
      })
    }
  })
}