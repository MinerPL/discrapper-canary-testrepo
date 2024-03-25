"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("446674"),
  s = n("305961"),
  l = n("858560"),
  i = n("808388"),
  r = n("65722"),
  o = n("49111");

function u(e) {
  let t = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(e)),
    n = (0, i.useGuildEligibleForTierTemplates)(e),
    u = (0, i.useUserEligibleForTierTemplates)(),
    d = (null == t ? void 0 : t.hasFeature(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === !0 && (null == t ? void 0 : t.hasFeature(o.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !1,
    c = (0, r.canManageGuildRoleSubscriptions)(t);
  return d && u && c && l.GuildRoleSubscriptionsTierTemplatesExperiment.trackExposure({
    guildId: e,
    location: "ca30d9_1"
  }), d && u && c && n
}