"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("735250");
n("470079");
var a = n("934458"),
  l = n("702346"),
  i = n("689938"),
  r = n("781401");

function o(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, s.jsx)(l.default, {
    iconNode: (0, s.jsx)(a.default, {
      className: r.icon
    }),
    timestamp: t.timestamp,
    compact: n,
    children: i.default.Messages.THREAD_STARTER_MESSAGE_NOT_LOADED
  })
}