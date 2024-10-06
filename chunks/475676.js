n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var l = n(735250),
    a = n(470079),
    i = n(442837),
    r = n(481060),
    s = n(297781),
    o = n(443487),
    u = n(314897),
    c = n(594174),
    d = n(5192),
    h = n(873128),
    m = n(246627),
    x = n(709737),
    E = n(69589),
    v = n(531501),
    _ = n(463031),
    C = n(689938),
    p = n(835777);
function f() {
    return (0, l.jsxs)('div', {
        className: p.gameTitleContainer,
        children: [
            (0, l.jsx)(r.LeagueOfLegendsBrandIcon, { size: 'xs' }),
            (0, l.jsx)(r.Text, {
                variant: 'text-sm/medium',
                className: p.gameTitle,
                children: 'League of Legends'
            })
        ]
    });
}
function T(e) {
    var t, n, v, p;
    let T,
        { selected: I, channel: N } = e,
        Z = N.guild_id,
        P = (0, h.Z)({
            guildId: Z,
            leaderboardId: _._,
            intervalOffset: 0
        }),
        { rankChanges: M } = (0, m.Z)({
            guildId: Z,
            leaderboardId: _._,
            intervalStart: null !== (v = null == P ? void 0 : P.interval_start) && void 0 !== v ? v : ''
        }),
        L = (0, i.e7)([u.default], () => u.default.getId()),
        [S, A] = a.useMemo(() => {
            let e = M.find((e) => e.userId === L),
                t = M[0],
                n = null != e ? e : t,
                l = null == P ? void 0 : P.users.find((e) => e.user_id === (null == n ? void 0 : n.userId));
            return [n, l];
        }, [P, M, L]),
        R = (0, i.e7)([c.default], () => c.default.getUser(null == S ? void 0 : S.userId)),
        y = d.ZP.getName(Z, void 0, R);
    if (null == P) return null;
    if (0 === P.users.length || null == S) return (0, l.jsx)(g, { selected: I });
    let { sort_by_statistic_id: O } = P.settings,
        j = null !== (p = null == A ? void 0 : null === (n = A.statistics) || void 0 === n ? void 0 : null === (t = n[O]) || void 0 === t ? void 0 : t.value) && void 0 !== p ? p : 0,
        { currentRank: w } = S;
    return (
        (T =
            S.userId === L
                ? C.Z.Messages.LEADERBOARD_RANK_CHANGE_CURRENT_USER.format({ rank: w })
                : C.Z.Messages.LEADERBOARD_RANK_CHANGE_OTHER_USER.format({
                      rank: w,
                      username: y
                  })),
        (0, l.jsxs)(o.Zb, {
            selected: I,
            children: [
                (0, l.jsxs)(o.e$, {
                    children: [
                        (0, l.jsx)(f, {}),
                        (0, l.jsx)(r.Spacer, { size: 2 }),
                        (0, l.jsx)(o.ll, { children: T }),
                        (0, l.jsx)(s.Gk, {
                            location: s.Gt.CARD,
                            children: (0, l.jsx)(x.DC, {
                                value: j,
                                statisticId: O
                            })
                        })
                    ]
                }),
                (0, l.jsx)(E.Z, { rank: w })
            ]
        })
    );
}
function g(e) {
    let { selected: t } = e;
    return (0, l.jsxs)(o.Zb, {
        selected: t,
        children: [
            (0, l.jsxs)(o.e$, {
                children: [
                    (0, l.jsx)(f, {}),
                    (0, l.jsx)(r.Spacer, { size: 2 }),
                    (0, l.jsx)(o.ll, { children: C.Z.Messages.MEMBER_LIST_CONTENT_FEED_LEADERBOARD_CARD_EMPTY_STATE_TITLE }),
                    (0, l.jsx)(s.Gk, {
                        location: s.Gt.CARD,
                        children: (0, l.jsx)(x.ZR, { text: C.Z.Messages.MEMBER_LIST_CONTENT_FEED_LEADERBOARD_CARD_EMPTY_STATE_SUBTITLE })
                    })
                ]
            }),
            (0, l.jsx)(v.Z, {
                color: '#5B5A56',
                children: (0, l.jsx)('img', {
                    src: 'https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png',
                    alt: '',
                    className: p.emptyStateImage
                })
            })
        ]
    });
}
