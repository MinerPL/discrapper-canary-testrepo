n.d(t, {
    M: function () {
        return W;
    },
    Z: function () {
        return K;
    }
});
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(873546),
    o = n(286379),
    c = n(399606),
    d = n(704215),
    _ = n(481060),
    u = n(150063),
    E = n(758119),
    T = n(100527),
    I = n(906732),
    R = n(252618),
    g = n(313201),
    C = n(605236),
    N = n(984370),
    m = n(797614),
    p = n(108427),
    A = n(210887),
    f = n(695346),
    S = n(594174),
    h = n(626135),
    M = n(280570),
    x = n(914788),
    O = n(841409),
    b = n(652262),
    P = n(880257),
    v = n(631885),
    L = n(830746),
    Z = n(731934),
    D = n(521450),
    U = n(292352),
    B = n(981631),
    j = n(723359),
    G = n(921944),
    y = n(689938),
    w = n(199071);
let H = {
        [U.dG.REQUESTS]: () => (0, s.jsx)(Z.Z, {}),
        [U.dG.ACTIVITY]: () => (0, s.jsx)(L.Z, {}),
        [U.dG.SETTINGS]: () => (0, s.jsx)(D.Z, {})
    },
    k = {
        [U.dG.REQUESTS]: () => (0, s.jsx)(Z.Z, {}),
        [U.dG.ACTIVITY]: () => (0, s.jsx)(L.Z, {})
    };
