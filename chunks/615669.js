"use strict";
n.r(t), n.d(t, {
  PollMessageContextItemTypes: function() {
    return a
  },
  default: function() {
    return d
  }
}), n("653041");
var a, i, l = n("442837"),
  s = n("314897"),
  u = n("496675"),
  r = n("981631");
(i = a || (a = {}))[i.END_EARLY = 0] = "END_EARLY";
let o = [];

function d(e, t) {
  let n = (0, l.useStateFromStores)([s.default], () => s.default.getId()),
    a = (0, l.useStateFromStores)([u.default], () => !t.isPrivate() && u.default.can(r.Permissions.MANAGE_MESSAGES, t), [t]),
    {
      poll: i
    } = e;
  if (!e.isPoll() || null == i) return o;
  let d = [];
  return !i.expiry.isSameOrBefore(Date.now()) && (e.author.id === n || a) && d.push(0), d
}