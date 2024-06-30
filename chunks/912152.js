var n = s(735250);
s(470079);
var a = s(481060), i = s(230711), r = s(63063), o = s(74538), l = s(937615), c = s(981631), d = s(474936), _ = s(689938), E = s(202354);
t.Z = function (e) {
    let {
            hasAppliedGuildBoosts: t,
            isUserPremiumTier2: s,
            hasGuildAffinitiesOrInGuild: u,
            subscriptionIsPausedOrPausePending: T
        } = e, {
            subtitle: I,
            flavor: S
        } = function (e) {
            let {
                hasAppliedGuildBoosts: t,
                isUserPremiumTier2: s,
                hasGuildAffinitiesOrInGuild: n,
                subscriptionIsPausedOrPausePending: a
            } = e;
            if (a)
                return { flavor: _.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION_WITH_LINK.format({ onClick: () => i.Z.open(c.oAB.SUBSCRIPTIONS) }) };
            if (!n)
                return { subtitle: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_JOINED_SERVER_SUBTITLE };
            if (t)
                return {
                    subtitle: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_ACTIVE_BOOSTS,
                    flavor: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_ACTIVE_BOOSTS_FLAVOR.format({ helpdeskArticle: r.Z.getArticleURL(c.BhN.GUILD_SUBSCRIPTIONS) })
                };
            let E = d.GP[d.Xh.PREMIUM_MONTH_GUILD], u = o.ZP.getDefaultPrice(E.id, s), T = (0, l.og)((0, l.T4)(u.amount, u.currency), E.interval, E.intervalCount);
            return {
                subtitle: s ? _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_SUBBED_NO_ACTIVE_BOOSTS : _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_NO_SUB_NO_ACTIVE_BOOSTS,
                flavor: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_NO_ACTIVE_BOOSTS_FLAVOR.format({ monthlyGuildBoostPrice: T })
            };
        }({
            hasAppliedGuildBoosts: t,
            isUserPremiumTier2: s,
            hasGuildAffinitiesOrInGuild: u,
            subscriptionIsPausedOrPausePending: T
        });
    return (0, n.jsxs)('div', {
        className: E.wrapper,
        children: [
            (0, n.jsx)(a.Heading, {
                variant: 'heading-lg/bold',
                className: E.subtitle,
                children: I
            }),
            null != S && (0, n.jsx)(a.Text, {
                variant: 'text-sm/normal',
                children: S
            })
        ]
    });
};
