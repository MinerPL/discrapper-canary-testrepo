n.r(t), n(47120);
var i = n(735250),
    a = n(470079),
    s = n(593473),
    r = n(266067),
    l = n(442837),
    o = n(481060),
    c = n(893776),
    d = n(943094),
    u = n(749210),
    _ = n(287734),
    E = n(401430),
    h = n(230711),
    m = n(607070),
    I = n(627845),
    g = n(185666),
    p = n(503737),
    T = n(513202),
    S = n(318891),
    C = n(687751),
    f = n(912471),
    N = n(100527),
    A = n(838134),
    v = n(77987),
    L = n(679891),
    Z = n(491575),
    R = n(954709),
    O = n(644679),
    x = n(314533),
    b = n(9029),
    P = n(935347),
    M = n(560067),
    D = n(823169),
    y = n(620360),
    j = n(96051),
    U = n(750995),
    G = n(696287),
    w = n(408026),
    k = n(763916),
    B = n(306721),
    H = n(531551),
    V = n(38618),
    F = n(972830),
    Y = n(981283),
    W = n(584233),
    z = n(15274),
    K = n(434404),
    q = n(543842),
    Q = n(879064),
    X = n(315964),
    J = n(495784),
    $ = n(975533),
    ee = n(377400),
    et = n(285865),
    en = n(659971),
    ei = n(929809),
    ea = n(122333),
    es = n(960275),
    er = n(818765),
    el = n(678492),
    eo = n(269089),
    ec = n(380570),
    ed = n(837689),
    eu = n(367207),
    e_ = n(489977),
    eE = n(329557),
    eh = n(304445),
    em = n(893607),
    eI = n(703656),
    eg = n(298969),
    ep = n(719256),
    eT = n(6025),
    eS = n(897473),
    eC = n(377368),
    ef = n(262702),
    eN = n(639033),
    eA = n(479313),
    ev = n(911560),
    eL = n(703016),
    eZ = n(171368),
    eR = n(429974),
    eO = n(332754),
    ex = n(507468),
    eb = n(357269),
    eP = n(282506),
    eM = n(444961),
    eD = n(314897),
    ey = n(433355),
    ej = n(592125),
    eU = n(896797),
    eG = n(430824),
    ew = n(819640),
    ek = n(283595),
    eB = n(944486),
    eH = n(914010),
    eV = n(695103),
    eF = n(241890),
    eY = n(897607),
    eW = n(417363),
    ez = n(900974),
    eK = n(358085),
    eq = n(998502),
    eQ = n(346329),
    eX = n(981631),
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
n(117240), n(801077), n(967368), n(272053), n(974180), n(574254), n(551428), n(55563), n(455173), n(882029), n(959457), n(653255), n(663389), n(25990), n(778825), n(999382), n(388610), n(533947), n(277053), n(371398), n(141233), n(471073), n(628566);
let e1 = !1;
(0, f.DL)(),
    l.ZP.initialize(),
    eg.Z.loadServer(),
    eK.isPlatformEmbedded &&
        (eq.ZP.on('USER_SETTINGS_OPEN', () => {
            !ew.Z.getLayers().includes(eX.S9g.USER_SETTINGS) && h.Z.open(eX.oAB.ACCOUNT);
        }),
        eq.ZP.on('LAUNCH_APPLICATION', (e, t) => {
            let n = ek.Z.getActiveLibraryApplication(t);
            eQ.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: eX.ZY5.DIRECT,
                        object: eX.qAy.WEB_URL
                    }
                }
            });
        }));
let e4 = l.ZP.connectStores([V.Z, eU.Z, eD.default], () => ({
        isConnected: V.Z.isConnected(),
        defaultRoute: eU.Z.defaultRoute,
        defaultRouteFallback: eU.Z.fallbackRoute,
        token: eD.default.getToken()
    }))(
        class extends a.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, W.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: a } = this.props;
                if (null == n) return (0, i.jsx)(r.l_, { to: eX.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = e6(t);
                    return null == e || ((e.params.guildId === eX.ME || null != eG.Z.getGuild(e.params.guildId)) && null != ej.Z.getChannel(e.params.channelId)) ? (0, i.jsx)(r.l_, { to: t }) : (0, i.jsx)(r.l_, { to: a });
                }
                return null;
            }
        }
    ),
    e7 = (0, v.e)(Z.Z, null, { passProps: !1 }),
    e5 = (0, v.e)(A.default, null, { passProps: !1 }),
    e2 = [eX.Z5c.GUILD_BOOSTING_MARKETING(':guildId'), ...Array.from(eJ.Vg).map((e) => eX.Z5c.CHANNEL(':guildId', e))];
