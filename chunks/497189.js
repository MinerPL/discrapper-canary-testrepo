n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(180081),
    o = n(442837),
    c = n(481060),
    d = n(749210),
    u = n(607070),
    _ = n(100527),
    E = n(931240),
    h = n(970606),
    m = n(963202),
    I = n(650461),
    g = n(353093),
    p = n(603839),
    T = n(84615),
    S = n(430824),
    C = n(231467),
    f = n(207796),
    N = n(273254),
    A = n(559469),
    v = n(308083),
    L = n(689938),
    Z = n(647756),
    R = n(345480),
    O = n(236613);
let x = {
    mass: 1,
    tension: 600,
    friction: 60
};
function b(e) {
    let { children: t } = e;
    return (0, i.jsxs)(l.animated.div, {
        className: Z.clanEnvelope,
        children: [
            (0, i.jsx)('div', {
                className: Z.clanEnvelopeTop,
                children: (0, i.jsx)('img', {
                    src: O,
                    alt: ''
                })
            }),
            t,
            (0, i.jsx)('div', {
                className: Z.clanEnvelopeBottom,
                children: (0, i.jsx)('img', {
                    src: R,
                    alt: ''
                })
            })
        ]
    });
}
function P(e) {
    let { text: t, icon: n } = e;
    return (0, i.jsxs)('div', {
        className: Z.upsellDetail,
        children: [
            (0, i.jsx)(n, {
                size: 'md',
                color: 'currentColor',
                className: Z.upsellIcon
            }),
            (0, i.jsx)(c.Text, {
                className: Z.upsellDetailText,
                variant: 'text-md/medium',
                children: t
            })
        ]
    });
}
function M(e) {
    let { selectedGuildId: t, setSelectedGuildId: n, eligibleGuilds: s, onButtonClick: l, buttonText: o, hasCompletedUpsell: d } = e,
        u = (0, m.iN)('clan_discovery_admin_upsell'),
        _ = (0, m.YH)('clan_discovery_admin_upsell'),
        E = a.useMemo(
            () =>
                s.map((e) => ({
                    value: e.id,
                    label: e.name
                })),
            [s]
        );
    a.useEffect(() => {
        0 === s.length && _ && (0, f.Ce)();
    }, [s, _]);
    let h = s.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(c.Heading, {
                              className: Z.upsellTitle,
                              variant: 'heading-xxl/semibold',
                              children: L.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_TITLE
                          }),
                          (0, i.jsx)(c.Heading, {
                              className: Z.upsellSubtitle,
                              variant: 'heading-md/medium',
                              color: 'header-secondary',
                              children: L.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_SUBTITLE
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)(c.Heading, {
                              className: Z.upsellTitle,
                              variant: 'heading-xxl/semibold',
                              children: [L.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, i.jsx)('br', {}), L.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT]
                          }),
                          (0, i.jsxs)('div', {
                              className: Z.upsellDetails,
                              children: [
                                  (0, i.jsx)(P, {
                                      icon: c.CompassIcon,
                                      text: L.Z.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
                                  }),
                                  (0, i.jsx)(P, {
                                      icon: c.CircleCheckIcon,
                                      text: L.Z.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
                                  }),
                                  (0, i.jsx)(P, {
                                      icon: c.GroupIcon,
                                      text: L.Z.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
                                  })
                              ]
                          })
                      ]
                  }),
            (0, i.jsxs)('div', {
                className: Z.upsellButton,
                children: [
                    h &&
                        (0, i.jsx)(c.SearchableSelect, {
                            className: Z.upsellSelect,
                            value: t,
                            options: E,
                            onChange: n
                        }),
                    !d &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(c.Button, {
                                    look: c.ButtonLooks.FILLED,
                                    size: c.ButtonSizes.LARGE,
                                    color: c.ButtonColors.BRAND,
                                    className: r()(Z.reserveButton, { [Z.buttonWithSelect]: h }),
                                    onClick: l,
                                    children: (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'always-white',
                                        children: o
                                    })
                                }),
                                u &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)('div', { className: Z.separatorDot }),
                                            (0, i.jsx)(c.Button, {
                                                look: c.ButtonLooks.FILLED,
                                                size: c.ButtonSizes.LARGE,
                                                color: c.ButtonColors.TRANSPARENT,
                                                className: Z.reserveButton,
                                                onClick: f.Ce,
                                                children: (0, i.jsx)(c.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-primary',
                                                    children: L.Z.Messages.CLAN_DISCOVERY_UPSELL_ADMIN_DISMISS_NOTICE
                                                })
                                            })
                                        ]
                                    })
                            ]
                        })
                ]
            })
        ]
    });
}
t.Z = a.memo(function (e) {
    let { eligibleGuilds: t, eligibleGuildsIncludingConverted: n } = e,
        s = (0, m.iN)('clan_discovery_admin_upsell'),
        r = 0 === t.length,
        [f, R] = a.useState(() => {
            var e, i;
            let a = new Set(I.ZP.getGuildIds());
            for (let e of t) if (a.has(e.id)) return e.id;
            return r ? (null === (e = n[0]) || void 0 === e ? void 0 : e.id) : null === (i = t[0]) || void 0 === i ? void 0 : i.id;
        });
    a.useEffect(() => {
        !r &&
            (0, h.TE)({
                guildId: f,
                location: _.Z.CLAN_DISCOVERY
            });
    }, [r, f]);
    let O = (0, o.e7)([S.Z], () => S.Z.getGuild(f)),
        P = (0, o.e7)([I.ZP], () => (null != f ? I.ZP.getStateForGuild(f).progress : null)),
        D = a.useCallback(() => {
            !r &&
                ((0, h._9)({
                    guildId: f,
                    location: _.Z.CLAN_DISCOVERY
                }),
                (0, T.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(p.Z, {
                            onClose: t,
                            guildId: f
                        });
                    },
                    { layerKey: v.Pv }
                ));
        }, [r, f]),
        y = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        j = (0, N.L)({ guild: O }),
        U = (0, A.n)(),
        [G, w] = a.useState(!0),
        k = (0, c.useSpring)(
            {
                from: { opacity: 0 },
                to: { opacity: 1 },
                delay: 400,
                config: { duration: 0 }
            },
            'animate-always'
        ),
        B = (0, c.useSpring)(
            {
                from: y ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(324px, -56px) rotate(8deg) scale(1.25)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: x,
                delay: 400
            },
            'animate-always'
        ),
        H = (0, c.useSpring)(
            {
                from: y ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(176px, -24px) rotate(4deg) scale(1.1111)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: x,
                delay: 350
            },
            'animate-always'
        ),
        V = (0, c.useSpring)(
            {
                from: y ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(-176px, -24px) rotate(-4deg) scale(1.1111)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: x,
                delay: 350
            },
            'animate-always'
        ),
        F = (0, c.useSpring)(
            {
                from: y ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(-324px, -56px) rotate(-8deg) scale(1.25)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: x,
                delay: 400
            },
            'animate-always'
        ),
        Y = (0, c.useSpring)(
            {
                from: y
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
                config: x,
                delay: 200
            },
            'animate-always'
        ),
        W = (0, c.useSpring)(
            {
                from: y ? { transform: 'translateY(0px)' } : { transform: 'translateY(240px)' },
                to: { transform: 'translateY(0px)' },
                config: x,
                delay: 250,
                onRest: () => w(!1)
            },
            'animate-always'
        ),
        z = a.useMemo(() => (s ? L.Z.Messages.CLAN_DISCOVERY_UPSELL_ADMIN_LIST_SERVER : null == P ? L.Z.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : L.Z.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP), [P, s]),
        K = a.useCallback(async () => {
            await (0, E.Zx)(f), d.Z.transitionToGuildSync('936317138904440892');
        }, [f]),
        q = a.useCallback(
            (e) =>
                (0, i.jsx)(c.Clickable, {
                    tag: 'span',
                    className: Z.joinWFSLink,
                    onClick: K,
                    'aria-label': L.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS_ARIA_LABEL,
                    children: (0, i.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-xs/medium',
                        color: 'text-brand',
                        children: e
                    })
                }),
            [K]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: Z.cardsContainer,
                children: [
                    (0, i.jsx)(l.animated.div, {
                        className: Z.clanCardOuterContainer,
                        style: {
                            ...B,
                            ...k
                        },
                        children: (0, i.jsx)(C.xV, {
                            clan: U[0],
                            className: Z.clanCardOuterLeft
                        })
                    }),
                    (0, i.jsx)(l.animated.div, {
                        className: Z.clanCardInnerContainer,
                        style: {
                            ...H,
                            ...k
                        },
                        children: (0, i.jsx)(C.xV, {
                            clan: U[1],
                            className: Z.clanCardInnerLeft
                        })
                    }),
                    null != j &&
                        (0, i.jsx)(l.animated.div, {
                            className: Z.clanEnvelope,
                            style: Y,
                            children: (0, i.jsx)(b, {
                                children: (0, i.jsx)('div', {
                                    className: Z.clanCardCenterContainer,
                                    style: { overflow: G ? 'hidden' : 'visible' },
                                    children: (0, i.jsx)(l.animated.div, {
                                        style: W,
                                        children: (0, i.jsx)(C.xV, {
                                            clan: j,
                                            className: Z.clanCardCenter,
                                            bannerUrl: (0, g.pY)(U[4].id, U[4].bannerHash)
                                        })
                                    })
                                })
                            })
                        }),
                    (0, i.jsx)(l.animated.div, {
                        className: Z.clanCardInnerContainer,
                        style: {
                            ...V,
                            ...k
                        },
                        children: (0, i.jsx)(C.xV, {
                            clan: U[2],
                            className: Z.clanCardInnerRight
                        })
                    }),
                    (0, i.jsx)(l.animated.div, {
                        className: Z.clanCardOuterContainer,
                        style: {
                            ...F,
                            ...k
                        },
                        children: (0, i.jsx)(C.xV, {
                            clan: U[3],
                            className: Z.clanCardOuterRight
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: Z.upsellCtaContainer,
                children: (0, i.jsx)(M, {
                    selectedGuildId: f,
                    setSelectedGuildId: R,
                    eligibleGuilds: t,
                    onButtonClick: D,
                    buttonText: z,
                    hasCompletedUpsell: r
                })
            }),
            r
                ? (0, i.jsx)('div', {
                      className: Z.joinWFSContainer,
                      children: (0, i.jsx)('div', {
                          className: Z.joinWFS,
                          children: (0, i.jsx)(c.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: L.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS.format({ wfsHook: q })
                          })
                      })
                  })
                : (0, i.jsx)('div', { className: Z.wfsSpacer })
        ]
    });
});
