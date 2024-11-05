n.r(t), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(593473),
    l = n(512969),
    s = n(442837),
    o = n(481060),
    c = n(893776),
    d = n(943094),
    u = n(749210),
    h = n(287734),
    m = n(401430),
    p = n(230711),
    g = n(607070),
    f = n(627845),
    _ = n(185666),
    E = n(503737),
    I = n(513202),
    C = n(318891),
    v = n(687751),
    S = n(912471),
    N = n(100527),
    T = n(838134),
    x = n(77987),
    b = n(679891),
    A = n(491575),
    Z = n(954709),
    y = n(644679),
    L = n(314533),
    R = n(9029),
    P = n(935347),
    O = n(560067),
    j = n(823169),
    D = n(620360),
    M = n(96051),
    w = n(750995),
    k = n(696287),
    U = n(408026),
    G = n(763916),
    B = n(306721),
    H = n(531551),
    V = n(38618),
    F = n(972830),
    z = n(981283),
    Y = n(584233),
    W = n(15274),
    K = n(434404),
    q = n(543842),
    X = n(879064),
    Q = n(315964),
    J = n(495784),
    $ = n(975533),
    ee = n(377400),
    et = n(285865),
    en = n(659971),
    ei = n(929809),
    er = n(122333),
    ea = n(960275),
    el = n(818765),
    es = n(678492),
    eo = n(269089),
    ec = n(380570),
    ed = n(837689),
    eu = n(367207),
    eh = n(489977),
    em = n(329557),
    ep = n(304445),
    eg = n(893607),
    ef = n(703656),
    e_ = n(298969),
    eE = n(719256),
    eI = n(6025),
    eC = n(897473),
    ev = n(377368),
    eS = n(262702),
    eN = n(639033),
    eT = n(479313),
    ex = n(911560),
    eb = n(703016),
    eA = n(171368),
    eZ = n(429974),
    ey = n(332754),
    eL = n(507468),
    eR = n(357269),
    eP = n(282506),
    eO = n(444961),
    ej = n(314897),
    eD = n(433355),
    eM = n(592125),
    ew = n(896797),
    ek = n(430824),
    eU = n(819640),
    eG = n(283595),
    eB = n(944486),
    eH = n(914010),
    eV = n(695103),
    eF = n(241890),
    ez = n(897607),
    eY = n(417363),
    eW = n(900974),
    eK = n(358085),
    eq = n(998502),
    eX = n(346329),
    eQ = n(981631),
    eJ = n(176505),
    e$ = n(701476);
function e0(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n(117240), n(801077), n(967368), n(272053), n(974180), n(574254), n(551428), n(55563), n(455173), n(882029), n(959457), n(653255), n(663389), n(25990), n(778825), n(999382), n(388610), n(533947), n(277053), n(371398), n(141233), n(471073);
let e1 = !1;
(0, S.DL)(),
    s.ZP.initialize(),
    e_.Z.loadServer(),
    eK.isPlatformEmbedded &&
        (eq.ZP.on('USER_SETTINGS_OPEN', () => {
            !eU.Z.getLayers().includes(eQ.S9g.USER_SETTINGS) && p.Z.open(eQ.oAB.ACCOUNT);
        }),
        eq.ZP.on('LAUNCH_APPLICATION', (e, t) => {
            let n = eG.Z.getActiveLibraryApplication(t);
            eX.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: eQ.ZY5.DIRECT,
                        object: eQ.qAy.WEB_URL
                    }
                }
            });
        }));
let e2 = s.ZP.connectStores([V.Z, ew.Z, ej.default], () => ({
        isConnected: V.Z.isConnected(),
        defaultRoute: ew.Z.defaultRoute,
        defaultRouteFallback: ew.Z.fallbackRoute,
        token: ej.default.getToken()
    }))(
        class extends r.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, Y.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: r } = this.props;
                if (null == n) return (0, i.jsx)(l.l_, { to: eQ.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = e7(t);
                    return null == e || ((e.params.guildId === eQ.ME || null != ek.Z.getGuild(e.params.guildId)) && null != eM.Z.getChannel(e.params.channelId)) ? (0, i.jsx)(l.l_, { to: t }) : (0, i.jsx)(l.l_, { to: r });
                }
                return null;
            }
        }
    ),
    e4 = (0, x.e)(A.Z, null, { passProps: !1 }),
    e3 = (0, x.e)(T.default, null, { passProps: !1 }),
    e6 = [eQ.Z5c.GUILD_BOOSTING_MARKETING(eg.Hw.guildId()), ...Array.from(eJ.Vg).map((e) => eQ.Z5c.CHANNEL(eg.Hw.guildId(), e))];
