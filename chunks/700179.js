"use strict";
n.r(t), n.d(t, {
  canToggleCommunicationDisableOnUser: function() {
    return d
  },
  default: function() {
    return s
  }
}), n("222007");
var l = n("446674"),
  i = n("305961"),
  u = n("957255"),
  r = n("697218"),
  o = n("991170"),
  a = n("49111");

function d(e, t) {
  let [n, l, d] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.default, i.default, u.default], s = l.getGuild(e), c = n.getUser(t);
  if (null == s || null == c || c.isNonUserBot()) return !1;
  let f = s.isOwner(c) || o.can({
    permission: a.Permissions.ADMINISTRATOR,
    user: c,
    context: s
  });
  return !f && d.canManageUser(a.Permissions.MODERATE_MEMBERS, c, s)
}

function s(e, t) {
  return (0, l.useStateFromStores)([r.default, i.default, u.default], () => d(e, t, [r.default, i.default, u.default]), [e, t])
}