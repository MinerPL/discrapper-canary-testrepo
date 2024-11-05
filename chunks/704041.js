n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(511010),
    l = n(553795),
    u = n(626135),
    c = n(709054),
    d = n(979192),
    f = n(814059),
    _ = n(873128),
    h = n(114201),
    p = n(154658),
    m = n(370611),
    g = n(463031),
    E = n(981631),
    v = n(231338),
    I = n(388032),
    S = n(304818);
function T(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.ThemeProvider, {
        theme: v.BR.DARK,
        children: (e) =>
            (0, r.jsx)('div', {
                'data-disable-adaptive-theme': !0,
                className: e,
                children: t
            })
    });
}
function b(e) {
    let { leaderboard: t } = e,
        n = i.useMemo(() => (0, f.n)(c.default.extractTimestamp(t.interval_end)), [t]);
    return (0, r.jsxs)('div', {
        className: S.header,
        children: [
            (0, r.jsx)(s.LeagueOfLegendsBrandIcon, { size: 'md' }),
            (0, r.jsx)(s.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, r.jsx)(s.Heading, {
                variant: 'heading-sm/normal',
                className: S.leaderboardTitle,
                children: I.intl.format(I.t['MlT4+P'], {
                    leaderboardName: 'League of Legends',
                    timeLeft: n,
                    leaderboardNameHook: (e, t) =>
                        (0, r.jsx)(
                            s.Text,
                            {
                                variant: 'text-sm/medium',
                                className: S.leaderboardName,
                                children: e
                            },
                            t
                        )
                })
            }),
            (0, r.jsx)(h.Z, {
                guildId: t.guild_id,
                leaderboardId: g._
            })
        ]
    });
}
function y(e) {
    let { guildId: t, leaderboardId: i } = e,
        { leaderboardsDisabled: u } = (0, d.O)(t, i);
    return null == (0, a.e7)([l.Z], () => l.Z.getAccount(null, E.ABu.RIOT_GAMES)) || u
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.Z, { className: S.divider }),
                  (0, r.jsx)(s.Button, {
                      className: S.joinLeaderboardButton,
                      onClick: function () {
                          (0, s.openModalLazy)(async () => {
                              let { default: e } = await n.e('73217').then(n.bind(n, 139964));
                              return (n) =>
                                  (0, r.jsx)(e, {
                                      ...n,
                                      guildId: t
                                  });
                          });
                      },
                      children: I.intl.string(I.t['0yRXHx'])
                  })
              ]
          })
        : null;
}
t.Z = (e) => {
    let { guildId: t, previewMode: n = !1, source: a } = e,
        o = g._,
        [l, c] = i.useState(n),
        d = i.useRef(null),
        f = (0, _.Z)({
            guildId: t,
            leaderboardId: g._,
            intervalOffset: 0
        });
    return ((0, s.useFocusLock)(d),
    !(function (e) {
        let { guildId: t, leaderboardId: n, source: r } = e,
            a = (0, _.Z)({
                guildId: null != t ? t : '',
                leaderboardId: n,
                intervalOffset: 0
            }),
            s = (0, _.Z)({
                guildId: null != t ? t : '',
                leaderboardId: n,
                intervalOffset: -1
            });
        i.useEffect(() => {
            let e, n;
            if (null == a) return;
            let i = a.guild_settings.sort_by_statistic_id;
            if (null != s) {
                var o, l;
                let t = s.guild_settings.sort_by_statistic_id,
                    r = s.users[0];
                (e = null == r ? void 0 : r.user_id), (n = null == r ? void 0 : null === (l = r.statistics) || void 0 === l ? void 0 : null === (o = l[t]) || void 0 === o ? void 0 : o.value);
            }
            u.default.track(E.rMx.LEADERBOARD_POPOUT_VIEWED, {
                guild_id: t,
                leaderboard_id: a.leaderboard_id,
                interval_start: a.interval_start,
                interval_end: a.interval_end,
                sort_by_statistic_id: i,
                sort_desc: a.guild_settings.sort_desc,
                ordered_leaderboard_user_ids: a.users.map((e) => e.user_id),
                ordered_leaderboard_user_values: a.users.map((e) => {
                    var t, n;
                    return null !== (n = null === (t = e.statistics[i]) || void 0 === t ? void 0 : t.value) && void 0 !== n ? n : 0;
                }),
                opened_from_source: r,
                last_interval_champion_id: e,
                last_interval_champion_value: n
            });
        }, [t, n, r]);
    })({
        guildId: t,
        leaderboardId: o,
        source: a
    }),
    null == f)
        ? null
        : (0, r.jsx)(T, {
              children: (0, r.jsxs)('div', {
                  className: S.popout,
                  ref: d,
                  children: [
                      (0, r.jsxs)('div', {
                          className: S.content,
                          children: [
                              (0, r.jsx)(b, { leaderboard: f }),
                              (0, r.jsx)(m.Z, {
                                  leaderboard: f,
                                  previewMode: l
                              }),
                              l
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(p.Z, {
                                                className: S.previousChampion,
                                                guildId: t,
                                                leaderboardId: o,
                                                intervalOffset: -1
                                            }),
                                            (0, r.jsx)(y, {
                                                guildId: t,
                                                leaderboardId: o
                                            })
                                        ]
                                    })
                          ]
                      }),
                      l
                          ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(s.Clickable, {
                                    onClick: () => c(!1),
                                    children: (0, r.jsx)('div', {
                                        className: S.exitPreviewModeButton,
                                        children: (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            className: S.exitPreviewModeText,
                                            children: I.intl.string(I.t.GLeQe3)
                                        })
                                    })
                                })
                            })
                          : null
                  ]
              })
          });
};
