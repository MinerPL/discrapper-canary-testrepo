"use strict";
i.r(t);
var l = i("442837"),
  s = i("223892"),
  u = i("738774"),
  a = i("828695"),
  d = i("923726"),
  n = i("144507"),
  r = i("689938");
t.default = {
  title: () => r.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
  description: () => r.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_ONBOARDING_DESCRIPTION,
  canCreateGuild: !1,
  useIsGuildSupported: () => (0, l.useStateFromStores)([a.default], () => (e, t) => e.isOwner(t) && (0, n.canSeeGuildRoleSubscriptionSettings)({
    guild: e,
    isOwner: !0,
    canManageGuildRoleSubscriptions: !0,
    isMonetizationWaitlistEnabledForGuild: (0, s.isMonetizationWaitlistEnabledForGuild)(e.id),
    isGuildEligibleForRoleSubscriptions: (0, d.isGuildEligibleForRoleSubscriptions)(e.id),
    isExpeditedMonetizationOnboardingGuild: (0, s.isExpeditedMonetizationOnboardingGuild)(e),
    isUserInCreatorMonetizationEligibleCountry: (0, s.isUserInCreatorMonetizationEligibleCountry)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, u.shouldRestrictUpdatingCreatorMonetizationSettings)(e.id)
  }), [], l.statesWillNeverBeEqual)
}