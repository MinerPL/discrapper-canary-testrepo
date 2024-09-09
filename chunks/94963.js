t(47120), t(724458);
var a = t(735250),
    r = t(470079),
    i = t(688619),
    s = t.n(i),
    o = t(120356),
    l = t.n(o),
    c = t(97028),
    d = t(866442),
    u = t(442837),
    m = t(481060),
    _ = t(231467),
    f = t(650774),
    C = t(430824),
    h = t(175557),
    x = t(688298),
    p = t(995119),
    g = t(116175),
    T = t(308083),
    E = t(689938),
    I = t(29211),
    b = t(318577);
let N = [
        {
            name: 'Night Sky',
            bannerKind: T.qC.NIGHT_SKY,
            icon: m.ThemeDarkIcon
        },
        {
            name: 'Castle',
            bannerKind: T.qC.CASTLE,
            icon: m.CrownIcon
        },
        {
            name: 'World Map',
            bannerKind: T.qC.WORLD_MAP,
            icon: m.GlobeEarthIcon
        },
        {
            name: 'Sea Foam',
            bannerKind: T.qC.SEA_FOAM,
            icon: m.PrivacyAndSafetyIcon
        },
        {
            name: 'Warp',
            bannerKind: T.qC.WARP_TUNNEL,
            icon: m.BlurBackgroundIcon
        },
        {
            name: 'House',
            bannerKind: T.qC.HOUSE,
            icon: m.TreehouseIcon
        },
        {
            name: 'Pulsar',
            bannerKind: T.qC.HEIGHTMAP,
            icon: m.WaveformIcon
        },
        {
            name: 'Mesh',
            bannerKind: T.qC.MESH,
            icon: m.GridVerticalIcon
        },
        {
            name: 'Spatter',
            bannerKind: T.qC.SPATTER,
            icon: m.PaintbrushThickIcon
        }
    ],
    v = (e) => {
        let { name: n, primaryColor: t, secondaryColor: r, isCustom: i } = e;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                i
                    ? (0, a.jsx)(m.PaintPaletteIcon, { size: 'md' })
                    : (0, a.jsx)('div', {
                          className: I.brandItemCircle,
                          style: { background: 'linear-gradient(-45deg, '.concat(r, ' 50%, ').concat(t, ' 50% )') }
                      }),
                (0, a.jsx)(m.Text, {
                    variant: 'text-sm/medium',
                    color: 'interactive-normal',
                    className: I.noWrap,
                    children: n
                })
            ]
        });
    };
