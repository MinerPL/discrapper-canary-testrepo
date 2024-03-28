"use strict";
i.r(t);
var l = i("442837"),
  s = i("828695"),
  u = i("496675"),
  a = i("923726"),
  d = i("981631"),
  n = i("689938");
t.default = {
  title: () => n.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_TITLE,
  description: () => n.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_DEEPLINK_MODAL_DESCRIPTION,
  canCreateGuild: !1,
  useIsGuildSupported: () => (0, l.useStateFromStores)([s.default, u.default], () => e => e.hasFeature(d.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && !e.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) && u.default.can(d.Permissions.ADMINISTRATOR, e) && (0, a.isUserEligibleForTierTemplates)() && (0, a.isGuildEligibleForTierTemplates)(e.id), [])
}