function F(e) {
    let { section: t, handleItemSelect: n } = e,
        a = (0, v.gU)(),
        r = (0, P.Z)();
    return (0, s.jsxs)(_.TabBar, {
        className: w.settingsTabBar,
        'aria-label': y.Z.Messages.FAMILY_CENTER_TITLE,
        selectedItem: t,
        type: 'top',
        look: 'brand',
        onItemSelect: n,
        children: [
            (0, s.jsx)(_.TabBar.Item, {
                className: w.settingsTabBarItem,
                id: U.dG.ACTIVITY,
                children: y.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
            }),
            (0, s.jsxs)(_.TabBar.Item, {
                className: w.settingsTabBarItem,
                id: U.dG.REQUESTS,
                'aria-label': y.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
                children: [
                    y.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
                    a > 0
                        ? (0, s.jsx)(_.NumberBadge, {
                              className: w.badge,
                              count: a
                          })
                        : null
                ]
            }),
            r
                ? (0, s.jsx)(_.TabBar.Item, {
                      className: w.settingsTabBarItem,
                      id: U.dG.SETTINGS,
                      children: y.Z.Messages.SETTINGS
                  })
                : null
        ]
    });
}
function V(e) {
    let { theme: t, section: n, handleItemSelect: a } = e,
        r = (0, g.Dt)(),
        o = (0, v.gU)();
    return (0, s.jsx)(_.ThemeProvider, {
        theme: t,
        children: (e) =>
            (0, s.jsxs)(N.Z, {
                className: i()(e, w.sidebarTabBar),
                scrollable: l.tq,
                role: 'navigation',
                'aria-labelledby': r,
                toolbar: !0,
                children: [
                    (0, s.jsx)(N.Z.Icon, {
                        icon: _.GroupIcon,
                        'aria-hidden': !0
                    }),
                    (0, s.jsx)(N.Z.Title, {
                        id: r,
                        children: y.Z.Messages.FAMILY_CENTER_TITLE
                    }),
                    (0, s.jsx)(N.Z.Divider, {}),
                    (0, s.jsxs)(_.TabBar, {
                        'aria-label': y.Z.Messages.FAMILY_CENTER_TITLE,
                        selectedItem: n,
                        type: 'top-pill',
                        onItemSelect: a,
                        className: w.__invalid_tabBar,
                        children: [
                            (0, s.jsx)(_.TabBar.Item, {
                                id: U.dG.ACTIVITY,
                                className: w.item,
                                children: y.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
                            }),
                            (0, s.jsxs)(_.TabBar.Item, {
                                id: U.dG.REQUESTS,
                                className: w.item,
                                'aria-label': y.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
                                children: [
                                    y.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
                                    o > 0
                                        ? (0, s.jsx)(_.NumberBadge, {
                                              className: w.badge,
                                              count: o
                                          })
                                        : null
                                ]
                            })
                        ]
                    })
                ]
            })
    });
}
function W() {
    let e = (0, P.Z)(),
        t = (0, v.M8)(),
        n = (0, C.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        r = (0, c.e7)([x.Z], () => x.Z.getIsInitialized()),
        l = (0, b.M)(),
        { selectedTab: u, handleTabChange: T } = (0, O.Z)(),
        I = (0, g.Dt)(),
        N = S.default.getCurrentUser(),
        A = null != e,
        f = r && null != N && !A;
    return (a.useEffect(() => {
        (0, p.e)('family-center'),
            M.ZP.initialPageLoad(),
            !n &&
                (0, C.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: G.L.AUTO,
                    forceTrack: !0
                });
    }, []),
    a.useEffect(() => {
        r &&
            A &&
            (h.default.track(B.rMx.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: t,
                selected_teen_id: l,
                initial_page: U.QH[u],
                source: U._6[U.Mu.SIDENAV]
            }),
            m.Z.increment({ name: o.V.FAMILY_CENTER_VIEW }));
    }, [r, A]),
    f)
        ? ((0, E.mN)(j.L0.FAMILY_CENTER), null)
        : (0, s.jsxs)('main', {
              className: i()(w.container),
              'aria-label': y.Z.Messages.FAMILY_CENTER_TITLE,
              children: [
                  (0, s.jsx)(R.yY, { location: y.Z.Messages.FAMILY_CENTER_TITLE }),
                  (0, s.jsx)(F, {
                      section: u,
                      handleItemSelect: (e) => {
                          T(e);
                      }
                  }),
                  (0, s.jsx)(_.TabBar.Panel, {
                      id: u,
                      'aria-labelledby': I,
                      className: w.contentPanel,
                      children: (0, s.jsx)('div', { children: H[u]() })
                  })
              ]
          });
}
function K() {
    let { analyticsLocations: e } = (0, I.ZP)(T.Z.FAMILY_CENTER),
        t = (0, P.Z)(),
        n = (0, v.M8)(),
        r = (0, C.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        l = (0, c.e7)([x.Z], () => x.Z.getIsInitialized()),
        N = (0, b.M)(),
        L = (0, c.e7)([A.Z], () => A.Z.theme),
        { selectedTab: Z, handleTabChange: D } = (0, O.Z)(),
        H = (0, g.Dt)(),
        F = S.default.getCurrentUser(),
        W = null != t,
        K = l && null != F && !W;
    if (
        (a.useEffect(() => {
            u.Y(B.Z5c.FAMILY_CENTER),
                (0, p.e)('family-center'),
                !x.Z.isLoading() && x.Z.canRefetch() && M.ZP.initialPageLoad(),
                !r &&
                    (0, C.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                        dismissAction: G.L.AUTO,
                        forceTrack: !0
                    });
        }, []),
        a.useEffect(() => {
            l &&
                W &&
                (h.default.track(B.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: t,
                    num_of_accepted_links: n,
                    selected_teen_id: N,
                    initial_page: U.QH[Z],
                    source: U._6[U.Mu.SIDENAV]
                }),
                m.Z.increment({ name: o.V.FAMILY_CENTER_VIEW }));
        }, [l, W]),
        a.useEffect(() => {
            let e = f.Ex.getSetting();
            l && t && void 0 === e && f.Ex.updateSetting(!0);
        }, [l, t]),
        K)
    )
        return (0, E.mN)(j.L0.FAMILY_CENTER), null;
    let Y = Z !== U.dG.SETTINGS ? Z : U.dG.ACTIVITY,
        z = k[Y];
    return (0, s.jsx)(I.Gt, {
        value: e,
        children: (0, s.jsxs)('main', {
            className: i()(w.container, w.containerSidenav),
            'aria-label': y.Z.Messages.FAMILY_CENTER_TITLE,
            children: [
                (0, s.jsx)(R.yY, { location: y.Z.Messages.FAMILY_CENTER_TITLE }),
                (0, s.jsx)(V, {
                    theme: L,
                    section: Y,
                    handleItemSelect: (e) => {
                        D(e);
                    }
                }),
                (0, s.jsx)(_.TabBar.Panel, {
                    id: Y,
                    'aria-labelledby': H,
                    className: w.contentPanel,
                    children: (0, s.jsx)(_.Scroller, {
                        children: (0, s.jsx)('div', {
                            className: w.sideNavContent,
                            children: z()
                        })
                    })
                })
            ]
        })
    });
}
