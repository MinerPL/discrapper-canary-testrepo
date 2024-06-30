n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(481060), s = n(194359), l = n(906732), u = n(5192), c = n(877485), d = n(785717), _ = n(689938), E = n(866254);
function f(e) {
    let {
            user: t,
            guildId: n,
            channelId: i,
            friendToken: f,
            className: h
        } = e, p = u.ZP.getName(n, i, t), {trackUserProfileAction: m} = (0, d.KZ)(), {newestAnalyticsLocation: I} = (0, l.ZP)(), {originalFriendingEnabled: T} = (0, c.V)({ location: 'UserProfileIncomingFriendRequestBanner' });
    return (0, r.jsxs)('div', {
        className: a()(E.container, h),
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: _.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({ username: p })
            }),
            (0, r.jsxs)('div', {
                className: E.buttonContainer,
                children: [
                    (0, r.jsx)(o.Button, {
                        look: o.Button.Looks.FILLED,
                        color: T ? o.Button.Colors.GREEN : a()(o.Button.Colors.BRAND, E.color),
                        size: o.Button.Sizes.SMALL,
                        className: E.button,
                        onClick: () => {
                            m({ action: 'ACCEPT_FRIEND_REQUEST' }), s.Z.addRelationship({
                                userId: t.id,
                                friendToken: f,
                                context: { location: I }
                            });
                        },
                        children: _.Z.Messages.FRIEND_REQUEST_ACCEPT
                    }),
                    (0, r.jsx)(o.Button, {
                        look: o.Button.Looks.FILLED,
                        color: o.Button.Colors.PRIMARY,
                        size: o.Button.Sizes.SMALL,
                        className: E.button,
                        onClick: () => {
                            m({ action: 'IGNORE_FRIEND_REQUEST' }), s.Z.cancelFriendRequest(t.id, { location: I });
                        },
                        children: _.Z.Messages.FRIEND_REQUEST_IGNORE
                    })
                ]
            })
        ]
    });
}
