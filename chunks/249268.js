n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(297781),
    l = n(594174),
    u = n(5192),
    c = n(873128),
    d = n(709737),
    _ = n(689938),
    E = n(20037);
function f(e) {
    var t;
    let { userId: n, guildId: f, leaderboardId: h, intervalOffset: p } = e,
        I = (0, a.e7)([l.default], () => l.default.getUser(n)),
        m = (0, c.Z)({
            guildId: f,
            leaderboardId: h,
            intervalOffset: p
        }),
        T = i.useMemo(() => {
            var e;
            if (null == m) return null;
            let { sort_by_statistic_id: t } = m.settings;
            return null === (e = m.users.find((e) => e.user_id === n)) || void 0 === e ? void 0 : e.statistics[t];
        }, [m, n]);
    if (null == I || null == m) return null;
    let { sort_by_statistic_id: S } = m.settings,
        g = u.ZP.getName(f, void 0, I);
    return (0, r.jsxs)('div', {
        className: E.container,
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-xs/semibold',
                color: 'interactive-active',
                children: _.Z.Messages.LEADERBOARD_LOL_SUMMONERS_RIFT
            }),
            (0, r.jsx)(s.Spacer, { size: 8 }),
            (0, r.jsxs)('div', {
                className: E.userContainer,
                children: [
                    (0, r.jsx)(s.Avatar, {
                        src: I.getAvatarURL(f, 32),
                        size: s.AvatarSizes.SIZE_32,
                        'aria-label': 'avatar'
                    }),
                    (0, r.jsx)(s.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)('div', {
                                className: E.userNameContainer,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-sm/semibold',
                                        className: E.userName,
                                        children: g
                                    }),
                                    (0, r.jsx)(s.Spacer, {
                                        size: 4,
                                        horizontal: !0
                                    }),
                                    (0, r.jsx)(s.LeagueOfLegendsBrandIcon, {
                                        size: 'custom',
                                        width: 14,
                                        height: 14
                                    })
                                ]
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                className: E.userSubtitle,
                                children: _.Z.Messages.LEADERBOARD_CURRENT_CHAMPION
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(s.Spacer, { size: 8 }),
            (0, r.jsxs)(o.Gk, {
                location: o.Gt.LEADERBOARD_POPOUT,
                children: [
                    (0, r.jsx)(d.DC, {
                        value: null !== (t = null == T ? void 0 : T.value) && void 0 !== t ? t : 0,
                        statisticId: S
                    }),
                    (0, r.jsx)(d.l8, { intervalEnd: m.interval_end })
                ]
            })
        ]
    });
}
