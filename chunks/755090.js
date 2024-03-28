"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("735250");
n("470079");
var a = n("825829"),
  l = n("223"),
  i = n("102250");

function r(e) {
  let {
    message: t,
    ...n
  } = e;
  return (0, a.isAutomodNotification)(t) ? (0, s.jsx)(i.default, {
    message: t,
    ...n
  }) : (0, s.jsx)(l.default, {
    message: t,
    ...n
  })
}