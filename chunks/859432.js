t.r(n), t(47120);
var a = t(735250),
    i = t(470079),
    l = t(512722),
    s = t.n(l),
    o = t(442837),
    r = t(704215),
    u = t(481060),
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
    h = t(887904),
    A = t(429824),
    L = t(466330),
    C = t(191471),
    T = t(162157),
    m = t(623624),
    x = t(894059),
    b = t(771212),
    D = t(434404),
    G = t(41776),
    S = t(837949),
    R = t(11352),
    U = t(703656),
    v = t(271383),
    O = t(496675),
    P = t(9156),
    j = t(594174),
    y = t(709586),
    w = t(626135),
    V = t(981631),
    B = t(647086),
    H = t(689938),
    k = t(359149);
function F(e) {
    (0, u.openModal)((n) =>
        (0, a.jsx)(f.g, {
            ...n,
            guild: e
        })
    );
}
let z = i.memo(function (e) {
    let { guild: n, onClose: l, onSelect: f } = e,
        z = (0, o.e7)([j.default], () => j.default.getCurrentUser());
    s()(null != z, 'GuildHeaderPopout: user cannot be undefined'),
        i.useEffect(() => {
            w.default.track(V.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: n.id });
        });
    let Y = (0, o.e7)([P.ZP], () => P.ZP.isGuildCollapsed(n.id), [n.id]),
        {
            canAccessSettings: K,
            canManageChannels: W,
            showGuildAnalytics: q
        } = (0, o.cj)(
            [O.Z],
            () => {
                let e = O.Z.can(V.Plq.VIEW_GUILD_ANALYTICS, n) && n.hasFeature(V.oNc.COMMUNITY);
                return {
                    canAccessSettings: O.Z.canAccessGuildSettings(n),
                    canManageChannels: O.Z.can(V.Plq.MANAGE_CHANNELS, n),
                    showGuildAnalytics: (0, b.Fv)(n.id) || e
                };
            },
            [n]
        ),
        X = (0, T.N8)(n),
        J = n.isOwner(z),
        Q = (0, o.e7)([G.Z], () => G.Z.isLurking(n.id), [n.id]),
        $ = (0, o.e7)([v.ZP], () => v.ZP.isCurrentUserGuest(n.id)),
        ee = (0, x.Z)(n.id, !0),
        en = (0, _.ZP)(n),
        et = (0, L.Z)({
            source: V.t4x.GUILD_HEADER,
            guild: n
        }),
        ea = (0, Z.Z)({
            guildId: n.id,
            userId: z.id,
            analyticsLocation: {
                page: V.ZY5.GUILD_CHANNEL,
                section: V.jXE.GUILD_DROPDOWN_MENU
            },
            icon: u.PencilIcon
        }),
        ei = n.hasFeature(V.oNc.HUB),
        el = n.id === B._,
        es = (0, S.Z)(n.id),
        eo = (0, N.Z)(n),
        er = (0, p.Z)(n),
        eu = (0, A.Z)(n, !0),
        ed = (0, h.Z)(n),
        { isFavoritesPerk: ec } = (0, M.z)('GuildHeaderPopout'),
        { triggerDeadchat: eE } = I.Z.useExperiment(
            {
                guildId: n.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        { triggerGamingStats: eI } = E.F.useExperiment(
            {
                guildId: n.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        e_ = R.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [eg] = (0, g.cv)([r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        eM = e_ && eg === r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return Q || $
        ? (0, a.jsx)(u.Menu, {
              onSelect: f,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: l,
              'aria-label': H.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
              children: (0, a.jsx)(u.MenuItem, {
                  id: 'leave-guild',
                  label: H.Z.Messages.LEAVE_SERVER,
                  icon: u.DoorExitIcon,
                  action: () => {
                      D.Z.leaveGuild(n.id), !$ && (0, U.uL)(V.Z5c.GUILD_DISCOVERY);
                  }
              })
          })
        : el
          ? (0, a.jsxs)(u.Menu, {
                onSelect: f,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: l,
                'aria-label': H.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                children: [
                    (0, a.jsxs)(u.MenuGroup, {
                        children: [
                            ec &&
                                (0, a.jsx)(u.MenuItem, {
                                    id: 'add-channel',
                                    label: H.Z.Messages.FAVORITES_ADD_A_CHANNEL,
                                    color: 'brand',
                                    icon: u.CirclePlusIcon,
                                    action: () =>
                                        (0, u.openModalLazy)(async () => {
                                            let { default: e } = await t.e('29608').then(t.bind(t, 178125));
                                            return (n) => (0, a.jsx)(e, { ...n });
                                        })
                                }),
                            (0, a.jsx)(u.MenuItem, {
                                id: 'create-category',
                                label: H.Z.Messages.CREATE_CATEGORY,
                                icon: u.FolderPlusIcon,
                                action: () =>
                                    (0, u.openModalLazy)(async () => {
                                        let { default: e } = await t.e('33356').then(t.bind(t, 477782));
                                        return (n) => (0, a.jsx)(e, { ...n });
                                    })
                            })
                        ]
                    }),
                    (0, a.jsx)(u.MenuGroup, {
                        children: (0, a.jsx)(u.MenuCheckboxItem, {
                            id: 'hide-muted-channels',
                            label: H.Z.Messages.HIDE_MUTED_CHANNELS,
                            checked: Y,
                            action: () => d.Z.toggleCollapseGuild(n.id)
                        })
                    })
                ]
            })
          : ei
            ? (0, a.jsxs)(u.Menu, {
                  onSelect: f,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: l,
                  'aria-label': H.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                  children: [
                      (0, a.jsxs)(u.MenuGroup, {
                          children: [
                              K
                                  ? (0, a.jsx)(u.MenuItem, {
                                        id: 'settings',
                                        label: H.Z.Messages.SERVER_SETTINGS,
                                        icon: u.SettingsIcon,
                                        action: () => {
                                            D.Z.open(n.id, V.pNK.OVERVIEW);
                                        }
                                    })
                                  : null,
                              et,
                              (0, a.jsx)(u.MenuItem, {
                                  id: 'privacy',
                                  label: H.Z.Messages.PRIVACY_SETTINGS,
                                  icon: u.ShieldIcon,
                                  action: () =>
                                      (0, u.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([t.e('96427'), t.e('81039'), t.e('52249'), t.e('54803'), t.e('15685'), t.e('72652'), t.e('32776'), t.e('79915'), t.e('33053'), t.e('8016'), t.e('37581'), t.e('76540'), t.e('68136'), t.e('87624'), t.e('22646'), t.e('25183'), t.e('57674'), t.e('30419'), t.e('48923'), t.e('18824'), t.e('52619'), t.e('8821'), t.e('18815'), t.e('70290')]).then(t.bind(t, 241420));
                                          return (t) =>
                                              (0, a.jsx)(e, {
                                                  ...t,
                                                  guild: n
                                              });
                                      })
                              }),
                              ea
                          ]
                      }),
                      J
                          ? null
                          : (0, a.jsx)(u.MenuGroup, {
                                children: (0, a.jsx)(u.MenuItem, {
                                    id: 'leave',
                                    label: H.Z.Messages.LEAVE_HUB,
                                    icon: u.DoorExitIcon,
                                    color: 'danger',
                                    action: () => F(n)
                                })
                            })
                  ]
              })
            : (0, a.jsxs)(u.Menu, {
                  onSelect: f,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: l,
                  'aria-label': H.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
                  children: [
                      (0, a.jsx)(u.MenuGroup, {
                          children: (0, a.jsx)(u.MenuItem, {
                              id: 'premium-subscribe',
                              label: H.Z.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                              icon: (0, u.makeIconCompat)(y.Z),
                              action: () => {
                                  (0, m.f)({
                                      guildId: n.id,
                                      location: { section: V.jXE.GUILD_HEADER_POPOUT }
                                  });
                              }
                          })
                      }),
                      (0, a.jsxs)(u.MenuGroup, {
                          children: [
                              J && z.isStaff() && eE
                                  ? (0, a.jsx)(u.MenuItem, {
                                        id: 'create-deadchat',
                                        label: 'Deadchat Ping',
                                        icon: u.ChatCheckIcon,
                                        action: () => {
                                            (0, c.j8)(n.id, V.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                        }
                                    })
                                  : null,
                              J && z.isStaff() && eI
                                  ? (0, a.jsx)(u.MenuItem, {
                                        id: 'create-gaming-ping',
                                        label: 'Gaming Stats Ping',
                                        icon: u.ChatCheckIcon,
                                        action: () => {
                                            (0, c.j8)(n.id, V.uaV.GUILD_GAMING_STATS_PROMPT);
                                        }
                                    })
                                  : null,
                              et,
                              K
                                  ? (0, a.jsx)(u.MenuItem, {
                                        id: 'settings',
                                        label: H.Z.Messages.SERVER_SETTINGS,
                                        icon: u.SettingsIcon,
                                        action: () => {
                                            D.Z.open(n.id, V.pNK.OVERVIEW);
                                        }
                                    })
                                  : null,
                              q
                                  ? (0, a.jsx)(u.MenuItem, {
                                        id: 'insights',
                                        label: H.Z.Messages.SERVER_INSIGHTS,
                                        icon: u.AnalyticsIcon,
                                        action: () => D.Z.open(n.id, V.pNK.ANALYTICS)
                                    })
                                  : null,
                              W
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(u.MenuItem, {
                                                id: 'create-channel',
                                                label: H.Z.Messages.CREATE_CHANNEL,
                                                icon: u.CirclePlusIcon,
                                                action: () =>
                                                    (0, u.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([t.e('45094'), t.e('5324')]).then(t.bind(t, 218613));
                                                        return (t) =>
                                                            (0, a.jsx)(e, {
                                                                ...t,
                                                                channelType: V.d4z.GUILD_TEXT,
                                                                guildId: n.id
                                                            });
                                                    })
                                            }),
                                            (0, a.jsx)(u.MenuItem, {
                                                id: 'create-category',
                                                label: H.Z.Messages.CREATE_CATEGORY,
                                                icon: u.FolderPlusIcon,
                                                action: () =>
                                                    (0, u.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([t.e('45094'), t.e('5324')]).then(t.bind(t, 218613));
                                                        return (t) =>
                                                            (0, a.jsx)(e, {
                                                                ...t,
                                                                channelType: V.d4z.GUILD_CATEGORY,
                                                                guildId: n.id
                                                            });
                                                    })
                                            })
                                        ]
                                    })
                                  : null,
                              ee,
                              eo,
                              er,
                              en,
                              ed
                          ]
                      }),
                      (0, a.jsxs)(u.MenuGroup, {
                          children: [
                              es,
                              (0, a.jsx)(u.MenuItem, {
                                  id: 'notifications',
                                  label: (0, a.jsxs)('div', {
                                      className: k.newBadgeRow,
                                      children: [
                                          H.Z.Messages.NOTIFICATION_SETTINGS,
                                          eM &&
                                              (0, a.jsx)(u.TextBadge, {
                                                  className: k.newBadge,
                                                  text: H.Z.Messages.NEW
                                              })
                                      ]
                                  }),
                                  icon: eM ? void 0 : u.BellIcon,
                                  action: () =>
                                      (0, u.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([t.e('5863'), t.e('53658')]).then(t.bind(t, 751212));
                                          return (t) =>
                                              (0, a.jsx)(e, {
                                                  ...t,
                                                  guildId: n.id
                                              });
                                      })
                              }),
                              (0, a.jsx)(u.MenuItem, {
                                  id: 'privacy',
                                  label: H.Z.Messages.PRIVACY_SETTINGS,
                                  icon: u.ShieldIcon,
                                  action: () =>
                                      (0, u.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([t.e('96427'), t.e('81039'), t.e('52249'), t.e('54803'), t.e('15685'), t.e('72652'), t.e('32776'), t.e('79915'), t.e('33053'), t.e('8016'), t.e('37581'), t.e('76540'), t.e('68136'), t.e('87624'), t.e('22646'), t.e('25183'), t.e('57674'), t.e('30419'), t.e('48923'), t.e('18824'), t.e('52619'), t.e('8821'), t.e('18815'), t.e('70290')]).then(t.bind(t, 241420));
                                          return (t) =>
                                              (0, a.jsx)(e, {
                                                  ...t,
                                                  guild: n
                                              });
                                      })
                              })
                          ]
                      }),
                      (0, a.jsxs)(u.MenuGroup, {
                          children: [
                              ea,
                              (0, a.jsx)(u.MenuCheckboxItem, {
                                  id: 'hide-muted-channels',
                                  label: H.Z.Messages.HIDE_MUTED_CHANNELS,
                                  checked: Y,
                                  action: () => d.Z.toggleCollapseGuild(n.id)
                              })
                          ]
                      }),
                      (0, a.jsxs)(u.MenuGroup, {
                          children: [
                              eu,
                              X && n.isCommunity()
                                  ? (0, a.jsx)(u.MenuItem, {
                                        id: 'report-raid',
                                        label: H.Z.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                                        icon: u.ShieldIcon,
                                        color: 'danger',
                                        action: () => (0, C.J)(n.id)
                                    })
                                  : null,
                              J
                                  ? null
                                  : (0, a.jsx)(u.MenuItem, {
                                        id: 'leave',
                                        label: H.Z.Messages.LEAVE_SERVER,
                                        icon: u.DoorExitIcon,
                                        color: 'danger',
                                        action: () => F(n)
                                    })
                          ]
                      })
                  ]
              });
});
n.default = z;
