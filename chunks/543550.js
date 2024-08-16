n.d(t, {
    $: function () {
        return Z;
    },
    J: function () {
        return v;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(338545),
    o = n(143927),
    c = n(597312),
    d = n(481060),
    u = n(393238),
    _ = n(410030),
    E = n(963202),
    h = n(353093),
    m = n(702646),
    I = n(207796),
    g = n(497189),
    p = n(304231),
    T = n(895068),
    S = n(490610),
    f = n(981631),
    C = n(689938),
    N = n(145745);
let A = (e, t) => {
    switch (e) {
        case I.hz.NONE:
            return t === f.BRd.DARK ? N.genericUpsellBackgroundImageDark : N.genericUpsellBackgroundImageLight;
        case I.hz.GENSHIN:
            return t === f.BRd.DARK ? N.genshinUpsellBackgroundImageDark : N.genshinUpsellBackgroundImageLight;
        case I.hz.VALORANT:
            return t === f.BRd.DARK ? N.valorantUpsellBackgroundImageDark : N.valorantUpsellBackgroundImageLight;
    }
};
function v(e) {
    let { containerWidth: t = null } = e,
        n = (0, I.GN)((e) => e.game, o.Z),
        s = (0, I.GN)((e) => e.mode, o.Z),
        c = (0, I.GN)((e) => e.userUpsellScreen, o.Z),
        E = (0, I.GN)((e) => e.setUserUpsellScreen, o.Z),
        { ref: h, width: g } = (0, u.Z)(),
        [S, C] = a.useState(0),
        v = (0, d.useSpring)({
            from: { scrollHeight: 0 },
            to: { scrollHeight: S }
        }),
        Z = (0, _.ZP)(),
        L = a.useMemo(() => A(n, Z), [n, Z]),
        O = a.useCallback(
            (e) => {
                C(e.currentTarget.scrollTop);
            },
            [C]
        ),
        R = a.useMemo(() => {
            switch (n) {
                case I.hz.NONE:
                    return Z === f.BRd.DARK ? N.genericOnboardingBackgroundImageDark : N.genericOnboardingBackgroundImageLight;
                case I.hz.GENSHIN:
                    return Z === f.BRd.DARK ? N.genshinOnboardingBackgroundImageDark : N.genshinOnboardingBackgroundImageLight;
                case I.hz.VALORANT:
                    return Z === f.BRd.DARK ? N.valorantOnboardingBackgroundImageDark : N.valorantOnboardingBackgroundImageLight;
            }
        }, [n, Z]);
    switch (c) {
        case I.o2.USER_UPSELL:
            return (0, i.jsxs)('div', {
                ref: h,
                className: N.container,
                children: [
                    (0, i.jsx)('div', {
                        className: N.toolbar,
                        style: { width: g },
                        children: (0, i.jsx)(m.Z, {})
                    }),
                    (0, i.jsxs)('div', {
                        className: N.upsellContainer,
                        children: [
                            (0, i.jsxs)(l.animated.div, {
                                className: N.backgroundImageContainer,
                                style: {
                                    opacity: v.scrollHeight.to([0, 240], [1, 0])
                                },
                                children: [(0, i.jsx)('div', { className: L }), (0, i.jsx)('div', { className: N.backgroundImageBlur })]
                            }),
                            (0, i.jsx)('div', {
                                className: r()(N.backgroundImageContent, N.userUpsell),
                                children: (0, i.jsx)(T.ZP, {
                                    onScroll: O,
                                    width: null !== t ? t : g,
                                    isAnimating: !1,
                                    variant: (0, T.s)(s, T.Bj.UPSELL)
                                })
                            })
                        ]
                    })
                ]
            });
        case I.o2.USER_ONBOARDING:
            return (0, i.jsx)('div', {
                className: N.container,
                children: (0, i.jsxs)('div', {
                    className: r()(R, N.userOnboarding),
                    children: [
                        (0, i.jsx)('div', { className: N.backgroundImageBlur }),
                        (0, i.jsx)('div', {
                            className: N.backgroundImageContent,
                            children: (0, i.jsx)(p.Z, { setScreen: E })
                        })
                    ]
                })
            });
    }
}
function Z() {
    let e = (0, I.GN)((e) => e.game, o.Z),
        { guilds: t } = (0, E.C3)({
            location: 'ClanDiscoveryAdminContainer',
            includeConverted: !0
        }),
        n = a.useMemo(() => t.filter((e) => !(0, h.EJ)(e)), [t]),
        s = (0, _.ZP)(),
        l = a.useMemo(() => A(e, s), [e, s]);
    return 0 === t.length
        ? null
        : (0, i.jsx)('div', {
              className: N.container,
              children: (0, i.jsxs)(c.u2, {
                  className: N.upsellScroller,
                  fade: !0,
                  children: [
                      (0, i.jsxs)('div', {
                          className: r()(l, N.adminUpsell),
                          children: [
                              e !== I.hz.NONE && (0, i.jsx)('div', { className: N.backgroundImageBlur }),
                              (0, i.jsx)('div', {
                                  className: N.backgroundImageContent,
                                  children: (0, i.jsx)(g.Z, {
                                      eligibleGuilds: n,
                                      eligibleGuildsIncludingConverted: t
                                  })
                              })
                          ]
                      }),
                      (0, i.jsx)(S.Z, {
                          title: C.Z.Messages.CLAN_DISCOVERY_INSPIRATION_TITLE,
                          className: e === I.hz.NONE ? N.genericPreviewList : void 0
                      })
                  ]
              })
          });
}