function e5(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: r = null } = e.params;
    return {
        guildId: null != t ? t : eQ.ME,
        channelId: n,
        messageId: i,
        threadId: r
    };
}
let e9 = [
    {
        path: [eQ.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(':inviteCode')],
        render(e) {
            let { match: t } = e;
            return (0, i.jsx)(e2, { match: t });
        },
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.APP],
        render: () => (0, i.jsx)(e2, {}),
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.USERS(':id')],
        render: function (e) {
            let { match: t, location: n } = e,
                { friend_token: r } = (0, a.parse)(n.search),
                { id: s } = t.params;
            return (
                (0, F.h)(() =>
                    (0, eA.openUserProfileModal)({
                        userId: s,
                        friendToken: r,
                        sourceAnalyticsLocations: [N.Z.URI_SCHEME],
                        analyticsLocation: { section: eQ.jXE.DIRECT_ROUTE_ACCESS }
                    })
                ),
                (0, i.jsx)(l.l_, { to: ew.Z.defaultRoute })
            );
        }
    },
    {
        path: [eQ.Z5c.APPLICATION_LIBRARY_ACTION(':gameId', ':action')],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: r } = t.params;
            return (
                eY.Z.whenInitialized(() => {
                    eG.Z.whenInitialized(() => {
                        switch (r) {
                            case 'launch': {
                                let e = eG.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                eX.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: eQ.ZY5.DIRECT,
                                            object: eQ.qAy.WEB_URL
                                        }
                                    }
                                });
                                break;
                            }
                            case 'test-mode':
                                eV.Z.whenInitialized(() => m.Wt(n));
                                break;
                            case 'uninstall': {
                                let e = eG.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, d.W)(e.id, e.branchId, eQ.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, i.jsx)(l.l_, { to: eQ.Z5c.APPLICATION_LIBRARY })
            );
        }
    },
    {
        path: [eQ.Z5c.GUILD_CREATE],
        render: function () {
            return (0, F.h)(() => O.Z.openCreateGuildModal({ location: 'External link' })), (0, i.jsx)(l.l_, { to: ew.Z.defaultRoute });
        }
    },
    {
        path: [eQ.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: r } = t.params,
                s = (0, a.parse)(location.search).feature;
            return (
                (0, F.h)(() =>
                    X.v({
                        section: (0, q.Z)(eQ.pNK, n),
                        subsection: (0, q.Z)(eQ.KsC, r),
                        feature: s
                    })
                ),
                (0, i.jsx)(l.l_, { to: ew.Z.defaultRoute })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.SETTINGS(':section', ':subsection?')],
        render: function (e) {
            let { location: t } = e,
                n = (0, eR.default)(t.pathname);
            return (
                null != n &&
                    (0, F.h)(() =>
                        p.Z.open(n.section, n.subsection, {
                            openWithoutBackstack: !1,
                            impressionSource: n.source
                        })
                    ),
                (0, i.jsx)(l.l_, { to: ew.Z.defaultRoute })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(eg.Hw.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: r } = t.params;
            return (
                (0, F.h)(() => {
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('5863'), n.e('53658')]).then(n.bind(n, 751212));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: r
                            });
                    });
                }),
                (0, i.jsx)(l.l_, { to: eQ.Z5c.CHANNEL(r) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (0, F.h)(() => p.Z.open(eQ.oAB.INVENTORY)), (0, i.jsx)(l.l_, { to: ew.Z.defaultRoute });
        },
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.WELCOME(eg.Hw.guildId({ optional: !0 }), eg.Hw.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: r } = t.params;
            (0, ei.c)(e$.M5.MARKETING_UNCLAIMED);
            let a = eQ.Z5c.CHANNEL(n, r);
            return (0, i.jsx)(l.l_, { to: a });
        },
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.GUILD_EVENT_DETAILS(eg.Hw.guildId({ optional: !0 }), ':guildEventId')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: r } = t.params;
            return (
                (0, F.h)(() => {
                    (0, W.bO)({ eventId: r });
                }),
                (0, i.jsx)(l.l_, { to: eQ.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.GUILD_SETTINGS(eg.Hw.guildId(), ':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: r, subsection: a } = t.params;
            return (
                (0, F.h)(() => {
                    K.Z.open(n, (0, q.Z)(eQ.pNK, r), void 0, (0, q.Z)(eQ.KsC, a));
                }),
                (0, i.jsx)(l.l_, { to: eQ.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [eQ.Z5c.CHANNEL_THREAD_VIEW(eg.Hw.guildId(), eg.Hw.channelId(), ':threadId', ':messageId?'), eQ.Z5c.CHANNEL(eg.Hw.guildId(), eg.Hw.channelId({ optional: !0 }), ':messageId?'), eQ.Z5c.ACTIVITY, eQ.Z5c.ACTIVITIES, eQ.Z5c.ACTIVITIES_HAPPENING_NOW, eQ.Z5c.ACTIVITY_DETAILS(':applicationId'), eQ.Z5c.APPLICATION_LIBRARY, eQ.Z5c.APPLICATION_STORE, eQ.Z5c.MESSAGE_REQUESTS, eQ.Z5c.COLLECTIBLES_SHOP, eQ.Z5c.COLLECTIBLES_SHOP_FULLSCREEN, eQ.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'), eQ.Z5c.DISCOVERY_GUILD_GAME_RESULTS(':gameId'), eQ.Z5c.GUILD_DISCOVERY, eQ.Z5c.QUEST_HOME, eQ.Z5c.GLOBAL_DISCOVERY, eQ.Z5c.GUILD_MEMBER_VERIFICATION(eg.Hw.guildId(), ':inviteCode?'), eQ.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(eg.Hw.guildId(), ':inviteCode?'), eQ.Z5c.GUILD_BOOSTING_MARKETING(eg.Hw.guildId()), eQ.Z5c.FEATURE(':feature'), eQ.Z5c.FAMILY_CENTER],
        render: e4,
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [eQ.Z5c.APPLICATION_DIRECTORY],
        render: e3,
        isSessionRequired: !0
    }
];
function e7(e) {
    for (let { path: t, isChatRoute: n } of e9) {
        if (!n) continue;
        let i = (0, l.LX)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function e8(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!V.Z.isConnected()) return;
    let { location: r } = (0, ef.s1)();
    if (r.pathname === i) null == eM.Z.getChannel(t) ? (0, ef.dL)(eQ.Z5c.CHANNEL(n)) : (0, ef.dL)(i);
}
class te extends r.PureComponent {
    componentDidMount() {
        eq.ZP.setZoomFactor(g.Z.zoom),
            e_.Z.init(),
            b.Z.initialize(),
            ec.Z.initialize(),
            U.Z.initialize(),
            eO.Z.initialize(),
            G.Z.initialize(),
            eu.Z.initialize(),
            $.Z.initialize(),
            f.Z.init(),
            H.Z.init(),
            B.Z.init(),
            er.Z.initialize(),
            v.Z.initialize(),
            w.Z.initialize(),
            eh.Z.initialize(),
            C.ZP.initialize(),
            eP.Z.initialize(),
            eo.Z.initialize(),
            I.Z.initialize(),
            z.Z.init(),
            Q.Z.init(),
            ez.Z.init(),
            eW.Z.init(),
            E.Z.initialize(),
            eb.Z.init(),
            eF.Z.init(),
            ey.Z.init(),
            eS.Z.initialize(),
            eN.Z.initialize(),
            eZ.Z.initialize(),
            eL.Z.init(),
            M.Z.initialize(),
            _.Z.initialize(),
            eE.Z.initialize(),
            ev.Z.initialize(),
            el.Z.initialize(),
            ea.Z.initialize(),
            es.Z.initialize(),
            L.Z.initialize(),
            R.Z.initialize(),
            J.Z.init({
                hasModalOpen: o.hasAnyModalOpen,
                openModal: () =>
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, i.jsx)(e, { ...t });
                    })
            }),
            D.Z.init(),
            ee.Z.initialize(),
            em.Z.initialize(),
            ed.Z.initialize(),
            j.Z.initialize(),
            Z.Z.initialize(),
            y.Z.initialize(),
            (this.rewriterUnlisten = ep.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = ep.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eO.Z.terminate(), eu.Z.terminate(), ec.Z.terminate(), b.Z.terminate(), C.ZP.terminate(), eP.Z.terminate(), I.Z.terminate(), eh.Z.terminate(), eo.Z.terminate(), eZ.Z.terminate(), E.Z.terminate(), M.Z.terminate(), ee.Z.terminate(), _.Z.terminate(), em.Z.terminate(), eE.Z.terminate(), ev.Z.terminate(), el.Z.terminate(), ea.Z.terminate(), es.Z.terminate(), L.Z.terminate(), R.Z.terminate(), ed.Z.terminate(), j.Z.terminate(), k.Z.terminate(), Z.Z.terminate(), y.Z.terminate(), this.historyUnlisten(), this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (V.Z.isConnected() || V.Z.isTryingToConnect()) return;
            let t = ej.default.getToken();
            if (null != t)
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of e9) {
                            if (!n) continue;
                            let i = (0, l.LX)(e, { path: t });
                            if (null != i) return i;
                        }
                        return null;
                    })(e) && c.Z.startSession(t);
        })(t),
            !(function (e, t) {
                let n = e7(e);
                if (null == n) return;
                let { guildId: i, channelId: r, messageId: s, threadId: o } = e5(n),
                    c = (0, eg.Ss)(i),
                    d = (0, eg.cq)(r),
                    m = (0, eg.cq)(o),
                    p = eH.Z.getGuildId(),
                    g = p !== i;
                if ((c && g && u.Z.selectGuild(i), c && d)) {
                    let n = eB.Z.getChannelId(p),
                        l = n !== r;
                    if (!e1 || g || l || null != s) {
                        (e1 = !0),
                            h.default.selectChannel({
                                guildId: i,
                                channelId: r,
                                messageId: s
                            });
                        let { summaryId: e } = (0, a.parse)(t);
                        null != e && eT.ZP.setSelectedSummary(r, e);
                    }
                    if (null != o && m) {
                        let e = eD.ZP.getCurrentSidebarChannelId(n) !== o,
                            t = null != eD.ZP.getGuildSidebarState(i);
                        if (null != r && null != o && e) {
                            if (t) (0, ef.dL)(eQ.Z5c.CHANNEL(i, o, s));
                            else {
                                let e = { type: eC.Ff.THREAD };
                                null != s && (e.initialMessageId = s),
                                    eI.Z.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: r,
                                        channelId: o,
                                        details: e
                                    });
                            }
                        }
                    } else null != r && !l && eI.Z.closeChannelSidebar(r);
                    let c = en.Z.getIsOpen();
                    if (r === eJ.oC.ROLE_SUBSCRIPTIONS) et.Z.closeSidebar();
                    else if (g && c) {
                        let t = null == p && i === eQ.ME,
                            n = e === eQ.Z5c.GUILD_DISCOVERY;
                        t || n ? et.Z.closeSidebar() : et.Z.openSidebar();
                    } else ((l && c) || (!g && !l)) && et.Z.closeSidebar();
                } else {
                    var f;
                    if (
                        ((f = e),
                        !e6.some((e) => {
                            var t;
                            return (null === (t = (0, l.LX)(f, e)) || void 0 === t ? void 0 : t.isExact) === !0;
                        }))
                    )
                        (0, ef.dL)(ew.Z.fallbackRoute);
                }
            })(t, n);
    }
    ensureChannelMatchesGuild(e) {
        if (!V.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = e7(t);
        if (null == n) return null;
        let { guildId: i, channelId: r, threadId: a } = e5(n),
            l = (0, eg.Ss)(i) && i !== eQ.ME && i !== eQ.I_8;
        if (null != r && (0, eg.cq)(r) && !(0, eJ.AB)(r) && l) {
            let n = eM.Z.getChannel(r);
            if (null == n)
                ex.Z.loadThread(r).then(() =>
                    e8({
                        channelId: r,
                        guildId: i,
                        pathname: t
                    })
                );
            else if (n.guild_id !== i)
                return {
                    path: eQ.Z5c.CHANNEL(i),
                    state: e.state
                };
            if (null != a) {
                if (!((0, eg.cq)(a) && !(0, eJ.AB)(r))) return null;
                let n = eM.Z.getChannel(a);
                if (null == n)
                    ex.Z.loadThread(a).then(() =>
                        e8({
                            channelId: a,
                            guildId: i,
                            pathname: t
                        })
                    );
                else if ((null == n ? void 0 : n.parent_id) !== r)
                    return (
                        eI.Z.closeChannelSidebar(r),
                        {
                            path: eQ.Z5c.CHANNEL(i, r),
                            state: e.state
                        }
                    );
            }
        }
        return null;
    }
    render() {
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsxs)(l.rs, {
                    children: [
                        (0, i.jsx)(l.l_, {
                            exact: !0,
                            from: '/channels',
                            to: '/'
                        }),
                        e9.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, i.jsx)(
                                l.AW,
                                {
                                    path: t,
                                    render: n
                                },
                                t[0]
                            );
                        }),
                        (0, i.jsx)(l.l_, { to: '/' })
                    ]
                }),
                (0, i.jsx)(P.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e), e0(this, 'historyUnlisten', () => {}), e0(this, 'rewriterUnlisten', () => {});
    }
}
t.default = te;
