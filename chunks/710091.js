var n = t(442837),
  l = t(223892),
  s = t(738774),
  a = t(353926),
  d = t(923726),
  u = t(144507),
  r = t(689938);
i.Z = {
  title: () => r.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
  description: () => r.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_ONBOARDING_DESCRIPTION,
  canCreateGuild: !1,
  useIsGuildSupported: () => (0, n.e7)([a.Z], () => (e, i) => e.isOwner(i) && (0, u.X$)({
guild: e,
isOwner: !0,
canManageGuildRoleSubscriptions: !0,
isMonetizationWaitlistEnabledForGuild: (0, l.mG)(e.id),
isGuildEligibleForRoleSubscriptions: (0, d.kT)(e.id),
isExpeditedMonetizationOnboardingGuild: (0, l.Rw)(e),
isUserInCreatorMonetizationEligibleCountry: (0, l.DB)(),
shouldRestrictUpdatingRoleSubscriptionSettings: (0, s.cu)(e.id)
  }), [], n.pF)
};