n.d(t, {
    Z: function () {
        return eV;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(266067), o = n(990547), c = n(608787), d = n(873546), u = n(442837), _ = n(481060), E = n(711237), h = n(532835), I = n(290297), m = n(918854), p = n(279240), g = n(765717), T = n(358221), S = n(823748), C = n(626421), N = n(118379), f = n(652515), A = n(544978), Z = n(194729), L = n(668940), v = n(724383), O = n(705334), R = n(372900), x = n(6039), P = n(637853), b = n(326145), M = n(269675), D = n(242601), y = n(416568), j = n(613609), U = n(160404), G = n(225675), w = n(745052), k = n(285865), B = n(659971), H = n(720734), V = n(840780), F = n(235555), Y = n(746508), W = n(179742), z = n(270759), K = n(210724), q = n(905423), Q = n(304445), X = n(210887), J = n(592125), $ = n(271383), ee = n(430824), et = n(944486), en = n(933429), ei = n(823379), es = n(709054), ea = n(792125), er = n(409292), el = n(316173), eo = n(256638), ec = n(663701), ed = n(410575), eu = n(425369), e_ = n(715702), eE = n(981631), eh = n(176505), eI = n(290511), em = n(689938), ep = n(684774);
let eg = () => (0, i.jsx)('div', {
        className: ep.loader,
        children: (0, i.jsx)(_.Spinner, {})
    }), eT = (0, c.Un)({
        createPromise: () => n.e('68614').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: eg
    }), eS = (0, c.Un)({
        createPromise: () => n.e('44798').then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: eg
    }), eC = (0, c.Un)({
        createPromise: () => n.e('60493').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: eg
    }), eN = (0, c.Un)({
        createPromise: () => Promise.all([
            n.e('85552'),
            n.e('44400')
        ]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: eg
    }), ef = (0, c.Un)({
        createPromise: () => Promise.all([
            n.e('96427'),
            n.e('44156'),
            n.e('58227'),
            n.e('38359'),
            n.e('92201')
        ]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: eg
    }), eA = (0, c.Un)({
        createPromise: () => Promise.all([
            n.e('96427'),
            n.e('44156'),
            n.e('19878'),
            n.e('38359'),
            n.e('63598')
        ]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: eg
    }), eZ = e => {
        let {match: t} = e, n = (0, u.e7)([
                J.Z,
                et.Z
            ], () => {
                let e = et.Z.getChannelId();
                return J.Z.getChannel(e);
            }), {
                guildId: s,
                channelId: a,
                messageId: r
            } = t.params, l = (0, u.e7)([ee.Z], () => ee.Z.getGuild(s)), o = (0, u.e7)([$.ZP], () => null == s ? null : $.ZP.getSelfMember(s)), c = (0, u.e7)([U.Z], () => {
                if (null == s)
                    return;
                let e = U.Z.getData(s);
                if ((null == e ? void 0 : e.type) === G.z.SERVER_SHOP)
                    switch (e.initialTab) {
                    case 'role_subscriptions':
                        return A.y.GUILD_ROLE_SUBSCRIPTIONS;
                    case 'guild_products':
                        return A.y.GUILD_PRODUCTS;
                    default:
                        return;
                    }
            }), d = (0, f.C4)(s, 'channel_renderer');
        if (null != s && null != a && (0, eh.AB)(a))
            switch (a) {
            case eh.oC.ROLE_SUBSCRIPTIONS:
                return d ? (0, i.jsx)(eT, {
                    guildId: s,
                    initialTab: A.y.GUILD_ROLE_SUBSCRIPTIONS
                }) : (0, i.jsx)(M.Z, { guildId: s });
            case eh.oC.GUILD_SHOP:
                return (0, i.jsx)(eT, {
                    guildId: s,
                    productId: r,
                    initialTab: c
                });
            case eh.oC.MEMBER_APPLICATIONS:
                return (0, i.jsx)(eS, { guildId: s });
            case eh.oC.GUILD_HOME:
                return (0, i.jsx)(eC, { guildId: s });
            case eh.oC.CHANNEL_BROWSER:
                return (0, i.jsx)(ef, {
                    guildId: s,
                    selectedSection: eI.l7.BROWSE
                });
            case eh.oC.GUILD_ONBOARDING:
                return (0, i.jsx)(eA, { guildId: s });
            case eh.oC.CUSTOMIZE_COMMUNITY:
                return (0, i.jsx)(ef, {
                    guildId: s,
                    selectedSection: eI.l7.CUSTOMIZE
                });
            case eh.oC.MEMBER_SAFETY:
                return (0, i.jsx)(eN, { guildId: s });
            default:
                (0, ei.vE)(a);
            }
        if ((0, P.p3)(l, o))
            return (0, i.jsx)(b.Z, {
                guildId: s,
                channelId: a
            });
        if ((null == n ? void 0 : n.type) === eE.d4z.GUILD_STORE) {
            let e = es.default.cast(t.params.messageId);
            return (0, i.jsx)(er.Z, {
                channel: n,
                inputSkuId: e
            }, n.id);
        }
        return (0, i.jsx)(S.Z, {});
    }, eL = s.memo(function () {
        let {
                guildId: e,
                channelId: t
            } = (0, q.Z)(), n = (0, u.e7)([et.Z], () => null != t ? t : et.Z.getChannelId(e));
        return function () {
            return window.location.pathname.startsWith(eE.Z5c.GLOBAL_DISCOVERY);
        }() ? (0, i.jsx)(O._, {}) : function () {
            return window.location.pathname.startsWith(eE.Z5c.GUILD_DISCOVERY);
        }() ? (0, i.jsx)(L.Z, {}) : null != e ? (0, i.jsx)(D.Z, {
            selectedChannelId: n,
            guildId: e
        }, e) : (0, i.jsx)(ec.Z, {});
    });
function ev(e) {
    let t = (0, q.Z)(e => {
        let {guildId: t} = e;
        return t;
    });
    return (0, i.jsx)(V.Z, {
        ...e,
        guildId: t
    });
}
let eO = e => (0, i.jsx)(eZ, { ...e }), eR = () => (0, i.jsx)(v.A, {}), ex = e => {
        let t = null != e && e.length > 0 && e.startsWith('?') ? e.split('?')[1] : null;
        return (0, i.jsx)(Z.Z, { searchRoute: t });
    }, eP = e => {
        let {match: t} = e;
        return null != t.params.guildId ? (0, i.jsx)(x.Z, {
            guildId: t.params.guildId,
            inviteCode: t.params.inviteCode
        }) : null;
    }, eb = e => {
        let {match: t} = e;
        return null != t.params.guildId ? (0, i.jsx)(j.Z, {
            guildId: t.params.guildId,
            inviteCode: t.params.inviteCode
        }) : null;
    }, eM = () => (0, i.jsx)(eu.Z, {}), eD = () => (0, i.jsx)(e_.Z, {}), ey = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            return (0, i.jsx)(N.Z, {
                isFullScreen: e,
                ...t
            });
        };
    }, ej = e => (0, i.jsx)(p.Z, { ...e }), eU = () => (0, i.jsx)(m.Z, {}), eG = () => (0, i.jsx)(z.Z, {}), ew = () => (0, i.jsx)(w.Z, {}), ek = () => (0, i.jsx)(W.Z, {}), eB = e => {
        let {match: t} = e;
        switch (t.params.feature) {
        case 'addFriends':
            return (0, i.jsx)(z.Z, { initialSection: eE.pJs.ADD_FRIEND });
        case 'pendingFriends':
            return (0, i.jsx)(z.Z, { initialSection: eE.pJs.PENDING });
        case 'sessionManagement':
            return (0, i.jsx)(l.l_, { to: eE.Z5c.SETTINGS('sessions') });
        case 'connections':
            return (0, i.jsx)(l.l_, {
                to: {
                    pathname: eE.Z5c.SETTINGS('connections'),
                    search: e.location.search
                }
            });
        case 'family-center':
            return (0, i.jsx)(l.l_, { to: eE.Z5c.FAMILY_CENTER });
        case 'account-standing':
            return (0, i.jsx)(l.l_, { to: eE.Z5c.SETTINGS('privacy-and-safety', 'account-standing') });
        case 'authorized-apps':
            return (0, i.jsx)(l.l_, { to: eE.Z5c.SETTINGS('authorized-apps') });
        default:
            return (0, i.jsx)(l.l_, { to: eE.Z5c.ME });
        }
    };
function eH(e) {
    let {
        hasNotice: t,
        sidebarTheme: n,
        hideSidebar: s
    } = e;
    (0, h.t)(!0);
    let a = 'app view user trigger debugging';
    E.R6.useExperiment({ location: a }, { autoTrackExposure: !1 }), E.R6.trackExposure({ location: a });
    let l = (0, u.e7)([T.Z], () => T.Z.isFullscreenInContext());
    return s ? null : (0, i.jsxs)('div', {
        className: r()(ep.sidebar, (0, ea.Q)(n), {
            [ep.hasNotice]: t,
            [ep.fullWidth]: d.tq,
            [ep.hidden]: l
        }),
        children: [
            (0, i.jsx)(eL, {}),
            (0, i.jsxs)('section', {
                className: ep.panels,
                'aria-label': em.Z.Messages.ACCOUNT_A11Y_LABEL,
                children: [
                    (0, i.jsx)(K.Z, {}),
                    (0, i.jsx)(F.Z, {}),
                    (0, i.jsx)(ed.Z, {
                        section: eE.jXE.ACTIVITY_PANEL,
                        children: (0, i.jsx)(ev, { className: ep.activityPanel })
                    }),
                    (0, i.jsx)(ed.Z, {
                        section: eE.jXE.RTC_CONNECTION_PANEL,
                        children: (0, i.jsx)(Y.Z, {})
                    }),
                    (0, i.jsx)(ed.Z, {
                        section: eE.jXE.ACCOUNT_PANEL,
                        children: (0, i.jsx)(H.Z, {})
                    })
                ]
            }),
            (0, i.jsx)(el.Z, {})
        ]
    });
}
function eV() {
    var e;
    let t = (0, u.e7)([en.Z], () => en.Z.hasNotice()), n = (0, u.e7)([X.Z], () => X.Z.darkSidebar ? eE.BRd.DARK : void 0), a = function () {
            let [e, t] = s.useState(() => window.location.pathname.startsWith(eE.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return s.useEffect(() => Q.Z.addRouteChangeListener(e => {
                t(e.pathname.startsWith(eE.Z5c.GUILD_MEMBER_VERIFICATION('')));
            }), []), e;
        }(), r = function () {
            let [e, t] = s.useState(() => window.location.pathname.startsWith(eE.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return s.useEffect(() => Q.Z.addRouteChangeListener(e => {
                t(e.pathname.startsWith(eE.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            }), []), e;
        }(), c = function () {
            var e;
            let t = (0, l.TH)();
            return (null === (e = (0, l.LX)(t.pathname, eE.Z5c.GUILD_BOOSTING_MARKETING(':guildId'))) || void 0 === e ? void 0 : e.isExact) === !0;
        }(), _ = function () {
            var e;
            let t = (0, l.TH)();
            return (null === (e = (0, l.LX)(t.pathname, eE.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        }(), E = (0, u.e7)([B.Z], () => B.Z.getIsOpen()), h = (0, l.$B)([
            eE.Z5c.CHANNEL(eE.ME, ':channelId'),
            eE.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
        ]), m = (null == h ? void 0 : null === (e = h.params) || void 0 === e ? void 0 : e.channelId) === eh.oC.GUILD_ONBOARDING, p = s.useCallback(() => k.Z.openSidebar(), []);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: ep.container,
            children: [
                E && !_ && (0, i.jsx)(y.Z, {
                    className: ep.guilds,
                    themeOverride: n
                }),
                (0, i.jsx)(R.Z.Provider, {
                    value: (null == h ? void 0 : h.params.guildId) === eE.ME ? void 0 : null == h ? void 0 : h.params.guildId,
                    children: (0, i.jsxs)('div', {
                        className: ep.base,
                        children: [
                            d.tq ? null : (0, i.jsx)(eo.Z, {}),
                            (0, i.jsxs)('div', {
                                className: ep.content,
                                children: [
                                    (0, i.jsx)(C.Z, {}),
                                    (0, i.jsx)(eH, {
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideSidebar: a || r || c || _ || m || !E
                                    }),
                                    (0, i.jsx)(I.Z.Provider, {
                                        value: p,
                                        children: (0, i.jsxs)(l.rs, {
                                            children: [
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, i.jsx)(l.l_, { to: eE.Z5c.ME })
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.ACTIVITIES_HAPPENING_NOW,
                                                    render: eU,
                                                    impressionName: o.ImpressionNames.ACTIVITIES
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                    render: ej,
                                                    impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: e => {
                                                        let {computedMatch: t} = e;
                                                        return { application_id: t.params.applicationId };
                                                    }
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.ACTIVITIES,
                                                    render: eU,
                                                    impressionName: o.ImpressionNames.ACTIVITIES
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.APPLICATION_LIBRARY,
                                                    render: eM,
                                                    impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.APPLICATION_STORE,
                                                    render: eD,
                                                    impressionName: o.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                    render: ey(!0),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.COLLECTIBLES_SHOP,
                                                    render: ey(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                    render: ey(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.MESSAGE_REQUESTS,
                                                    render: ew,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.FAMILY_CENTER,
                                                    render: ek,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.ME,
                                                    exact: !0,
                                                    render: eG,
                                                    impressionName: o.ImpressionNames.FRIENDS,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: [
                                                        eE.Z5c.CHANNEL_THREAD_VIEW(':guildId', ':channelId', ':threadId', ':messageId?'),
                                                        eE.Z5c.CHANNEL(eE.ME, ':channelId'),
                                                        eE.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
                                                    ],
                                                    render: eO,
                                                    impressionName: o.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.GLOBAL_DISCOVERY,
                                                    render: eR,
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.GLOBAL_DISCOVERY_QUESTS,
                                                    render: eR,
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.GUILD_DISCOVERY,
                                                    render: e => {
                                                        let {location: t} = e;
                                                        return ex(t.search);
                                                    },
                                                    impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?'),
                                                    render: eP,
                                                    impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(':guildId', ':inviteCode?'),
                                                    render: eb,
                                                    impressionName: o.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                    impressionProperties: e => {
                                                        let {computedMatch: t} = e;
                                                        return { has_invite: void 0 !== t.params.inviteCode };
                                                    }
                                                }),
                                                (0, i.jsx)(g.Z, {
                                                    path: eE.Z5c.FEATURE(':feature'),
                                                    exact: !0,
                                                    render: eB,
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
