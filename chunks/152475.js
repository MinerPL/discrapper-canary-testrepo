"use strict";
n.r(t), n.d(t, {
  canEveryoneRoleViewEvent: function() {
    return v
  },
  isGuildEventInvitable: function() {
    return g
  },
  default: function() {
    return S
  }
}), n("222007");
var l = n("446674"),
  u = n("242757"),
  i = n("834052"),
  a = n("42203"),
  r = n("923959"),
  d = n("305961"),
  s = n("957255"),
  o = n("991170"),
  c = n("398604"),
  f = n("745049"),
  E = n("49111");

function v(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default];
  let {
    entityType: l,
    channelId: u
  } = "entity_type" in (t = e) ? {
    entityType: t.entity_type,
    channelId: t.channel_id
  } : t, i = l === f.GuildScheduledEventEntityTypes.EXTERNAL;
  if (i) return !0;
  let r = n.getChannel(u);
  return null != r && o.canEveryoneRole(E.Permissions.VIEW_CHANNEL, r)
}

function g(e) {
  let [t, n, l, o] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, a.default, d.default, i.default];
  if ((0, c.isGuildEventEnded)(e)) return !1;
  let {
    guild_id: E,
    channel_id: g
  } = e, S = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL, h = S ? t.getDefaultChannel(e.guild_id) : n.getChannel(g), N = l.getGuild(E), _ = o.getStageInstanceByChannel(g);
  return !!(0, u.canViewInviteModal)(s.default, N, h, _) && null != h && v(e, [n])
}

function S(e) {
  return (0, l.useStateFromStores)([r.default, a.default, d.default, i.default], () => g(e, [r.default, a.default, d.default, i.default]), [e])
}