"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("93332"),
  s = n("913491");
let u = r.memo(l.default);

function o(e) {
  let {
    message: t,
    channel: n,
    author: r,
    compact: l,
    animateAvatar: o,
    guildId: a,
    isGroupStart: d = !0,
    roleIcon: c,
    hideTimestamp: f
  } = e;
  return !(0, s.default)(t) && (d || l) ? (0, i.jsx)(u, {
    message: t,
    channel: n,
    author: r,
    guildId: a,
    compact: l,
    animate: o,
    roleIcon: c,
    hideTimestamp: f
  }) : void 0
}