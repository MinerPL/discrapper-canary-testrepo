n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(100621),
    o = n(442837),
    c = n(481060),
    d = n(749210),
    u = n(607070),
    h = n(100527),
    m = n(931240),
    p = n(970606),
    g = n(963202),
    f = n(650461),
    _ = n(353093),
    E = n(641721),
    I = n(603839),
    C = n(84615),
    v = n(430824),
    S = n(231467),
    N = n(207796),
    T = n(273254),
    x = n(559469),
    b = n(308083),
    A = n(388032),
    Z = n(431476),
    y = n(345480),
    L = n(236613);
let R = {
    mass: 1,
    tension: 600,
    friction: 60
};
function P(e) {
    let { children: t } = e;
    return (0, i.jsxs)(s.animated.div, {
        className: Z.clanEnvelope,
        children: [
            (0, i.jsx)('div', {
                className: Z.clanEnvelopeTop,
                children: (0, i.jsx)('img', {
                    src: L,
                    alt: ''
                })
            }),
            t,
            (0, i.jsx)('div', {
                className: Z.clanEnvelopeBottom,
                children: (0, i.jsx)('img', {
                    src: y,
                    alt: ''
                })
            })
        ]
    });
}
function O(e) {
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
function j(e) {
    let { selectedGuildId: t, setSelectedGuildId: n, eligibleGuilds: a, onButtonClick: s, onDismiss: o, buttonText: d, hasCompletedUpsell: u } = e,
        h = (0, g.iN)('clan_discovery_admin_upsell'),
        m = (0, g.YH)('clan_discovery_admin_upsell'),
        p = r.useMemo(
            () =>
                a.map((e) => ({
                    value: e.id,
                    label: e.name
                })),
            [a]
        );
    r.useEffect(() => {
        0 === a.length && m && (0, N.Ce)();
    }, [a, m]);
    let f = a.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(c.Heading, {
                              className: Z.upsellTitle,
                              variant: 'heading-xxl/semibold',
                              children: A.intl.string(A.t['6RMihY'])
                          }),
                          (0, i.jsx)(c.Heading, {
                              className: Z.upsellSubtitle,
                              variant: 'heading-md/medium',
                              color: 'header-secondary',
                              children: A.intl.string(A.t.xlIWLS)
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)(c.Heading, {
                              className: Z.upsellTitle,
                              variant: 'heading-xxl/semibold',
                              children: [A.intl.string(A.t.Uw5KKC), (0, i.jsx)('br', {}), A.intl.string(A.t['jZvR+f'])]
                          }),
                          (0, i.jsxs)('div', {
                              className: Z.upsellDetails,
                              children: [
                                  (0, i.jsx)(O, {
                                      icon: c.CompassIcon,
                                      text: A.intl.string(A.t.v0ZdNj)
                                  }),
                                  (0, i.jsx)(O, {
                                      icon: c.CircleCheckIcon,
                                      text: A.intl.string(A.t.L1fEc3)
                                  }),
                                  (0, i.jsx)(O, {
                                      icon: c.GroupIcon,
                                      text: A.intl.string(A.t.ChMjnp)
                                  })
                              ]
                          })
                      ]
                  }),
            (0, i.jsxs)('div', {
                className: Z.upsellButton,
                children: [
                    f &&
                        (0, i.jsx)(c.SearchableSelect, {
                            className: Z.upsellSelect,
                            value: t,
                            options: p,
                            onChange: n
                        }),
                    !u &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(c.Button, {
                                    look: c.ButtonLooks.FILLED,
                                    size: c.ButtonSizes.LARGE,
                                    color: c.ButtonColors.BRAND,
                                    className: l()(Z.reserveButton, { [Z.buttonWithSelect]: f }),
                                    onClick: s,
                                    children: (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'always-white',
                                        children: d
                                    })
                                }),
                                h &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)('div', { className: Z.separatorDot }),
                                            (0, i.jsx)(c.Button, {
                                                look: c.ButtonLooks.FILLED,
                                                size: c.ButtonSizes.LARGE,
                                                color: c.ButtonColors.TRANSPARENT,
                                                className: Z.reserveButton,
                                                onClick: o,
                                                children: (0, i.jsx)(c.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-primary',
                                                    children: A.intl.string(A.t['0ZJsur'])
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
t.Z = r.memo(function (e) {
    let { eligibleGuilds: t, eligibleGuildsIncludingConverted: n } = e,
        a = (0, g.iN)('clan_discovery_admin_upsell'),
        l = 0 === t.length,
        [y, L] = r.useState(() => {
            var e, i;
            let r = new Set(f.ZP.getGuildIds());
            for (let e of t) if (r.has(e.id)) return e.id;
            return l ? (null === (e = n[0]) || void 0 === e ? void 0 : e.id) : null === (i = t[0]) || void 0 === i ? void 0 : i.id;
        });
    r.useEffect(() => {
        !l &&
            (0, p.TE)({
                guildId: y,
                location: h.Z.CLAN_DISCOVERY
            });
    }, [l, y]);
    let O = (0, o.e7)([v.Z], () => v.Z.getGuild(y)),
        D = (0, o.e7)([f.ZP], () => (null != y ? f.ZP.getStateForGuild(y).progress : null)),
        M = (0, g.c7)({
            guildId: y,
            location: h.Z.CLAN_DISCOVERY
        }),
        w = r.useCallback(() => {
            !l &&
                ((0, p.aN)({
                    guildId: y,
                    location: h.Z.CLAN_DISCOVERY
                }),
                M
                    ? (0, C.q4)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, i.jsx)(E.Z, {
                                  onClose: t,
                                  guildId: y
                              });
                          },
                          { layerKey: b.Pv }
                      )
                    : (0, C.q4)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, i.jsx)(I.Z, {
                                  onClose: t,
                                  guildId: y
                              });
                          },
                          { layerKey: b.Pv }
                      ));
        }, [M, l, y]),
        k = r.useCallback(() => {
            M ? (0, N.kw)() : (0, N.Ce)();
        }, [M]),
        U = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        G = (0, T.L)({ guild: O }),
        B = (0, x.n)(),
        [H, V] = r.useState(!0),
        F = (0, c.useSpring)(
            {
                from: { opacity: 0 },
                to: { opacity: 1 },
                delay: 400,
                config: { duration: 0 }
            },
            'animate-always'
        ),
        z = (0, c.useSpring)(
            {
                from: U ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(324px, -56px) rotate(8deg) scale(1.25)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: R,
                delay: 400
            },
            'animate-always'
        ),
        Y = (0, c.useSpring)(
            {
                from: U ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(176px, -24px) rotate(4deg) scale(1.1111)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: R,
                delay: 350
            },
            'animate-always'
        ),
        W = (0, c.useSpring)(
            {
                from: U ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(-176px, -24px) rotate(-4deg) scale(1.1111)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: R,
                delay: 350
            },
            'animate-always'
        ),
        K = (0, c.useSpring)(
            {
                from: U ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(-324px, -56px) rotate(-8deg) scale(1.25)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: R,
                delay: 400
            },
            'animate-always'
        ),
        q = (0, c.useSpring)(
            {
                from: U
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
                config: R,
                delay: 200
            },
            'animate-always'
        ),
        X = (0, c.useSpring)(
            {
                from: U ? { transform: 'translateY(0px)' } : { transform: 'translateY(240px)' },
                to: { transform: 'translateY(0px)' },
                config: R,
                delay: 250,
                onRest: () => V(!1)
            },
            'animate-always'
        ),
        Q = r.useMemo(() => (a ? A.intl.string(A.t.ZA9f19) : null == D ? A.intl.string(A.t.fLiOgI) : A.intl.string(A.t.GnIKBA)), [D, a]),
        J = r.useCallback(async () => {
            await (0, m.Zx)(y), d.Z.transitionToGuildSync('936317138904440892');
        }, [y]),
        $ = r.useCallback(
            (e) =>
                (0, i.jsx)(c.Clickable, {
                    tag: 'span',
                    className: Z.joinWFSLink,
                    onClick: J,
                    'aria-label': A.intl.string(A.t['6PJMUF']),
                    children: (0, i.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-xs/medium',
                        color: 'text-brand',
                        children: e
                    })
                }),
            [J]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: Z.cardsContainer,
                children: [
                    (0, i.jsx)(s.animated.div, {
                        className: Z.clanCardOuterContainer,
                        style: {
                            ...z,
                            ...F
                        },
                        children: (0, i.jsx)(S.xV, {
                            clan: B[0],
                            className: Z.clanCardOuterLeft
                        })
                    }),
                    (0, i.jsx)(s.animated.div, {
                        className: Z.clanCardInnerContainer,
                        style: {
                            ...Y,
                            ...F
                        },
                        children: (0, i.jsx)(S.xV, {
                            clan: B[1],
                            className: Z.clanCardInnerLeft
                        })
                    }),
                    null != G &&
                        (0, i.jsx)(s.animated.div, {
                            className: Z.clanEnvelope,
                            style: q,
                            children: (0, i.jsx)(P, {
                                children: (0, i.jsx)('div', {
                                    className: Z.clanCardCenterContainer,
                                    style: { overflow: H ? 'hidden' : 'visible' },
                                    children: (0, i.jsx)(s.animated.div, {
                                        style: X,
                                        children: (0, i.jsx)(S.xV, {
                                            clan: G,
                                            className: Z.clanCardCenter,
                                            bannerUrl: (0, _.pY)(B[4].id, B[4].bannerHash)
                                        })
                                    })
                                })
                            })
                        }),
                    (0, i.jsx)(s.animated.div, {
                        className: Z.clanCardInnerContainer,
                        style: {
                            ...W,
                            ...F
                        },
                        children: (0, i.jsx)(S.xV, {
                            clan: B[2],
                            className: Z.clanCardInnerRight
                        })
                    }),
                    (0, i.jsx)(s.animated.div, {
                        className: Z.clanCardOuterContainer,
                        style: {
                            ...K,
                            ...F
                        },
                        children: (0, i.jsx)(S.xV, {
                            clan: B[3],
                            className: Z.clanCardOuterRight
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: Z.upsellCtaContainer,
                children: (0, i.jsx)(j, {
                    selectedGuildId: y,
                    setSelectedGuildId: L,
                    eligibleGuilds: t,
                    onButtonClick: w,
                    onDismiss: k,
                    buttonText: Q,
                    hasCompletedUpsell: l
                })
            }),
            l
                ? (0, i.jsx)('div', {
                      className: Z.joinWFSContainer,
                      children: (0, i.jsx)('div', {
                          className: Z.joinWFS,
                          children: (0, i.jsx)(c.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: A.intl.format(A.t['5lqT9P'], { wfsHook: $ })
                          })
                      })
                  })
                : (0, i.jsx)('div', { className: Z.wfsSpacer })
        ]
    });
});
