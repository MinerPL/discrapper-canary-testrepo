"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var i = n("481060"),
  l = n("665906"),
  s = n("934458"),
  u = n("996861"),
  r = n("689938");

function o(e, t) {
  return (0, l.useCanStartPublicThread)(t, e) ? (0, a.jsx)(i.MenuItem, {
    id: "thread",
    label: r.default.Messages.CREATE_THREAD,
    icon: s.default,
    action: () => {
      (0, u.createThread)(t, e)
    }
  }) : null
}