n.d(t, {
    Z: function () {
        return er;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(990547),
    c = n(91192),
    d = n(873546),
    u = n(442837),
    _ = n(704215),
    E = n(952265),
    h = n(481060),
    m = n(493683),
    I = n(758059),
    p = n(607070),
    g = n(213609),
    T = n(463119),
    f = n(377171),
    S = n(243778),
    C = n(922409),
    N = n(899740),
    A = n(28476),
    v = n(880257),
    Z = n(631885),
    L = n(522558),
    R = n(795448),
    O = n(441623),
    x = n(457396),
    b = n(108989),
    M = n(51596),
    P = n(905423),
    D = n(155409),
    y = n(210887),
    j = n(695346),
    U = n(283595),
    G = n(699516),
    w = n(923834),
    k = n(55563),
    B = n(774343),
    V = n(814225),
    H = n(515753),
    F = n(831218),
    Y = n(339149),
    z = n(981631),
    W = n(675654),
    K = n(474936),
    q = n(689938),
    Q = n(465200);
let X = (e) => {
        let { selected: t, ...n } = e,
            s = (0, c.JA)('friends'),
            r = (0, u.e7)([G.Z], () => G.Z.getPendingCount()),
            l = (0, u.e7)([O.Z], () => O.Z.canShowFriendsTabBadge()),
            d = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            { enabled: _ } = L.w.useExperiment({ location: 'Friends Tab' }, { autoTrackExposure: !1 }),
            E = l && _;
        a.useEffect(() => {
            E &&
                (0, g.h)({
                    name: o.ImpressionNames.GIFT_INTENT_BADGE,
                    type: o.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: K.hX.FRIEND_ANNIVERSARY }
                });
        }, [E]);
        let [m, T] = a.useState(!1);
        return (0, i.jsxs)('div', {
            className: Q.friendsButtonContainer,
            children: [
                (0, i.jsx)(H.Qj, {
                    onClick: () => {
                        E && (I.Z.setSection(z.pJs.ALL), (0, R.Gk)());
                    },
                    interactiveClassName: E ? Q.friendsBadge : void 0,
                    selected: t,
                    route: z.Z5c.FRIENDS,
                    icon: h.FriendsIcon,
                    text: q.Z.Messages.FRIENDS,
                    onMouseEnter: () => {
                        T(!0);
                    },
                    onMouseLeave: () => {
                        T(!1);
                    },
                    ...n,
                    ...s,
                    children: r > 0 ? (0, i.jsx)(h.NumberBadge, { count: r }) : null
                }),
                E &&
                    !d &&
                    (0, i.jsx)(b.Z, {
                        className: Q.confetti,
                        wind: 0,
                        sprites: W.CA,
                        spriteColors: W.Br,
                        firing: m,
                        confettiConfig: {
                            opacity: {
                                type: 'static',
                                value: 1
                            }
                        }
                    })
            ]
        });
    },
    J = (e) => {
        let { selected: t, hideGameUpdateProgressIndicator: n, ...a } = e,
            s = (0, c.JA)('library');
        return (0, i.jsx)(H.Qj, {
            selected: t,
            route: z.Z5c.APPLICATION_LIBRARY,
            icon: h.InventoryIcon,
            text: q.Z.Messages.LIBRARY,
            ...a,
            ...s,
            children: (0, i.jsx)(Y.Z, { className: r()(Q.downloadProgressCircle, { [Q.hideGameUpdateProgressIndicator]: n }) })
        });
    },
    $ = () => {
        let e = (0, N.q)();
        return e > 0 ? (0, i.jsx)(h.NumberBadge, { count: e }) : null;
    },
    ee = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)('messageRequests'),
            { channelId: a } = (0, C._)();
        if (!(0, A.a)()) return null;
        let s = null == a ? void 0 : () => m.Z.preload(z.ME, a);
        return (0, i.jsx)(H.Qj, {
            selected: t,
            route: z.Z5c.MESSAGE_REQUESTS,
            icon: h.EnvelopeIcon,
            text: q.Z.Messages.MESSAGE_REQUESTS,
            onClick: s,
            ...n,
            children: (0, i.jsx)($, {})
        });
    },
    et = (e) => {
        let { selected: t } = e,
            n = q.Z.Messages.FAMILY_CENTER_SIDEBAR_TITLE,
            s = (0, c.JA)('family-center'),
            r = j.Ex.useSetting(),
            l = (0, v.Z)(),
            [o, d] = a.useState(!0);
        return r && l
            ? (0, i.jsx)(H.Qj, {
                  selected: t,
                  route: z.Z5c.FAMILY_CENTER,
                  icon: h.GroupIcon,
                  text: n,
                  onMouseEnter: () => {
                      d(!0);
                  },
                  onMouseLeave: () => {
                      d(!1);
                  },
                  interactiveClassName: Q.familyCenterLinkButton,
                  ...s,
                  children: (0, i.jsx)(en, { isParentHovered: o })
              })
            : null;
    },
    en = (e) => {
        let { isParentHovered: t } = e,
            a = (0, Z.gU)();
        return t
            ? (0, i.jsx)(H.PZ, {
                  onClick: () => {
                      (0, E.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, i.jsx)(e, { ...t });
                      });
                  },
                  'aria-label': q.Z.Messages.CLOSE
              })
            : a > 0
              ? (0, i.jsx)('div', {
                    className: Q.familyCenterPendingBadge,
                    children: (0, i.jsx)(h.NumberBadge, { count: a })
                })
              : (0, i.jsx)(S.ZP, {
                    contentTypes: [_.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === _.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, i.jsx)(h.TextBadge, {
                                  text: q.Z.Messages.NEW,
                                  color: f.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    ei = () => (0, M.$Z)('DM_SEARCH');
function ea(e) {
    switch (e) {
        case z.Z5c.APPLICATION_LIBRARY:
            return z.ZY5.LIBRARY;
        case z.Z5c.FRIENDS:
            return z.ZY5.FRIENDS_LIST;
        case z.Z5c.COLLECTIBLES_SHOP:
            return z.ZY5.COLLECTIBLES_SHOP;
    }
    if (e.startsWith(z.Z5c.APPLICATION_STORE)) return e === z.Z5c.APPLICATION_STORE ? z.ZY5.STORE_DIRECTORY_HOME : e.startsWith(z.Z5c.APPLICATION_STORE) ? z.ZY5.STORE_DIRECTORY_BROWSE : z.ZY5.STORE_LISTING;
    return z.ZY5.DM_CHANNEL;
}
let es = (e) => {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: a, storeLink: s, premiumTabSelected: o } = e,
        [c, u] = (0, P.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, l.Z);
    return (0, i.jsxs)('nav', {
        className: Q.privateChannels,
        'aria-label': q.Z.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
        children: [
            (0, i.jsx)(D.Z, {
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, i.jsx)('div', {
                    className: r()(Q.searchBar, { [Q.themedHeaderMobile]: d.tq }),
                    children: (0, i.jsx)('button', {
                        type: 'button',
                        className: r()(Q.searchBarComponent, { [Q.themedSearchBarMobile]: d.tq }),
                        onClick: ei,
                        children: q.Z.Messages.DM_SEARCH_PLACEHOLDER
                    })
                })
            }),
            (0, i.jsxs)(F.Z, {
                ...e,
                version: u,
                selectedChannelId: c,
                showDMHeader: !0,
                children: [
                    (0, i.jsx)(X, { selected: null != u ? u === z.Z5c.FRIENDS : a === z.Z5c.FRIENDS }, 'friends'),
                    n && t
                        ? (0, i.jsx)(
                              J,
                              {
                                  selected: null == u ? null != a && a.startsWith(z.Z5c.APPLICATION_LIBRARY) : u.startsWith(z.Z5c.APPLICATION_LIBRARY),
                                  hideGameUpdateProgressIndicator: a === z.Z5c.APPLICATION_LIBRARY
                              },
                              'library'
                          )
                        : null,
                    (0, i.jsx)(
                        x.g,
                        {
                            selected: null == u ? o : u.startsWith(z.Z5c.APPLICATION_STORE),
                            route: null == s || location.pathname.startsWith(z.Z5c.ACTIVITIES) || location.pathname.startsWith(z.Z5c.APPLICATION_STORE) ? z.Z5c.APPLICATION_STORE : s,
                            locationState: {
                                analyticsSource: {
                                    page: ea(a),
                                    section: z.jXE.NAVIGATION,
                                    object: z.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'premium'
                    ),
                    (0, i.jsx)(ee, { selected: null == u ? null != a && a.startsWith(z.Z5c.MESSAGE_REQUESTS) : u === z.Z5c.MESSAGE_REQUESTS }, 'message-requests'),
                    (0, i.jsx)(
                        T.i,
                        {
                            selected: u === z.Z5c.COLLECTIBLES_SHOP || (null == a ? void 0 : a.startsWith(z.Z5c.COLLECTIBLES_SHOP)),
                            locationState: {
                                analyticsSource: {
                                    page: ea(a),
                                    section: z.jXE.NAVIGATION,
                                    object: z.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'discord-shop'
                    ),
                    (0, i.jsx)(et, { selected: (null != a && a.startsWith(z.Z5c.FAMILY_CENTER)) || (null != u && u.startsWith(z.Z5c.FAMILY_CENTER)) }, 'family-center')
                ]
            })
        ]
    });
};
function er() {
    let e = (0, u.e7)([B.Z], () => B.Z.getHomeLink()),
        t = (0, u.e7)(
            [k.Z],
            () => {
                if (e === z.Z5c.APPLICATION_STORE) return !0;
                let t = (0, V.ZK)(e);
                if (null != t) {
                    var n, i;
                    return null !== (i = null === (n = k.Z.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== i && i;
                }
                return !1;
            },
            [e]
        ),
        n = !j.bm.useSetting(),
        { theme: a } = (0, u.cj)([y.Z], () => ({ theme: y.Z.theme })),
        s = (0, u.e7)([U.Z], () => U.Z.hasLibraryApplication()),
        r = (0, u.e7)([w.Z], () => w.Z.getCurrentPath());
    return (0, i.jsx)(es, {
        theme: a,
        showLibrary: n,
        hasLibraryApplication: s,
        storeLink: r,
        homeLink: e,
        premiumTabSelected: t
    });
}
