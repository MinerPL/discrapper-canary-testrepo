var n = t(442837),
  l = t(674525),
  s = t(689938);
i.Z = {
  title: () => s.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
  description: () => s.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_FINISH_SETTING_UP_DESCRIPTION,
  canCreateGuild: !1,
  useIsGuildSupported: () => (0, n.e7)([l.Z], () => e => l.Z.getEligibleGuildsForNagActivate().includes(e.id), [])
};