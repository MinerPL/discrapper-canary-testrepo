"use strict";
t.r(n), t.d(n, {
  canEveryoneRoleViewEvent: function() {
    return h
  },
  default: function() {
    return x
  },
  isGuildEventInvitable: function() {
    return m
  }
}), t("47120");
var l = t("442837"),
  i = t("159300"),
  a = t("427679"),
  s = t("592125"),
  r = t("984933"),
  u = t("430824"),
  d = t("496675"),
  c = t("700785"),
  o = t("924301"),
  f = t("765305"),
  v = t("981631");

function h(e) {
  var n;
  let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default];
  let {
    entityType: l,
    channelId: i
  } = "entity_type" in (n = e) ? {
    entityType: n.entity_type,
    channelId: n.channel_id
  } : n;
  if (l === f.GuildScheduledEventEntityTypes.EXTERNAL) return !0;
  let a = t.getChannel(i);
  return null != a && c.canEveryoneRole(v.Permissions.VIEW_CHANNEL, a)
}

function m(e) {
  let [n, t, l, c] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, s.default, u.default, a.default];
  if ((0, o.isGuildEventEnded)(e)) return !1;
  let {
    guild_id: v,
    channel_id: m
  } = e, x = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(m), C = l.getGuild(v), E = c.getStageInstanceByChannel(m);
  return !!(0, i.canViewInviteModal)(d.default, C, x, E) && null != x && h(e, [t])
}

function x(e) {
  return (0, l.useStateFromStores)([r.default, s.default, u.default, a.default], () => m(e, [r.default, s.default, u.default, a.default]), [e])
}