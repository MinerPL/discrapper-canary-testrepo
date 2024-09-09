t.d(s, {
    Z: function () {
        return u;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(987997),
    l = t(689938),
    c = t(801742),
    d = t(653869),
    _ = t(845904);
function u(e) {
    let { onClickManageSubscription: s, count: t } = e;
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(r.Heading, {
                variant: 'heading-md/bold',
                children: l.Z.Messages.APPLICATION_USER_SUBSCRIPTIONS_TITLE
            }),
            (0, n.jsx)(r.Spacer, { size: 4 }),
            (0, n.jsx)(r.Text, {
                variant: 'text-md/normal',
                className: c.sectionDescription,
                children: l.Z.Messages.APPLICATION_USER_SUBSCRIPTIONS_DESCRIPTION
            }),
            (0, n.jsx)(r.Spacer, { size: 24 }),
            (0, n.jsxs)('div', {
                className: i()(d.guildBoostingSubscriptionRow, c.card),
                children: [
                    (0, n.jsx)('img', {
                        src: _,
                        alt: '',
                        className: c.bannerImage
                    }),
                    (0, n.jsxs)('div', {
                        className: c.textContainer,
                        children: [
                            (0, n.jsx)(r.Heading, {
                                variant: 'heading-xl/semibold',
                                className: c.header,
                                children: l.Z.Messages.APPLICATION_USER_SUBSCRIPTIONS_TITLE
                            }),
                            (0, n.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                className: c.description,
                                children: l.Z.Messages.APPLICATION_ACTIVE_USER_SUBSCRIPTIONS_DESCRIPTION.format({ numSubscriptions: t })
                            })
                        ]
                    }),
                    (0, n.jsx)(o.Z, {
                        color: r.Button.Colors.BRAND,
                        onClick: s,
                        children: l.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTIONS_BUTTON
                    })
                ]
            })
        ]
    });
}
