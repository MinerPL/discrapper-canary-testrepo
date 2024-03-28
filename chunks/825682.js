"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("788307"),
  l = n("51144"),
  i = n("207168");
t.default = function(e) {
  let {
    hovered: t,
    activities: n,
    applicationStream: r,
    status: o,
    user: u
  } = e;
  return n.length > 0 ? (0, a.jsx)(s.default, {
    className: i.activity,
    textClassName: i.text,
    emojiClassName: i.customStatusEmoji,
    activities: n,
    applicationStream: r,
    animate: t,
    user: u
  }) : (0, a.jsx)("div", {
    className: i.text,
    children: (0, l.humanizeStatus)(o)
  })
}