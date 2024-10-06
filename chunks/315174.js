n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(212433),
    o = n(873546),
    c = n(481060),
    u = n(666188),
    d = n(695346),
    h = n(768581),
    p = n(358555),
    f = n(981631),
    _ = n(647086),
    m = n(689938),
    g = n(501223);
function C(e) {
    var t;
    let { guild: n, controller: l, guildBanner: r, animate: c } = e,
        { value: u } = l.springs,
        p = d.QK.getSetting();
    return (0, i.jsx)(s.animated.div, {
        className: g.animatedContainer,
        style: {
            opacity: u,
            transform: u.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, i.jsx)(s.animated.div, {
            className: a()(g.bannerImage, { [g.bannerImgFullWidth]: o.tq }),
            style: { transform: u.to((e) => (p ? 'translateY('.concat((1 - e) * 60, 'px) scale(').concat(1 + (1 - e) * 0.2, ')') : 'translateY('.concat((1 - e) * 90, 'px)'))) },
            children: (0, i.jsx)('img', {
                className: a()(g.bannerImg, { [g.bannerImgFullWidth]: o.tq }),
                src:
                    null !==
                        (t = h.ZP.getGuildBannerURL(
                            {
                                id: n.id,
                                banner: r
                            },
                            c
                        )) && void 0 !== t
                        ? t
                        : '',
                alt: '',
                'aria-hidden': !0
            })
        })
    });
}
function I(e) {
    let { guild: t, controller: n, hasBanner: l, hasSubheader: r } = e,
        { value: o } = n.springs,
        u = t.hasFeature(f.oNc.DISCOVERABLE),
        d = (0, i.jsx)('div', {
            className: g.communityInfo,
            children:
                u &&
                (0, i.jsx)(c.Tooltip, {
                    text: m.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO,
                    position: 'right',
                    children: (e) =>
                        (0, i.jsxs)('div', {
                            className: g.communityInfoPill,
                            ...e,
                            children: [
                                (0, i.jsx)(c.GlobeEarthIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 12,
                                    height: 12,
                                    className: g.communityIcon
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'none',
                                    children: m.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC
                                })
                            ]
                        })
                })
        });
    return r
        ? (0, i.jsx)('div', {
              className: a()(g.communityInfoContainer, g.hasSubheader),
              children: d
          })
        : (0, i.jsx)(s.animated.div, {
              className: g.communityInfoContainer,
              style: l ? { opacity: o } : { height: o.to((e) => ''.concat(20 * e, 'px')) },
              children: d
          });
}
function E() {
    return (0, i.jsx)(c.StarIcon, {
        size: 'custom',
        color: 'currentColor',
        className: g.favoritesIcon,
        height: 20,
        width: 20
    });
}
t.ZP = l.memo(function (e) {
    let { bannerVisible: t, controller: n, className: r, onClick: s, onContextMenu: N, onMouseDown: S, disableBannerAnimation: x, 'aria-expanded': v, 'aria-controls': T, guild: Z, guildBanner: A, animationOverlayHeight: b, children: R, headerClassName: M, communityInfoVisible: L, hasSubheader: P } = e,
        O = Z.hasFeature(f.oNc.ANIMATED_BANNER),
        y = (0, u.Z)(Z),
        D = !y && Z.hasCommunityInfoSubheader(),
        j = !y && L,
        w = (0, h.xR)(A) && O && !x,
        [U, G] = l.useState(!1),
        k = l.useRef(),
        B = l.useRef(null),
        V = l.useRef(),
        H = d.QK.getSetting();
    l.useEffect(() => {
        if (w && t && !k.current && H)
            return (
                G(!0),
                (V.current = setTimeout(() => {
                    G(!1);
                }, 5000)),
                () => {
                    clearTimeout(V.current);
                }
            );
    }, [w, t, H]),
        l.useEffect(() => {
            k.current = t;
        }, [t]);
    let F = () => {
        let { renderBanner: t, guildBanner: n } = e;
        return null != n && !t;
    };
    return (0, i.jsx)(c.ThemeProvider, {
        theme: t ? f.BRd.DARK : void 0,
        children: (e) => {
            var l;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        ref: B,
                        className: a()(r, {
                            [g.container]: !0,
                            [g.clickable]: null != s,
                            [g.selected]: null != s && v,
                            [g.hasBanner]: F(),
                            [g.bannerVisible]: t,
                            [e]: t,
                            [g.communityInfoVisible]: j || (P && D)
                        }),
                        onMouseDown: S,
                        onContextMenu: N,
                        onClick: s,
                        children: [
                            (0, i.jsxs)('header', {
                                className: a()(g.header, M, { [g.themedHeaderMobile]: o.tq }),
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: a()(g.headerContent, g.primaryInfo),
                                        children: [
                                            (0, i.jsx)(p.Z, {
                                                guild: Z,
                                                isBannerVisible: t
                                            }),
                                            Z.id === _._ && (0, i.jsx)(E, {}),
                                            (0, i.jsx)(c.Heading, {
                                                variant: 'text-md/semibold',
                                                lineClamp: 1,
                                                className: g.name,
                                                children: Z.toString()
                                            }),
                                            null != s &&
                                                (0, i.jsx)(c.Clickable, {
                                                    className: g.headerButton,
                                                    'aria-controls': T,
                                                    'aria-expanded': v,
                                                    focusProps: {
                                                        ringTarget: B,
                                                        offset: 4
                                                    },
                                                    onClick: s,
                                                    onContextMenu: N,
                                                    'aria-label': m.Z.Messages.GUILD_SIDEBAR_ACTIONS_BUTTON.format({ guildName: null !== (l = null == Z ? void 0 : Z.toString()) && void 0 !== l ? l : '' })
                                                }),
                                            (0, i.jsx)('div', {
                                                className: g.headerChildren,
                                                children: R
                                            })
                                        ]
                                    }),
                                    D &&
                                        (0, i.jsx)(I, {
                                            guild: Z,
                                            controller: n,
                                            hasBanner: null != A,
                                            hasSubheader: null != P && P
                                        })
                                ]
                            }),
                            null != A
                                ? (0, i.jsx)(C, {
                                      guild: Z,
                                      controller: n,
                                      guildBanner: A,
                                      animate: U
                                  })
                                : null
                        ]
                    }),
                    w && F()
                        ? (0, i.jsx)('div', {
                              className: g.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  G(!0), clearTimeout(V.current);
                              },
                              onMouseLeave: () => G(!1),
                              style: { height: b }
                          })
                        : null
                ]
            });
        }
    });
});
