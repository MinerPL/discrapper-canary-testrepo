n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(381338),
    o = n(442837),
    l = n(481060),
    u = n(594174),
    c = n(5192),
    d = n(873128),
    _ = n(689938),
    E = n(98518);
function f(e) {
    var t;
    let { guildId: n, leaderboardId: i, intervalOffset: f = -1, className: h } = e,
        p = (0, d.Z)({
            guildId: n,
            leaderboardId: i,
            intervalOffset: f
        }),
        I = null == p ? void 0 : null === (t = p.users) || void 0 === t ? void 0 : t[0],
        m = (0, o.e7)([u.default], () => u.default.getUser(null == I ? void 0 : I.user_id));
    if (null == m || null == p) return null;
    let T = c.ZP.getName(n, void 0, m);
    return (0, r.jsxs)('div', {
        className: a()(E.container, h),
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                className: E.title,
                children: (function (e) {
                    switch (e) {
                        case s.q.DAILY:
                            return _.Z.Messages.LEADERBOARD_YESTERDAYS_CHAMPION;
                        case s.q.WEEKLY:
                            return _.Z.Messages.LEADERBOARD_LAST_WEEKS_CHAMPION;
                        case s.q.MONTHLY:
                            return _.Z.Messages.LEADERBOARD_LAST_MONTHS_CHAMPION;
                        default:
                            return _.Z.Messages.LEADERBOARD_LAST_CHAMPION;
                    }
                })(p.settings.interval_type)
            }),
            (0, r.jsx)(l.Avatar, {
                src: m.getAvatarURL(n, 16),
                size: l.AvatarSizes.SIZE_16,
                'aria-label': 'avatar'
            }),
            (0, r.jsx)(l.Spacer, {
                size: 6,
                horizontal: !0
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/semibold',
                color: 'header-primary',
                children: T
            })
        ]
    });
}
