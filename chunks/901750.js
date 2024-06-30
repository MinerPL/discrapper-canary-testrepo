var n = s(735250);
s(470079);
var a = s(481060), i = s(689938), r = s(304089);
t.Z = function (e) {
    let {
        hasGuildBoostSlots: t,
        hasAppliedGuildBoosts: o,
        isUserPremiumTier2: l,
        subscriptionIsPausedOrPausePending: c
    } = e;
    return (0, n.jsxs)('div', {
        className: r.wrapper,
        children: [
            (0, n.jsx)('div', {
                className: r.guildBoostGemWrapper,
                children: (0, n.jsx)('img', {
                    alt: '',
                    className: r.guildBoostGem,
                    src: s(908635)
                })
            }),
            (0, n.jsxs)('div', {
                className: r.gradient,
                children: [
                    (0, n.jsx)(a.Heading, {
                        variant: 'display-md',
                        className: r.heading,
                        children: function (e) {
                            let {
                                hasGuildBoostSlots: t,
                                hasAppliedGuildBoosts: s,
                                isUserPremiumTier2: n,
                                subscriptionIsPausedOrPausePending: a
                            } = e;
                            return a ? i.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_YOUR_GUILD_BOOSTS.format() : t ? n && !s ? i.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_HAS_UNAPPLIED_FREE_GUILD_BOOSTS.format() : i.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_YOUR_GUILD_BOOSTS.format() : i.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_NO_GUILD_BOOSTS;
                        }({
                            hasGuildBoostSlots: t,
                            isUserPremiumTier2: l,
                            hasAppliedGuildBoosts: o,
                            subscriptionIsPausedOrPausePending: c
                        })
                    }),
                    (0, n.jsx)('svg', {
                        viewBox: '0 0 660 210',
                        className: r.wave,
                        children: (0, n.jsx)('path', { d: 'M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z' })
                    })
                ]
            })
        ]
    });
};
