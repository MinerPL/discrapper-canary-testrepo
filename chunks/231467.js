n.d(t, {
    cS: function () {
        return b;
    },
    xV: function () {
        return w;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(481060), l = n(442837), u = n(239091), c = n(835473), d = n(970606), _ = n(905362), E = n(603368), f = n(353093), h = n(169559), p = n(114487), m = n(214715), I = n(550271), T = n(246364), g = n(937111), S = n(703656), A = n(271383), N = n(594174), v = n(806519), O = n(778045), R = n(355932), C = n(981631), y = n(308083), D = n(689938), L = n(438222);
function b(e) {
    let {
            wildcardDescriptors: t,
            primaryColor: n
        } = e, a = t.filter(e => e !== y.U6).join(', '), o = (0, s.useToken)(s.tokens.colors.BACKGROUND_FLOATING), l = (0, E.pX)(n, o.hex()), u = i.useRef(null), [c, d] = i.useState(!1);
    if (i.useEffect(() => {
            let e = u.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && d(e.offsetWidth < e.scrollWidth);
        }, []), 0 === a.length)
        return null;
    let _ = null != l ? { color: l.css() } : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: L.clanInfoItem,
                children: '\xB7'
            }),
            (0, r.jsx)(s.Tooltip, {
                text: a,
                color: s.Tooltip.Colors.PRIMARY,
                shouldShow: c,
                children: e => (0, r.jsx)('span', {
                    ...e,
                    style: _,
                    className: L.wildCardText,
                    ref: u,
                    children: a
                })
            })
        ]
    });
}
function M(e) {
    let {
        description: t,
        expanded: n
    } = e;
    return null == t ? null : n ? (0, r.jsx)('div', {
        className: L.cardContentDescriptionSection,
        children: (0, r.jsx)(s.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: t
        })
    }) : (0, r.jsx)('div', {
        className: L.cardContentDescriptionSection,
        children: (0, r.jsx)(s.Text, {
            className: L.cardContentDescriptionCollapsed,
            variant: 'text-xs/normal',
            color: 'text-muted',
            lineClamp: 4,
            children: t
        })
    });
}
function P(e) {
    let {
            traits: t,
            traitsToHighlight: n
        } = e, a = i.useMemo(() => null == n ? new Set() : new Set(n), [n]), s = i.useCallback(e => (0, r.jsx)(m.Z, {
            className: o()(L.thinTrait, { [L.selectedTrait]: a.has(e) }),
            text: e,
            selected: a.has(e)
        }, e), [a]);
    return (0, r.jsx)(R.Z, {
        className: L.traitsContainer,
        items: t,
        renderItem: s,
        maxLines: 2,
        itemGapPx: 4
    });
}
function U(e) {
    let {
        hasPendingJoinRequest: t,
        atMaxMemberCapacity: n,
        isGuildMember: i
    } = e;
    if (t)
        return (0, r.jsxs)('div', {
            className: L.headerBadge,
            children: [
                (0, r.jsx)(s.HourglassIcon, { size: 'xxs' }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: D.Z.Messages.CLAN_CARD_BADGE_APPLIED
                })
            ]
        });
    if (i)
        return (0, r.jsxs)('div', {
            className: L.headerBadge,
            children: [
                (0, r.jsx)(s.CircleCheckIcon, {
                    size: 'xxs',
                    color: s.tokens.colors.STATUS_POSITIVE
                }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: D.Z.Messages.JOINED_GUILD
                })
            ]
        });
    if (n)
        return (0, r.jsxs)('div', {
            className: L.headerBadge,
            children: [
                (0, r.jsx)(s.LockIcon, { size: 'xxs' }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: D.Z.Messages.FULL
                })
            ]
        });
    return null;
}
function w(e) {
    var t;
    let {
            clan: n,
            bannerComponent: a,
            expanded: l,
            isMember: u = !1,
            traitsToHighlight: d,
            prioritizedGameIds: _,
            className: E,
            showBrandingFooter: m = !1,
            bannerUrl: T,
            onlyAnimateIconOnHover: g = !1,
            hasPendingJoinRequest: S = !1,
            atMaxMemberCapacity: A = !1
        } = e, {
            tag: N,
            badge: R,
            branding: {
                primaryColor: C,
                secondaryColor: w
            },
            bannerHash: x
        } = n, G = (0, c.Z)(n.games), k = (0, h.Z)('clan_discovery_card'), [B, F] = i.useState(!1), V = i.useRef(null), [H, Z] = i.useState(!1), Y = i.useCallback(() => {
            F(!0);
        }, []), j = i.useCallback(() => {
            F(!1);
        }, []), W = D.Z.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({ count: n.memberCount }), K = null != T ? T : (0, f.pY)(n.id, x), z = null == a && null == K ? { background: 'linear-gradient(90deg, '.concat(C, ', ').concat(w, ')') } : void 0, q = null != a ? a : null != K ? (0, r.jsx)('img', {
            alt: D.Z.Messages.CLAN_LOOK_BANNER,
            src: K,
            className: L.bannerImage
        }) : null, Q = i.useMemo(() => (0, y.HR)(n.traits, d), [
            n.traits,
            d
        ]);
    return i.useEffect(() => {
        let e = V.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && Z(e.offsetWidth < e.scrollWidth);
    }, []), (0, r.jsxs)('div', {
        className: o()(L.card, E, { [L.cardStaticHeight]: !l }),
        onMouseEnter: Y,
        onMouseLeave: j,
        children: [
            (0, r.jsxs)('div', {
                className: L.cardBrandingHeader,
                style: z,
                children: [
                    q,
                    (0, r.jsx)(U, {
                        hasPendingJoinRequest: S,
                        atMaxMemberCapacity: A,
                        isGuildMember: u
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: L.cardContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: L.cardContentTitleSection,
                        children: [
                            (0, r.jsxs)('div', {
                                className: L.cardNameAndTagWrapper,
                                children: [
                                    (0, r.jsx)(v.ZP, {
                                        mask: v.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: L.clanIconMask,
                                        children: (0, r.jsx)('div', {
                                            className: L.clanIconInner,
                                            children: (0, r.jsx)(p.b, {
                                                guildId: n.id,
                                                guildName: n.name,
                                                guildIcon: n.icon,
                                                iconSize: 64,
                                                animate: !g || B
                                            })
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: L.clanTagChipletWrapper,
                                        children: (0, r.jsx)(s.Tooltip, {
                                            text: D.Z.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
                                            position: 'top',
                                            shouldShow: !u && k,
                                            children: e => (0, r.jsxs)('div', {
                                                ...e,
                                                className: L.clanTagChiplet,
                                                children: [
                                                    (0, r.jsx)(I.A, {
                                                        width: 16,
                                                        height: 16,
                                                        badge: R.badgeKind,
                                                        primaryTintColor: R.primaryColor,
                                                        secondaryTintColor: R.secondaryColor
                                                    }),
                                                    (0, r.jsx)(s.Text, {
                                                        variant: 'text-xs/medium',
                                                        color: 'text-primary',
                                                        children: N
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)(s.Heading, {
                                variant: 'heading-md/medium',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: (0, r.jsx)(s.Tooltip, {
                                    text: n.name,
                                    color: s.Tooltip.Colors.PRIMARY,
                                    shouldShow: H,
                                    children: e => (0, r.jsx)('span', {
                                        ...e,
                                        ref: V,
                                        className: L.nameText,
                                        children: n.name
                                    })
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: L.clanInfoRow,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-xxs/normal',
                                        className: L.clanInfoItem,
                                        children: (0, r.jsx)('span', {
                                            role: 'img',
                                            'aria-label': D.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: L.clanInfoItem,
                                        children: null !== (t = (0, y.mv)(n.playstyle)) && void 0 !== t ? t : D.Z.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
                                    }),
                                    (0, r.jsx)(b, {
                                        wildcardDescriptors: n.wildcardDescriptors,
                                        primaryColor: n.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(M, {
                        description: n.description,
                        expanded: l
                    }),
                    (0, r.jsx)(P, {
                        traits: Q,
                        traitsToHighlight: d
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: L.cardFooter,
                children: [
                    (0, r.jsx)('div', {
                        className: L.cardFooterInfo,
                        children: (0, r.jsx)('div', {
                            className: L.cardFooterMembers,
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: W
                            })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: L.cardFooterGames,
                        children: (0, r.jsx)(O.Z, {
                            games: G,
                            prioritizedGameIds: _
                        })
                    })
                ]
            }),
            m && (0, r.jsx)('div', {
                className: L.cardBrandingFooter,
                style: { background: 'linear-gradient(90deg, '.concat(C, ', ').concat(w, ')') }
            })
        ]
    });
}
t.ZP = function (e) {
    let {
            style: t,
            prioritizedGameIds: a,
            ...o
        } = e, {
            clan: c,
            affinity: E,
            index: f,
            source: h
        } = o, p = (0, l.e7)([N.default], () => N.default.getCurrentUser()), m = (0, l.e7)([A.ZP], () => A.ZP.isMember(c.id, null == p ? void 0 : p.id), [
            c,
            p
        ]), I = (0, l.e7)([g.Z], () => {
            var e;
            return (null === (e = g.Z.getRequest(c.id)) || void 0 === e ? void 0 : e.applicationStatus) === T.wB.SUBMITTED;
        }), v = c.memberCount >= y.Du, O = i.useCallback(() => {
            let e = null != g.Z.getRequest(c.id);
            if ((0, d.EK)({
                    guildId: c.id,
                    isMember: m,
                    hasJoinRequest: e,
                    affinity: E,
                    index: f
                }), m) {
                (0, S.XU)(c.id);
                return;
            }
            if (e) {
                (0, S.uL)(C.Z5c.GUILD_MEMBER_VERIFICATION(c.id));
                return;
            }
            (0, _.q)(c.id, c, {
                source: h,
                location: C.Sbl.CLAN_DISCOVERY_CARD
            }, a);
        }, [
            c,
            m,
            E,
            f,
            h,
            a
        ]), R = i.useCallback(e => {
            (0, u.jW)(e, async () => {
                let {default: e} = await n.e('5577').then(n.bind(n, 955120));
                return t => (0, r.jsx)(e, {
                    ...t,
                    guildId: c.id
                });
            });
        }, [c.id]);
    return (0, r.jsx)(s.Clickable, {
        onClick: O,
        className: L.clickableCard,
        style: t,
        onContextMenu: R,
        children: (0, r.jsx)(w, {
            ...o,
            isMember: m,
            prioritizedGameIds: a,
            showBrandingFooter: !0,
            hasPendingJoinRequest: I,
            atMaxMemberCapacity: v
        })
    });
};
