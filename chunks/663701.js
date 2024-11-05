n.d(t, {
    Z: function () {
        return eo;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(782690),
    o = n(990547),
    c = n(91192),
    d = n(873546),
    u = n(442837),
    h = n(704215),
    m = n(952265),
    p = n(481060),
    g = n(493683),
    f = n(529103),
    _ = n(607070),
    E = n(213609),
    I = n(143757),
    C = n(463119),
    v = n(377171),
    S = n(243778),
    N = n(922409),
    T = n(899740),
    x = n(28476),
    b = n(880257),
    A = n(631885),
    Z = n(522558),
    y = n(795448),
    L = n(441623),
    R = n(457396),
    P = n(108989),
    O = n(51596),
    j = n(905423),
    D = n(155409),
    M = n(210887),
    w = n(695346),
    k = n(283595),
    U = n(699516),
    G = n(923834),
    B = n(55563),
    H = n(774343),
    V = n(626135),
    F = n(814225),
    z = n(515753),
    Y = n(831218),
    W = n(339149),
    K = n(981631),
    q = n(675654),
    X = n(474936),
    Q = n(388032),
    J = n(465200);
let $ = (e) => {
        let { selected: t, ...n } = e,
            a = (0, c.JA)('friends'),
            l = (0, u.e7)([U.Z], () => U.Z.getPendingCount()),
            s = (0, u.e7)([L.Z], () => L.Z.canShowFriendsTabBadge()),
            d = (0, u.e7)([_.Z], () => _.Z.useReducedMotion),
            { enabled: h } = Z.w.useExperiment({ location: 'Friends Tab' }, { autoTrackExposure: !1 }),
            m = s && h;
        r.useEffect(() => {
            m &&
                (0, E.h)({
                    name: o.ImpressionNames.GIFT_INTENT_BADGE,
                    type: o.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: X.hX.FRIEND_ANNIVERSARY }
                });
        }, [m]);
        let [g, I] = r.useState(!1);
        return (0, i.jsxs)('div', {
            className: J.friendsButtonContainer,
            children: [
                (0, i.jsx)(z.Qj, {
                    onClick: () => {
                        m && (V.default.track(K.rMx.GIFT_INTENT_BADGE_CLICKED, { gift_intent_type: X.hX.FRIEND_ANNIVERSARY }), f.Z.setSection(K.pJs.ALL), (0, y.Gk)());
                    },
                    interactiveClassName: m ? J.friendsBadge : void 0,
                    selected: t,
                    route: K.Z5c.FRIENDS,
                    icon: p.FriendsIcon,
                    text: Q.intl.string(Q.t.TdEu5e),
                    onMouseEnter: () => {
                        I(!0);
                    },
                    onMouseLeave: () => {
                        I(!1);
                    },
                    ...n,
                    ...a,
                    children: l > 0 ? (0, i.jsx)(p.NumberBadge, { count: l }) : null
                }),
                m &&
                    !d &&
                    (0, i.jsx)(P.Z, {
                        className: J.confetti,
                        wind: 0,
                        sprites: q.CA,
                        spriteColors: q.Br,
                        firing: g,
                        confettiConfig: {
                            opacity: {
                                type: 'static',
                                value: 1
                            },
                            dragCoefficient: {
                                type: 'static',
                                value: {
                                    x: 100,
                                    y: 100
                                }
                            }
                        }
                    })
            ]
        });
    },
    ee = (e) => {
        let { selected: t, hideGameUpdateProgressIndicator: n, ...r } = e,
            a = (0, c.JA)('library');
        return (0, i.jsx)(z.Qj, {
            selected: t,
            route: K.Z5c.APPLICATION_LIBRARY,
            icon: p.InventoryIcon,
            text: Q.intl.string(Q.t.cw57am),
            ...r,
            ...a,
            children: (0, i.jsx)(W.Z, { className: l()(J.downloadProgressCircle, { [J.hideGameUpdateProgressIndicator]: n }) })
        });
    },
    et = () => {
        let e = (0, T.q)();
        return e > 0 ? (0, i.jsx)(p.NumberBadge, { count: e }) : null;
    },
    en = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)('messageRequests'),
            { channelId: r } = (0, N._)();
        if (!(0, x.a)()) return null;
        let a = null == r ? void 0 : () => g.Z.preload(K.ME, r);
        return (0, i.jsx)(z.Qj, {
            selected: t,
            route: K.Z5c.MESSAGE_REQUESTS,
            icon: p.EnvelopeIcon,
            text: Q.intl.string(Q.t.e7GWjY),
            onClick: a,
            ...n,
            children: (0, i.jsx)(et, {})
        });
    },
    ei = (e) => {
        let { selected: t } = e,
            n = Q.intl.string(Q.t.Rkdixs),
            a = (0, c.JA)('family-center'),
            l = w.Ex.useSetting(),
            s = (0, b.Z)(),
            [o, d] = r.useState(!0);
        return l && s
            ? (0, i.jsx)(z.Qj, {
                  selected: t,
                  route: K.Z5c.FAMILY_CENTER,
                  icon: p.GroupIcon,
                  text: n,
                  onMouseEnter: () => {
                      d(!0);
                  },
                  onMouseLeave: () => {
                      d(!1);
                  },
                  interactiveClassName: J.familyCenterLinkButton,
                  ...a,
                  children: (0, i.jsx)(er, { isParentHovered: o })
              })
            : null;
    },
    er = (e) => {
        let { isParentHovered: t } = e,
            r = (0, A.gU)();
        return t
            ? (0, i.jsx)(z.PZ, {
                  onClick: () => {
                      (0, m.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, i.jsx)(e, { ...t });
                      });
                  },
                  'aria-label': Q.intl.string(Q.t.cpT0Cg)
              })
            : r > 0
              ? (0, i.jsx)('div', {
                    className: J.familyCenterPendingBadge,
                    children: (0, i.jsx)(p.NumberBadge, { count: r })
                })
              : (0, i.jsx)(S.ZP, {
                    contentTypes: [h.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === h.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, i.jsx)(p.TextBadge, {
                                  text: Q.intl.string(Q.t.y2b7CA),
                                  color: v.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    ea = () => (0, O.$Z)('DM_SEARCH');
function el(e) {
    switch (e) {
        case K.Z5c.APPLICATION_LIBRARY:
            return K.ZY5.LIBRARY;
        case K.Z5c.FRIENDS:
            return K.ZY5.FRIENDS_LIST;
        case K.Z5c.COLLECTIBLES_SHOP:
            return K.ZY5.COLLECTIBLES_SHOP;
    }
    if (e.startsWith(K.Z5c.APPLICATION_STORE)) return e === K.Z5c.APPLICATION_STORE ? K.ZY5.STORE_DIRECTORY_HOME : e.startsWith(K.Z5c.APPLICATION_STORE) ? K.ZY5.STORE_DIRECTORY_BROWSE : K.ZY5.STORE_LISTING;
    return K.ZY5.DM_CHANNEL;
}
let es = (e) => {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: r, premiumTabSelected: a } = e,
        [o, c] = (0, j.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, s.Z);
    return (0, i.jsxs)('nav', {
        className: J.privateChannels,
        'aria-label': Q.intl.string(Q.t.ZH9aPz),
        children: [
            (0, i.jsx)(D.Z, {
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, i.jsx)('div', {
                    className: l()(J.searchBar, { [J.themedHeaderMobile]: d.tq }),
                    children: (0, i.jsx)('button', {
                        type: 'button',
                        className: l()(J.searchBarComponent, { [J.themedSearchBarMobile]: d.tq }),
                        onClick: ea,
                        children: Q.intl.string(Q.t.LzcpeX)
                    })
                })
            }),
            (0, i.jsxs)(Y.Z, {
                ...e,
                version: c,
                selectedChannelId: o,
                showDMHeader: !0,
                children: [
                    (0, i.jsx)($, { selected: null != c ? c === K.Z5c.FRIENDS : r === K.Z5c.FRIENDS }, 'friends'),
                    n && t
                        ? (0, i.jsx)(
                              ee,
                              {
                                  selected: null == c ? null != r && r.startsWith(K.Z5c.APPLICATION_LIBRARY) : c.startsWith(K.Z5c.APPLICATION_LIBRARY),
                                  hideGameUpdateProgressIndicator: r === K.Z5c.APPLICATION_LIBRARY
                              },
                              'library'
                          )
                        : null,
                    (0, i.jsx)(
                        R.g,
                        {
                            selected: null == c ? a : c.startsWith(K.Z5c.APPLICATION_STORE),
                            route: K.Z5c.APPLICATION_STORE,
                            locationState: {
                                analyticsSource: {
                                    page: el(r),
                                    section: K.jXE.NAVIGATION,
                                    object: K.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'premium'
                    ),
                    (0, i.jsx)(en, { selected: null == c ? null != r && r.startsWith(K.Z5c.MESSAGE_REQUESTS) : c === K.Z5c.MESSAGE_REQUESTS }, 'message-requests'),
                    (0, i.jsx)(
                        C.i,
                        {
                            selected: c === K.Z5c.COLLECTIBLES_SHOP || (null == r ? void 0 : r.startsWith(K.Z5c.COLLECTIBLES_SHOP)),
                            locationState: {
                                analyticsSource: {
                                    page: el(r),
                                    section: K.jXE.NAVIGATION,
                                    object: K.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'discord-shop'
                    ),
                    (0, i.jsx)(ei, { selected: (null != r && r.startsWith(K.Z5c.FAMILY_CENTER)) || (null != c && c.startsWith(K.Z5c.FAMILY_CENTER)) }, 'family-center'),
                    (0, i.jsx)(I.Z, {}, 'dm-quick-launcher')
                ]
            })
        ]
    });
};
function eo() {
    let e = (0, u.e7)([H.Z], () => H.Z.getHomeLink()),
        t = (0, u.e7)(
            [B.Z],
            () => {
                if (e === K.Z5c.APPLICATION_STORE) return !0;
                let t = (0, F.ZK)(e);
                if (null != t) {
                    var n, i;
                    return null !== (i = null === (n = B.Z.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== i && i;
                }
                return !1;
            },
            [e]
        ),
        n = !w.bm.useSetting(),
        { theme: r } = (0, u.cj)([M.Z], () => ({ theme: M.Z.theme })),
        a = (0, u.e7)([k.Z], () => k.Z.hasLibraryApplication()),
        l = (0, u.e7)([G.Z], () => G.Z.getCurrentPath());
    return (0, i.jsx)(es, {
        theme: r,
        showLibrary: n,
        hasLibraryApplication: a,
        storeLink: l,
        homeLink: e,
        premiumTabSelected: t
    });
}
