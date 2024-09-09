n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(180081),
    o = n(873546),
    c = n(481060),
    u = n(540059),
    d = n(666188),
    h = n(695346),
    p = n(768581),
    _ = n(358555),
    f = n(981631),
    g = n(647086),
    m = n(689938),
    C = n(673140);
function I(e) {
    var t;
    let { guild: n, controller: l, guildBanner: r, animate: c } = e,
        { value: u } = l.springs,
        d = h.QK.getSetting();
    return (0, i.jsx)(s.animated.div, {
        className: C.animatedContainer,
        style: {
            opacity: u,
            transform: u.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, i.jsx)(s.animated.div, {
            className: a()(C.bannerImage, { [C.bannerImgFullWidth]: o.tq }),
            style: { transform: u.to((e) => (d ? 'translateY('.concat((1 - e) * 60, 'px) scale(').concat(1 + (1 - e) * 0.2, ')') : 'translateY('.concat((1 - e) * 90, 'px)'))) },
            children: (0, i.jsx)('img', {
                className: a()(C.bannerImg, { [C.bannerImgFullWidth]: o.tq }),
                src:
                    null !==
                        (t = p.ZP.getGuildBannerURL(
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
function E(e) {
    let { guild: t, controller: n, hasBanner: l, hasSubheader: r } = e,
        { value: o } = n.springs,
        u = t.hasFeature(f.oNc.DISCOVERABLE),
        d = (0, i.jsx)('div', {
            className: C.communityInfo,
            children:
                u &&
                (0, i.jsx)(c.Tooltip, {
                    text: m.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO,
                    position: 'right',
                    children: (e) =>
                        (0, i.jsxs)('div', {
                            className: C.communityInfoPill,
                            ...e,
                            children: [
                                (0, i.jsx)(c.GlobeEarthIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 12,
                                    height: 12,
                                    className: C.communityIcon
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
              className: a()(C.communityInfoContainer, C.hasSubheader),
              children: d
          })
        : (0, i.jsx)(s.animated.div, {
              className: C.communityInfoContainer,
              style: l ? { opacity: o } : { height: o.to((e) => ''.concat(20 * e, 'px')) },
              children: d
          });
}
function N() {
    return (0, i.jsx)(c.StarIcon, {
        size: 'custom',
        color: 'currentColor',
        className: C.favoritesIcon,
        height: 20,
        width: 20
    });
}
t.ZP = l.memo(function (e) {
    let { bannerVisible: t, controller: n, className: r, onClick: s, onContextMenu: x, onMouseDown: S, disableBannerAnimation: v, 'aria-expanded': Z, 'aria-controls': T, guild: L, guildBanner: A, animationOverlayHeight: b, children: M, headerClassName: R, communityInfoVisible: P, hasSubheader: O } = e,
        y = L.hasFeature(f.oNc.ANIMATED_BANNER),
        j = (0, d.Z)(L),
        D = !j && L.hasCommunityInfoSubheader(),
        w = !j && P,
        U = (0, p.xR)(A) && y && !v,
        [G, k] = l.useState(!1),
        B = l.useRef(),
        V = l.useRef(null),
        H = l.useRef(),
        F = h.QK.getSetting();
    l.useEffect(() => {
        if (U && t && !B.current && F)
            return (
                k(!0),
                (H.current = setTimeout(() => {
                    k(!1);
                }, 5000)),
                () => {
                    clearTimeout(H.current);
                }
            );
    }, [U, t, F]),
        l.useEffect(() => {
            B.current = t;
        }, [t]);
    let W = () => {
            let { renderBanner: t, guildBanner: n } = e;
            return null != n && !t;
        },
        z = (0, u.Q)('GuildHeader');
    return (0, i.jsx)(c.ThemeProvider, {
        theme: t ? f.BRd.DARK : void 0,
        children: (e) => {
            var l;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        ref: V,
                        className: a()(r, {
                            [C.container]: !0,
                            [C.clickable]: null != s,
                            [C.selected]: null != s && Z,
                            [C.hasBanner]: W(),
                            [C.bannerVisible]: t,
                            [e]: t,
                            [C.communityInfoVisible]: w || (O && D)
                        }),
                        onMouseDown: S,
                        onContextMenu: x,
                        onClick: s,
                        children: [
                            z
                                ? null
                                : (0, i.jsxs)('header', {
                                      className: a()(C.header, R, { [C.themedHeaderMobile]: o.tq }),
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: a()(C.headerContent, C.primaryInfo),
                                              children: [
                                                  (0, i.jsx)(_.Z, {
                                                      guild: L,
                                                      isBannerVisible: t
                                                  }),
                                                  L.id === g._ && (0, i.jsx)(N, {}),
                                                  (0, i.jsx)(c.Heading, {
                                                      variant: 'text-md/semibold',
                                                      lineClamp: 1,
                                                      className: C.name,
                                                      children: L.toString()
                                                  }),
                                                  null != s &&
                                                      (0, i.jsx)(c.Clickable, {
                                                          className: C.headerButton,
                                                          'aria-controls': T,
                                                          'aria-expanded': Z,
                                                          focusProps: {
                                                              ringTarget: V,
                                                              offset: 4
                                                          },
                                                          onClick: s,
                                                          onContextMenu: x,
                                                          'aria-label': m.Z.Messages.GUILD_SIDEBAR_ACTIONS_BUTTON.format({ guildName: null !== (l = null == L ? void 0 : L.toString()) && void 0 !== l ? l : '' })
                                                      }),
                                                  (0, i.jsx)('div', {
                                                      className: C.headerChildren,
                                                      children: M
                                                  })
                                              ]
                                          }),
                                          D &&
                                              (0, i.jsx)(E, {
                                                  guild: L,
                                                  controller: n,
                                                  hasBanner: null != A,
                                                  hasSubheader: null != O && O
                                              })
                                      ]
                                  }),
                            null != A
                                ? (0, i.jsx)(I, {
                                      guild: L,
                                      controller: n,
                                      guildBanner: A,
                                      animate: G
                                  })
                                : null
                        ]
                    }),
                    U && W()
                        ? (0, i.jsx)('div', {
                              className: C.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  k(!0), clearTimeout(H.current);
                              },
                              onMouseLeave: () => k(!1),
                              style: { height: b }
                          })
                        : null
                ]
            });
        }
    });
});
