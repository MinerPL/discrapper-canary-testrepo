n.d(t, {
    Z: function () {
        return et;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(91192),
    c = n(873546),
    d = n(442837),
    u = n(704215),
    _ = n(952265),
    E = n(481060),
    h = n(493683),
    m = n(367907),
    I = n(770471),
    g = n(158631),
    p = n(143614),
    T = n(463119),
    S = n(377171),
    C = n(243778),
    f = n(922409),
    N = n(899740),
    A = n(28476),
    v = n(880257),
    L = n(631885),
    Z = n(457396),
    R = n(51596),
    O = n(905423),
    x = n(155409),
    b = n(210887),
    P = n(695346),
    M = n(283595),
    D = n(699516),
    y = n(923834),
    j = n(55563),
    U = n(774343),
    G = n(436088),
    w = n(814225),
    k = n(515753),
    B = n(831218),
    H = n(339149),
    V = n(981631),
    F = n(689938),
    Y = n(308809);
let W = (e) => {
        let { selected: t, ...n } = e,
            a = (0, o.JA)('friends'),
            s = (0, d.e7)([D.Z], () => D.Z.getPendingCount()),
            r = (0, p.Z)(),
            { canViewBroadcasts: l } = I.Z.useExperiment({ location: 'friends_tab_no_track' }),
            c = (0, g.ZP)();
        return (0, i.jsxs)(k.Qj, {
            selected: t,
            route: V.Z5c.FRIENDS,
            icon: E.FriendsIcon,
            text: F.Z.Messages.FRIENDS,
            onClick: () => {
                m.ZP.trackWithMetadata(V.rMx.BROADCAST_LIST_VISITED, {
                    num_active_broadcasts: r.length,
                    friends_tab_clicked: !0,
                    is_broadcasting: c
                });
            },
            ...n,
            ...a,
            children: [
                r.length > 0 &&
                    l &&
                    (0, i.jsx)(E.TextBadge, {
                        color: S.Z.BG_BRAND,
                        text: (0, i.jsxs)('div', {
                            className: Y.broadcastingBadge,
                            children: [
                                (0, i.jsx)(G.Z, { className: Y.broadcastingIcon }),
                                (0, i.jsx)(E.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'always-white',
                                    children: r.length.toLocaleString()
                                })
                            ]
                        })
                    }),
                s > 0 ? (0, i.jsx)(E.NumberBadge, { count: s }) : null
            ]
        });
    },
    z = (e) => {
        let { selected: t, hideGameUpdateProgressIndicator: n, ...a } = e,
            s = (0, o.JA)('library');
        return (0, i.jsx)(k.Qj, {
            selected: t,
            route: V.Z5c.APPLICATION_LIBRARY,
            icon: E.InventoryIcon,
            text: F.Z.Messages.LIBRARY,
            ...a,
            ...s,
            children: (0, i.jsx)(H.Z, { className: r()(Y.downloadProgressCircle, { [Y.hideGameUpdateProgressIndicator]: n }) })
        });
    },
    K = () => {
        let e = (0, N.q)(),
            t = (0, N.T)();
        return e > 0
            ? (0, i.jsx)(E.NumberBadge, {
                  count: e,
                  color: 0 === t ? S.Z.ICON_MUTED : void 0
              })
            : null;
    },
    q = (e) => {
        let { selected: t } = e,
            n = (0, o.JA)('messageRequests'),
            { channelId: a } = (0, f._)();
        if (!(0, A.a)()) return null;
        let s = null == a ? void 0 : () => h.Z.preload(V.ME, a);
        return (0, i.jsx)(k.Qj, {
            selected: t,
            route: V.Z5c.MESSAGE_REQUESTS,
            icon: E.EnvelopeIcon,
            text: F.Z.Messages.MESSAGE_REQUESTS,
            onClick: s,
            ...n,
            children: (0, i.jsx)(K, {})
        });
    },
    Q = (e) => {
        let { selected: t } = e,
            n = F.Z.Messages.FAMILY_CENTER_SIDEBAR_TITLE,
            s = (0, o.JA)('family-center'),
            r = P.Ex.useSetting(),
            l = (0, v.Z)(),
            [c, d] = a.useState(!0);
        return r && l
            ? (0, i.jsx)(k.Qj, {
                  selected: t,
                  route: V.Z5c.FAMILY_CENTER,
                  icon: E.GroupIcon,
                  text: n,
                  onMouseEnter: () => {
                      d(!0);
                  },
                  onMouseLeave: () => {
                      d(!1);
                  },
                  interactiveClassName: Y.familyCenterLinkButton,
                  ...s,
                  children: (0, i.jsx)(X, { isParentHovered: c })
              })
            : null;
    },
    X = (e) => {
        let { isParentHovered: t } = e,
            a = (0, L.gU)();
        return t
            ? (0, i.jsx)(k.PZ, {
                  onClick: () => {
                      (0, _.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, i.jsx)(e, { ...t });
                      });
                  },
                  'aria-label': F.Z.Messages.CLOSE
              })
            : a > 0
              ? (0, i.jsx)('div', {
                    className: Y.familyCenterPendingBadge,
                    children: (0, i.jsx)(E.NumberBadge, { count: a })
                })
              : (0, i.jsx)(C.ZP, {
                    contentTypes: [u.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === u.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, i.jsx)(E.TextBadge, {
                                  text: F.Z.Messages.NEW,
                                  color: S.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    J = () => (0, R.$Z)('DM_SEARCH');
function $(e) {
    switch (e) {
        case V.Z5c.APPLICATION_LIBRARY:
            return V.ZY5.LIBRARY;
        case V.Z5c.FRIENDS:
            return V.ZY5.FRIENDS_LIST;
        case V.Z5c.COLLECTIBLES_SHOP:
            return V.ZY5.COLLECTIBLES_SHOP;
    }
    if (e.startsWith(V.Z5c.APPLICATION_STORE)) return e === V.Z5c.APPLICATION_STORE ? V.ZY5.STORE_DIRECTORY_HOME : e.startsWith(V.Z5c.APPLICATION_STORE) ? V.ZY5.STORE_DIRECTORY_BROWSE : V.ZY5.STORE_LISTING;
    return V.ZY5.DM_CHANNEL;
}
let ee = (e) => {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: a, storeLink: s, premiumTabSelected: o } = e,
        [d, u] = (0, O.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, l.Z);
    return (0, i.jsxs)('nav', {
        className: Y.privateChannels,
        'aria-label': F.Z.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
        children: [
            (0, i.jsx)(x.Z, {
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, i.jsx)('div', {
                    className: r()(Y.searchBar, { [Y.themedHeaderMobile]: c.tq }),
                    children: (0, i.jsx)('button', {
                        type: 'button',
                        className: r()(Y.searchBarComponent, { [Y.themedSearchBarMobile]: c.tq }),
                        onClick: J,
                        children: F.Z.Messages.DM_SEARCH_PLACEHOLDER
                    })
                })
            }),
            (0, i.jsxs)(B.Z, {
                ...e,
                version: u,
                selectedChannelId: d,
                showDMHeader: !0,
                children: [
                    (0, i.jsx)(W, { selected: null != u ? u === V.Z5c.FRIENDS : a === V.Z5c.FRIENDS }, 'friends'),
                    n && t
                        ? (0, i.jsx)(
                              z,
                              {
                                  selected: null == u ? null != a && a.startsWith(V.Z5c.APPLICATION_LIBRARY) : u.startsWith(V.Z5c.APPLICATION_LIBRARY),
                                  hideGameUpdateProgressIndicator: a === V.Z5c.APPLICATION_LIBRARY
                              },
                              'library'
                          )
                        : null,
                    (0, i.jsx)(
                        Z.g,
                        {
                            selected: null == u ? o : u.startsWith(V.Z5c.APPLICATION_STORE),
                            route: null == s || location.pathname.startsWith(V.Z5c.ACTIVITIES) || location.pathname.startsWith(V.Z5c.APPLICATION_STORE) ? V.Z5c.APPLICATION_STORE : s,
                            locationState: {
                                analyticsSource: {
                                    page: $(a),
                                    section: V.jXE.NAVIGATION,
                                    object: V.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'premium'
                    ),
                    (0, i.jsx)(q, { selected: null == u ? null != a && a.startsWith(V.Z5c.MESSAGE_REQUESTS) : u === V.Z5c.MESSAGE_REQUESTS }, 'message-requests'),
                    (0, i.jsx)(
                        T.i,
                        {
                            selected: u === V.Z5c.COLLECTIBLES_SHOP || (null == a ? void 0 : a.startsWith(V.Z5c.COLLECTIBLES_SHOP)),
                            locationState: {
                                analyticsSource: {
                                    page: $(a),
                                    section: V.jXE.NAVIGATION,
                                    object: V.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'discord-shop'
                    ),
                    (0, i.jsx)(Q, { selected: (null != a && a.startsWith(V.Z5c.FAMILY_CENTER)) || (null != u && u.startsWith(V.Z5c.FAMILY_CENTER)) }, 'family-center')
                ]
            })
        ]
    });
};
function et() {
    let e = (0, d.e7)([U.Z], () => U.Z.getHomeLink()),
        t = (0, d.e7)(
            [j.Z],
            () => {
                if (e === V.Z5c.APPLICATION_STORE) return !0;
                let t = (0, w.ZK)(e);
                if (null != t) {
                    var n, i;
                    return null !== (i = null === (n = j.Z.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== i && i;
                }
                return !1;
            },
            [e]
        ),
        n = !P.bm.useSetting(),
        { theme: a } = (0, d.cj)([b.Z], () => ({ theme: b.Z.theme })),
        s = (0, d.e7)([M.Z], () => M.Z.hasLibraryApplication()),
        r = (0, d.e7)([y.Z], () => y.Z.getCurrentPath());
    return (0, i.jsx)(ee, {
        theme: a,
        showLibrary: n,
        hasLibraryApplication: s,
        storeLink: r,
        homeLink: e,
        premiumTabSelected: t
    });
}
