"use strict";
n.r(t), n.d(t, {
  PollMessageContextItemTypes: function() {
    return a
  },
  default: function() {
    return r
  }
}), n("653041");
var a, i, l = n("442837"),
  s = n("314897");
(i = a || (a = {}))[i.END_EARLY = 0] = "END_EARLY";
let u = [];

function r(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getId()),
    {
      poll: n
    } = e;
  if (!e.isPoll() || null == n) return u;
  let a = [];
  return !n.expiry.isSameOrBefore(Date.now()) && e.author.id === t && a.push(0), a
}