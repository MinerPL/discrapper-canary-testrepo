"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("550410");

function i(e) {
  let {
    children: t
  } = e, {
    preventIdle: n,
    allowIdle: i
  } = (0, l.usePreventIdle)("popup");
  return a.useEffect(() => (n(), () => i()), [i, n]), (0, s.jsx)(s.Fragment, {
    children: t
  })
}