n.Z = (e) => {
    var n;
    let { handleUpdate: t, progress: i, guildId: o } = e,
        { banner: y, brandPrimaryColor: S, brandSecondaryColor: A, badgePrimaryColor: M, badgeSecondaryColor: j } = i,
        R = (0, u.e7)([C.Z], () => C.Z.getGuild(o)),
        L = null !== (n = (0, u.e7)([f.Z], () => f.Z.getMemberCount(o))) && void 0 !== n ? n : 0,
        O = r.useMemo(
            () => ({
                primary: null != S ? S : T.OH,
                secondary: null != A ? A : T.K_
            }),
            [S, A]
        ),
        Z = r.useMemo(() => {
            if (S === M && A === j) return 1;
            for (let e = 0; e < T.ym.length; e++) if (T.ym[e].primary === i.brandPrimaryColor && T.ym[e].secondary === i.brandSecondaryColor) return 2 + e;
            return 0;
        }, [S, A, M, j, i.brandPrimaryColor, i.brandSecondaryColor]),
        [k, D] = r.useState(!1),
        P = 0 === Z,
        w = 1 === Z,
        F = r.useMemo(() => {
            if (P) return O;
            if (w)
                return {
                    primary: null != M ? M : g.Nh,
                    secondary: null != j ? j : g.vY
                };
            {
                let e = T.ym[Z - 2];
                return {
                    primary: e.primary,
                    secondary: e.secondary
                };
            }
        }, [O, w, P, M, j, Z]),
        G = r.useCallback(() => {
            let e = N[Math.floor(Math.random() * N.length)].bannerKind,
                n = s().random().hex();
            t({
                banner: e,
                brandPrimaryColor: n,
                brandSecondaryColor: s().random().hex()
            });
        }, [t]);
    r.useEffect(() => {
        t({
            banner: y,
            brandPrimaryColor: F.primary,
            brandSecondaryColor: F.secondary
        });
    }, [t, y, F.primary, F.secondary]);
    let B = r.useMemo(() => {
        var e, n, t;
        return {
            ...i,
            id: o,
            name: null !== (e = null == R ? void 0 : R.name) && void 0 !== e ? e : '',
            icon: null == R ? void 0 : R.icon,
            memberCount: L,
            games: Array.from(i.gameApplicationIds),
            traits: Array.from(i.interests),
            banner: y,
            badge: {
                badgeKind: i.badgeKind,
                primaryColor: null != M ? M : T.OH,
                secondaryColor: null != j ? j : T.K_
            },
            branding: {
                primaryColor: null !== (n = F.primary) && void 0 !== n ? n : T.OH,
                secondaryColor: null !== (t = F.secondary) && void 0 !== t ? t : T.K_
            },
            gameActivity: Array.from(i.gameApplicationIds).reduce(
                (e, n) => (
                    (e[n] = {
                        level: c.m.HIGH,
                        score: 0
                    }),
                    e
                ),
                {}
            )
        };
    }, [i, o, R, L, y, M, j, F]);
    return (0, a.jsxs)('div', {
        className: b.slideContent,
        children: [
            (0, a.jsx)(m.Heading, {
                variant: 'heading-xxl/medium',
                className: b.title,
                children: E.Z.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
            }),
            (0, a.jsx)(m.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: b.subtitle,
                children: E.Z.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
            }),
            (0, a.jsxs)('div', {
                className: I.content,
                children: [
                    (0, a.jsx)('div', {
                        className: I.leftColumn,
                        children: (0, a.jsxs)('div', {
                            className: I.colorsContainer,
                            children: [
                                (0, a.jsx)(p.Z, { onClick: G }),
                                (0, a.jsxs)('div', {
                                    className: I.colorPickerContainer,
                                    children: [
                                        (0, a.jsx)(m.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'text-muted',
                                            children: E.Z.Messages.CLAN_LOOK_BRAND_COLOR
                                        }),
                                        (0, a.jsxs)('div', {
                                            className: I.colorPickerGrid,
                                            children: [
                                                (0, a.jsx)(x.Z, {
                                                    showSecondaryColor: !0,
                                                    palette: O,
                                                    onPrimaryColorChange: (e) => {
                                                        t({ brandPrimaryColor: (0, d.Rf)(e) });
                                                    },
                                                    onSecondaryColorChange: (e) => {
                                                        t({ brandSecondaryColor: (0, d.Rf)(e) });
                                                    },
                                                    shouldShow: k,
                                                    onRequestClose: () => D(!1),
                                                    children: (e) =>
                                                        (0, a.jsx)(m.Clickable, {
                                                            ...e,
                                                            onClick: () => {
                                                                D((e) => !e);
                                                            },
                                                            className: l()(I.brandItemContainer, { [I.brandItemContainerSelected]: 0 === Z }),
                                                            children: (0, a.jsx)(v, {
                                                                name: E.Z.Messages.CLAN_LOOK_PRESET_CUSTOM,
                                                                isCustom: !0
                                                            })
                                                        })
                                                }),
                                                (0, a.jsx)(m.Clickable, {
                                                    onClick: () => {
                                                        t({
                                                            brandPrimaryColor: null != M ? M : T.OH,
                                                            brandSecondaryColor: null != j ? j : T.K_
                                                        });
                                                    },
                                                    className: l()(I.brandItemContainer, { [I.brandItemContainerSelected]: 1 === Z }),
                                                    children: (0, a.jsx)(v, {
                                                        name: E.Z.Messages.CLAN_LOOK_PRESET_BADGE,
                                                        primaryColor: M,
                                                        secondaryColor: j
                                                    })
                                                }),
                                                T.ym.map((e, n) =>
                                                    (0, a.jsx)(
                                                        m.Clickable,
                                                        {
                                                            'aria-label': e.name,
                                                            onClick: () => {
                                                                t({
                                                                    brandPrimaryColor: T.ym[n].primary,
                                                                    brandSecondaryColor: T.ym[n].secondary
                                                                });
                                                            },
                                                            className: l()(I.brandItemContainer, { [I.brandItemContainerSelected]: Z === n + 2 }),
                                                            children: (0, a.jsx)(v, {
                                                                name: e.name,
                                                                primaryColor: e.primary,
                                                                secondaryColor: e.secondary
                                                            })
                                                        },
                                                        n
                                                    )
                                                )
                                            ]
                                        })
                                    ]
                                }),
                                (0, a.jsxs)('div', {
                                    className: I.bannerPickerContainer,
                                    children: [
                                        (0, a.jsx)(m.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'text-muted',
                                            children: E.Z.Messages.CLAN_LOOK_BANNER
                                        }),
                                        (0, a.jsx)('div', {
                                            className: I.bannerPickerGrid,
                                            children: N.map((e, n) =>
                                                (0, a.jsxs)(
                                                    m.Clickable,
                                                    {
                                                        'aria-label': e.name,
                                                        onClick: () => {
                                                            t({ banner: e.bannerKind });
                                                        },
                                                        className: l()(I.bannerItemContainer, { [I.bannerItemContainerSelected]: e.bannerKind === y }),
                                                        children: [
                                                            (0, a.jsx)(e.icon, { size: 'md' }),
                                                            (0, a.jsx)(m.Text, {
                                                                variant: 'text-sm/medium',
                                                                color: 'interactive-normal',
                                                                className: I.noWrap,
                                                                children: e.name
                                                            })
                                                        ]
                                                    },
                                                    n
                                                )
                                            )
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, a.jsx)('div', {
                        className: I.clanCardWrapper,
                        children: (0, a.jsx)(_.xV, {
                            bannerComponent: (0, a.jsx)(h.Z, {
                                banner: y,
                                primaryTintColor: F.primary,
                                secondaryTintColor: F.secondary,
                                className: I.clanBannerPreview
                            }),
                            clan: B
                        })
                    })
                ]
            })
        ]
    });
};
