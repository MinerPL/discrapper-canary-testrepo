"use strict";
n.r(t), n.d(t, {
  canToggleCommunicationDisableOnUser: function() {
    return s
  },
  default: function() {
    return d
  }
}), n("222007");
var l = n("446674"),
  u = n("305961"),
  i = n("957255"),
  r = n("697218"),
  o = n("991170"),
  a = n("49111");

function s(e, t) {
  let [n, l, s] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.default, u.default, i.default], d = l.getGuild(e), c = n.getUser(t);
  if (null == d || null == c || c.isNonUserBot()) return !1;
  let f = d.isOwner(c) || o.can({
    permission: a.Permissions.ADMINISTRATOR,
    user: c,
    context: d
  });
  return !f && s.canManageUser(a.Permissions.MODERATE_MEMBERS, c, d)
}

function d(e, t) {
  return (0, l.useStateFromStores)([r.default, u.default, i.default], () => s(e, t, [r.default, u.default, i.default]), [e, t])
}