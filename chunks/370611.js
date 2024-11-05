n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(206295),
    c = n(706454),
    d = n(314897),
    f = n(158776),
    _ = n(594174),
    h = n(5192),
    p = n(528567),
    m = n(371583),
    g = n(246627),
    E = n(249268),
    v = n(864138),
    I = n(473188),
    S = n(463031),
    T = n(388032),
    b = n(881894);
function y(e) {
    let { leaderboard: t, previewMode: n = !1 } = e,
        a = (0, o.e7)([d.default], () => d.default.getId()),
        s = (0, o.e7)([c.default], () => c.default.locale),
        { rankChanges: f } = (0, g.Z)({
            guildId: t.guild_id,
            leaderboardId: t.leaderboard_id,
            intervalStart: t.interval_start
        }),
        _ = i.useMemo(() => {
            let e = new Map();
            f.forEach((t) => {
                let { userId: n, previousRank: r } = t;
                e.set(n, r);
            });
            let { sort_by_statistic_id: n } = t.guild_settings;
            return t.users.map((t, r) => {
                var i, a;
                return {
                    userId: t.user_id,
                    value: null !== (a = null === (i = t.statistics[n]) || void 0 === i ? void 0 : i.value) && void 0 !== a ? a : 0,
                    rank: r + 1,
                    previousRank: e.get(t.user_id)
                };
            });
        }, [t, f]),
        h = (0, m.K)(t),
        { primaryColor: v } = (0, u.Z)(h),
        I = i.useMemo(() => null == _.find((e) => e.userId === a) && _.length <= 10, [_, a]);
    if (0 === t.users.length) return (0, r.jsx)(A, { leaderboard: t });
    let { sort_by_statistic_id: S, sort_desc: y } = t.guild_settings,
        R = t.settings.statistics[S];
    return (0, r.jsxs)('div', {
        className: b.container,
        style: { background: v },
        children: [
            (0, r.jsx)(E.Z, {
                userId: _[0].userId,
                leaderboard: t
            }),
            n
                ? null
                : (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: b.headerRow,
                                  children: [
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: b.headerRank,
                                          children: '#'
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: b.headerPlayer,
                                          children: T.intl.string(T.t['6ii1+/'])
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-xxs/medium',
                                          className: b.headerValue,
                                          children: (0, p.s)({
                                              statisticId: S,
                                              sortDesc: y,
                                              aggregationType: null == R ? void 0 : R.aggregation_type
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsxs)(l.ScrollerNone, {
                                  className: b.rows,
                                  children: [
                                      _.map((e) =>
                                          (0, i.createElement)(N, {
                                              ...e,
                                              key: e.userId,
                                              guildId: t.guild_id,
                                              locale: s
                                          })
                                      ),
                                      I ? (0, r.jsx)(C, {}) : null
                                  ]
                              })
                          ]
                      })
                  })
        ]
    });
}
function A(e) {
    let { leaderboard: t } = e,
        n = (0, m.K)(t);
    return (0, r.jsx)(v.z, {
        imageUrl: n,
        children: (0, r.jsxs)('span', {
            className: b.emptyTitleContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    tag: 'span',
                    variant: 'text-lg/normal',
                    className: b.emptyTitle,
                    children: T.intl.string(T.t.BfRGk5)
                }),
                (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    className: s()(b.leagueIcon, b.emptyCrownIcon)
                })
            ]
        })
    });
}
function N(e) {
    let { userId: t, rank: n, value: i, guildId: a, previousRank: s, locale: u } = e,
        c = (0, o.e7)([_.default], () => _.default.getUser(t)),
        d = h.ZP.getName(a, void 0, c),
        p = null != s && s > n,
        m = (0, o.e7)([f.Z], () => {
            let e = f.Z.getPrimaryActivity(t);
            return (null == e ? void 0 : e.application_id) != null && S.T.includes(e.application_id);
        });
    return (0, r.jsxs)('div', {
        className: b.userRow,
        children: [
            p ? (0, r.jsx)('div', { className: b.rankChangeIndicator }) : null,
            (0, r.jsx)('div', {
                className: b.userRank,
                children:
                    n <= 3
                        ? (0, r.jsx)(I._, { rank: n })
                        : (0, r.jsx)(l.Text, {
                              tabularNumbers: !0,
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: n
                          })
            }),
            (0, r.jsxs)('div', {
                className: b.userPlayer,
                children: [
                    (0, r.jsx)(l.Avatar, {
                        src: null == c ? void 0 : c.getAvatarURL(a, 16),
                        size: l.AvatarSizes.SIZE_16,
                        'aria-label': 'avatar'
                    }),
                    (0, r.jsx)(l.Spacer, {
                        size: 6,
                        horizontal: !0
                    }),
                    (0, r.jsx)(l.Heading, {
                        variant: 'heading-sm/medium',
                        color: 'header-primary',
                        children: d
                    }),
                    1 === n
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(l.Spacer, {
                                      size: 4,
                                      horizontal: !0
                                  }),
                                  (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                                      size: 'custom',
                                      width: 14,
                                      height: 14
                                  })
                              ]
                          })
                        : null,
                    p ? (0, r.jsx)(R, { rankChange: s - n }) : null
                ]
            }),
            m &&
                (0, r.jsx)(l.GameControllerIcon, {
                    size: 'xs',
                    color: l.tokens.colors.TEXT_POSITIVE
                }),
            (0, r.jsx)(l.Heading, {
                variant: 'heading-sm/medium',
                color: 'header-primary',
                tabularNumbers: !0,
                children: i.toLocaleString(u)
            })
        ]
    });
}
function C() {
    return (0, r.jsxs)('div', {
        className: b.joinLeaderboardCTAContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/normal',
                className: b.joinLeaderboardCTA,
                children: T.intl.string(T.t.BfRGk5)
            }),
            (0, r.jsx)(l.LeagueOfLegendsBrandIcon, {
                size: 'custom',
                width: 14,
                height: 14,
                className: b.leagueIcon
            })
        ]
    });
}
function R(e) {
    let { rankChange: t } = e;
    return (0, r.jsxs)('div', {
        className: b.rankChangeBadge,
        children: [
            (0, r.jsx)(l.ArrowSmallUpIcon, {
                size: 'xxs',
                color: l.tokens.colors.TEXT_MUTED
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: t
            })
        ]
    });
}
