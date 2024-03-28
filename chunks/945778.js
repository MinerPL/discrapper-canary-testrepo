"use strict";
a.r(t), a.d(t, {
  default: function() {
    return s
  }
});
var r = a("735250");
a("470079");
var n = a("238246"),
  i = a("153731"),
  l = a("689938");

function s(e) {
  let {
    windowKey: t
  } = e;
  return (0, r.jsx)(n.default, {
    withTitleBar: !0,
    windowKey: t,
    title: l.default.Messages.RTC_DEBUG_POPOUT_WINDOW_TITLE,
    children: (0, r.jsx)(i.default, {})
  })
}