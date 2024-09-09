n(47120);
var i,
    a,
    s = n(735250),
    r = n(470079),
    l = n(180081),
    o = n(143927),
    c = n(704215),
    d = n(481060),
    u = n(393238),
    _ = n(963202),
    E = n(605236),
    h = n(931515),
    m = n(807933),
    I = n(702646),
    g = n(207796),
    p = n(543550),
    T = n(86014),
    S = n(895068),
    C = n(921944),
    f = n(69878);
((a = i || (i = {})).TOP_PICKS = 'top_picks'), (a.OTHER_GUILDS = 'other_guilds');
let N = {
        mass: 1,
        tension: 600,
        friction: 60
    },
    A = r.memo(function (e) {
        let { mode: t, width: n, withAdminContent: i } = e,
            [{ scrollSpring: a }, o] = (0, d.useSpring)(() => ({
                from: { scrollSpring: 0 },
                config: N
            })),
            u = r.useCallback(
                (e) => {
                    o({ scrollSpring: e.currentTarget.scrollTop });
                },
                [o]
            ),
            _ = (0, E.wE)(c.z.NEW_GAMING_DISCOVERY_NOTIF);
        switch (
            (r.useEffect(() => {
                !_ &&
                    (0, E.EW)(c.z.NEW_GAMING_DISCOVERY_NOTIF, {
                        dismissAction: C.L.TAKE_ACTION,
                        forceTrack: !0
                    });
            }, [_]),
            t)
        ) {
            case g.v0.ADMIN_UPSELL:
                return (0, s.jsx)(p.$, { onScroll: u });
            case g.v0.GET_STARTED:
            case g.v0.DISCOVERY:
            case g.v0.GAMES:
            case g.v0.PLAYSTYLE:
            case g.v0.TRAITS:
            case g.v0.PREFERENCES:
                return (0, s.jsxs)('div', {
                    className: f.discoveryContainer,
                    children: [
                        (0, s.jsxs)('div', {
                            className: f.toolbar,
                            children: [
                                (0, s.jsx)(l.animated.div, {
                                    className: f.toolbarBackground,
                                    style: {
                                        opacity: null == a ? void 0 : a.to([0, 100], [0, 1])
                                    }
                                }),
                                (0, s.jsx)(I.Z, { guildIcon: (0, s.jsx)(I.a, {}) })
                            ]
                        }),
                        (0, s.jsx)('div', {
                            className: f.content,
                            children: (0, s.jsx)(T.Z, {
                                inGlobalDiscovery: !1,
                                width: n,
                                onScroll: u,
                                variant: (0, S.s)(t),
                                withAdminContent: i
                            })
                        }),
                        (0, s.jsx)('div', {
                            className: f.selectors,
                            children: (0, s.jsx)(m.Z, { mode: t })
                        })
                    ]
                });
            case g.v0.SAVED_GUILDS:
                return (0, s.jsxs)('div', {
                    className: f.discoveryContainer,
                    children: [
                        (0, s.jsx)('div', {
                            className: f.toolbar,
                            children: (0, s.jsx)(I.Z, {})
                        }),
                        (0, s.jsx)('div', {
                            className: f.content,
                            children: (0, s.jsx)(T.Z, {
                                inGlobalDiscovery: !1,
                                width: n,
                                variant: (0, S.s)(t),
                                withAdminContent: i
                            })
                        }),
                        (0, s.jsx)('div', {
                            className: f.selectors,
                            children: (0, s.jsx)(m.Z, { mode: t })
                        })
                    ]
                });
        }
    });
function v(e) {
    let { mode: t, children: n } = e,
        { enableClanCreation: i } = (0, _.C3)({
            location: 'ClanDiscoveryAdminContainer',
            includeConverted: !0
        }),
        a = (0, _.iN)('ClanDiscoveryAdminContainer'),
        l = (0, _.YH)('ClanDiscoveryAdminContainer');
    return (
        r.useEffect(() => {
            if (i && !a && t !== g.v0.ADMIN_UPSELL && !l) {
                (0, g.fH)(g.v0.ADMIN_UPSELL);
                return;
            }
            if (!i && a && t === g.v0.ADMIN_UPSELL) {
                (0, g.fH)(g.v0.DISCOVERY);
                return;
            }
        }, [t, i, a, l]),
        (0, s.jsx)(s.Fragment, { children: n })
    );
}
t.Z = r.memo(function () {
    let { loading: e } = (0, h.LE)(),
        t = (0, g.GN)((e) => e.mode, o.Z),
        { ref: n, width: i } = (0, u.Z)(),
        { enableClanCreation: a } = (0, _.C3)({
            location: 'GuildsTab',
            includeConverted: !0
        }),
        r = (0, _.iN)('global_discovery_guilds_tab');
    return (0, s.jsxs)('main', {
        className: f.container,
        ref: n,
        children: [
            (0, s.jsx)('div', { className: f.dragRegion }),
            e
                ? (0, s.jsx)('div', {
                      className: f.loading,
                      children: (0, s.jsx)(d.Spinner, {})
                  })
                : (0, s.jsx)(v, {
                      mode: t,
                      children: (0, s.jsx)(A, {
                          width: i,
                          mode: t,
                          withAdminContent: a && r
                      })
                  })
        ]
    });
});
