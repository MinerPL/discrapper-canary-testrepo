n.d(t, {
    cS: function () {
        return k;
    },
    xV: function () {
        return Z;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(442837),
    u = n(239091),
    c = n(434650),
    d = n(835473),
    f = n(970606),
    _ = n(963202),
    h = n(905362),
    p = n(603368),
    m = n(353093),
    g = n(169559),
    E = n(114487),
    v = n(214715),
    I = n(550271),
    S = n(686546),
    T = n(216742),
    b = n(246364),
    y = n(937111),
    A = n(703656),
    N = n(271383),
    C = n(594174),
    R = n(229893),
    O = n(229765),
    D = n(778045),
    L = n(355932),
    x = n(981631),
    w = n(308083),
    M = n(388032),
    P = n(68118);
function k(e) {
    let { wildcardDescriptors: t, primaryColor: n } = e,
        a = t.filter((e) => e !== w.U6).join(', '),
        s = (0, o.useToken)(o.tokens.colors.BACKGROUND_FLOATING),
        l = (0, p.pX)(n, s.hex()),
        u = i.useRef(null),
        [c, d] = i.useState(!1);
    if (
        (i.useEffect(() => {
            let e = u.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && d(e.offsetWidth < e.scrollWidth);
        }, []),
        0 === a.length)
    )
        return null;
    let f = null != l ? { color: l.css() } : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: P.clanInfoItem,
                children: '\xB7'
            }),
            (0, r.jsx)(o.Tooltip, {
                text: a,
                color: o.Tooltip.Colors.PRIMARY,
                shouldShow: c,
                children: (e) =>
                    (0, r.jsx)('span', {
                        ...e,
                        style: f,
                        className: P.wildCardText,
                        ref: u,
                        children: a
                    })
            })
        ]
    });
}
function U(e) {
    let { description: t, expanded: n } = e;
    return null == t
        ? null
        : n
          ? (0, r.jsx)('div', {
                className: P.cardContentDescriptionSection,
                children: (0, r.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: t
                })
            })
          : (0, r.jsx)('div', {
                className: P.cardContentDescriptionSection,
                children: (0, r.jsx)(o.Text, {
                    className: P.cardContentDescriptionCollapsed,
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    lineClamp: 4,
                    children: t
                })
            });
}
function G(e) {
    let { traits: t, traitsToHighlight: n, onInteraction: a } = e,
        o = i.useMemo(() => (null == n ? new Set() : new Set(n)), [n]),
        l = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    v.Z,
                    {
                        className: s()(P.thinTrait, { [P.selectedTrait]: o.has(e) }),
                        text: e,
                        selected: o.has(e)
                    },
                    e
                ),
            [o]
        ),
        u = i.useCallback(
            (e) =>
                (0, r.jsx)(L.te, {
                    items: e,
                    renderItem: l,
                    onTooltipShow: a
                }),
            [l, a]
        );
    return (0, r.jsx)(L.ZP, {
        className: P.traitsContainer,
        items: t,
        renderItem: l,
        renderOverflow: u,
        maxLines: 2,
        itemGapPx: 4
    });
}
function B(e) {
    let { hasPendingJoinRequest: t, atMaxMemberCapacity: n, isGuildMember: i } = e;
    if (t)
        return (0, r.jsxs)('div', {
            className: P.headerBadge,
            children: [
                (0, r.jsx)(o.HourglassIcon, { size: 'xxs' }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: M.intl.string(M.t['J+MVEx'])
                })
            ]
        });
    if (i)
        return (0, r.jsxs)('div', {
            className: P.headerBadge,
            children: [
                (0, r.jsx)(o.CircleCheckIcon, {
                    size: 'xxs',
                    color: o.tokens.colors.STATUS_POSITIVE
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: M.intl.string(M.t.cEnaW1)
                })
            ]
        });
    if (n)
        return (0, r.jsxs)('div', {
            className: P.headerBadge,
            children: [
                (0, r.jsx)(o.LockIcon, { size: 'xxs' }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: M.intl.string(M.t['76GQ2t'])
                })
            ]
        });
    return null;
}
function Z(e) {
    var t;
    let { clan: n, bannerComponent: a, expanded: u, isMember: c = !1, traitsToHighlight: h, prioritizedGameIds: p, className: v, position: T, showBrandingFooter: b = !1, showFavoriteButton: y = !1, bannerUrl: A, onlyAnimateIconOnHover: N = !1, hasPendingJoinRequest: C = !1, atMaxMemberCapacity: L = !1, footer: x = null } = e,
        {
            tag: Z,
            badge: F,
            branding: { primaryColor: V, secondaryColor: j },
            bannerHash: H,
            gameActivity: Y
        } = n,
        W = (0, d.Z)(n.games),
        K = (0, g.Z)('clan_discovery_card'),
        [z, q] = i.useState(!1),
        Q = i.useRef(null),
        [X, J] = i.useState(!1),
        [$, ee] = i.useState(!1),
        et = (0, l.e7)([R.Z], () => R.Z.isSavedGuildId(n.id)),
        en = (0, _.iN)('guild_card'),
        er = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.preventDefault(),
                    ee(!0),
                    (0, f.j$)({
                        position: T,
                        guildId: n.id,
                        isFavorited: !et
                    }),
                    et ? (0, O.SI)(n.id) : (0, O.EV)(n.id);
            },
            [n.id, et, T]
        ),
        ei = i.useCallback(() => {
            q(!0);
        }, []),
        ea = i.useCallback(() => {
            q(!1);
        }, []),
        es = M.intl.formatToPlainString(M.t['0WHArK'], { count: n.memberCount }),
        eo = null != A ? A : (0, m.pY)(n.id, H),
        el = null == a && null == eo ? { background: 'linear-gradient(90deg, '.concat(V, ', ').concat(j, ')') } : void 0,
        eu =
            null != a
                ? a
                : null != eo
                  ? (0, r.jsx)('img', {
                        alt: M.intl.string(M.t.nH6S2d),
                        src: eo,
                        className: P.bannerImage
                    })
                  : null,
        ec = i.useMemo(() => (0, w.HR)(n.traits, h), [n.traits, h]);
    i.useEffect(() => {
        let e = Q.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && J(e.offsetWidth < e.scrollWidth);
    }, []);
    let ed = i.useCallback(
            (e) => () => {
                (0, f.Gh)({
                    position: T,
                    guildId: n.id,
                    feature: e
                });
            },
            [T, n.id]
        ),
        ef = en && (y || z || et);
    return (0, r.jsxs)('div', {
        className: s()(P.card, { [P.cardStaticHeight]: !u }, v),
        onMouseEnter: ei,
        onMouseLeave: ea,
        children: [
            (0, r.jsxs)('div', {
                className: P.cardBrandingHeader,
                style: el,
                children: [
                    eu,
                    (0, r.jsx)(B, {
                        hasPendingJoinRequest: C,
                        atMaxMemberCapacity: L,
                        isGuildMember: c
                    }),
                    en &&
                        (0, r.jsx)(o.Clickable, {
                            className: s()(P.favoriteButton, ef && P.shownFavoriteButton, {
                                [P.animateButtonIn]: $ && et,
                                [P.animateButtonOut]: $ && !et
                            }),
                            onClick: er,
                            focusProps: { enabled: ef },
                            children: et
                                ? (0, r.jsx)(o.HeartIcon, {
                                      color: o.tokens.colors.INFO_DANGER_FOREGROUND,
                                      size: 'custom',
                                      width: 18,
                                      height: 18
                                  })
                                : (0, r.jsx)(o.HeartOutlineIcon, {
                                      color: o.tokens.colors.HEADER_PRIMARY,
                                      size: 'custom',
                                      width: 18,
                                      height: 18
                                  })
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: P.cardContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: P.cardContentTitleSection,
                        children: [
                            (0, r.jsxs)('div', {
                                className: P.cardNameAndTagWrapper,
                                children: [
                                    (0, r.jsx)(S.ZP, {
                                        mask: S.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: P.clanIconMask,
                                        children: (0, r.jsx)('div', {
                                            className: P.clanIconInner,
                                            children: (0, r.jsx)(E.b, {
                                                guildId: n.id,
                                                guildName: n.name,
                                                guildIcon: n.icon,
                                                iconSize: 64,
                                                animate: !N || z
                                            })
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: P.clanTagChipletWrapper,
                                        children: (0, r.jsx)(o.Tooltip, {
                                            text: M.intl.string(M.t.UfpB2d),
                                            position: 'top',
                                            onTooltipShow: ed('tag'),
                                            shouldShow: !c && K,
                                            children: (e) =>
                                                (0, r.jsxs)('div', {
                                                    ...e,
                                                    className: P.clanTagChiplet,
                                                    children: [
                                                        (0, r.jsx)(I.A, {
                                                            width: 16,
                                                            height: 16,
                                                            badge: F.badgeKind,
                                                            primaryTintColor: F.primaryColor,
                                                            secondaryTintColor: F.secondaryColor
                                                        }),
                                                        (0, r.jsx)(o.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-primary',
                                                            children: Z
                                                        })
                                                    ]
                                                })
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)(o.Heading, {
                                variant: 'heading-md/medium',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: (0, r.jsx)(o.Tooltip, {
                                    text: n.name,
                                    color: o.Tooltip.Colors.PRIMARY,
                                    shouldShow: X,
                                    children: (e) =>
                                        (0, r.jsx)('span', {
                                            ...e,
                                            ref: Q,
                                            className: P.nameText,
                                            children: n.name
                                        })
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: P.clanInfoRow,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-xxs/normal',
                                        className: P.clanInfoItem,
                                        children: (0, r.jsx)('span', {
                                            role: 'img',
                                            'aria-label': M.intl.string(M.t.eMSBIC),
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: P.clanInfoItem,
                                        children: null !== (t = (0, w.mv)(n.playstyle)) && void 0 !== t ? t : M.intl.string(M.t.JijC4O)
                                    }),
                                    (0, r.jsx)(k, {
                                        wildcardDescriptors: n.wildcardDescriptors,
                                        primaryColor: n.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(U, {
                        description: n.description,
                        expanded: u
                    }),
                    (0, r.jsx)(G, {
                        traits: ec,
                        traitsToHighlight: h,
                        onInteraction: ed('traits')
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: P.cardFooter,
                children: [
                    (0, r.jsx)('div', {
                        className: P.cardFooterInfo,
                        children: (0, r.jsx)('div', {
                            className: P.cardFooterMembers,
                            children: (0, r.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: es
                            })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: P.cardFooterGames,
                        children: (0, r.jsx)(D.Z, {
                            games: W,
                            prioritizedGameIds: p,
                            gameActivity: Y,
                            onInteraction: ed('games')
                        })
                    })
                ]
            }),
            b &&
                (0, r.jsx)('div', {
                    className: P.cardBrandingFooter,
                    style: { background: 'linear-gradient(90deg, '.concat(V, ', ').concat(j, ')') }
                }),
            x
        ]
    });
}
t.ZP = function (e) {
    let { style: t, prioritizedGameIds: a, onVisibilityChange: d = () => {}, ...p } = e,
        { clan: m, affinity: g, index: E, position: v, source: I } = p,
        S = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
        R = (0, l.e7)([N.ZP], () => N.ZP.isMember(m.id, null == S ? void 0 : S.id), [m, S]),
        O = (0, l.e7)([y.Z], () => {
            var e;
            return (null === (e = y.Z.getRequest(m.id)) || void 0 === e ? void 0 : e.applicationStatus) === b.wB.SUBMITTED;
        }),
        D = (0, _.iN)('ClanGuildProfile'),
        L = (0, T.I7)().enabled,
        k = m.memberCount >= w.Du,
        U = i.useRef(-1),
        G = i.useCallback((e) => d(e, U), [d]),
        B = (0, c.O)(G, 1);
    i.useEffect(
        () => () => {
            null == d || d(!1, U);
        },
        [d]
    );
    let F = i.useCallback(() => {
            let e = null != y.Z.getRequest(m.id);
            if (
                ((0, f.EK)({
                    guildId: m.id,
                    isMember: R,
                    hasJoinRequest: e,
                    affinity: g,
                    index: E,
                    position: v
                }),
                R)
            ) {
                (0, A.XU)(m.id);
                return;
            }
            if (e) {
                (0, A.uL)(x.Z5c.GUILD_MEMBER_VERIFICATION(m.id));
                return;
            }
            D &&
                (0, h.qF)(
                    m.id,
                    m,
                    {
                        source: I,
                        location: x.Sbl.CLAN_DISCOVERY_CARD
                    },
                    a,
                    v
                );
        }, [m, R, g, E, v, D, I, a]),
        V = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('5577').then(n.bind(n, 955120));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            guildId: m.id
                        });
                });
            },
            [m.id]
        );
    return (0, r.jsx)('div', {
        ref: B,
        children: (0, r.jsx)(o.ClickableContainer, {
            onClick: F,
            className: s()(P.clickableCard, L && P.applyToJoinContainer),
            style: t,
            'aria-label': M.intl.formatToPlainString(M.t.DuSonp, { guildName: m.name }),
            onContextMenu: V,
            children: (0, r.jsx)(Z, {
                ...p,
                isMember: R,
                className: L ? P.applyToJoinContainer : void 0,
                prioritizedGameIds: a,
                hasPendingJoinRequest: O,
                atMaxMemberCapacity: k,
                showBrandingFooter: !L,
                footer: L
                    ? (0, r.jsx)('div', {
                          className: P.applyToJoinButton,
                          children: (0, r.jsx)(o.Button, {
                              color: o.Button.Colors.PRIMARY,
                              size: o.Button.Sizes.SMALL,
                              fullWidth: !0,
                              children: R ? M.intl.string(M.t.muzrLS) : M.intl.string(M.t.YfkjGh)
                          })
                      })
                    : null
            })
        })
    });
};
