n.d(t, {
    i: function () {
        return j;
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
    p = n(821982),
    g = n(377171),
    T = n(633302),
    f = n(153066),
    S = n(335131),
    C = n(744112),
    N = n(267097),
    A = n(141594),
    v = n(302800),
    Z = n(981631),
    L = n(689938),
    R = n(283522);
let O = (e) => {
        let { color: t } = e;
        return (0, i.jsx)(d.TextBadge, {
            className: R.newBadge,
            color: null != t ? t : g.Z.STATUS_DANGER_BACKGROUND,
            text: L.Z.Messages.NEW
        });
    },
    x = (e) => {
        let { selected: t, locationState: n, icon: s, onMouseEnter: r, onMouseLeave: o, children: c, ...u } = e,
            E = (0, l.JA)('shop'),
            h = m.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: p } = (0, I.ZP)(h),
            g = a.useCallback(
                () =>
                    (0, S.mK)({
                        openInLayer: !1,
                        analyticsSource: h,
                        analyticsLocations: p
                    }),
                [h, p]
            );
        return (0, i.jsx)(_.Qj, {
            selected: t,
            route: Z.Z5c.COLLECTIBLES_SHOP,
            icon: null != s ? s : d.ShopIcon,
            text: L.Z.Messages.COLLECTIBLES_SHOP,
            locationState: n,
            ...E,
            ...u,
            onMouseEnter: r,
            onMouseLeave: o,
            onClick: g,
            children: c
        });
    },
    b = (e) => {
        let { selected: t, locationState: n } = e;
        return (0, i.jsx)(x, {
            selected: t,
            locationState: n,
            children: (0, i.jsx)(O, {})
        });
    },
    M = a.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: a, reducedMotion: s = !1 } = e,
            r = null != a ? (0, p.Z)(a, d.AvatarSizes.SIZE_80, !s) : void 0,
            l = n.title(),
            o = null === (t = n.body) || void 0 === t ? void 0 : t.call(n),
            c = null == o || '' === o;
        return (0, i.jsxs)('div', {
            className: R.shopMarketingTooltipContent,
            children: [
                (0, i.jsx)('div', {
                    className: R.avatarContainer,
                    children: (0, i.jsx)(d.Avatar, {
                        className: R.avatar,
                        src: n.imageSrc,
                        avatarDecoration: r,
                        size: d.AvatarSizes.SIZE_80,
                        'aria-hidden': !0
                    })
                }),
                (0, i.jsxs)('div', {
                    className: R.shopMarketingTooltipText,
                    children: [
                        (0, i.jsx)(d.Heading, {
                            variant: c ? 'heading-sm/medium' : 'heading-sm/bold',
                            children: l
                        }),
                        !c &&
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: R.marketingBadgeTooltipContent,
                                children: o
                            })
                    ]
                })
            ]
        });
    }),
    P = (e) => {
        var t, n, s, l, u, _, m, I, p, g, T, S;
        let C, N;
        let { selected: A, locationState: v, displayOptions: Z } = e,
            b = (0, o.e7)([h.Z], () => h.Z.useReducedMotion),
            [P, D] = a.useState(0),
            [y, j] = a.useState(!1),
            U = (0, E.ZP)(),
            G = Z.entrypointDecorationAssets,
            w = (0, c.wj)(U);
        y ? (w ? ((C = null === (t = Z.entryPointBackgroundAssets) || void 0 === t ? void 0 : t.srcDarkHovered), (N = null === (s = Z.entrypointBackgroundStyle) || void 0 === s ? void 0 : null === (n = s.hovered) || void 0 === n ? void 0 : n.dark)) : ((C = null === (l = Z.entryPointBackgroundAssets) || void 0 === l ? void 0 : l.srcLightHovered), (N = null === (_ = Z.entrypointBackgroundStyle) || void 0 === _ ? void 0 : null === (u = _.hovered) || void 0 === u ? void 0 : u.light))) : w ? ((C = null === (m = Z.entryPointBackgroundAssets) || void 0 === m ? void 0 : m.srcDark), (N = null === (p = Z.entrypointBackgroundStyle) || void 0 === p ? void 0 : null === (I = p.resting) || void 0 === I ? void 0 : I.dark)) : ((C = null === (g = Z.entryPointBackgroundAssets) || void 0 === g ? void 0 : g.srcLight), (N = null === (S = Z.entrypointBackgroundStyle) || void 0 === S ? void 0 : null === (T = S.resting) || void 0 === T ? void 0 : T.light));
        let k = a.useCallback(
                (e) => {
                    D((e) => (e + 1) % Z.assetIds.length), j(!0), null == e || e();
                },
                [Z.assetIds.length]
            ),
            B = a.useCallback((e) => {
                j(!1), null == e || e();
            }, []),
            V = Z.title();
        return (0, i.jsx)(d.Tooltip, {
            text: (0, i.jsx)(M, {
                displayOptions: Z,
                assetId: Z.assetIds[P],
                reducedMotion: b
            }),
            tooltipClassName: R.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            'aria-label': 'string' == typeof V ? V : L.Z.Messages.COLLECTIBLES_SEE_WHATS_NEW,
            children: (e) =>
                (0, i.jsxs)(x, {
                    className: null != Z.entryPointClassName ? (0, f.l)(R, Z.entryPointClassName) : void 0,
                    selected: A,
                    locationState: v,
                    icon: Z.entryPointIcon,
                    ...e,
                    onMouseEnter: () => k(e.onMouseEnter),
                    onMouseLeave: () => B(e.onMouseLeave),
                    children: [
                        (0, i.jsx)('div', {
                            className: R.marketingButtonBackground,
                            style: { background: N },
                            children:
                                null != C &&
                                (0, i.jsx)('img', {
                                    src: C,
                                    className: R.marketingButtonBackgroundImage,
                                    alt: '',
                                    'aria-hidden': !0
                                })
                        }),
                        null != G &&
                            !b &&
                            (0, i.jsx)('img', {
                                src: (0, c.wj)(U) ? G.srcDark : G.srcLight,
                                className: r()(R.marketingButtonImage, { [R.marketingButtonImageHovered]: y }),
                                alt: '',
                                'aria-hidden': !0
                            }),
                        (0, i.jsx)(O, { color: Z.badgeColor })
                    ]
                })
        });
    },
    D = (e) => {
        let { selected: t, locationState: n, displayOptions: s } = e,
            r = a.useMemo(() => {
                var e;
                let t = null != s.emojiName ? (null === (e = T.ZP.getByName(s.emojiName)) || void 0 === e ? void 0 : e.surrogates) : null;
                return (0, i.jsxs)(d.Text, {
                    variant: 'text-sm/medium',
                    className: R.marketingBadgeTooltipContent,
                    children: [null != t && (0, i.jsx)(u.Z, { emojiName: t }), s.title()]
                });
            }, [s]);
        return (0, i.jsx)(d.Tooltip, {
            text: r,
            tooltipClassName: R.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            hideOnClick: !1,
            'aria-label': s.title(),
            children: (e) =>
                (0, i.jsx)(x, {
                    selected: t,
                    locationState: n,
                    ...e,
                    children: (0, i.jsx)(O, { color: s.badgeColor })
                })
        });
    },
    y = () => ((0, N.Z)(), null),
    j = (e) => {
        let { selected: t, locationState: n } = e,
            { collectiblesShopTabNewBadgeDisplayOptions: a } = (0, A.Z)(),
            s = (0, C.b)('Collectibles Shop Button');
        if (null != a)
            switch (a.type) {
                case v.k2.TOOLTIP:
                    return (0, i.jsx)(D, {
                        selected: t,
                        locationState: n,
                        displayOptions: a
                    });
                case v.k2.COACHTIP:
                    return (0, i.jsx)(P, {
                        selected: t,
                        locationState: n,
                        displayOptions: a
                    });
                case v.k2.BADGE:
                    return (0, i.jsx)(b, {
                        selected: t,
                        locationState: n
                    });
            }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                s && (0, i.jsx)(y, {}),
                (0, i.jsx)(x, {
                    selected: t,
                    locationState: n
                })
            ]
        });
    };
