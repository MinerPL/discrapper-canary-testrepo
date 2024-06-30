n.d(t, {
    Z: function () {
        return E;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(399606), l = n(846519), r = n(481060), o = n(317632), c = n(174767), d = n(594174), u = n(689938), _ = n(573688);
function E(e) {
    let {
            inboxIconRef: t,
            recentsPopoutShown: n
        } = e, [E, m] = a.useState(!1), I = (0, s.e7)([o.Z], () => o.Z.getLastUnseenInvite()), T = (0, s.e7)([d.default], () => null != I ? d.default.getUser(I.inviter_id) : null);
    return (a.useEffect(() => {
        n && m(!1);
    }, [n]), a.useEffect(() => {
        if (null == I) {
            m(!1);
            return;
        }
        (0, c.Br)(I), m(!0);
        let e = new l.V7();
        return e.start(5000, () => {
            m(!1);
        }), () => {
            e.stop();
        };
    }, [I]), E && null != I && null != T) ? (0, i.jsxs)(r.TooltipLayer, {
        tooltipClassName: _.tooltip,
        tooltipContentClassName: _.tooltipContent,
        targetElementRef: t,
        position: 'bottom',
        color: r.TooltipColors.BLACK,
        children: [
            (0, i.jsxs)('div', {
                className: _.iconContainer,
                children: [
                    (0, i.jsx)('img', {
                        className: _.inviteImage,
                        src: I.application_asset,
                        alt: 'Game Invite'
                    }),
                    (0, i.jsx)('div', {
                        className: _.offsetAvatarContainer,
                        children: (0, i.jsx)(r.Avatar, {
                            'aria-label': 'Inviter',
                            className: _.inviterImage,
                            src: T.getAvatarURL(null, 24),
                            size: r.AvatarSizes.SIZE_24
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: _.titleContainer,
                children: [
                    (0, i.jsx)(r.Text, {
                        className: _.__invalid_title,
                        variant: 'text-xs/semibold',
                        children: u.Z.Messages.GAME_INVITES_INVITE_FROM.format({ username: T.username })
                    }),
                    (0, i.jsx)(r.Text, {
                        className: _.__invalid_subtitle,
                        variant: 'text-xxs/medium',
                        children: I.application_name
                    })
                ]
            })
        ]
    }) : null;
}
