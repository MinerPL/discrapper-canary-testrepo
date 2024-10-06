n.d(t, {
    cS: function () {
        return w;
    },
    xV: function () {
        return B;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(442837),
    u = n(239091),
    c = n(434650),
    d = n(835473),
    _ = n(970606),
    E = n(963202),
    f = n(905362),
    h = n(603368),
    p = n(353093),
    I = n(169559),
    m = n(114487),
    T = n(214715),
    S = n(550271),
    g = n(686546),
    A = n(246364),
    N = n(937111),
    O = n(703656),
    R = n(271383),
    v = n(594174),
    C = n(229893),
    L = n(229765),
    y = n(778045),
    D = n(355932),
    b = n(981631),
    M = n(308083),
    P = n(689938),
    U = n(68118);
function w(e) {
    let { wildcardDescriptors: t, primaryColor: n } = e,
        a = t.filter((e) => e !== M.U6).join(', '),
        s = (0, o.useToken)(o.tokens.colors.BACKGROUND_FLOATING),
        l = (0, h.pX)(n, s.hex()),
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
    let _ = null != l ? { color: l.css() } : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: U.clanInfoItem,
                children: '\xB7'
            }),
            (0, r.jsx)(o.Tooltip, {
                text: a,
                color: o.Tooltip.Colors.PRIMARY,
                shouldShow: c,
                children: (e) =>
                    (0, r.jsx)('span', {
                        ...e,
                        style: _,
                        className: U.wildCardText,
                        ref: u,
                        children: a
                    })
            })
        ]
    });
}
function x(e) {
    let { description: t, expanded: n } = e;
    return null == t
        ? null
        : n
          ? (0, r.jsx)('div', {
                className: U.cardContentDescriptionSection,
                children: (0, r.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: t
                })
            })
          : (0, r.jsx)('div', {
                className: U.cardContentDescriptionSection,
                children: (0, r.jsx)(o.Text, {
                    className: U.cardContentDescriptionCollapsed,
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
                    T.Z,
                    {
                        className: s()(U.thinTrait, { [U.selectedTrait]: o.has(e) }),
                        text: e,
                        selected: o.has(e)
                    },
                    e
                ),
            [o]
        ),
        u = i.useCallback(
            (e) =>
                (0, r.jsx)(D.te, {
                    items: e,
                    renderItem: l,
                    onTooltipShow: a
                }),
            [l, a]
        );
    return (0, r.jsx)(D.ZP, {
        className: U.traitsContainer,
        items: t,
        renderItem: l,
        renderOverflow: u,
        maxLines: 2,
        itemGapPx: 4
    });
}
function k(e) {
    let { hasPendingJoinRequest: t, atMaxMemberCapacity: n, isGuildMember: i } = e;
    if (t)
        return (0, r.jsxs)('div', {
            className: U.headerBadge,
            children: [
                (0, r.jsx)(o.HourglassIcon, { size: 'xxs' }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: P.Z.Messages.CLAN_CARD_BADGE_APPLIED
                })
            ]
        });
    if (i)
        return (0, r.jsxs)('div', {
            className: U.headerBadge,
            children: [
                (0, r.jsx)(o.CircleCheckIcon, {
                    size: 'xxs',
                    color: o.tokens.colors.STATUS_POSITIVE
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: P.Z.Messages.JOINED_GUILD
                })
            ]
        });
    if (n)
        return (0, r.jsxs)('div', {
            className: U.headerBadge,
            children: [
                (0, r.jsx)(o.LockIcon, { size: 'xxs' }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: P.Z.Messages.FULL
                })
            ]
        });
    return null;
}
function B(e) {
    var t;
    let { clan: n, bannerComponent: a, expanded: u, isMember: c = !1, traitsToHighlight: f, prioritizedGameIds: h, className: T, position: A, showBrandingFooter: N = !1, showFavoriteButton: O = !1, bannerUrl: R, onlyAnimateIconOnHover: v = !1, hasPendingJoinRequest: D = !1, atMaxMemberCapacity: b = !1 } = e,
        {
            tag: B,
            badge: F,
            branding: { primaryColor: V, secondaryColor: H },
            bannerHash: Z,
            gameActivity: Y
        } = n,
        j = (0, d.Z)(n.games),
        W = (0, I.Z)('clan_discovery_card'),
        [K, z] = i.useState(!1),
        q = i.useRef(null),
        [Q, X] = i.useState(!1),
        [$, J] = i.useState(!1),
        ee = (0, l.e7)([C.Z], () => C.Z.isSavedGuildId(n.id)),
        et = (0, E.iN)('guild_card'),
        en = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.preventDefault(),
                    J(!0),
                    (0, _.j$)({
                        position: A,
                        guildId: n.id,
                        isFavorited: !ee
                    }),
                    ee ? (0, L.SI)(n.id) : (0, L.EV)(n.id);
            },
            [n.id, ee, A]
        ),
        er = i.useCallback(() => {
            z(!0);
        }, []),
        ei = i.useCallback(() => {
            z(!1);
        }, []),
        ea = P.Z.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({ count: n.memberCount }),
        es = null != R ? R : (0, p.pY)(n.id, Z),
        eo = null == a && null == es ? { background: 'linear-gradient(90deg, '.concat(V, ', ').concat(H, ')') } : void 0,
        el =
            null != a
                ? a
                : null != es
                  ? (0, r.jsx)('img', {
                        alt: P.Z.Messages.CLAN_LOOK_BANNER,
                        src: es,
                        className: U.bannerImage
                    })
                  : null,
        eu = i.useMemo(() => (0, M.HR)(n.traits, f), [n.traits, f]);
    i.useEffect(() => {
        let e = q.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth);
    }, []);
    let ec = i.useCallback(
            (e) => () => {
                (0, _.Gh)({
                    position: A,
                    guildId: n.id,
                    feature: e
                });
            },
            [A, n.id]
        ),
        ed = et && (O || K || ee);
    return (0, r.jsxs)('div', {
        className: s()(U.card, T, { [U.cardStaticHeight]: !u }),
        onMouseEnter: er,
        onMouseLeave: ei,
        children: [
            (0, r.jsxs)('div', {
                className: U.cardBrandingHeader,
                style: eo,
                children: [
                    el,
                    (0, r.jsx)(k, {
                        hasPendingJoinRequest: D,
                        atMaxMemberCapacity: b,
                        isGuildMember: c
                    }),
                    et &&
                        (0, r.jsx)(o.Clickable, {
                            className: s()(U.favoriteButton, ed && U.shownFavoriteButton, {
                                [U.animateButtonIn]: $ && ee,
                                [U.animateButtonOut]: $ && !ee
                            }),
                            onClick: en,
                            focusProps: { enabled: ed },
                            children: ee
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
                className: U.cardContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: U.cardContentTitleSection,
                        children: [
                            (0, r.jsxs)('div', {
                                className: U.cardNameAndTagWrapper,
                                children: [
                                    (0, r.jsx)(g.ZP, {
                                        mask: g.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: U.clanIconMask,
                                        children: (0, r.jsx)('div', {
                                            className: U.clanIconInner,
                                            children: (0, r.jsx)(m.b, {
                                                guildId: n.id,
                                                guildName: n.name,
                                                guildIcon: n.icon,
                                                iconSize: 64,
                                                animate: !v || K
                                            })
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: U.clanTagChipletWrapper,
                                        children: (0, r.jsx)(o.Tooltip, {
                                            text: P.Z.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
                                            position: 'top',
                                            onTooltipShow: ec('tag'),
                                            shouldShow: !c && W,
                                            children: (e) =>
                                                (0, r.jsxs)('div', {
                                                    ...e,
                                                    className: U.clanTagChiplet,
                                                    children: [
                                                        (0, r.jsx)(S.A, {
                                                            width: 16,
                                                            height: 16,
                                                            badge: F.badgeKind,
                                                            primaryTintColor: F.primaryColor,
                                                            secondaryTintColor: F.secondaryColor
                                                        }),
                                                        (0, r.jsx)(o.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-primary',
                                                            children: B
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
                                    shouldShow: Q,
                                    children: (e) =>
                                        (0, r.jsx)('span', {
                                            ...e,
                                            ref: q,
                                            className: U.nameText,
                                            children: n.name
                                        })
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: U.clanInfoRow,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-xxs/normal',
                                        className: U.clanInfoItem,
                                        children: (0, r.jsx)('span', {
                                            role: 'img',
                                            'aria-label': P.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: U.clanInfoItem,
                                        children: null !== (t = (0, M.mv)(n.playstyle)) && void 0 !== t ? t : P.Z.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
                                    }),
                                    (0, r.jsx)(w, {
                                        wildcardDescriptors: n.wildcardDescriptors,
                                        primaryColor: n.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(x, {
                        description: n.description,
                        expanded: u
                    }),
                    (0, r.jsx)(G, {
                        traits: eu,
                        traitsToHighlight: f,
                        onInteraction: ec('traits')
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: U.cardFooter,
                children: [
                    (0, r.jsx)('div', {
                        className: U.cardFooterInfo,
                        children: (0, r.jsx)('div', {
                            className: U.cardFooterMembers,
                            children: (0, r.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: ea
                            })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: U.cardFooterGames,
                        children: (0, r.jsx)(y.Z, {
                            games: j,
                            prioritizedGameIds: h,
                            gameActivity: Y,
                            onInteraction: ec('games')
                        })
                    })
                ]
            }),
            N &&
                (0, r.jsx)('div', {
                    className: U.cardBrandingFooter,
                    style: { background: 'linear-gradient(90deg, '.concat(V, ', ').concat(H, ')') }
                })
        ]
    });
}
t.ZP = function (e) {
    let { style: t, prioritizedGameIds: a, onVisibilityChange: s = () => {}, ...d } = e,
        { clan: h, affinity: p, index: I, position: m, source: T } = d,
        S = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
        g = (0, l.e7)([R.ZP], () => R.ZP.isMember(h.id, null == S ? void 0 : S.id), [h, S]),
        C = (0, l.e7)([N.Z], () => {
            var e;
            return (null === (e = N.Z.getRequest(h.id)) || void 0 === e ? void 0 : e.applicationStatus) === A.wB.SUBMITTED;
        }),
        L = (0, E.iN)('ClanGuildProfile'),
        y = h.memberCount >= M.Du,
        D = i.useRef(-1),
        P = i.useCallback((e) => s(e, D), [s]),
        w = (0, c.O)(P, 1);
    i.useEffect(
        () => () => {
            null == s || s(!1, D);
        },
        [s]
    );
    let x = i.useCallback(() => {
            let e = null != N.Z.getRequest(h.id);
            if (
                ((0, _.EK)({
                    guildId: h.id,
                    isMember: g,
                    hasJoinRequest: e,
                    affinity: p,
                    index: I,
                    position: m
                }),
                g)
            ) {
                (0, O.XU)(h.id);
                return;
            }
            if (e) {
                (0, O.uL)(b.Z5c.GUILD_MEMBER_VERIFICATION(h.id));
                return;
            }
            L &&
                (0, f.qF)(
                    h.id,
                    h,
                    {
                        source: T,
                        location: b.Sbl.CLAN_DISCOVERY_CARD
                    },
                    a,
                    m
                );
        }, [h, g, p, I, m, L, T, a]),
        G = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('5577').then(n.bind(n, 955120));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            guildId: h.id
                        });
                });
            },
            [h.id]
        );
    return (0, r.jsx)('div', {
        ref: w,
        children: (0, r.jsx)(o.Clickable, {
            onClick: x,
            className: U.clickableCard,
            style: t,
            onContextMenu: G,
            children: (0, r.jsx)(B, {
                ...d,
                isMember: g,
                prioritizedGameIds: a,
                showBrandingFooter: !0,
                hasPendingJoinRequest: C,
                atMaxMemberCapacity: y
            })
        })
    });
};
