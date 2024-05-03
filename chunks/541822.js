"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  l = n("557533"),
  s = n.n(l),
  a = n("349361"),
  o = n("746834");

function d(e) {
  let {
    children: t,
    gradientClassName: n,
    ...l
  } = e, d = r.useRef(null), [c, u] = r.useState(!0), f = () => {
    var e;
    (null === (e = d.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? u(!1) : u(!0)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.AdvancedScrollerThin, {
      ...l,
      fade: !0,
      ref: e => {
        null != e && (d.current = e, f())
      },
      onScroll: f,
      children: t
    }), (0, i.jsx)("div", {
      className: s()(o.containerScrollGradient, n),
      "data-shown": c
    })]
  })
}