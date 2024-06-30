var n = t(442837), l = t(353926), s = t(496675), a = t(923726), d = t(981631), u = t(689938);
i.Z = {
    title: () => u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_TITLE,
    description: () => u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_DEEPLINK_MODAL_DESCRIPTION,
    canCreateGuild: !1,
    useIsGuildSupported: () => (0, n.e7)([
        l.Z,
        s.Z
    ], () => e => e.hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && !e.hasFeature(d.oNc.CREATOR_MONETIZABLE_RESTRICTED) && s.Z.can(d.Plq.ADMINISTRATOR, e) && (0, a.$F)() && (0, a.hQ)(e.id), [])
};
