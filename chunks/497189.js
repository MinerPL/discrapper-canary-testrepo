n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(567526),
    o = n(442837),
    c = n(481060),
    d = n(749210),
    u = n(607070),
    _ = n(100527),
    h = n(931240),
    E = n(970606),
    m = n(650461),
    I = n(353093),
    g = n(603839),
    p = n(84615),
    T = n(430824),
    S = n(231467),
    f = n(273254),
    C = n(559469),
    N = n(308083),
    A = n(689938),
    v = n(647756),
    Z = n(345480),
    L = n(236613);
let O = {
    mass: 1,
    tension: 600,
    friction: 60
};
function R(e) {
    let { children: t } = e;
    return (0, i.jsxs)(l.animated.div, {
        className: v.clanEnvelope,
        children: [
            (0, i.jsx)('div', {
                className: v.clanEnvelopeTop,
                children: (0, i.jsx)('img', {
                    src: L,
                    alt: ''
                })
            }),
            t,
            (0, i.jsx)('div', {
                className: v.clanEnvelopeBottom,
                children: (0, i.jsx)('img', {
                    src: Z,
                    alt: ''
                })
            })
        ]
    });
}
function x(e) {
    let { text: t, icon: n } = e;
    return (0, i.jsxs)('div', {
        className: v.upsellDetail,
        children: [
            (0, i.jsx)(n, {
                size: 'md',
                color: 'currentColor',
                className: v.upsellIcon
            }),
            (0, i.jsx)(c.Text, {
                className: v.upsellDetailText,
                variant: 'text-md/medium',
                children: t
            })
        ]
    });
}
function b(e) {
    let { selectedGuildId: t, setSelectedGuildId: n, eligibleGuilds: s, onButtonClick: l, buttonText: o, hasCompletedUpsell: d } = e,
        u = a.useMemo(
            () =>
                s.map((e) => ({
                    value: e.id,
                    label: e.name
                })),
            [s]
        ),
        _ = s.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(c.Heading, {
                              className: v.upsellTitle,
                              variant: 'heading-xxl/semibold',
                              children: A.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_TITLE
                          }),
                          (0, i.jsx)(c.Heading, {
                              className: v.upsellSubtitle,
                              variant: 'heading-md/medium',
                              color: 'header-secondary',
                              children: A.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_SUBTITLE
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)(c.Heading, {
                              className: v.upsellTitle,
                              variant: 'heading-xxl/semibold',
                              children: [A.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, i.jsx)('br', {}), A.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT]
                          }),
                          (0, i.jsxs)('div', {
                              className: v.upsellDetails,
                              children: [
                                  (0, i.jsx)(x, {
                                      icon: c.CompassIcon,
                                      text: A.Z.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
                                  }),
                                  (0, i.jsx)(x, {
                                      icon: c.CircleCheckIcon,
                                      text: A.Z.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
                                  }),
                                  (0, i.jsx)(x, {
                                      icon: c.GroupIcon,
                                      text: A.Z.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
                                  })
                              ]
                          })
                      ]
                  }),
            (0, i.jsxs)('div', {
                className: v.upsellButton,
                children: [
                    _ &&
                        (0, i.jsx)(c.SearchableSelect, {
                            className: v.upsellSelect,
                            value: t,
                            options: u,
                            onChange: n
                        }),
                    !d &&
                        (0, i.jsx)(c.Button, {
                            look: c.ButtonLooks.FILLED,
                            size: c.ButtonSizes.LARGE,
                            color: c.ButtonColors.BRAND,
                            className: r()(v.reserveButton, { [v.buttonWithSelect]: _ }),
                            onClick: l,
                            children: (0, i.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: o
                            })
                        })
                ]
            })
        ]
    });
}
t.Z = a.memo(function (e) {
    let { eligibleGuilds: t, eligibleGuildsIncludingConverted: n } = e,
        s = 0 === t.length,
        [r, Z] = a.useState(() => {
            var e, i;
            let a = new Set(m.ZP.getGuildIds());
            for (let e of t) if (a.has(e.id)) return e.id;
            return s ? (null === (e = n[0]) || void 0 === e ? void 0 : e.id) : null === (i = t[0]) || void 0 === i ? void 0 : i.id;
        });
    a.useEffect(() => {
        !s &&
            (0, E.TE)({
                guildId: r,
                location: _.Z.CLAN_DISCOVERY
            });
    }, [s, r]);
    let L = (0, o.e7)([T.Z], () => T.Z.getGuild(r)),
        x = (0, o.e7)([m.ZP], () => (null != r ? m.ZP.getStateForGuild(r).progress : null)),
        P = a.useCallback(() => {
            !s &&
                ((0, E._9)({
                    guildId: r,
                    location: _.Z.CLAN_DISCOVERY
                }),
                (0, p.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(g.Z, {
                            onClose: t,
                            guildId: r
                        });
                    },
                    { layerKey: N.Pv }
                ));
        }, [s, r]),
        M = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        D = (0, f.L)({ guild: L }),
        y = (0, C.n)(),
        [j, U] = a.useState(!0),
        G = (0, c.useSpring)(
            {
                from: { opacity: 0 },
                to: { opacity: 1 },
                delay: 400,
                config: { duration: 0 }
            },
            'animate-always'
        ),
        k = (0, c.useSpring)(
            {
                from: M ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(324px, -56px) rotate(8deg) scale(1.25)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: O,
                delay: 400
            },
            'animate-always'
        ),
        w = (0, c.useSpring)(
            {
                from: M ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(176px, -24px) rotate(4deg) scale(1.1111)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: O,
                delay: 350
            },
            'animate-always'
        ),
        B = (0, c.useSpring)(
            {
                from: M ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(-176px, -24px) rotate(-4deg) scale(1.1111)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: O,
                delay: 350
            },
            'animate-always'
        ),
        H = (0, c.useSpring)(
            {
                from: M ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(-324px, -56px) rotate(-8deg) scale(1.25)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: O,
                delay: 400
            },
            'animate-always'
        ),
        V = (0, c.useSpring)(
            {
                from: M
                    ? {
                          transform: 'scale(1)',
                          opacity: 0
                      }
                    : {
                          transform: 'scale(0.9)',
                          opacity: 0
                      },
                to: {
                    transform: 'scale(1)',
                    opacity: 1
                },
                config: O,
                delay: 200
            },
            'animate-always'
        ),
        F = (0, c.useSpring)(
            {
                from: M ? { transform: 'translateY(0px)' } : { transform: 'translateY(240px)' },
                to: { transform: 'translateY(0px)' },
                config: O,
                delay: 250,
                onRest: () => U(!1)
            },
            'animate-always'
        ),
        Y = a.useMemo(() => (null == x ? A.Z.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : A.Z.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP), [x]),
        W = a.useCallback(async () => {
            await (0, h.Zx)(r), d.Z.transitionToGuildSync('936317138904440892');
        }, [r]),
        z = a.useCallback(
            (e) =>
                (0, i.jsx)(c.Clickable, {
                    tag: 'span',
                    className: v.joinWFSLink,
                    onClick: W,
                    'aria-label': A.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS_ARIA_LABEL,
                    children: (0, i.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-xs/medium',
                        color: 'text-brand',
                        children: e
                    })
                }),
            [W]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: v.cardsContainer,
                children: [
                    (0, i.jsx)(l.animated.div, {
                        className: v.clanCardOuterContainer,
                        style: {
                            ...k,
                            ...G
                        },
                        children: (0, i.jsx)(S.xV, {
                            clan: y[0],
                            className: v.clanCardOuterLeft
                        })
                    }),
                    (0, i.jsx)(l.animated.div, {
                        className: v.clanCardInnerContainer,
                        style: {
                            ...w,
                            ...G
                        },
                        children: (0, i.jsx)(S.xV, {
                            clan: y[1],
                            className: v.clanCardInnerLeft
                        })
                    }),
                    null != D &&
                        (0, i.jsx)(l.animated.div, {
                            className: v.clanEnvelope,
                            style: V,
                            children: (0, i.jsx)(R, {
                                children: (0, i.jsx)('div', {
                                    className: v.clanCardCenterContainer,
                                    style: { overflow: j ? 'hidden' : 'visible' },
                                    children: (0, i.jsx)(l.animated.div, {
                                        style: F,
                                        children: (0, i.jsx)(S.xV, {
                                            clan: D,
                                            className: v.clanCardCenter,
                                            bannerUrl: (0, I.pY)(y[4].id, y[4].bannerHash)
                                        })
                                    })
                                })
                            })
                        }),
                    (0, i.jsx)(l.animated.div, {
                        className: v.clanCardInnerContainer,
                        style: {
                            ...B,
                            ...G
                        },
                        children: (0, i.jsx)(S.xV, {
                            clan: y[2],
                            className: v.clanCardInnerRight
                        })
                    }),
                    (0, i.jsx)(l.animated.div, {
                        className: v.clanCardOuterContainer,
                        style: {
                            ...H,
                            ...G
                        },
                        children: (0, i.jsx)(S.xV, {
                            clan: y[3],
                            className: v.clanCardOuterRight
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: v.upsellCtaContainer,
                children: (0, i.jsx)(b, {
                    selectedGuildId: r,
                    setSelectedGuildId: Z,
                    eligibleGuilds: t,
                    onButtonClick: P,
                    buttonText: Y,
                    hasCompletedUpsell: s
                })
            }),
            s
                ? (0, i.jsx)('div', {
                      className: v.joinWFSContainer,
                      children: (0, i.jsx)('div', {
                          className: v.joinWFS,
                          children: (0, i.jsx)(c.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: A.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS.format({ wfsHook: z })
                          })
                      })
                  })
                : (0, i.jsx)('div', { className: v.wfsSpacer })
        ]
    });
});
