t.r(n), t(47120);
var a = t(735250),
    i = t(470079),
    l = t(512722),
    s = t.n(l),
    o = t(442837),
    u = t(704215),
    r = t(481060),
    d = t(5036),
    c = t(553385),
    E = t(52011),
    I = t(890477),
    _ = t(458034),
    g = t(706140),
    M = t(362658),
    f = t(241851),
    N = t(294978),
    p = t(513102),
    Z = t(976192),
    h = t(429824),
    A = t(466330),
    L = t(191471),
    C = t(162157),
    T = t(623624),
    m = t(894059),
    x = t(771212),
    G = t(434404),
    D = t(41776),
    b = t(837949),
    S = t(11352),
    R = t(703656),
    U = t(271383),
    O = t(496675),
    v = t(9156),
    P = t(594174),
    j = t(709586),
    y = t(626135),
    w = t(981631),
    V = t(647086),
    B = t(689938),
    H = t(602343);
function k(e) {
    (0, r.openModal)((n) =>
        (0, a.jsx)(f.g, {
            ...n,
            guild: e
        })
    );
}
let z = i.memo(function (e) {
    let { guild: n, onClose: l, onSelect: f } = e,
        z = (0, o.e7)([P.default], () => P.default.getCurrentUser());
    s()(null != z, 'GuildHeaderPopout: user cannot be undefined'),
        i.useEffect(() => {
            y.default.track(w.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: n.id });
        });
    let F = (0, o.e7)([v.ZP], () => v.ZP.isGuildCollapsed(n.id), [n.id]),
        {
            canAccessSettings: Y,
            canManageChannels: K,
            showGuildAnalytics: W
        } = (0, o.cj)(
            [O.Z],
            () => {
                let e = O.Z.can(w.Plq.VIEW_GUILD_ANALYTICS, n) && n.hasFeature(w.oNc.COMMUNITY);
                return {
                    canAccessSettings: O.Z.canAccessGuildSettings(n),
                    canManageChannels: O.Z.can(w.Plq.MANAGE_CHANNELS, n),
                    showGuildAnalytics: (0, x.Fv)(n.id) || e
                };
            },
            [n]
        ),
        q = (0, C.N8)(n),
        X = n.isOwner(z),
        J = (0, o.e7)([D.Z], () => D.Z.isLurking(n.id), [n.id]),
        Q = (0, o.e7)([U.ZP], () => U.ZP.isCurrentUserGuest(n.id)),
        $ = (0, m.Z)(n.id, !0),
        ee = (0, _.ZP)(n),
        en = (0, A.Z)({
            source: w.t4x.GUILD_HEADER,
            guild: n
        }),
        et = (0, Z.Z)({
            guildId: n.id,
            userId: z.id,
            analyticsLocation: {
                page: w.ZY5.GUILD_CHANNEL,
                section: w.jXE.GUILD_DROPDOWN_MENU
            },
            icon: r.PencilIcon
        }),
        ea = n.hasFeature(w.oNc.HUB),
        ei = n.id === V._,
        el = (0, b.Z)(n.id),
        es = (0, N.Z)(n),
        eo = (0, p.Z)(n),
        eu = (0, h.Z)(n, !0),
        { isFavoritesPerk: er } = (0, M.z)('GuildHeaderPopout'),
        { triggerDeadchat: ed } = I.Z.useExperiment(
            {
                guildId: n.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        { triggerGamingStats: ec } = E.F.useExperiment(
            {
                guildId: n.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        eE = S.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [eI] = (0, g.cv)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        e_ = eE && eI === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return J || Q
        ? (0, a.jsx)(r.Menu, {
              onSelect: f,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: l,
              'aria-label': B.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
              children: (0, a.jsx)(r.MenuItem, {
                  id: 'leave-guild',
                  label: B.Z.Messages.LEAVE_SERVER,
                  icon: r.DoorExitIcon,
                  action: () => {
                      G.Z.leaveGuild(n.id), !Q && (0, R.uL)(w.Z5c.GUILD_DISCOVERY);
                  }
              })
          })
        : ei
          ? (0, a.jsxs)(r.Menu, {
                onSelect: f,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: l,
                'aria-label': B.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                children: [
                    (0, a.jsxs)(r.MenuGroup, {
                        children: [
                            er &&
                                (0, a.jsx)(r.MenuItem, {
                                    id: 'add-channel',
                                    label: B.Z.Messages.FAVORITES_ADD_A_CHANNEL,
                                    color: 'brand',
                                    icon: r.CirclePlusIcon,
                                    action: () =>
                                        (0, r.openModalLazy)(async () => {
                                            let { default: e } = await t.e('29608').then(t.bind(t, 178125));
                                            return (n) => (0, a.jsx)(e, { ...n });
                                        })
                                }),
                            (0, a.jsx)(r.MenuItem, {
                                id: 'create-category',
                                label: B.Z.Messages.CREATE_CATEGORY,
                                icon: r.FolderPlusIcon,
                                action: () =>
                                    (0, r.openModalLazy)(async () => {
                                        let { default: e } = await t.e('33356').then(t.bind(t, 477782));
                                        return (n) => (0, a.jsx)(e, { ...n });
                                    })
                            })
                        ]
                    }),
                    (0, a.jsx)(r.MenuGroup, {
                        children: (0, a.jsx)(r.MenuCheckboxItem, {
                            id: 'hide-muted-channels',
                            label: B.Z.Messages.HIDE_MUTED_CHANNELS,
                            checked: F,
                            action: () => d.Z.toggleCollapseGuild(n.id)
                        })
                    })
                ]
            })
          : ea
            ? (0, a.jsxs)(r.Menu, {
                  onSelect: f,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: l,
                  'aria-label': B.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                  children: [
                      (0, a.jsxs)(r.MenuGroup, {
                          children: [
                              Y
                                  ? (0, a.jsx)(r.MenuItem, {
                                        id: 'settings',
                                        label: B.Z.Messages.SERVER_SETTINGS,
                                        icon: r.SettingsIcon,
                                        action: () => {
                                            G.Z.open(n.id, w.pNK.OVERVIEW);
                                        }
                                    })
                                  : null,
                              en,
                              (0, a.jsx)(r.MenuItem, {
                                  id: 'privacy',
                                  label: B.Z.Messages.PRIVACY_SETTINGS,
                                  icon: r.ShieldIcon,
                                  action: () =>
                                      (0, r.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([t.e('96427'), t.e('65149'), t.e('52249'), t.e('54803'), t.e('15685'), t.e('47006'), t.e('32776'), t.e('18209'), t.e('33053'), t.e('8016'), t.e('37581'), t.e('76540'), t.e('68136'), t.e('87624'), t.e('22646'), t.e('5528'), t.e('18146'), t.e('43331'), t.e('30419'), t.e('18824'), t.e('37229'), t.e('52619'), t.e('29291'), t.e('54535'), t.e('71661'), t.e('2047')]).then(t.bind(t, 241420));
                                          return (t) =>
                                              (0, a.jsx)(e, {
                                                  ...t,
                                                  guild: n
                                              });
                                      })
                              }),
                              et
                          ]
                      }),
                      X
                          ? null
                          : (0, a.jsx)(r.MenuGroup, {
                                children: (0, a.jsx)(r.MenuItem, {
                                    id: 'leave',
                                    label: B.Z.Messages.LEAVE_HUB,
                                    icon: r.DoorExitIcon,
                                    color: 'danger',
                                    action: () => k(n)
                                })
                            })
                  ]
              })
            : (0, a.jsxs)(r.Menu, {
                  onSelect: f,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: l,
                  'aria-label': B.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                  children: [
                      (0, a.jsx)(r.MenuGroup, {
                          children: (0, a.jsx)(r.MenuItem, {
                              id: 'premium-subscribe',
                              label: B.Z.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                              icon: (0, r.makeIconCompat)(j.Z),
                              action: () => {
                                  (0, T.f)({
                                      guildId: n.id,
                                      location: { section: w.jXE.GUILD_HEADER_POPOUT }
                                  });
                              }
                          })
                      }),
                      (0, a.jsxs)(r.MenuGroup, {
                          children: [
                              X && z.isStaff() && ed
                                  ? (0, a.jsx)(r.MenuItem, {
                                        id: 'create-deadchat',
                                        label: 'Deadchat Ping',
                                        icon: r.ChatCheckIcon,
                                        action: () => {
                                            (0, c.j8)(n.id, w.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                        }
                                    })
                                  : null,
                              X && z.isStaff() && ec
                                  ? (0, a.jsx)(r.MenuItem, {
                                        id: 'create-gaming-ping',
                                        label: 'Gaming Stats Ping',
                                        icon: r.ChatCheckIcon,
                                        action: () => {
                                            (0, c.j8)(n.id, w.uaV.GUILD_GAMING_STATS_PROMPT);
                                        }
                                    })
                                  : null,
                              en,
                              Y
                                  ? (0, a.jsx)(r.MenuItem, {
                                        id: 'settings',
                                        label: B.Z.Messages.SERVER_SETTINGS,
                                        icon: r.SettingsIcon,
                                        action: () => {
                                            G.Z.open(n.id, w.pNK.OVERVIEW);
                                        }
                                    })
                                  : null,
                              W
                                  ? (0, a.jsx)(r.MenuItem, {
                                        id: 'insights',
                                        label: B.Z.Messages.SERVER_INSIGHTS,
                                        icon: r.AnalyticsIcon,
                                        action: () => G.Z.open(n.id, w.pNK.ANALYTICS)
                                    })
                                  : null,
                              K
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(r.MenuItem, {
                                                id: 'create-channel',
                                                label: B.Z.Messages.CREATE_CHANNEL,
                                                icon: r.CirclePlusIcon,
                                                action: () =>
                                                    (0, r.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([t.e('45094'), t.e('58983')]).then(t.bind(t, 218613));
                                                        return (t) =>
                                                            (0, a.jsx)(e, {
                                                                ...t,
                                                                channelType: w.d4z.GUILD_TEXT,
                                                                guildId: n.id
                                                            });
                                                    })
                                            }),
                                            (0, a.jsx)(r.MenuItem, {
                                                id: 'create-category',
                                                label: B.Z.Messages.CREATE_CATEGORY,
                                                icon: r.FolderPlusIcon,
                                                action: () =>
                                                    (0, r.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([t.e('45094'), t.e('58983')]).then(t.bind(t, 218613));
                                                        return (t) =>
                                                            (0, a.jsx)(e, {
                                                                ...t,
                                                                channelType: w.d4z.GUILD_CATEGORY,
                                                                guildId: n.id
                                                            });
                                                    })
                                            })
                                        ]
                                    })
                                  : null,
                              $,
                              es,
                              eo,
                              ee
                          ]
                      }),
                      (0, a.jsxs)(r.MenuGroup, {
                          children: [
                              el,
                              (0, a.jsx)(r.MenuItem, {
                                  id: 'notifications',
                                  label: (0, a.jsxs)('div', {
                                      className: H.newBadgeRow,
                                      children: [
                                          B.Z.Messages.NOTIFICATION_SETTINGS,
                                          e_ &&
                                              (0, a.jsx)(r.TextBadge, {
                                                  className: H.newBadge,
                                                  text: B.Z.Messages.NEW
                                              })
                                      ]
                                  }),
                                  icon: e_ ? void 0 : r.BellIcon,
                                  action: () =>
                                      (0, r.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([t.e('5863'), t.e('48324')]).then(t.bind(t, 751212));
                                          return (t) =>
                                              (0, a.jsx)(e, {
                                                  ...t,
                                                  guildId: n.id
                                              });
                                      })
                              }),
                              (0, a.jsx)(r.MenuItem, {
                                  id: 'privacy',
                                  label: B.Z.Messages.PRIVACY_SETTINGS,
                                  icon: r.ShieldIcon,
                                  action: () =>
                                      (0, r.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([t.e('96427'), t.e('65149'), t.e('52249'), t.e('54803'), t.e('15685'), t.e('47006'), t.e('32776'), t.e('18209'), t.e('33053'), t.e('8016'), t.e('37581'), t.e('76540'), t.e('68136'), t.e('87624'), t.e('22646'), t.e('5528'), t.e('18146'), t.e('43331'), t.e('30419'), t.e('18824'), t.e('37229'), t.e('52619'), t.e('29291'), t.e('54535'), t.e('71661'), t.e('2047')]).then(t.bind(t, 241420));
                                          return (t) =>
                                              (0, a.jsx)(e, {
                                                  ...t,
                                                  guild: n
                                              });
                                      })
                              })
                          ]
                      }),
                      (0, a.jsxs)(r.MenuGroup, {
                          children: [
                              et,
                              (0, a.jsx)(r.MenuCheckboxItem, {
                                  id: 'hide-muted-channels',
                                  label: B.Z.Messages.HIDE_MUTED_CHANNELS,
                                  checked: F,
                                  action: () => d.Z.toggleCollapseGuild(n.id)
                              })
                          ]
                      }),
                      (0, a.jsxs)(r.MenuGroup, {
                          children: [
                              eu,
                              q && n.isCommunity()
                                  ? (0, a.jsx)(r.MenuItem, {
                                        id: 'report-raid',
                                        label: B.Z.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                                        icon: r.ShieldIcon,
                                        color: 'danger',
                                        action: () => (0, L.J)(n.id)
                                    })
                                  : null,
                              X
                                  ? null
                                  : (0, a.jsx)(r.MenuItem, {
                                        id: 'leave',
                                        label: B.Z.Messages.LEAVE_SERVER,
                                        icon: r.DoorExitIcon,
                                        color: 'danger',
                                        action: () => k(n)
                                    })
                          ]
                      })
                  ]
              });
});
n.default = z;
