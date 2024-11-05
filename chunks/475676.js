n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(442837),
    r = n(481060),
    o = n(297781),
    s = n(443487),
    c = n(314897),
    u = n(594174),
    d = n(626135),
    m = n(5192),
    x = n(873128),
    h = n(246627),
    p = n(709737),
    C = n(69589),
    v = n(531501),
    g = n(463031),
    f = n(981631),
    I = n(388032),
    j = n(835777);
function Z() {
    return (0, l.jsxs)('div', {
        className: j.gameTitleContainer,
        children: [
            (0, l.jsx)(r.LeagueOfLegendsBrandIcon, { size: 'xs' }),
            (0, l.jsx)(r.Text, {
                variant: 'text-sm/medium',
                className: j.gameTitle,
                children: 'League of Legends'
            })
        ]
    });
}
function P(e) {
    var t, n, v, j;
    let P,
        { selected: T, channel: y } = e,
        N = y.guild_id,
        _ = (0, x.Z)({
            guildId: N,
            leaderboardId: g._,
            intervalOffset: 0
        }),
        { rankChanges: E } = (0, h.Z)({
            guildId: N,
            leaderboardId: g._,
            intervalStart: null !== (v = null == _ ? void 0 : _.interval_start) && void 0 !== v ? v : ''
        }),
        S = (0, i.e7)([c.default], () => c.default.getId()),
        [A, M] = a.useMemo(() => {
            let e = E.find((e) => e.userId === S),
                t = E[0],
                n = null != e ? e : t,
                l = null == _ ? void 0 : _.users.find((e) => e.user_id === (null == n ? void 0 : n.userId));
            return [n, l];
        }, [_, E, S]),
        k = (0, i.e7)([u.default], () => u.default.getUser(null == A ? void 0 : A.userId)),
        w = m.ZP.getName(N, void 0, k);
    if (
        (!(function (e) {
            let { leaderboard: t, guildId: n } = e,
                l = null == t ? void 0 : t.leaderboard_id;
            a.useEffect(() => {
                null != l &&
                    d.default.track(f.rMx.LEADERBOARD_MEMBERLIST_CARD_VIEWED, {
                        leaderboard_id: l,
                        guild_id: n
                    });
            }, [l, n]);
        })({
            leaderboard: _,
            guildId: N
        }),
        null == _)
    )
        return null;
    if (0 === _.users.length || null == A) return (0, l.jsx)(L, { selected: T });
    let { sort_by_statistic_id: R } = _.guild_settings,
        b = null !== (j = null == M ? void 0 : null === (n = M.statistics) || void 0 === n ? void 0 : null === (t = n[R]) || void 0 === t ? void 0 : t.value) && void 0 !== j ? j : 0,
        { currentRank: H } = A;
    return (
        (P =
            A.userId === S
                ? I.intl.formatToPlainString(I.t['eU+JxM'], { rank: H })
                : I.intl.formatToPlainString(I.t['8BLSQ0'], {
                      rank: H,
                      username: w
                  })),
        (0, l.jsxs)(s.Zb, {
            selected: T,
            children: [
                (0, l.jsxs)(s.e$, {
                    children: [
                        (0, l.jsx)(Z, {}),
                        (0, l.jsx)(r.Spacer, { size: 2 }),
                        (0, l.jsx)(s.ll, { children: P }),
                        (0, l.jsx)(o.Gk, {
                            location: o.Gt.CARD,
                            children: (0, l.jsx)(p.DC, {
                                value: b,
                                statisticId: R
                            })
                        })
                    ]
                }),
                (0, l.jsx)(C.Z, { rank: H })
            ]
        })
    );
}
function L(e) {
    let { selected: t } = e;
    return (0, l.jsxs)(s.Zb, {
        selected: t,
        children: [
            (0, l.jsxs)(s.e$, {
                children: [
                    (0, l.jsx)(Z, {}),
                    (0, l.jsx)(r.Spacer, { size: 2 }),
                    (0, l.jsx)(s.ll, { children: I.intl.string(I.t['t+b0DA']) }),
                    (0, l.jsx)(o.Gk, {
                        location: o.Gt.CARD,
                        children: (0, l.jsx)(p.ZR, { text: I.intl.string(I.t.zX8HUl) })
                    })
                ]
            }),
            (0, l.jsx)(v.Z, {
                color: '#5B5A56',
                children: (0, l.jsx)('img', {
                    src: 'https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png',
                    alt: '',
                    className: j.emptyStateImage
                })
            })
        ]
    });
}
