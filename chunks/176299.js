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
    g = n(290297),
    p = n(279240),
    T = n(765717),
    S = n(358221),
    C = n(823748),
    f = n(626421),
    N = n(118379),
    A = n(652515),
    v = n(857428),
    L = n(540059),
    Z = n(194729),
    R = n(668940),
    O = n(831565),
    x = n(724383),
    b = n(135864),
    P = n(372900),
    M = n(6039),
    D = n(637853),
    y = n(326145),
    j = n(269675),
    U = n(242601),
    G = n(416568),
    w = n(613609),
    k = n(160404),
    B = n(225675),
    H = n(745052),
    V = n(285865),
    F = n(659971),
    Y = n(179742),
    W = n(270759),
    z = n(918701),
    K = n(905423),
    q = n(304445),
    Q = n(210887),
    X = n(592125),
    J = n(271383),
    $ = n(430824),
    ee = n(944486),
    et = n(933429),
    en = n(823379),
    ei = n(709054),
    ea = n(374005),
    es = n(409292),
    er = n(316173),
    el = n(256638),
    eo = n(663701),
    ec = n(425369),
    ed = n(715702),
    eu = n(981631),
    e_ = n(176505),
    eE = n(290511),
    eh = n(264044);
let em = 'resizable-sidebar-width',
    eI = () =>
        (0, i.jsx)('div', {
            className: eh.loader,
            children: (0, i.jsx)(E.Spinner, {})
        }),
    eg = (0, c.Un)({
        createPromise: () => n.e('68614').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: eI
    }),
    ep = (0, c.Un)({
        createPromise: () => n.e('44798').then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: eI
    }),
    eT = (0, c.Un)({
        createPromise: () => n.e('60493').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: eI
    }),
    eS = (0, c.Un)({
        createPromise: () => Promise.all([n.e('85552'), n.e('44400')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: eI
    }),
    eC = (0, c.Un)({
        createPromise: () => Promise.all([n.e('96427'), n.e('44156'), n.e('58227'), n.e('38359'), n.e('89818')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: eI
    }),
    ef = (0, c.Un)({
        createPromise: () => Promise.all([n.e('96427'), n.e('44156'), n.e('19878'), n.e('38359'), n.e('10682')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: eI
    }),
    eN = (e) => {
        let { match: t } = e,
            n = (0, u.e7)([X.Z, ee.Z], () => {
                let e = ee.Z.getChannelId();
                return X.Z.getChannel(e);
            }),
            { guildId: a, channelId: s, messageId: r } = t.params,
            l = (0, u.e7)([$.Z], () => $.Z.getGuild(a)),
            o = (0, u.e7)([J.ZP], () => (null == a ? null : J.ZP.getSelfMember(a))),
            c = (0, u.e7)([k.Z], () => {
                if (null == a) return;
                let e = k.Z.getData(a);
                if ((null == e ? void 0 : e.type) === B.z.SERVER_SHOP)
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
        if (null != a && null != s && (0, e_.AB)(s))
            switch (s) {
                case e_.oC.ROLE_SUBSCRIPTIONS:
                    return d
                        ? (0, i.jsx)(eg, {
                              guildId: a,
                              initialTab: v.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, i.jsx)(j.Z, { guildId: a });
                case e_.oC.GUILD_SHOP:
                    return (0, i.jsx)(eg, {
                        guildId: a,
                        productId: r,
                        initialTab: c
                    });
                case e_.oC.MEMBER_APPLICATIONS:
                    return (0, i.jsx)(ep, { guildId: a });
                case e_.oC.GUILD_HOME:
                    return (0, i.jsx)(eT, { guildId: a });
                case e_.oC.CHANNEL_BROWSER:
                    return (0, i.jsx)(eC, {
                        guildId: a,
                        selectedSection: eE.l7.BROWSE
                    });
                case e_.oC.GUILD_ONBOARDING:
                    return (0, i.jsx)(ef, { guildId: a });
                case e_.oC.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eC, {
                        guildId: a,
                        selectedSection: eE.l7.CUSTOMIZE
                    });
                case e_.oC.MEMBER_SAFETY:
                    return (0, i.jsx)(eS, { guildId: a });
                default:
                    (0, en.vE)(s);
            }
        if ((0, D.p3)(l, o))
            return (0, i.jsx)(y.Z, {
                guildId: a,
                channelId: s
            });
        if ((null == n ? void 0 : n.type) === eu.d4z.GUILD_STORE) {
            let e = ei.default.cast(t.params.messageId);
            return (0, i.jsx)(
                es.Z,
                {
                    channel: n,
                    inputSkuId: e
                },
                n.id
            );
        }
        return (0, i.jsx)(C.Z, {});
    },
    eA = a.memo(function () {
        let { guildId: e, channelId: t } = (0, K.Z)(),
            n = (0, u.e7)([ee.Z], () => (null != t ? t : ee.Z.getChannelId(e))),
            a = (0, O.v)({ location: 'sidebar' });
        if (
            (function () {
                return window.location.pathname.startsWith(eu.Z5c.GLOBAL_DISCOVERY);
            })() ||
            (function () {
                return window.location.pathname.startsWith(eu.Z5c.GUILD_DISCOVERY) || (0, z.OG)();
            })()
        )
            return a ? (0, i.jsx)(b.Z, {}) : (0, i.jsx)(R.Z, {});
        return null != e
            ? (0, i.jsx)(
                  U.Z,
                  {
                      selectedChannelId: n,
                      guildId: e
                  },
                  e
              )
            : (0, i.jsx)(eo.Z, {});
    }),
    ev = (e) => (0, i.jsx)(eN, { ...e }),
    eL = (e) => {
        let t = null != e && e.length > 0 && e.startsWith('?') ? e.split('?')[1] : null;
        return (0, O.a)({ location: 'sidebar' }) ? (0, i.jsx)(x.Z, {}) : (0, i.jsx)(Z.Z, { searchRoute: t });
    },
    eZ = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(M.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eR = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(w.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eO = () => (0, i.jsx)(ec.Z, {}),
    ex = () => (0, i.jsx)(ed.Z, {}),
    eb = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            return (0, i.jsx)(N.Z, {
                isFullScreen: e,
                ...t
            });
        };
    },
    eP = (e) => (0, i.jsx)(p.Z, { ...e }),
    eM = () => (0, i.jsx)(W.Z, {}),
    eD = () => (0, i.jsx)(H.Z, {}),
    ey = () => (0, i.jsx)(Y.Z, {}),
    ej = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'addFriends':
                return (0, i.jsx)(W.Z, { initialSection: eu.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, i.jsx)(W.Z, { initialSection: eu.pJs.PENDING });
            case 'sessionManagement':
                return (0, i.jsx)(l.l_, { to: eu.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, i.jsx)(l.l_, {
                    to: {
                        pathname: eu.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, i.jsx)(l.l_, { to: eu.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, i.jsx)(l.l_, { to: eu.Z5c.SETTINGS('privacy-and-safety', 'account-standing') });
            case 'authorized-apps':
                return (0, i.jsx)(l.l_, { to: eu.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, i.jsx)(l.l_, { to: eu.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            default:
                return (0, i.jsx)(l.l_, { to: eu.Z5c.ME });
        }
    };
function eU(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: s } = e;
    (0, m.t)(!0);
    let l = 'app view user trigger debugging';
    h.R6.useExperiment({ location: l }, { autoTrackExposure: !1 }), h.R6.trackExposure({ location: l });
    let o = (0, u.e7)([S.Z], () => S.Z.isFullscreenInContext()),
        c = (0, L.Q)('ChannelSidebar');
    a.useLayoutEffect(() => {
        if (c) {
            var e;
            let t = parseInt(null !== (e = _.K.get(em)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = 268), (t = Math.min(Math.max(t, 240), 420)), document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(t, 'px')), document.body.style.setProperty('--custom-app-sidebar-target-width', ''.concat(t + 72, 'px'));
        }
    }, [c]);
    let g = a.useRef(null),
        p = a.useCallback((e) => {
            document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px')), document.body.style.setProperty('--custom-app-sidebar-target-width', ''.concat(e + 72, 'px'));
        }, []),
        T = a.useCallback(() => {
            document.body.classList.add(eh.dragging);
        }, []),
        C = a.useCallback((e) => {
            document.body.classList.remove(eh.dragging), _.K.set(em, e);
        }, []),
        f = (0, I.Z)({
            minDimension: 240,
            maxDimension: 420,
            resizableDomNodeRef: g,
            onElementResize: p,
            onElementResizeStart: T,
            onElementResizeEnd: C,
            orientation: I.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        N = a.useCallback(
            (e) => {
                e.stopPropagation(), f(e);
            },
            [f]
        );
    return s
        ? null
        : (0, i.jsx)(E.ThemeProvider, {
              theme: n,
              children: (e) =>
                  (0, i.jsxs)('div', {
                      ref: c ? g : void 0,
                      className: r()(eh.sidebar, e, {
                          [eh.hasNotice]: t,
                          [eh.fullWidth]: d.tq,
                          [eh.hidden]: o
                      }),
                      children: [
                          (0, i.jsx)(eA, {}),
                          c
                              ? (0, i.jsx)('div', {
                                    className: eh.sidebarResizeHandle,
                                    onMouseDownCapture: N
                                })
                              : null,
                          (0, i.jsx)(ea.b, {}),
                          (0, i.jsx)(er.Z, {})
                      ]
                  })
          });
}
function eG() {
    var e;
    let t = (0, u.e7)([et.Z], () => et.Z.hasNotice()),
        n = (0, u.e7)([Q.Z], () => (Q.Z.darkSidebar ? eu.BRd.DARK : void 0)),
        s = (function () {
            let [e, t] = a.useState(() => window.location.pathname.startsWith(eu.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                a.useEffect(
                    () =>
                        q.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eu.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        r = (function () {
            let [e, t] = a.useState(() => window.location.pathname.startsWith(eu.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                a.useEffect(
                    () =>
                        q.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eu.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        c = (function () {
            var e;
            let t = (0, l.TH)();
            return (null === (e = (0, l.LX)(t.pathname, eu.Z5c.GUILD_BOOSTING_MARKETING(':guildId'))) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        _ = (function () {
            var e;
            let t = (0, l.TH)();
            return (null === (e = (0, l.LX)(t.pathname, eu.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        E = (0, u.e7)([F.Z], () => F.Z.getIsOpen()),
        h = (0, l.$B)([eu.Z5c.CHANNEL(eu.ME, ':channelId'), eu.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')]),
        m = (null == h ? void 0 : null === (e = h.params) || void 0 === e ? void 0 : e.channelId) === e_.oC.GUILD_ONBOARDING,
        I = a.useCallback(() => V.Z.openSidebar(), []);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: eh.container,
            children: [
                E &&
                    !_ &&
                    (0, i.jsx)(G.Z, {
                        className: eh.guilds,
                        themeOverride: n
                    }),
                (0, i.jsx)(P.Z.Provider, {
                    value: (null == h ? void 0 : h.params.guildId) === eu.ME ? void 0 : null == h ? void 0 : h.params.guildId,
                    children: (0, i.jsxs)('div', {
                        className: eh.base,
                        children: [
                            d.tq ? null : (0, i.jsx)(el.Z, {}),
                            (0, i.jsxs)('div', {
                                className: eh.content,
                                children: [
                                    (0, i.jsx)(f.Z, {}),
                                    (0, i.jsx)(eU, {
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideSidebar: s || r || c || _ || m || !E
                                    }),
                                    (0, i.jsx)(g.Z.Provider, {
                                        value: I,
                                        children: (0, i.jsxs)(l.rs, {
                                            children: [
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, i.jsx)(l.l_, { to: eu.Z5c.ME })
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                    render: eP,
                                                    impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    }
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.APPLICATION_LIBRARY,
                                                    render: eO,
                                                    impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.APPLICATION_STORE,
                                                    render: ex,
                                                    impressionName: o.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                    render: eb(!0),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.COLLECTIBLES_SHOP,
                                                    render: eb(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                    render: eb(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.MESSAGE_REQUESTS,
                                                    render: eD,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.FAMILY_CENTER,
                                                    render: ey,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.ME,
                                                    exact: !0,
                                                    render: eM,
                                                    impressionName: o.ImpressionNames.FRIENDS,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: [eu.Z5c.CHANNEL_THREAD_VIEW(':guildId', ':channelId', ':threadId', ':messageId?'), eu.Z5c.CHANNEL(eu.ME, ':channelId'), eu.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')],
                                                    render: ev,
                                                    impressionName: o.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.GLOBAL_DISCOVERY,
                                                    render: (e) => {
                                                        let { location: t } = e;
                                                        return eL(t.search);
                                                    },
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: (e) => {
                                                        let { location: t } = e;
                                                        return eL(t.search);
                                                    },
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.QUEST_HOME,
                                                    render: (e) => {
                                                        let { location: t } = e;
                                                        return eL(t.search);
                                                    },
                                                    impressionName: o.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.GUILD_DISCOVERY,
                                                    render: (e) => {
                                                        let { location: t } = e;
                                                        return eL(t.search);
                                                    },
                                                    impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?'),
                                                    render: eZ,
                                                    impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(':guildId', ':inviteCode?'),
                                                    render: eR,
                                                    impressionName: o.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { has_invite: void 0 !== t.params.inviteCode };
                                                    }
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.FEATURE(':feature'),
                                                    exact: !0,
                                                    render: ej,
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
