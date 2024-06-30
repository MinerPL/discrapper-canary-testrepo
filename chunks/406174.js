s.d(t, {
    Z: function () {
        return I;
    }
});
var n = s(735250), a = s(470079), i = s(120356), r = s.n(i), o = s(442837), l = s(481060), c = s(78839), d = s(981631), _ = s(689938), E = s(729170), u = s(875328), T = s(834300);
function I(e) {
    let {onClickManageSubscription: t} = e, s = (0, o.e7)([c.ZP], () => c.ZP.getSubscriptions()), i = a.useMemo(() => Object.values(null != s ? s : {}).filter(e => e.type === d.NYc.GUILD).filter(e => e.status !== d.O0b.ENDED), [s]);
    return 0 === i.length ? null : (0, n.jsxs)('div', {
        className: E.container,
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-md/semibold',
                className: E.__invalid_sectionTitle,
                children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
            }),
            (0, n.jsx)(l.Spacer, { size: 4 }),
            (0, n.jsx)(l.Text, {
                variant: 'text-sm/normal',
                className: E.sectionDescription,
                children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_USER_SUBSCRIPTIONS_DESCRIPTION
            }),
            (0, n.jsx)(l.Spacer, { size: 24 }),
            (0, n.jsxs)('div', {
                className: r()(u.guildBoostingSubscriptionRow, E.card),
                children: [
                    (0, n.jsx)('img', {
                        src: T,
                        alt: '',
                        className: E.handImage
                    }),
                    (0, n.jsxs)('div', {
                        className: E.textContainer,
                        children: [
                            (0, n.jsx)(l.Heading, {
                                variant: 'heading-xl/semibold',
                                className: E.header,
                                children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
                            }),
                            (0, n.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                className: E.description,
                                children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTIVE_USER_SUBSCRIPTIONS_DESCRIPTION.format({ numSubscriptions: i.length })
                            })
                        ]
                    }),
                    (0, n.jsx)(l.Button, {
                        color: l.Button.Colors.CUSTOM,
                        size: l.Button.Sizes.SMALL,
                        className: E.manageSubscriptionsButton,
                        onClick: t,
                        children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_SUBSCRIPTIONS_BUTTON
                    })
                ]
            })
        ]
    });
}
