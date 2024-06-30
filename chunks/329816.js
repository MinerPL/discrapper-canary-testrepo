n(47120), n(653041);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(802498), l = n(266067), u = n(873546), c = n(442837), d = n(704215), _ = n(335854), E = n(481060), f = n(570140), h = n(721037), p = n(490173), m = n(114250), I = n(315263), T = n(40851), g = n(607070), S = n(899663), A = n(213609), N = n(613413), v = n(327943), O = n(907459), R = n(559407), C = n(556766), y = n(514361), D = n(724145), L = n(260035), b = n(947519), M = n(243778), P = n(813744), U = n(892254), w = n(210887), x = n(819640), G = n(594174), k = n(451478), B = n(672752), F = n(812663), V = n(153850), H = n(725568), Z = n(78415), Y = n(806519), j = n(358085), W = n(74538), K = n(663993), z = n(823453), q = n(628123), Q = n(962745), X = n(151851), $ = n(981631), J = n(921944), ee = n(242694);
n(792295), Promise.resolve().then(n.bind(n, 62883)).then(e => {
    j.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
}), (0, _.E)({ getDefaultLinkInterceptor: I.default }), (0, K.Un)({
    createPromise: () => Promise.all([
        n.e('77298'),
        n.e('80451'),
        n.e('30634'),
        n.e('54343')
    ]).then(n.bind(n, 849493)),
    webpackId: 849493
}), (0, K.Un)({
    createPromise: () => Promise.all([
        n.e('77298'),
        n.e('80451'),
        n.e('30634'),
        n.e('81811')
    ]).then(n.bind(n, 80753)),
    webpackId: 80753
});
let et = (0, K.Un)({
        createPromise: () => n.e('46369').then(n.bind(n, 177741)),
        webpackId: 177741
    }), en = i.memo(function (e) {
        let t = (0, c.e7)([k.Z], () => k.Z.isFocused());
        return (0, r.jsx)(X.Z, {
            ...e,
            focused: t
        });
    });
t.Z = function (e) {
    let {
            children: t,
            skipsSettingDefaultPageTitle: n
        } = e, {pathname: a} = (0, l.TH)(), _ = (0, j.getPlatform)(), I = u.tq || u.Em, k = (0, c.e7)([w.Z], () => w.Z.darkSidebar ? $.BRd.DARK : void 0), K = (0, c.e7)([g.Z], () => g.Z.useForcedColors ? 'yes' : 'no'), [X, er] = (0, c.Wu)([y.Z], () => [
            y.Z.isEditorOpen,
            y.Z.isCoachmark
        ]), ei = (0, c.e7)([v.Z], () => v.Z.isEditorOpen), ea = (0, c.e7)([x.Z], () => x.Z.getLayers().includes($.S9g.USER_SETTINGS)), eo = (0, c.e7)([G.default], () => W.ZP.canUseClientThemes(G.default.getCurrentUser())), es = X && !ea, el = [];
    es && er && !eo && el.push(d.z.CLIENT_THEMES_COACHMARK);
    let [eu, ec] = (0, M.U)(el, J.R.SIDEBAR, !0);
    el.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    let ed = eu === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK, e_ = eu === d.z.CLIENT_THEMES_COACHMARK;
    i.useEffect(() => {
        null == (0, l.LX)(a, {
            path: 'invite',
            exact: !1,
            strict: !1
        }) && ed && !e_ && (f.Z.dispatch({ type: 'APP_ICON_EDITOR_OPEN' }), f.Z.dispatch({
            type: 'APP_ICON_TRACK_IMPRESSION',
            markAsDismissed: ec
        }));
    }, [
        ed,
        e_,
        ec,
        a
    ]);
    let eE = i.useRef(document.body);
    return (0, r.jsx)(U.Z, {
        children: (0, r.jsx)(S.Z, {
            children: (0, r.jsxs)(E.RedesignIconContextProvider, {
                children: [
                    (0, r.jsx)(z.Z, { skipsSettingDefaultPageTitle: n }),
                    (0, r.jsx)(Q.Z, {
                        children: (0, r.jsx)(q.Z, {
                            children: (0, r.jsxs)(E.FocusRingScope, {
                                containerRef: eE,
                                children: [
                                    (0, r.jsx)(Y.Co, {}),
                                    (0, r.jsx)(B.ZP, {}),
                                    (0, r.jsx)(s.OU, {}),
                                    null != _ ? (0, r.jsx)(en, {
                                        type: _,
                                        themeOverride: k
                                    }) : null,
                                    (0, r.jsx)(T.Wu, {
                                        appContext: $.IlC.APP,
                                        renderWindow: window,
                                        children: (0, r.jsxs)(V.yP, {
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: o()(ee.appAsidePanelWrapper, I && ee.mobileAppAsidePanelWrapper, {
                                                        [ee.allowsScrolling]: (() => {
                                                            let e = (0, l.LX)(a, {
                                                                path: $.Z5c.APPLICATION_DIRECTORY,
                                                                exact: !1,
                                                                strict: !1
                                                            });
                                                            return (!!u.tq || !!u.Em) && null != e || !1;
                                                        })()
                                                    }),
                                                    children: [
                                                        (0, r.jsx)('div', {
                                                            className: ee.notAppAsidePanel,
                                                            'data-app-not-dev-tools': !0,
                                                            children: (0, r.jsx)(L.m, {
                                                                children: (0, r.jsx)(Z.OR, {
                                                                    children: (0, r.jsxs)(F.Z.Provider, {
                                                                        value: A.Z,
                                                                        children: [
                                                                            (0, r.jsx)('div', {
                                                                                className: o()(I ? ee.mobileApp : ee.app),
                                                                                children: t
                                                                            }),
                                                                            (0, r.jsx)(R.Z, {}),
                                                                            (0, r.jsx)(p.Z, {}),
                                                                            (0, r.jsx)(E.Modals, {}),
                                                                            (0, r.jsx)(m.Z, {}),
                                                                            (0, r.jsx)(H.Ox, {}),
                                                                            (0, r.jsx)(V.Un, {}),
                                                                            (0, r.jsx)(Z.ot, {}),
                                                                            (0, r.jsx)(E.ToastContainer, {}),
                                                                            (0, r.jsx)(N.Z, {}),
                                                                            (0, r.jsx)(P.Z, {}),
                                                                            (0, r.jsx)(et, {})
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        (0, r.jsx)(C.Z, {}),
                                                        (0, r.jsx)(h.Z, {}),
                                                        es && !er || e_ ? (0, r.jsx)(D.Z, { markAsDismissed: ec }) : null,
                                                        !ei || ea || e_ ? null : (0, r.jsx)(O.Z, {
                                                            isCoachmark: ed,
                                                            markAsDismissed: ec
                                                        }),
                                                        (0, r.jsx)(b.Z, { mobile: I })
                                                    ]
                                                }),
                                                !1
                                            ]
                                        })
                                    }),
                                    (0, r.jsx)(s.OU, {})
                                ]
                            })
                        })
                    })
                ]
            })
        })
    }, K);
};
