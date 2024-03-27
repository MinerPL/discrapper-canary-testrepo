"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("37983");
n("884691");
var a = n("201131"),
  l = n("292200"),
  i = n("119715");

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