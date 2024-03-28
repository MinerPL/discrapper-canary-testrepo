"use strict";
i.r(t);
var l = i("442837"),
  s = i("674525"),
  u = i("689938");
t.default = {
  title: () => u.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
  description: () => u.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_FINISH_SETTING_UP_DESCRIPTION,
  canCreateGuild: !1,
  useIsGuildSupported: () => (0, l.useStateFromStores)([s.default], () => e => s.default.getEligibleGuildsForNagActivate().includes(e.id), [])
}