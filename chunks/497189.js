n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(920906), o = n(143927), c = n(442837), d = n(481060), u = n(749210), _ = n(607070), E = n(100527), h = n(931240), I = n(970606), m = n(963202), p = n(650461), g = n(353093), T = n(603839), S = n(430824), C = n(725568), N = n(231467), f = n(207796), A = n(316553), Z = n(273254), L = n(559469), v = n(308083), O = n(689938), R = n(605767), x = n(345480), P = n(236613);
let b = {
    mass: 1,
    tension: 600,
    friction: 60
};
function M(e) {
    let {children: t} = e;
    return (0, i.jsxs)(l.animated.div, {
        className: R.clanEnvelope,
        children: [
            (0, i.jsx)('div', {
                className: R.clanEnvelopeTop,
                children: (0, i.jsx)('img', {
                    src: P,
                    alt: ''
                })
            }),
            t,
            (0, i.jsx)('div', {
                className: R.clanEnvelopeBottom,
                children: (0, i.jsx)('img', {
                    src: x,
                    alt: ''
                })
            })
        ]
    });
}
function D(e) {
    let {
        text: t,
        icon: n
    } = e;
    return (0, i.jsxs)('div', {
        className: R.upsellDetail,
        children: [
            (0, i.jsx)(n, {
                size: 'md',
                color: 'currentColor',
                className: R.upsellIcon
            }),
            (0, i.jsx)(d.Text, {
                className: R.upsellDetailText,
                variant: 'text-md/medium',
                children: t
            })
        ]
    });
}
function y(e) {
    let {
            selectedGuildId: t,
            setSelectedGuildId: n,
            eligibleGuilds: a,
            onButtonClick: l,
            buttonText: c,
            hasCompletedUpsell: u,
            isBrowseButtonVisible: _
        } = e, E = (0, f.GN)(e => e.setUserUpsellScreen, o.Z), h = (0, f.GN)(e => e.started, o.Z), I = s.useMemo(() => a.map(e => ({
            value: e.id,
            label: e.name
        })), [a]), m = s.useCallback(() => {
            (0, f.fH)(f.v0.DISCOVERY);
        }, []), p = s.useCallback(() => {
            (0, f.fH)(f.v0.GET_STARTED), E(f.o2.USER_ONBOARDING);
        }, [E]), g = a.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.Heading, {
                        className: R.upsellTitle,
                        variant: 'heading-xxl/semibold',
                        children: O.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_TITLE
                    }),
                    (0, i.jsx)(d.Heading, {
                        className: R.upsellSubtitle,
                        variant: 'heading-md/medium',
                        color: 'header-secondary',
                        children: O.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_SUBTITLE
                    })
                ]
            }) : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(d.Heading, {
                        className: R.upsellTitle,
                        variant: 'heading-xxl/semibold',
                        children: [
                            O.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE,
                            (0, i.jsx)('br', {}),
                            O.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: R.upsellDetails,
                        children: [
                            (0, i.jsx)(D, {
                                icon: d.CompassIcon,
                                text: O.Z.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
                            }),
                            (0, i.jsx)(D, {
                                icon: d.CircleCheckIcon,
                                text: O.Z.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
                            }),
                            (0, i.jsx)(D, {
                                icon: d.GroupIcon,
                                text: O.Z.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: R.upsellButton,
                children: [
                    g && (0, i.jsx)(d.SearchableSelect, {
                        className: R.upsellSelect,
                        value: t,
                        options: I,
                        onChange: n
                    }),
                    !u && (0, i.jsx)(d.Button, {
                        look: d.ButtonLooks.FILLED,
                        size: d.ButtonSizes.LARGE,
                        color: d.ButtonColors.BRAND,
                        className: r()(R.reserveButton, { [R.buttonWithSelect]: g }),
                        onClick: l,
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: c
                        })
                    }),
                    g && _ && (0, i.jsx)('div', {
                        className: R.spacer,
                        children: '\xB7'
                    }),
                    _ && (0, i.jsx)(d.Button, {
                        look: d.ButtonLooks.OUTLINED,
                        color: d.ButtonColors.PRIMARY,
                        className: R.browseButton,
                        onClick: p,
                        children: O.Z.Messages.CLAN_DISCOVERY_UPSELL_BROWSE
                    })
                ]
            }),
            h && (0, i.jsx)('div', {
                className: R.upsellStaticHeader,
                children: (0, i.jsx)('div', {
                    className: R.upsellBackButton,
                    children: (0, i.jsx)(d.Clickable, {
                        onClick: m,
                        'aria-label': O.Z.Messages.BACK,
                        children: (0, i.jsx)(d.ArrowLargeLeftIcon, {})
                    })
                })
            })
        ]
    });
}
t.Z = s.memo(function (e) {
    let {
            eligibleGuilds: t,
            eligibleGuildsIncludingConverted: n,
            selectedGame: a,
            isBrowseButtonVisible: r
        } = e, o = 0 === t.length, [x, P] = s.useState(() => {
            let e = new Set(p.ZP.getGuildIds());
            for (let n of t)
                if (e.has(n.id))
                    return n.id;
            return o ? n[0].id : t[0].id;
        });
    s.useEffect(() => {
        !o && (0, I.TE)({
            guildId: x,
            location: E.Z.CLAN_DISCOVERY
        });
    }, [
        o,
        x
    ]);
    let D = (0, c.e7)([S.Z], () => S.Z.getGuild(x)), j = (0, c.e7)([p.ZP], () => null != x ? p.ZP.getStateForGuild(x).progress : null), U = (0, A.J)({ selectedGame: a }), {defaultGameId: G} = (0, m.St)({
            guild: D,
            location: 'ClanDiscoveryAdminUpsell',
            includeConverted: !1
        });
    s.useEffect(() => {
        let e = G === v.nJ ? f.hz.VALORANT : G === v.xn ? f.hz.GENSHIN : void 0;
        null != e && U !== G && f.GN.getState().setGame(e);
    }, [
        G,
        U
    ]);
    let w = s.useCallback(() => {
            !o && ((0, I._9)({
                guildId: x,
                location: E.Z.CLAN_DISCOVERY
            }), (0, C.q4)(e => {
                let {closeLayer: t} = e;
                return (0, i.jsx)(T.Z, {
                    onClose: t,
                    guildId: x
                });
            }, { layerKey: v.Pv }));
        }, [
            o,
            x
        ]), k = (0, c.e7)([_.Z], () => _.Z.useReducedMotion), B = (0, Z.L)({
            guild: D,
            selectedGame: a
        }), H = (0, L.n)(U), [V, F] = s.useState(!0), Y = (0, l.useSpring)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            delay: 400,
            config: { duration: 0 }
        }), W = (0, l.useSpring)({
            from: k ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(324px, -56px) rotate(8deg) scale(1.25)' },
            to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
            config: b,
            delay: 400
        }), z = (0, l.useSpring)({
            from: k ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(176px, -24px) rotate(4deg) scale(1.1111)' },
            to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
            config: b,
            delay: 350
        }), K = (0, l.useSpring)({
            from: k ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(-176px, -24px) rotate(-4deg) scale(1.1111)' },
            to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
            config: b,
            delay: 350
        }), q = (0, l.useSpring)({
            from: k ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(-324px, -56px) rotate(-8deg) scale(1.25)' },
            to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
            config: b,
            delay: 400
        }), Q = (0, l.useSpring)({
            from: k ? {
                transform: 'scale(1)',
                opacity: 0
            } : {
                transform: 'scale(0.9)',
                opacity: 0
            },
            to: {
                transform: 'scale(1)',
                opacity: 1
            },
            config: b,
            delay: 200
        }), X = (0, l.useSpring)({
            from: k ? { transform: 'translateY(0px)' } : { transform: 'translateY(240px)' },
            to: { transform: 'translateY(0px)' },
            config: b,
            delay: 250,
            onRest: () => F(!1)
        }), J = s.useMemo(() => null == j ? O.Z.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : O.Z.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP, [j]), $ = s.useCallback(async () => {
            await (0, h.Zx)(x), u.Z.transitionToGuildSync('936317138904440892');
        }, [x]), ee = s.useCallback(e => (0, i.jsx)(d.Clickable, {
            tag: 'span',
            className: R.joinWFSLink,
            onClick: $,
            'aria-label': O.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS_ARIA_LABEL,
            children: (0, i.jsx)(d.Text, {
                tag: 'span',
                variant: 'text-xs/medium',
                color: 'text-brand',
                children: e
            })
        }), [$]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: R.cardsContainer,
                children: [
                    (0, i.jsx)(l.animated.div, {
                        className: R.clanCardOuterContainer,
                        style: {
                            ...W,
                            ...Y
                        },
                        children: (0, i.jsx)(N.xV, {
                            clan: H[0],
                            className: R.clanCardOuterLeft
                        })
                    }),
                    (0, i.jsx)(l.animated.div, {
                        className: R.clanCardInnerContainer,
                        style: {
                            ...z,
                            ...Y
                        },
                        children: (0, i.jsx)(N.xV, {
                            clan: H[1],
                            className: R.clanCardInnerLeft
                        })
                    }),
                    null != B && (0, i.jsx)(l.animated.div, {
                        className: R.clanEnvelope,
                        style: Q,
                        children: (0, i.jsx)(M, {
                            children: (0, i.jsx)('div', {
                                className: R.clanCardCenterContainer,
                                style: { overflow: V ? 'hidden' : 'visible' },
                                children: (0, i.jsx)(l.animated.div, {
                                    style: X,
                                    children: (0, i.jsx)(N.xV, {
                                        clan: B,
                                        className: R.clanCardCenter,
                                        bannerUrl: (0, g.pY)(H[4].id, H[4].bannerHash)
                                    })
                                })
                            })
                        })
                    }),
                    (0, i.jsx)(l.animated.div, {
                        className: R.clanCardInnerContainer,
                        style: {
                            ...K,
                            ...Y
                        },
                        children: (0, i.jsx)(N.xV, {
                            clan: H[2],
                            className: R.clanCardInnerRight
                        })
                    }),
                    (0, i.jsx)(l.animated.div, {
                        className: R.clanCardOuterContainer,
                        style: {
                            ...q,
                            ...Y
                        },
                        children: (0, i.jsx)(N.xV, {
                            clan: H[3],
                            className: R.clanCardOuterRight
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: R.upsellCtaContainer,
                children: (0, i.jsx)(y, {
                    selectedGuildId: x,
                    setSelectedGuildId: P,
                    eligibleGuilds: t,
                    onButtonClick: w,
                    buttonText: J,
                    hasCompletedUpsell: o,
                    isBrowseButtonVisible: r
                })
            }),
            (0, i.jsx)('div', {
                className: R.joinWFSContainer,
                children: (0, i.jsx)('div', {
                    className: R.joinWFS,
                    children: (0, i.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: O.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS.format({ wfsHook: ee })
                    })
                })
            })
        ]
    });
});
