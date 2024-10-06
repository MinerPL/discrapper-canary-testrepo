n.d(t, {
    Z: function () {
        return eG;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(266067),
    o = n(990547),
    c = n(608787),
    d = n(873546),
    u = n(442837),
    _ = n(433517),
    E = n(481060),
    h = n(711237),
    m = n(532835),
    I = n(347469),
    p = n(290297),
    g = n(279240),
    T = n(765717),
    f = n(358221),
    S = n(823748),
    C = n(626421),
    N = n(118379),
    A = n(652515),
    v = n(544978),
    Z = n(540059),
    L = n(724383),
    R = n(135864),
    O = n(372900),
    x = n(6039),
    b = n(637853),
    M = n(326145),
    P = n(269675),
    D = n(242601),
    y = n(416568),
    j = n(613609),
    U = n(160404),
    G = n(225675),
    w = n(745052),
    k = n(285865),
    B = n(659971),
    V = n(179742),
    H = n(270759),
    F = n(918701),
    Y = n(905423),
    z = n(304445),
    W = n(893607),
    K = n(210887),
    q = n(592125),
    Q = n(271383),
    X = n(430824),
    J = n(944486),
    $ = n(933429),
    ee = n(823379),
    et = n(709054),
    en = n(374005),
    ei = n(191741),
    ea = n(409292),
    es = n(316173),
    er = n(256638),
    el = n(663701),
    eo = n(425369),
    ec = n(715702),
    ed = n(981631),
    eu = n(176505),
    e_ = n(290511),
    eE = n(530921);
let eh = 'resizable-sidebar-width',
    em = () =>
        (0, i.jsx)('div', {
            className: eE.loader,
            children: (0, i.jsx)(E.Spinner, {})
        }),
    eI = (0, c.Un)({
        createPromise: () => n.e('68614').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: em
    }),
    ep = (0, c.Un)({
        createPromise: () => n.e('44798').then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: em
    }),
    eg = (0, c.Un)({
        createPromise: () => n.e('60493').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: em
    }),
    eT = (0, c.Un)({
        createPromise: () => Promise.all([n.e('85552'), n.e('44400')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: em
    }),
    ef = (0, c.Un)({
        createPromise: () => Promise.all([n.e('96427'), n.e('44156'), n.e('58227'), n.e('38359'), n.e('31072')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: em
    }),
    eS = (0, c.Un)({
        createPromise: () => Promise.all([n.e('96427'), n.e('44156'), n.e('19878'), n.e('38359'), n.e('74277')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: em
    }),
    eC = (e) => {
        let { match: t } = e,
            n = (0, u.e7)([q.Z, J.Z], () => {
                let e = J.Z.getChannelId();
                return q.Z.getChannel(e);
            }),
            { guildId: a, channelId: s, messageId: r } = t.params,
            l = (0, u.e7)([X.Z], () => X.Z.getGuild(a)),
            o = (0, u.e7)([Q.ZP], () => (null == a ? null : Q.ZP.getSelfMember(a))),
            c = (0, u.e7)([U.Z], () => {
                if (null == a) return;
                let e = U.Z.getData(a);
                if ((null == e ? void 0 : e.type) === G.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return v.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return v.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            d = (0, A.C4)(a, 'channel_renderer');
        if (null != a && null != s && (0, eu.AB)(s))
            switch (s) {
                case eu.oC.ROLE_SUBSCRIPTIONS:
                    return d
                        ? (0, i.jsx)(eI, {
                              guildId: a,
                              initialTab: v.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, i.jsx)(P.Z, { guildId: a });
                case eu.oC.GUILD_SHOP:
                    return (0, i.jsx)(eI, {
                        guildId: a,
                        productId: r,
                        initialTab: c
                    });
                case eu.oC.MEMBER_APPLICATIONS:
                    return (0, i.jsx)(ep, { guildId: a });
                case eu.oC.GUILD_HOME:
                    return (0, i.jsx)(eg, { guildId: a });
                case eu.oC.CHANNEL_BROWSER:
                    return (0, i.jsx)(ef, {
                        guildId: a,
                        selectedSection: e_.l7.BROWSE
                    });
                case eu.oC.GUILD_ONBOARDING:
                    return (0, i.jsx)(eS, { guildId: a });
                case eu.oC.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(ef, {
                        guildId: a,
                        selectedSection: e_.l7.CUSTOMIZE
                    });
                case eu.oC.MEMBER_SAFETY:
                    return (0, i.jsx)(eT, { guildId: a });
                default:
                    (0, ee.vE)(s);
            }
        if ((0, b.p3)(l, o))
            return (0, i.jsx)(M.Z, {
                guildId: a,
                channelId: s
            });
        if ((null == n ? void 0 : n.type) === ed.d4z.GUILD_STORE) {
            let e = et.default.cast(t.params.messageId);
            return (0, i.jsx)(
                ea.Z,
                {
                    channel: n,
                    inputSkuId: e
                },
                n.id
            );
        }
        return (0, i.jsx)(S.Z, {});
    },
    eN = a.memo(function () {
        let { guildId: e, channelId: t } = (0, Y.Z)(),
            n = (0, u.e7)([J.Z], () => (null != t ? t : J.Z.getChannelId(e)));
        return (function () {
            return window.location.pathname.startsWith(ed.Z5c.GLOBAL_DISCOVERY);
        })() ||
            (function () {
                return window.location.pathname.startsWith(ed.Z5c.GUILD_DISCOVERY) || (0, F.OG)();
            })()
            ? (0, i.jsx)(R.Z, {})
            : null != e
              ? (0, i.jsx)(
                    D.Z,
                    {
                        selectedChannelId: n,
                        guildId: e
                    },
                    e
                )
              : (0, i.jsx)(el.Z, {});
    }),
    eA = (e) => (0, i.jsx)(eC, { ...e }),
    ev = () => (0, i.jsx)(L.Z, {}),
    eZ = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(x.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eL = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(j.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eR = () => (0, i.jsx)(eo.Z, {}),
    eO = () => (0, i.jsx)(ec.Z, {}),
    ex = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            return (0, i.jsx)(N.Z, {
                isFullScreen: e,
                ...t
            });
        };
    },
    eb = (e) => (0, i.jsx)(g.Z, { ...e }),
    eM = () => (0, i.jsx)(H.Z, {}),
    eP = () => (0, i.jsx)(w.Z, {}),
    eD = () => (0, i.jsx)(V.Z, {}),
    ey = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'addFriends':
                return (0, i.jsx)(H.Z, { initialSection: ed.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, i.jsx)(H.Z, { initialSection: ed.pJs.PENDING });
            case 'sessionManagement':
                return (0, i.jsx)(l.l_, { to: ed.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, i.jsx)(l.l_, {
                    to: {
                        pathname: ed.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, i.jsx)(l.l_, { to: ed.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, i.jsx)(l.l_, { to: ed.Z5c.SETTINGS('privacy-and-safety', 'account-standing') });
            case 'authorized-apps':
                return (0, i.jsx)(l.l_, { to: ed.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, i.jsx)(l.l_, { to: ed.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            default:
                return (0, i.jsx)(l.l_, { to: ed.Z5c.ME });
        }
    };
function ej(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function eU(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: s, isSidebarOpen: l, isOnFullScreenCollectiblesShopRoute: o } = e;
    (0, m.t)(!0);
    let c = 'app view user trigger debugging';
    h.R6.useExperiment({ location: c }, { autoTrackExposure: !1 }), h.R6.trackExposure({ location: c });
    let p = (0, u.e7)([f.Z], () => f.Z.isFullscreenInContext()),
        g = (0, Z.Q)('ChannelSidebar'),
        T = (0, ei.useAppSidebarState)((e) => !e.isOpen);
    a.useLayoutEffect(() => {
        if (g) {
            var e;
            let t = parseInt(null !== (e = _.K.get(eh)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = 268), ej((t = Math.min(Math.max(t, 240), 420)));
            let n = (e) => {
                e.metaKey && 'b' === e.key && ei.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
            };
            return (
                document.addEventListener('keydown', n),
                () => {
                    document.removeEventListener('keydown', n);
                }
            );
        }
    }, [g]),
        a.useLayoutEffect(() => {
            if (T) ej(76);
            else {
                var e;
                let t = parseInt(null !== (e = _.K.get(eh)) && void 0 !== e ? e : '');
                Number.isNaN(t) && (t = 268), ej(t);
            }
        }, [T]);
    let S = a.useRef(null),
        C = a.useCallback((e, t) => {
            var n;
            ej(e);
            let i = t < 80;
            ei.useAppSidebarState.setState({ isOpen: !i }), t < 240 ? document.body.classList.add(eE.collapsing) : document.body.classList.remove(eE.collapsing);
            let a = t - e;
            null === (n = S.current) || void 0 === n || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(a / 76), 0.25))), i && ej(76);
        }, []),
        N = a.useCallback(() => {
            document.body.classList.add(eE.dragging);
        }, []),
        A = a.useCallback((e) => {
            var t;
            document.body.classList.remove(eE.dragging), document.body.classList.remove(eE.collapsing), null === (t = S.current) || void 0 === t || t.style.setProperty('--custom-overdrag', '0px'), _.K.set(eh, e);
        }, []),
        v = (0, I.Z)({
            minDimension: 240,
            maxDimension: 420,
            resizableDomNodeRef: S,
            onElementResize: C,
            onElementResizeStart: N,
            onElementResizeEnd: A,
            orientation: I.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        L = a.useCallback(() => {
            ei.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (a.useLayoutEffect(() => {
            T && ej(76);
        }, [T]),
        s)
    )
        return null;
    let R = g ? 'div' : a.Fragment,
        O = g ? { className: eE.sidebarList } : {};
    return (0, i.jsx)(E.ThemeProvider, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)('div', {
                ref: g ? S : void 0,
                'data-collapsed': T,
                className: r()(eE.sidebar, e, {
                    [eE.hasNotice]: t,
                    [eE.fullWidth]: d.tq,
                    [eE.hidden]: p
                }),
                children: [
                    g &&
                        l &&
                        !o &&
                        (0, i.jsx)(y.Z, {
                            className: eE.guilds,
                            themeOverride: n
                        }),
                    (0, i.jsx)(R, {
                        ...O,
                        children: (0, i.jsx)(eN, {})
                    }),
                    g
                        ? (0, i.jsx)(E.Clickable, {
                              onClick: L,
                              'aria-label': 'Resize Sidebar',
                              className: eE.sidebarResizeHandle,
                              onMouseDown: v
                          })
                        : null,
                    (0, i.jsx)(en.b, {}),
                    (0, i.jsx)(es.Z, {})
                ]
            })
    });
}
function eG() {
    var e;
    let t = (0, u.e7)([$.Z], () => $.Z.hasNotice()),
        n = (0, u.e7)([K.Z], () => (K.Z.darkSidebar ? ed.BRd.DARK : void 0)),
        s = (function () {
            let [e, t] = a.useState(() => window.location.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                a.useEffect(
                    () =>
                        z.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        r = (function () {
            let [e, t] = a.useState(() => window.location.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                a.useEffect(
                    () =>
                        z.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        c = (function () {
            var e;
            let t = (0, l.TH)();
            return (null === (e = (0, l.LX)(t.pathname, ed.Z5c.GUILD_BOOSTING_MARKETING(W.Hw.guildId()))) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        _ = (function () {
            var e;
            let t = (0, l.TH)();
            return (null === (e = (0, l.LX)(t.pathname, ed.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        E = (0, u.e7)([B.Z], () => B.Z.getIsOpen()),
        h = (0, l.$B)([ed.Z5c.CHANNEL(ed.ME, W.Hw.channelId()), ed.Z5c.CHANNEL(W.Hw.guildId(), W.Hw.channelId({ optional: !0 }), ':messageId?')]),
        m = (null == h ? void 0 : null === (e = h.params) || void 0 === e ? void 0 : e.channelId) === eu.oC.GUILD_ONBOARDING,
        I = s || r || c || _ || m,
        g = a.useCallback(() => k.Z.openSidebar(), []),
        f = (0, Z.Q)('AppView');
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: eE.container,
            children: [
                E &&
                    !_ &&
                    !f &&
                    (0, i.jsx)(y.Z, {
                        className: eE.guilds,
                        themeOverride: n
                    }),
                (0, i.jsx)(O.Z.Provider, {
                    value: (null == h ? void 0 : h.params.guildId) === ed.ME ? void 0 : null == h ? void 0 : h.params.guildId,
                    children: (0, i.jsxs)('div', {
                        className: eE.base,
                        children: [
                            d.tq ? null : (0, i.jsx)(er.Z, {}),
                            (0, i.jsxs)('div', {
                                className: eE.content,
                                children: [
                                    (0, i.jsx)(C.Z, {}),
                                    (0, i.jsx)(eU, {
                                        isOnFullScreenCollectiblesShopRoute: _,
                                        isSidebarOpen: E,
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideSidebar: I || !E
                                    }),
                                    (0, i.jsx)(p.Z.Provider, {
                                        value: g,
                                        children: (0, i.jsxs)(l.rs, {
                                            children: [
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, i.jsx)(l.l_, { to: ed.Z5c.ME })
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                    render: eb,
                                                    impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    }
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.APPLICATION_LIBRARY,
                                                    render: eR,
                                                    impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.APPLICATION_STORE,
                                                    render: eO,
                                                    impressionName: o.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                    render: ex(!0),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.COLLECTIBLES_SHOP,
                                                    render: ex(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                    render: ex(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.MESSAGE_REQUESTS,
                                                    render: eP,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.FAMILY_CENTER,
                                                    render: eD,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.ME,
                                                    exact: !0,
                                                    render: eM,
                                                    impressionName: o.ImpressionNames.FRIENDS,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: [ed.Z5c.CHANNEL_THREAD_VIEW(W.Hw.guildId(), W.Hw.channelId(), ':threadId', ':messageId?'), ed.Z5c.CHANNEL(ed.ME, W.Hw.channelId()), ed.Z5c.CHANNEL(W.Hw.guildId(), W.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                    render: eA,
                                                    impressionName: o.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.GLOBAL_DISCOVERY,
                                                    render: ev,
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: ev,
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.GLOBAL_DISCOVERY_APPS,
                                                    render: ev,
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.QUEST_HOME,
                                                    render: ev,
                                                    impressionName: o.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.GUILD_DISCOVERY,
                                                    render: ev,
                                                    impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.GUILD_MEMBER_VERIFICATION(W.Hw.guildId(), ':inviteCode?'),
                                                    render: eZ,
                                                    impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(W.Hw.guildId(), ':inviteCode?'),
                                                    render: eL,
                                                    impressionName: o.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { has_invite: void 0 !== t.params.inviteCode };
                                                    }
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: ed.Z5c.FEATURE(':feature'),
                                                    exact: !0,
                                                    render: ey,
                                                    disableTrack: !0
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
