"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("122611"),
  i = n("254614");

function r(e) {
  let {
    guild: t,
    setHasSubheader: n
  } = e, r = s.useRef(null);
  return s.useLayoutEffect(() => {
    let e = r.current;
    null != e && n(e.childNodes.length > 0)
  }), (0, a.jsx)("div", {
    className: i.container,
    ref: r,
    children: (0, a.jsx)(l.default, {
      guild: t
    })
  })
}