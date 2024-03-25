"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var s = n("943722"),
  l = n("158998"),
  i = n("210630"),
  r = function(e) {
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