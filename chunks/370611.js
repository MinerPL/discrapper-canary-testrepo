n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(99815),
    l = n(442837),
    u = n(481060),
    c = n(314897),
    d = n(594174),
    _ = n(5192),
    E = n(873128),
    f = n(246627),
    h = n(249268),
    p = n(689938),
    I = n(881894),
    m = n(721191);
function T(e) {
    var t;
    let { guildId: n, leaderboardId: a, intervalOffset: s, previewMode: d = !1 } = e,
        _ = (0, l.e7)([c.default], () => c.default.getId()),
        m = (0, E.Z)({
            guildId: n,
            leaderboardId: a,
            intervalOffset: s
        }),
        { rankChanges: T } = (0, f.Z)({
            guildId: n,
            leaderboardId: a,
            intervalStart: null !== (t = null == m ? void 0 : m.interval_start) && void 0 !== t ? t : ''
        }),
        N = i.useMemo(() => {
            if (null == m) return [];
            let e = new Map();
            T.forEach((t) => {
                let { userId: n, previousRank: r } = t;
                e.set(n, r);
            });
            let { sort_by_statistic_id: t } = m.settings;
            return m.users.map((n, r) => {
                var i, a;
                return {
                    userId: n.user_id,
                    value: null !== (a = null === (i = n.statistics[t]) || void 0 === i ? void 0 : i.value) && void 0 !== a ? a : 0,
                    rank: r + 1,
                    previousRank: e.get(n.user_id)
                };
            });
        }, [m, T]),
        O = i.useMemo(() => null == N.find((e) => e.userId === _) && N.length <= 10, [N, _]);
    if (null == m) return null;
    if (0 === m.users.length) return (0, r.jsx)(S, {});
    let { sort_by_statistic_id: R } = m.settings,
        v = N[0];
    return (0, r.jsxs)('div', {
        className: I.container,
        children: [
            (0, r.jsx)(h.Z, {
                userId: null == v ? void 0 : v.userId,
                guildId: n,
                leaderboardId: a,
                intervalOffset: s
            }),
            d
                ? null
                : (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: I.headerRow,
                                  children: [
                                      (0, r.jsx)(u.Text, {
                                          variant: 'text-xxs/medium',
                                          className: I.headerRank,
                                          children: '#'
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: 'text-xxs/medium',
                                          className: I.headerPlayer,
                                          children: p.Z.Messages.LEADERBOARD_TABLE_HEADER_PLAYER
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: 'text-xxs/medium',
                                          className: I.headerValue,
                                          children: (function (e) {
                                              if (e === o.E.LOL_TOTAL_KILLS) return p.Z.Messages.LEADERBOARD_TABLE_HEADER_WEEKLY_KILLS;
                                              return 'Unknown statistic';
                                          })(R)
                                      })
                                  ]
                              }),
                              (0, r.jsxs)(u.ScrollerNone, {
                                  className: I.rows,
                                  children: [
                                      N.map((e) =>
                                          (0, i.createElement)(g, {
                                              ...e,
                                              key: e.userId,
                                              guildId: n
                                          })
                                      ),
                                      O ? (0, r.jsx)(A, {}) : null
                                  ]
                              })
                          ]
                      })
                  })
        ]
    });
}
function S() {
    return (0, r.jsxs)('div', {
        className: I.emptyContainer,
        children: [
            (0, r.jsxs)('span', {
                className: I.emptyTitleContainer,
                children: [
                    (0, r.jsx)(u.Text, {
                        tag: 'span',
                        variant: 'text-lg/normal',
                        className: I.emptyTitle,
                        children: p.Z.Messages.LEADERBOARD_START_PLAYING_CTA
                    }),
                    (0, r.jsx)(u.LeagueOfLegendsBrandIcon, {
                        size: 'custom',
                        width: 16,
                        height: 16,
                        className: s()(I.leagueIcon, I.emptyCrownIcon)
                    })
                ]
            }),
            (0, r.jsx)('img', {
                src: m.Z,
                alt: 'Vi',
                className: I.emptySplash
            })
        ]
    });
}
function g(e) {
    let { userId: t, rank: n, value: i, guildId: a, previousRank: s } = e,
        o = (0, l.e7)([d.default], () => d.default.getUser(t)),
        c = _.ZP.getName(a, void 0, o),
        E = null != s && s > n;
    return (0, r.jsxs)('div', {
        className: I.userRow,
        children: [
            E ? (0, r.jsx)('div', { className: I.rankChangeIndicator }) : null,
            (0, r.jsx)(u.Text, {
                variant: 'text-xxs/medium',
                className: I.userRank,
                children: n
            }),
            (0, r.jsxs)('div', {
                className: I.userPlayer,
                children: [
                    (0, r.jsx)(u.Avatar, {
                        src: null == o ? void 0 : o.getAvatarURL(a, 16),
                        size: u.AvatarSizes.SIZE_16,
                        'aria-label': 'avatar'
                    }),
                    (0, r.jsx)(u.Spacer, {
                        size: 6,
                        horizontal: !0
                    }),
                    (0, r.jsx)(u.Heading, {
                        variant: 'heading-sm/medium',
                        color: 'header-primary',
                        children: c
                    }),
                    1 === n
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(u.Spacer, {
                                      size: 4,
                                      horizontal: !0
                                  }),
                                  (0, r.jsx)(u.LeagueOfLegendsBrandIcon, {
                                      size: 'custom',
                                      width: 14,
                                      height: 14
                                  })
                              ]
                          })
                        : null,
                    E ? (0, r.jsx)(N, { rankChange: s - n }) : null
                ]
            }),
            (0, r.jsx)(u.Heading, {
                variant: 'heading-sm/medium',
                color: 'header-primary',
                children: i
            })
        ]
    });
}
function A() {
    return (0, r.jsxs)('div', {
        className: I.joinLeaderboardCTAContainer,
        children: [
            (0, r.jsx)(u.Text, {
                variant: 'text-xs/normal',
                className: I.joinLeaderboardCTA,
                children: p.Z.Messages.LEADERBOARD_START_PLAYING_CTA
            }),
            (0, r.jsx)(u.LeagueOfLegendsBrandIcon, {
                size: 'custom',
                width: 14,
                height: 14,
                className: I.leagueIcon
            })
        ]
    });
}
function N(e) {
    let { rankChange: t } = e;
    return (0, r.jsxs)('div', {
        className: I.rankChangeBadge,
        children: [
            (0, r.jsx)(u.ArrowSmallUpIcon, {
                size: 'xxs',
                color: u.tokens.colors.TEXT_MUTED
            }),
            (0, r.jsx)(u.Text, {
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: t
            })
        ]
    });
}
