n.d(t, {
    i: function () {
        return M;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(91192),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(596454),
    _ = n(515753),
    E = n(410030),
    h = n(607070),
    m = n(100527),
    I = n(906732),
    g = n(821982),
    p = n(377171),
    T = n(633302),
    S = n(153066),
    C = n(335131),
    f = n(141594),
    N = n(302800),
    A = n(981631),
    v = n(689938),
    L = n(236786);
let Z = (e) => {
        let { color: t } = e;
        return (0, i.jsx)(d.TextBadge, {
            className: L.newBadge,
            color: null != t ? t : p.Z.STATUS_DANGER_BACKGROUND,
            text: v.Z.Messages.NEW
        });
    },
    R = (e) => {
        let { selected: t, locationState: n, icon: s, onMouseEnter: r, onMouseLeave: o, children: c, ...u } = e,
            E = (0, l.JA)('shop'),
            h = m.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: g } = (0, I.ZP)(h),
            p = a.useCallback(
                () =>
                    (0, C.mK)({
                        openInLayer: !1,
                        analyticsSource: h,
                        analyticsLocations: g
                    }),
                [h, g]
            );
        return (0, i.jsx)(_.Qj, {
            selected: t,
            route: A.Z5c.COLLECTIBLES_SHOP,
            icon: null != s ? s : d.ShopIcon,
            text: v.Z.Messages.COLLECTIBLES_SHOP,
            locationState: n,
            ...E,
            ...u,
            onMouseEnter: r,
            onMouseLeave: o,
            onClick: p,
            children: c
        });
    },
    O = (e) => {
        let { selected: t, locationState: n } = e;
        return (0, i.jsx)(R, {
            selected: t,
            locationState: n,
            children: (0, i.jsx)(Z, {})
        });
    },
    x = a.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: a, reducedMotion: s = !1 } = e,
            r = null != a ? (0, g.Z)(a, d.AvatarSizes.SIZE_80, !s) : void 0,
            l = n.title(),
            o = null === (t = n.body) || void 0 === t ? void 0 : t.call(n),
            c = null == o || '' === o;
        return (0, i.jsxs)('div', {
            className: L.shopMarketingTooltipContent,
            children: [
                (0, i.jsx)('div', {
                    className: L.avatarContainer,
                    children: (0, i.jsx)(d.Avatar, {
                        className: L.avatar,
                        src: n.imageSrc,
                        avatarDecoration: r,
                        size: d.AvatarSizes.SIZE_80,
                        'aria-hidden': !0
                    })
                }),
                (0, i.jsxs)('div', {
                    className: L.shopMarketingTooltipText,
                    children: [
                        (0, i.jsx)(d.Heading, {
                            variant: c ? 'heading-sm/medium' : 'heading-sm/bold',
                            children: l
                        }),
                        !c &&
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: L.marketingBadgeTooltipContent,
                                children: o
                            })
                    ]
                })
            ]
        });
    }),
    b = (e) => {
        var t, n, s, l, u, _, m, I, g, p, T, C;
        let f, N;
        let { selected: A, locationState: O, displayOptions: b } = e,
            P = (0, o.e7)([h.Z], () => h.Z.useReducedMotion),
            [M, D] = a.useState(0),
            [y, j] = a.useState(!1),
            U = (0, E.ZP)(),
            G = b.entrypointDecorationAssets,
            w = (0, c.wj)(U);
        y ? (w ? ((f = null === (t = b.entryPointBackgroundAssets) || void 0 === t ? void 0 : t.srcDarkHovered), (N = null === (s = b.entrypointBackgroundStyle) || void 0 === s ? void 0 : null === (n = s.hovered) || void 0 === n ? void 0 : n.dark)) : ((f = null === (l = b.entryPointBackgroundAssets) || void 0 === l ? void 0 : l.srcLightHovered), (N = null === (_ = b.entrypointBackgroundStyle) || void 0 === _ ? void 0 : null === (u = _.hovered) || void 0 === u ? void 0 : u.light))) : w ? ((f = null === (m = b.entryPointBackgroundAssets) || void 0 === m ? void 0 : m.srcDark), (N = null === (g = b.entrypointBackgroundStyle) || void 0 === g ? void 0 : null === (I = g.resting) || void 0 === I ? void 0 : I.dark)) : ((f = null === (p = b.entryPointBackgroundAssets) || void 0 === p ? void 0 : p.srcLight), (N = null === (C = b.entrypointBackgroundStyle) || void 0 === C ? void 0 : null === (T = C.resting) || void 0 === T ? void 0 : T.light));
        let k = a.useCallback(
                (e) => {
                    D((e) => (e + 1) % b.assetIds.length), j(!0), null == e || e();
                },
                [b.assetIds.length]
            ),
            B = a.useCallback((e) => {
                j(!1), null == e || e();
            }, []),
            H = b.title();
        return (0, i.jsx)(d.Tooltip, {
            text: (0, i.jsx)(x, {
                displayOptions: b,
                assetId: b.assetIds[M],
                reducedMotion: P
            }),
            tooltipClassName: L.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            'aria-label': 'string' == typeof H ? H : v.Z.Messages.COLLECTIBLES_SEE_WHATS_NEW,
            children: (e) =>
                (0, i.jsxs)(R, {
                    className: null != b.entryPointClassName ? (0, S.l)(L, b.entryPointClassName) : void 0,
                    selected: A,
                    locationState: O,
                    icon: b.entryPointIcon,
                    ...e,
                    onMouseEnter: () => k(e.onMouseEnter),
                    onMouseLeave: () => B(e.onMouseLeave),
                    children: [
                        (0, i.jsx)('div', {
                            className: L.marketingButtonBackground,
                            style: { background: N },
                            children:
                                null != f &&
                                (0, i.jsx)('img', {
                                    src: f,
                                    className: L.marketingButtonBackgroundImage,
                                    alt: '',
                                    'aria-hidden': !0
                                })
                        }),
                        null != G &&
                            !P &&
                            (0, i.jsx)('img', {
                                src: (0, c.wj)(U) ? G.srcDark : G.srcLight,
                                className: r()(L.marketingButtonImage, { [L.marketingButtonImageHovered]: y }),
                                alt: '',
                                'aria-hidden': !0
                            }),
                        (0, i.jsx)(Z, { color: b.badgeColor })
                    ]
                })
        });
    },
    P = (e) => {
        let { selected: t, locationState: n, displayOptions: s } = e,
            r = a.useMemo(() => {
                var e;
                let t = null != s.emojiName ? (null === (e = T.ZP.getByName(s.emojiName)) || void 0 === e ? void 0 : e.surrogates) : null;
                return (0, i.jsxs)(d.Text, {
                    variant: 'text-sm/medium',
                    className: L.marketingBadgeTooltipContent,
                    children: [null != t && (0, i.jsx)(u.Z, { emojiName: t }), s.title()]
                });
            }, [s]);
        return (0, i.jsx)(d.Tooltip, {
            text: r,
            tooltipClassName: L.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            hideOnClick: !1,
            'aria-label': s.title(),
            children: (e) =>
                (0, i.jsx)(R, {
                    selected: t,
                    locationState: n,
                    ...e,
                    children: (0, i.jsx)(Z, { color: s.badgeColor })
                })
        });
    },
    M = (e) => {
        let { selected: t, locationState: n } = e,
            { collectiblesShopTabNewBadgeDisplayOptions: a } = (0, f.Z)();
        if (null != a)
            switch (a.type) {
                case N.k2.TOOLTIP:
                    return (0, i.jsx)(P, {
                        selected: t,
                        locationState: n,
                        displayOptions: a
                    });
                case N.k2.COACHTIP:
                    return (0, i.jsx)(b, {
                        selected: t,
                        locationState: n,
                        displayOptions: a
                    });
                case N.k2.BADGE:
                    return (0, i.jsx)(O, {
                        selected: t,
                        locationState: n
                    });
            }
        return (0, i.jsx)(R, {
            selected: t,
            locationState: n
        });
    };
