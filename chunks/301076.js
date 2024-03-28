"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var l = n("592471"),
  s = n("871499");

function i(e) {
  let t, {
      isActivityActive: n,
      onMouseEnter: i,
      onMouseLeave: r,
      onClick: o,
      ...u
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
      null == o || o(e), c.onClick()
    },
    ...u
  })
}