n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(906732),
    o = n(171368),
    c = n(768581),
    d = n(51144),
    u = n(981631),
    m = n(388032),
    h = n(634200);
function x(e) {
    let { user: t, joinRequestId: n, className: l } = e,
        { username: x } = t,
        b = c.ZP.getUserAvatarURL(t),
        { analyticsLocations: j } = (0, s.ZP)(),
        p = () => {
            (0, o.openUserProfileModal)({
                userId: t.id,
                joinRequestId: n,
                sourceAnalyticsLocations: j,
                analyticsLocation: {
                    section: u.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                    object: u.qAy.JOIN_REQUEST
                }
            });
        };
    return (0, i.jsxs)('div', {
        className: r()(h.container, l),
        children: [
            (0, i.jsx)(a.Anchor, {
                onClick: p,
                children: (0, i.jsx)(a.Avatar, {
                    src: b,
                    size: a.AvatarSizes.SIZE_80,
                    'aria-label': x,
                    className: h.avatar
                })
            }),
            (0, i.jsx)('div', {
                className: h.username,
                children: (0, i.jsx)(a.Heading, {
                    variant: 'heading-lg/semibold',
                    children: d.ZP.getFormattedName(t)
                })
            }),
            (0, i.jsx)(a.Anchor, {
                onClick: p,
                children: m.intl.string(m.t.iXAna2)
            })
        ]
    });
}
