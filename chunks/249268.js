n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(594174),
    o = n(5192),
    l = n(371583),
    u = n(864138),
    c = n(388032),
    d = n(20037);
function f(e) {
    let { userId: t, leaderboard: n } = e,
        f = (0, i.e7)([s.default], () => s.default.getUser(t));
    if (null == f) return null;
    let _ = (0, l.K)(n),
        h = o.ZP.getName(n.guild_id, void 0, f);
    return (0, r.jsx)(u.z, {
        imageUrl: _,
        children: (0, r.jsxs)('div', {
            className: d.userContainer,
            children: [
                (0, r.jsx)(a.Avatar, {
                    src: f.getAvatarURL(n.guild_id, 32),
                    size: a.AvatarSizes.SIZE_32,
                    'aria-label': 'avatar'
                }),
                (0, r.jsx)(a.Spacer, {
                    size: 8,
                    horizontal: !0
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: d.userNameContainer,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/semibold',
                                    className: d.userName,
                                    children: h
                                }),
                                (0, r.jsx)(a.Spacer, {
                                    size: 4,
                                    horizontal: !0
                                }),
                                (0, r.jsx)(a.LeagueOfLegendsBrandIcon, {
                                    size: 'custom',
                                    width: 14,
                                    height: 14
                                })
                            ]
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            className: d.userSubtitle,
                            children: c.intl.string(c.t['0ScUkZ'])
                        })
                    ]
                })
            ]
        })
    });
}
