"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("735250"),
  i = n("470079"),
  l = n("778947"),
  s = n("901461");
let o = i.memo(l.default);

function u(e) {
  let {
    message: t,
    channel: n,
    author: i,
    compact: l,
    animateAvatar: u,
    guildId: a,
    isGroupStart: c = !0,
    roleIcon: d,
    hideTimestamp: f
  } = e;
  return !(0, s.default)(t) && (c || l) ? (0, r.jsx)(o, {
    message: t,
    channel: n,
    author: i,
    guildId: a,
    compact: l,
    animate: u,
    roleIcon: d,
    hideTimestamp: f
  }) : void 0
}