n.d(s, {
    Z: function () {
        return _;
    }
});
var t = n(735250);
n(470079);
var a = n(120356),
    l = n.n(a),
    r = n(481060),
    i = n(906732),
    o = n(171368),
    c = n(768581),
    d = n(51144),
    u = n(981631),
    I = n(689938),
    E = n(691700);
function _(e) {
    let { user: s, joinRequestId: n, className: a } = e,
        { username: _ } = s,
        T = c.ZP.getUserAvatarURL(s),
        { analyticsLocations: m } = (0, i.ZP)(),
        R = () => {
            (0, o.openUserProfileModal)({
                userId: s.id,
                guildId: null,
                joinRequestId: n,
                sourceAnalyticsLocations: m,
                analyticsLocation: {
                    section: u.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    object: u.qAy.JOIN_REQUEST
                }
            });
        };
    return (0, t.jsxs)('div', {
        className: l()(E.container, a),
        children: [
            (0, t.jsx)(r.Anchor, {
                onClick: R,
                children: (0, t.jsx)(r.Avatar, {
                    src: T,
                    size: r.AvatarSizes.SIZE_80,
                    'aria-label': _,
                    className: E.avatar
                })
            }),
            (0, t.jsx)('div', {
                className: E.username,
                children: (0, t.jsx)(r.Heading, {
                    variant: 'heading-lg/semibold',
                    children: d.ZP.getFormattedName(s)
                })
            }),
            (0, t.jsx)(r.Anchor, {
                onClick: R,
                children: I.Z.Messages.VIEW_PROFILE
            })
        ]
    });
}
