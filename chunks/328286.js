"use strict";
n.r(e), n.d(e, {
  ArrowSmallUpIcon: function() {
    return r
  }
});
var o = n("735250");
n("470079");
var s = n("692547"),
  i = n("331595");
let r = t => {
  let {
    width: e = 24,
    height: n = 24,
    color: r = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: a = "",
    ...l
  } = t;
  return (0, o.jsx)("svg", {
    ...(0, i.default)(l),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, o.jsx)("path", {
      fill: "string" == typeof r ? r : r.css,
      d: "M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z",
      className: a
    })
  })
}