function e3(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: a = null } = e.params;
    return {
        guildId: null != t ? t : eX.ME,
        channelId: n,
        messageId: i,
        threadId: a
    };
}
let e9 = [
    {
        path: [eX.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(':inviteCode')],
        render(e) {
            let { match: t } = e;
            return (0, i.jsx)(e4, { match: t });
        },
        isSessionRequired: !0
    },
    {
        path: [eX.Z5c.APP],
        render: () => (0, i.jsx)(e4, {}),
        isSessionRequired: !0
    },
    {
        path: [eX.Z5c.USERS(':id')],
        render: function (e) {
            let { match: t, location: n } = e,
                { friend_token: a } = (0, s.parse)(n.search),
                { id: l } = t.params;
            return (
                (0, F.h)(() =>
                    (0, eZ.openUserProfileModal)({
                        userId: l,
                        guildId: eX.ME,
                        friendToken: a,
                        sourceAnalyticsLocations: [N.Z.URI_SCHEME],
                        analyticsLocation: { section: eX.jXE.DIRECT_ROUTE_ACCESS }
                    })
                ),
                (0, i.jsx)(r.l_, { to: eU.Z.defaultRoute })
            );
        }
    },
    {
        path: [eX.Z5c.APPLICATION_LIBRARY_ACTION(':gameId', ':action')],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: a } = t.params;
            return (
                eW.Z.whenInitialized(() => {
                    ek.Z.whenInitialized(() => {
                        switch (a) {
                            case 'launch': {
                                let e = ek.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                eQ.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: eX.ZY5.DIRECT,
                                            object: eX.qAy.WEB_URL
                                        }
                                    }
                                });
                                break;
                            }
                            case 'test-mode':
                                eV.Z.whenInitialized(() => E.Wt(n));
                                break;
                            case 'uninstall': {
                                let e = ek.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, d.W)(e.id, e.branchId, eX.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, i.jsx)(r.l_, { to: eX.Z5c.APPLICATION_LIBRARY })
            );
        }
    },
    {
        path: [eX.Z5c.GUILD_CREATE],
        render: function () {
            return (0, F.h)(() => M.Z.openCreateGuildModal({ location: 'External link' })), (0, i.jsx)(r.l_, { to: eU.Z.defaultRoute });
        }
    },
    {
        path: [eX.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: a } = t.params,
                l = (0, s.parse)(location.search).feature;
            return (
                (0, F.h)(() =>
                    Q.v({
                        section: (0, q.Z)(eX.pNK, n),
                        subsection: (0, q.Z)(eX.KsC, a),
                        feature: l
                    })
                ),
                (0, i.jsx)(r.l_, { to: eU.Z.defaultRoute })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eX.Z5c.SETTINGS(':section', ':subsection?')],
        render: function (e) {
            let { location: t } = e,
                n = (0, eb.default)(t.pathname);
            return (
                null != n &&
                    (0, F.h)(() =>
                        h.Z.open(n.section, n.subsection, {
                            openWithoutBackstack: !1,
                            impressionSource: n.source
                        })
                    ),
                (0, i.jsx)(r.l_, { to: eU.Z.defaultRoute })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eX.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(':guildId')],
        render: function (e) {
            let { match: t } = e,
                { guildId: a } = t.params;
            return (
                (0, F.h)(() => {
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('5863'), n.e('48324')]).then(n.bind(n, 751212));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: a
                            });
                    });
                }),
                (0, i.jsx)(r.l_, { to: eX.Z5c.CHANNEL(a) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eX.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (0, F.h)(() => h.Z.open(eX.oAB.INVENTORY)), (0, i.jsx)(r.l_, { to: eU.Z.defaultRoute });
        },
        isSessionRequired: !0
    },
    {
        path: [eX.Z5c.WELCOME(':guildId?', ':channelId?')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: a } = t.params;
            (0, ei.c)(e$.M5.MARKETING_UNCLAIMED);
            let s = eX.Z5c.CHANNEL(n, a);
            return (0, i.jsx)(r.l_, { to: s });
        },
        isSessionRequired: !0
    },
    {
        path: [eX.Z5c.GUILD_EVENT_DETAILS(':guildId?', ':guildEventId')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: a } = t.params;
            return (
                (0, F.h)(() => {
                    (0, z.bO)({ eventId: a });
                }),
                (0, i.jsx)(r.l_, { to: eX.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eX.Z5c.GUILD_SETTINGS(':guildId', ':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: a, subsection: s } = t.params;
            return (
                (0, F.h)(() => {
                    K.Z.open(n, (0, q.Z)(eX.pNK, a), void 0, (0, q.Z)(eX.KsC, s));
                }),
                (0, i.jsx)(r.l_, { to: eX.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [eX.Z5c.CHANNEL_THREAD_VIEW(':guildId', ':channelId', ':threadId', ':messageId?'), eX.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?'), eX.Z5c.ACTIVITY, eX.Z5c.ACTIVITIES, eX.Z5c.ACTIVITIES_HAPPENING_NOW, eX.Z5c.ACTIVITY_DETAILS(':applicationId'), eX.Z5c.APPLICATION_LIBRARY, eX.Z5c.APPLICATION_STORE, eX.Z5c.MESSAGE_REQUESTS, eX.Z5c.COLLECTIBLES_SHOP, eX.Z5c.COLLECTIBLES_SHOP_FULLSCREEN, eX.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'), eX.Z5c.GUILD_DISCOVERY, eX.Z5c.QUEST_HOME, eX.Z5c.GLOBAL_DISCOVERY, eX.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?'), eX.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(':guildId', ':inviteCode?'), eX.Z5c.GUILD_BOOSTING_MARKETING(':guildId'), eX.Z5c.FEATURE(':feature'), eX.Z5c.FAMILY_CENTER],
        render: e7,
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [eX.Z5c.APPLICATION_DIRECTORY],
        render: e5,
        isSessionRequired: !0
    }
];
function e6(e) {
    for (let { path: t, isChatRoute: n } of e9) {
        if (!n) continue;
        let i = (0, r.LX)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function e8(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!V.Z.isConnected()) return;
    let { location: a } = (0, eI.s1)();
    if (a.pathname === i) null == ej.Z.getChannel(t) ? (0, eI.dL)(eX.Z5c.CHANNEL(n)) : (0, eI.dL)(i);
}
class te extends a.PureComponent {
    componentDidMount() {
        eq.ZP.setZoomFactor(m.Z.zoom),
            eg.Z.init(),
            L.Z.initialize(),
            ec.Z.initialize(),
            w.Z.initialize(),
            eM.Z.initialize(),
            k.Z.initialize(),
            eu.Z.initialize(),
            $.Z.initialize(),
            I.Z.init(),
            H.Z.init(),
            B.Z.init(),
            ea.Z.initialize(),
            C.Z.initialize(),
            U.Z.initialize(),
            e_.Z.initialize(),
            S.ZP.initialize(),
            eP.Z.initialize(),
            eo.Z.initialize(),
            T.Z.initialize(),
            Y.Z.init(),
            X.Z.init(),
            eY.Z.init(),
            ez.Z.init(),
            p.Z.initialize(),
            eL.Z.init(),
            eF.Z.init(),
            eO.Z.init(),
            ef.Z.initialize(),
            eN.Z.initialize(),
            eR.Z.initialize(),
            ex.Z.init(),
            j.Z.initialize(),
            g.Z.initialize(),
            ep.Z.initialize(),
            eC.Z.initialize(),
            er.Z.initialize(),
            es.Z.initialize(),
            el.Z.initialize(),
            x.Z.initialize(),
            b.Z.initialize(),
            J.Z.init({
                hasModalOpen: o.hasAnyModalOpen,
                openModal: () =>
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, i.jsx)(e, { ...t });
                    })
            }),
            y.Z.init(),
            ee.Z.initialize(),
            eE.Z.initialize(),
            ed.Z.initialize(),
            D.Z.initialize(),
            R.Z.initialize(),
            O.Z.initialize(),
            (this.rewriterUnlisten = eh.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eh.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eM.Z.terminate(), eu.Z.terminate(), ec.Z.terminate(), L.Z.terminate(), S.ZP.terminate(), eP.Z.terminate(), T.Z.terminate(), e_.Z.terminate(), eo.Z.terminate(), eR.Z.terminate(), p.Z.terminate(), j.Z.terminate(), ee.Z.terminate(), g.Z.terminate(), eE.Z.terminate(), ep.Z.terminate(), eC.Z.terminate(), er.Z.terminate(), es.Z.terminate(), el.Z.terminate(), x.Z.terminate(), b.Z.terminate(), ed.Z.terminate(), D.Z.terminate(), G.Z.terminate(), R.Z.terminate(), O.Z.terminate(), this.historyUnlisten(), this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (V.Z.isConnected() || V.Z.isTryingToConnect()) return;
            let t = eD.default.getToken();
            if (null != t)
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of e9) {
                            if (!n) continue;
                            let i = (0, r.LX)(e, { path: t });
                            if (null != i) return i;
                        }
                        return null;
                    })(e) && c.Z.startSession(t);
        })(t),
            !(function (e, t) {
                let n = e6(e);
                if (null == n) return;
                let { guildId: i, channelId: a, messageId: l, threadId: o } = e3(n),
                    c = (0, em.S)(i),
                    d = (0, em.c)(a),
                    E = (0, em.c)(o),
                    h = eH.Z.getGuildId(),
                    m = h !== i;
                if ((c && m && u.Z.selectGuild(i), c && d)) {
                    let n = eB.Z.getChannelId(h),
                        r = n !== a;
                    if (!e1 || m || r || null != l) {
                        (e1 = !0),
                            _.default.selectChannel({
                                guildId: i,
                                channelId: a,
                                messageId: l
                            });
                        let { summaryId: e } = (0, s.parse)(t);
                        null != e && eA.ZP.setSelectedSummary(a, e);
                    }
                    if (null != o && E) {
                        let e = ey.ZP.getCurrentSidebarChannelId(n) !== o,
                            t = null != ey.ZP.getGuildSidebarState(i);
                        if (null != a && null != o && e) {
                            if (t) (0, eI.dL)(eX.Z5c.CHANNEL(i, o, l));
                            else {
                                let e = { type: eS.Ff.THREAD };
                                null != l && (e.initialMessageId = l),
                                    eT.Z.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: a,
                                        channelId: o,
                                        details: e
                                    });
                            }
                        }
                    } else null != a && !r && eT.Z.closeChannelSidebar(a);
                    let c = en.Z.getIsOpen();
                    if (a === eJ.oC.ROLE_SUBSCRIPTIONS) et.Z.closeSidebar();
                    else if (m && c) {
                        let t = null == h && i === eX.ME,
                            n = e === eX.Z5c.GUILD_DISCOVERY;
                        t || n ? et.Z.closeSidebar() : et.Z.openSidebar();
                    } else ((r && c) || (!m && !r)) && et.Z.closeSidebar();
                } else {
                    var I;
                    if (
                        ((I = e),
                        !e2.some((e) => {
                            var t;
                            return (null === (t = (0, r.LX)(I, e)) || void 0 === t ? void 0 : t.isExact) === !0;
                        }))
                    )
                        (0, eI.dL)(eU.Z.fallbackRoute);
                }
            })(t, n);
    }
    ensureChannelMatchesGuild(e) {
        if (!V.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = e6(t);
        if (null == n) return null;
        let { guildId: i, channelId: a, threadId: s } = e3(n),
            r = (0, em.S)(i) && i !== eX.ME && i !== eX.I_8;
        if (null != a && (0, em.c)(a) && !(0, eJ.AB)(a) && r) {
            let n = ej.Z.getChannel(a);
            if (null == n)
                ev.Z.loadThread(a).then(() =>
                    e8({
                        channelId: a,
                        guildId: i,
                        pathname: t
                    })
                );
            else if (n.guild_id !== i)
                return {
                    path: eX.Z5c.CHANNEL(i),
                    state: e.state
                };
            if (null != s) {
                if (!((0, em.c)(s) && !(0, eJ.AB)(a))) return null;
                let n = ej.Z.getChannel(s);
                if (null == n)
                    ev.Z.loadThread(s).then(() =>
                        e8({
                            channelId: s,
                            guildId: i,
                            pathname: t
                        })
                    );
                else if ((null == n ? void 0 : n.parent_id) !== a)
                    return (
                        eT.Z.closeChannelSidebar(a),
                        {
                            path: eX.Z5c.CHANNEL(i, a),
                            state: e.state
                        }
                    );
            }
        }
        return null;
    }
    render() {
        return (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsxs)(r.rs, {
                    children: [
                        (0, i.jsx)(r.l_, {
                            exact: !0,
                            from: '/channels',
                            to: '/'
                        }),
                        e9.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, i.jsx)(
                                r.AW,
                                {
                                    path: t,
                                    render: n
                                },
                                t[0]
                            );
                        }),
                        (0, i.jsx)(r.l_, { to: '/' })
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
