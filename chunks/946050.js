n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250), a = n(470079), l = n(481060), s = n(670044), r = n(28391), o = n(526761), c = n(689938), u = n(223056);
function d(e) {
    return a.useEffect(() => e.onChannelChange(), [e.channel.id]), (0, i.jsxs)('div', {
        className: u.notice,
        children: [
            (0, i.jsx)(s.Z, { id: e.channel.id }),
            (0, i.jsx)('div', {
                className: u.info,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    children: c.Z.Messages.UNREAD_NOTIFICATION_SETTING_NOTICE
                })
            }),
            (0, i.jsxs)('div', {
                className: u.buttons,
                children: [
                    (0, i.jsxs)(l.Button, {
                        size: l.Button.Sizes.TINY,
                        look: l.Button.Looks.FILLED,
                        color: l.Button.Colors.PRIMARY,
                        className: u.button,
                        innerClassName: u.buttonInner,
                        onClick: () => (0, r.Z)(e.channel.guild_id, e.channel.id, o.ic.UNREADS_ALL_MESSAGES),
                        children: [
                            (0, i.jsx)(l.CheckmarkLargeIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                style: { marginRight: 4 }
                            }),
                            c.Z.Messages.YES_TEXT
                        ]
                    }),
                    (0, i.jsx)(l.Button, {
                        style: { marginLeft: 8 },
                        size: l.Button.Sizes.TINY,
                        look: l.Button.Looks.FILLED,
                        color: l.Button.Colors.PRIMARY,
                        className: u.button,
                        innerClassName: u.buttonInner,
                        onClick: () => (0, r.Z)(e.channel.guild_id, e.channel.id, o.ic.UNREADS_ONLY_MENTIONS),
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.CloseSmallIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    style: { marginRight: 4 }
                                }),
                                c.Z.Messages.NO_TEXT
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
