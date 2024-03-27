"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("93332"),
  s = n("913491");
let r = a.memo(l.default);

function o(e) {
  let {
    message: t,
    channel: n,
    author: a,
    compact: l,
    animateAvatar: o,
    guildId: u,
    isGroupStart: c = !0,
    roleIcon: d,
    hideTimestamp: f
  } = e;
  return !(0, s.default)(t) && (c || l) ? (0, i.jsx)(r, {
    message: t,
    channel: n,
    author: a,
    guildId: u,
    compact: l,
    animate: o,
    roleIcon: d,
    hideTimestamp: f
  }) : void 0
}