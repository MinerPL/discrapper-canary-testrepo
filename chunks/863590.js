"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("37983");
n("884691");
var l = n("84972"),
  s = n("981913");

function i(e) {
  let t, {
      isActivityActive: n,
      onMouseEnter: i,
      onMouseLeave: r,
      onClick: u,
      ...o
    } = e,
    {
      Component: d,
      events: c
    } = (0, l.useActivityLottie)();
  return (0, a.jsx)(s.CenterControlButton, {
    isActive: n,
    color: t,
    iconComponent: d,
    onMouseEnter: e => {
      null == i || i(e), c.onMouseEnter()
    },
    onMouseLeave: e => {
      null == r || r(e), c.onMouseLeave()
    },
    onClick: e => {
      null == u || u(e), c.onClick()
    },
    ...o
  })
}