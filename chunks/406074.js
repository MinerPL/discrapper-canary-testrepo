"use strict";
n.r(t), n.d(t, {
  useSubscriptionListingsForChannel: function() {
    return c
  }
});
var a = n("149765"),
  l = n("442837"),
  s = n("160404"),
  i = n("592125"),
  r = n("430824"),
  o = n("584825"),
  u = n("790285"),
  d = n("981631");

function c(e) {
  let {
    guildId: t,
    channelId: n
  } = e, c = (0, o.useSubscriptionListingsForGuild)(t);
  return (0, l.useStateFromStoresArray)([i.default, r.default, s.default], () => {
    let e = i.default.getChannel(n),
      l = r.default.getGuild(t),
      o = s.default.isViewingServerShop(t);
    return null != l && null != e ? c.filter(t => (function(e, t, n) {
      let {
        isPreviewingRoles: l = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (!(l || e.published)) return !1;
      let s = n.permissionOverwrites[e.role_id];
      if ((0, u.isChannelAccessGrantedBy)(n, s)) return !0;
      let i = r.default.getRole(t.id, t.getEveryoneRoleId()),
        o = null != i && !a.has(i.permissions, d.Permissions.VIEW_CHANNEL),
        c = (0, u.isChannelAccessDeniedBy)(n, n.permissionOverwrites[t.id]),
        f = r.default.getRole(t.id, e.role_id);
      return o && !c && null != f && (0, u.isAllChannelsRole)(f) && !(0, u.isChannelAccessDeniedBy)(n, s)
    })(t, l, e, {
      isPreviewingRoles: o
    })) : []
  }, [t, n, c])
}