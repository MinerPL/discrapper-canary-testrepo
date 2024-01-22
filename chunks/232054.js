"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("203288"),
  s = n("590260"),
  r = n("677315"),
  a = n("875229"),
  o = n("466818"),
  l = n("471706"),
  u = n("290886"),
  d = n("903724"),
  c = n("120252"),
  f = n("42203"),
  _ = n("305961"),
  h = n("449008"),
  g = n("361572"),
  m = n("49111"),
  E = n("724210");
async function p(e) {
  let {
    guildId: t,
    channelId: n
  } = e, p = _.default.getGuild(t);
  if (null == p && t !== m.ME) return !1;
  if (null == n) return !0;
  if ((0, E.isStaticChannelRoute)(n)) switch (n) {
    case E.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
      return (0, d.areRoleSubscriptionsVisibleInGuild)(t);
    case E.StaticChannelRoute.GUILD_SHOP:
      return (0, s.isGuildShopVisibleInGuild)(p);
    case E.StaticChannelRoute.MEMBER_APPLICATIONS:
      return (0, a.canReviewGuildMemberApplications)(t);
    case E.StaticChannelRoute.GUILD_HOME:
      return (0, r.canSeeGuildHome)(t) || (0, u.canSeeOnboardingHome)(t);
    case E.StaticChannelRoute.CHANNEL_BROWSER:
      return null != p && p.hasFeature(m.GuildFeatures.COMMUNITY);
    case E.StaticChannelRoute.GUILD_ONBOARDING:
      return l.default.shouldShowOnboarding(t);
    case E.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
      return null != p && p.hasFeature(m.GuildFeatures.COMMUNITY);
    case E.StaticChannelRoute.MEMBER_SAFETY:
      return (0, o.canAccessMemberSafetyPage)(t);
    default:
      (0, h.assertNever)(n)
  }
  let v = f.default.getChannel(n);
  return (null != v || (await c.default.loadThread(n), null != (v = f.default.getChannel(n)))) && ((0, g.canViewChannel)(v) || i.default.isChannelGatedAndVisible(t, n))
}