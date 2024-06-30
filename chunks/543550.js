n.d(t, {
    $: function () {
        return L;
    },
    J: function () {
        return Z;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(920906), o = n(143927), c = n(597312), d = n(481060), u = n(393238), _ = n(410030), E = n(963202), h = n(353093), I = n(702646), m = n(207796), p = n(497189), g = n(304231), T = n(895068), S = n(490610), C = n(981631), N = n(689938), f = n(698829);
let A = (e, t) => {
    switch (e) {
    case m.hz.GENSHIN:
        return t === C.BRd.DARK ? f.genshinUpsellBackgroundImageDark : f.genshinUpsellBackgroundImageLight;
    case m.hz.VALORANT:
        return t === C.BRd.DARK ? f.valorantUpsellBackgroundImageDark : f.valorantUpsellBackgroundImageLight;
    }
};
function Z() {
    let e = (0, m.GN)(e => e.game, o.Z), t = (0, m.GN)(e => e.userUpsellScreen, o.Z), n = (0, m.GN)(e => e.setUserUpsellScreen, o.Z), {
            ref: a,
            width: c
        } = (0, u.Z)(), [E, h] = s.useState(0), p = (0, l.useSpring)({
            from: { scrollHeight: 0 },
            to: { scrollHeight: E }
        }), S = (0, _.ZP)(), N = s.useMemo(() => A(e, S), [
            e,
            S
        ]), Z = s.useCallback(e => {
            h(e.currentTarget.scrollTop);
        }, [h]), L = s.useMemo(() => {
            switch (e) {
            case m.hz.GENSHIN:
                return S === C.BRd.DARK ? f.genshinOnboardingBackgroundImageDark : f.genshinOnboardingBackgroundImageLight;
            case m.hz.VALORANT:
                return S === C.BRd.DARK ? f.valorantOnboardingBackgroundImageDark : f.valorantOnboardingBackgroundImageLight;
            }
        }, [
            e,
            S
        ]), v = (0, d.useToken)(d.tokens.colors.BG_MOD_STRONG);
    switch (t) {
    case m.o2.USER_UPSELL:
        return (0, i.jsxs)('div', {
            ref: a,
            className: f.container,
            children: [
                (0, i.jsxs)('div', {
                    className: f.toolbar,
                    style: { width: c },
                    children: [
                        (0, i.jsx)(l.animated.div, {
                            className: f.toolbarBackground,
                            style: {
                                width: c,
                                opacity: p.scrollHeight.to([
                                    100,
                                    364
                                ], [
                                    0,
                                    1
                                ]),
                                borderBottom: p.scrollHeight.to([
                                    100,
                                    364
                                ], [
                                    0,
                                    1
                                ]).to(e => '1px solid '.concat(v.hex({ opacity: e })))
                            }
                        }),
                        (0, i.jsx)(I.Z, {})
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: f.upsellContainer,
                    children: [
                        (0, i.jsxs)(l.animated.div, {
                            className: f.backgroundImageContainer,
                            style: {
                                opacity: p.scrollHeight.to([
                                    100,
                                    364
                                ], [
                                    1,
                                    0
                                ])
                            },
                            children: [
                                (0, i.jsx)('div', { className: N }),
                                (0, i.jsx)('div', { className: f.backgroundImageBlur })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: r()(f.backgroundImageContent, f.userUpsell),
                            children: (0, i.jsx)(T.ZP, {
                                onScroll: Z,
                                width: null != c ? c : 0,
                                isAnimating: !1,
                                variant: T.Bj.UPSELL
                            })
                        })
                    ]
                })
            ]
        });
    case m.o2.USER_ONBOARDING:
        return (0, i.jsx)('div', {
            className: f.container,
            children: (0, i.jsxs)('div', {
                className: r()(L, f.userOnboarding),
                children: [
                    (0, i.jsx)('div', { className: f.backgroundImageBlur }),
                    (0, i.jsx)('div', {
                        className: f.backgroundImageContent,
                        children: (0, i.jsx)(g.Z, {
                            selectedGame: e,
                            setScreen: n
                        })
                    })
                ]
            })
        });
    }
}
function L() {
    let e = (0, m.GN)(e => e.started, o.Z), t = (0, m.GN)(e => e.game, o.Z), {enableApplication: n} = (0, E.Fg)('ClanDiscoveryAdminContainer'), {guilds: a} = (0, E.C3)({
            location: 'ClanDiscoveryAdminContainer',
            includeConverted: !0
        }), l = s.useMemo(() => a.filter(e => !(0, h.EJ)(e)), [a]), d = (0, _.ZP)(), u = s.useMemo(() => A(t, d), [
            t,
            d
        ]), I = !e && n;
    return 0 === a.length ? null : (0, i.jsx)('div', {
        className: f.container,
        children: (0, i.jsxs)(c.u2, {
            className: f.upsellScroller,
            fade: !0,
            children: [
                (0, i.jsxs)('div', {
                    className: r()(u, f.adminUpsell),
                    children: [
                        (0, i.jsx)('div', { className: f.backgroundImageBlur }),
                        (0, i.jsx)('div', {
                            className: f.backgroundImageContent,
                            children: (0, i.jsx)(p.Z, {
                                isBrowseButtonVisible: I,
                                selectedGame: t,
                                eligibleGuilds: l,
                                eligibleGuildsIncludingConverted: a
                            })
                        })
                    ]
                }),
                (0, i.jsx)(S.Z, {
                    title: N.Z.Messages.CLAN_DISCOVERY_INSPIRATION_TITLE,
                    subtitle: I ? N.Z.Messages.CLAN_DISCOVERY_PILOT_SUBTITLE.format() : void 0
                })
            ]
        })
    });
}
