n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(200651);
n(192379);
var i = n(99815),
    a = n(442837),
    s = n(481060),
    o = n(239091),
    l = n(314897),
    u = n(553795),
    c = n(430824),
    d = n(496675),
    f = n(626135),
    _ = n(70956),
    h = n(425128),
    p = n(979192),
    m = n(703733),
    g = n(981631),
    E = n(388032),
    v = n(288984);
function I(e) {
    let { guildId: t, leaderboardId: I } = e,
        S = (0, a.e7)([l.default], () => l.default.getId()),
        T = (0, a.e7)([u.Z], () => u.Z.getAccount(null, g.ABu.RIOT_GAMES)),
        b = (0, a.e7)([u.Z], () => u.Z.getAccount(null, g.ABu.LEAGUE_OF_LEGENDS)),
        { leaderboardsDisabled: y } = (0, p.O)(t, I),
        A =
            null != b && null != T
                ? () => {
                      f.default.track(g.rMx.LEADERBOARD_USER_DATA_REFRESH_REQUESTED, {
                          leaderboard_id: I,
                          guild_id: t
                      }),
                          (0, h._7)({
                              riotConnectionId: T.id,
                              lolConnectionId: b.id
                          });
                  }
                : g.dG4,
        N = null == T || y ? E.intl.string(E.t['0yRXHx']) : E.intl.string(E.t['KWpU6+']),
        { lastUpdateRequested: C, statisticLastUpdatedDate: R } = (0, m.Z)({
            userId: S,
            guildId: t,
            leaderboardId: I,
            statisticId: i.E.LOL_TOTAL_KILLS
        }),
        { disabled: O, subtext: D } = (function (e, t) {
            if (null == e)
                return {
                    disabled: !1,
                    subtext: void 0
                };
            let n = (Date.now() - e.getTime()) / _.Z.Millis.SECOND;
            if (n < 0)
                return {
                    disabled: !1,
                    subtext: void 0
                };
            let r = null != t ? e.getTime() > t.getTime() && n < _.Z.Seconds.HOUR : n < _.Z.Seconds.HOUR,
                i = r
                    ? E.intl.string(E.t['3gPhoa'])
                    : (function (e) {
                          if (e > _.Z.Seconds.DAYS_30) {
                              let t = Math.round(e / _.Z.Seconds.DAYS_30);
                              return E.intl.formatToPlainString(E.t['HF7p4+'], { count: t });
                          }
                          if (e > 2 * _.Z.Seconds.DAY) {
                              let t = Math.round(e / _.Z.Seconds.DAY);
                              return E.intl.formatToPlainString(E.t.HkESOj, { count: t });
                          }
                          if (e > _.Z.Seconds.DAY) return E.intl.string(E.t.gvgh9P);
                          else if (e > _.Z.Seconds.HOUR) {
                              let t = Math.round(e / _.Z.Seconds.HOUR);
                              return E.intl.formatToPlainString(E.t.mW55WV, { count: t });
                          } else {
                              if (!(e > _.Z.Seconds.MINUTE)) return E.intl.string(E.t.tT0mdn);
                              let t = Math.round(e / _.Z.Seconds.MINUTE);
                              return E.intl.formatToPlainString(E.t['1mNjX1'], { count: t });
                          }
                      })(n);
            return {
                disabled: r,
                subtext: i
            };
        })(C, R),
        L = (0, a.e7)(
            [d.Z, c.Z],
            () => {
                let e = c.Z.getGuild(t);
                return d.Z.can(g.Plq.ADMINISTRATOR, e);
            },
            [t]
        );
    return (0, r.jsx)(s.Popout, {
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(s.Menu, {
                navId: 'leaderboard-popout-context-menu',
                onClose: () => {
                    (0, o.Zy)(), i();
                },
                'aria-label': E.intl.string(E.t.BjCuf3),
                onSelect: void 0,
                children: (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(s.MenuGroup, {
                        children: [
                            null != T &&
                                (0, r.jsx)(s.MenuItem, {
                                    id: 'refresh-my-data',
                                    label: E.intl.string(E.t.iopWUV),
                                    action: A,
                                    disabled: O,
                                    subtext: D
                                }),
                            (0, r.jsx)(s.MenuItem, {
                                id: 'leaderboard-modal',
                                label: N,
                                action: () => {
                                    (0, s.openModalLazy)(async () => {
                                        let { default: e } = await n.e('73217').then(n.bind(n, 139964));
                                        return (n) =>
                                            (0, r.jsx)(e, {
                                                ...n,
                                                guildId: t
                                            });
                                    }),
                                        null == i || i();
                                }
                            }),
                            L
                                ? (0, r.jsx)(s.MenuItem, {
                                      id: 'leaderboard-settings-modal',
                                      label: E.intl.string(E.t['QV4/6u']),
                                      action: () => {
                                          (0, s.openModalLazy)(async () => {
                                              let { default: e } = await n.e('25526').then(n.bind(n, 262918));
                                              return (n) =>
                                                  (0, r.jsx)(e, {
                                                      ...n,
                                                      guildId: t,
                                                      leaderboardId: I
                                                  });
                                          }),
                                              null == i || i();
                                      }
                                  })
                                : null
                        ]
                    })
                })
            });
        },
        children: (e) =>
            (0, r.jsx)(s.Tooltip, {
                text: E.intl.string(E.t.UKOtz8),
                children: (t) =>
                    (0, r.jsx)(s.Clickable, {
                        ...t,
                        className: v.menuIcon,
                        ...e,
                        children: (0, r.jsx)(s.MoreHorizontalIcon, {
                            color: 'currentColor',
                            size: 'custom',
                            width: 16,
                            height: 16
                        })
                    })
            })
    });
}
