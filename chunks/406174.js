t.d(s, {
    Z: function () {
        return _;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(689938),
    l = t(135060),
    c = t(653869),
    d = t(834300);
function _(e) {
    let { onClickManageSubscription: s, count: t } = e;
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(r.Heading, {
                variant: 'heading-md/bold',
                children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
            }),
            (0, n.jsx)(r.Spacer, { size: 4 }),
            (0, n.jsx)(r.Text, {
                variant: 'text-md/normal',
                className: l.sectionDescription,
                children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_USER_SUBSCRIPTIONS_DESCRIPTION
            }),
            (0, n.jsx)(r.Spacer, { size: 24 }),
            (0, n.jsxs)('div', {
                className: i()(c.guildBoostingSubscriptionRow, l.card),
                children: [
                    (0, n.jsx)('img', {
                        src: d,
                        alt: '',
                        className: l.handImage
                    }),
                    (0, n.jsxs)('div', {
                        className: l.textContainer,
                        children: [
                            (0, n.jsx)(r.Heading, {
                                variant: 'heading-xl/semibold',
                                className: l.header,
                                children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
                            }),
                            (0, n.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                className: l.description,
                                children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTIVE_USER_SUBSCRIPTIONS_DESCRIPTION.format({ numSubscriptions: t })
                            })
                        ]
                    }),
                    (0, n.jsx)(r.Button, {
                        color: r.Button.Colors.CUSTOM,
                        size: r.Button.Sizes.SMALL,
                        className: l.manageSubscriptionsButton,
                        onClick: s,
                        children: o.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_SUBSCRIPTIONS_BUTTON
                    })
                ]
            })
        ]
    });
}
