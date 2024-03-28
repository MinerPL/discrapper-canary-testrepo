"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("653041");
var l = n("399606"),
  a = n("897345"),
  s = n("859802"),
  i = n("697379"),
  r = n("241559"),
  o = n("563534"),
  u = n("931261"),
  d = n("460347"),
  c = n("994592"),
  f = n("265418"),
  h = n("443063"),
  C = n("981631");

function p(e) {
  let t = (0, s.useGuildHomeExperiment)(e),
    n = (0, f.default)(e),
    p = (0, i.useCanReviewGuildMemberApplications)(e.id),
    m = (0, c.useShowRoleSubscriptionsInChannelList)(e.id),
    g = (0, a.useGuildShopVisibleInGuild)(e),
    E = (0, u.useCanSeeOnboardingHome)(e.id),
    S = (0, l.useStateFromStores)([o.default], () => o.default.getNewMemberActions(e.id), [e.id]),
    _ = (0, d.default)(e.id),
    I = (0, r.useCanAccessMemberSafetyPage)(e.id),
    N = [],
    T = e.hasFeature(C.GuildFeatures.HUB),
    A = e.hasFeature(C.GuildFeatures.COMMUNITY),
    L = e.hasFeature(C.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  return T && N.push(h.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS), E && _ && null != S && S.length > 0 ? N.push(h.ChannelListCommunityRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && N.push(h.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR), !T && (t || E) && N.push(h.ChannelListCommunityRow.GUILD_HOME), n && N.push(h.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS), !T && A && N.push(h.ChannelListCommunityRow.CHANNELS_AND_ROLES), m && N.push(h.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS), g && N.push(h.ChannelListCommunityRow.GUILD_SHOP), p && N.push(h.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS), I && (A || L) && N.push(h.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY), N
}