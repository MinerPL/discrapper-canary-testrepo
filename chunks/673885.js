n.d(s, {
    Z: function () {
        return _;
    }
});
var a = n(735250);
n(470079);
var t = n(120356), r = n.n(t), l = n(481060), i = n(906732), o = n(171368), c = n(768581), d = n(51144), u = n(981631), I = n(689938), E = n(767795);
function _(e) {
    let {
            user: s,
            guildId: n,
            className: t
        } = e, {username: _} = s, T = c.ZP.getUserAvatarURL(s), {analyticsLocations: N} = (0, i.ZP)(), C = () => {
            (0, o.openUserProfileModal)({
                userId: s.id,
                guildId: n,
                sourceAnalyticsLocations: N,
                analyticsLocation: {
                    section: u.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    object: u.qAy.JOIN_REQUEST
                }
            });
        };
    return (0, a.jsxs)('div', {
        className: r()(E.container, t),
        children: [
            (0, a.jsx)(l.Anchor, {
                onClick: C,
                children: (0, a.jsx)(l.Avatar, {
                    src: T,
                    size: l.AvatarSizes.SIZE_80,
                    'aria-label': _,
                    className: E.avatar
                })
            }),
            (0, a.jsx)('div', {
                className: E.username,
                children: (0, a.jsx)(l.Heading, {
                    variant: 'heading-lg/semibold',
                    children: d.ZP.getFormattedName(s)
                })
            }),
            (0, a.jsx)(l.Anchor, {
                onClick: C,
                children: I.Z.Messages.VIEW_PROFILE
            })
        ]
    });
}
