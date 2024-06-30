n(47120), n(653041);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(442837), o = n(481060), c = n(2052), d = n(906732), u = n(678558), _ = n(852679), E = n(889161), I = n(626135), T = n(267642), m = n(268350), N = n(926491), S = n(386937), h = n(316350), g = n(863562), C = n(981631), x = n(689938), p = n(961401);
let R = e => e < (0, T.A3)(C.Eu4.NONE) ? C.Eu4.NONE : e < (0, T.A3)(C.Eu4.TIER_1) ? C.Eu4.TIER_1 : e < (0, T.A3)(C.Eu4.TIER_2) ? C.Eu4.TIER_2 : e < (0, T.A3)(C.Eu4.TIER_3) ? C.Eu4.TIER_3 : C.Eu4.NONE, f = e => {
        let {
                children: t,
                currentGuildTier: n,
                guildStickers: a,
                tier: i
            } = e, r = n < i, l = (0, T.ig)(i);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(o.Heading, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: t
                }),
                !r && (0, s.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    children: x.Z.Messages.GUILD_STICKER_SETTINGS_REMAINING_SLOTS_AVAILABLE.format({
                        numTotal: l,
                        numAvailable: (0, T.Qi)(a, i)
                    })
                })
            ]
        });
    }, L = e => {
        let {guildId: t} = e;
        (0, o.openModalLazy)(async () => {
            let {default: e} = await Promise.all([
                n.e('93626'),
                n.e('41094')
            ]).then(n.bind(n, 136735));
            return n => (0, s.jsx)(e, {
                guildId: t,
                ...n
            });
        });
    }, O = () => (0, s.jsx)('div', {
        className: p.placeholderCard,
        children: (0, s.jsx)('img', {
            className: p.placeholderImg,
            alt: x.Z.Messages.GUILD_STICKER_SETTINGS_PLACEHOLDER_ALT_TEXT,
            src: n(872732)
        })
    }), A = e => {
        let {guild: t} = e, {location: n} = (0, c.O)(), {canCreateExpressions: a} = (0, E.XJ)(t);
        return (0, s.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            color: o.Button.Colors.BRAND,
            onClick: () => {
                I.default.track(C.rMx.OPEN_MODAL, {
                    type: C.jXE.CREATE_STICKER_MODAL,
                    location: n
                }), L({ guildId: t.id });
            },
            disabled: !a,
            children: x.Z.Messages.GUILD_STICKER_GRID_UPLOAD_LABEL
        });
    };
t.Z = e => {
    let {guild: t} = e, [i, c] = a.useState(!0), I = (0, l.e7)([N.Z], () => {
            var e;
            return null !== (e = N.Z.getStickersByGuildId(t.id)) && void 0 !== e ? e : [];
        }, [t]), {analyticsLocations: L} = (0, d.ZP)(), M = t.hasFeature(C.oNc.MORE_STICKERS) ? C.Eu4.TIER_3 : t.premiumTier, v = t.hasFeature(C.oNc.MORE_STICKERS) ? (0, T.vn)(t.id)[C.Eu4.TIER_3] : t.premiumSubscriberCount;
    if (a.useEffect(() => {
            let e = !1;
            return (async () => {
                c(!0), await (0, m.pk)(t.id), !e && c(!1);
            })(), () => {
                e = !0;
            };
        }, [t]), a.useEffect(() => {
            window.dispatchEvent(new Event('resize'));
        }, [I]), i)
        return (0, s.jsx)(o.Spinner, {});
    let D = (e, n) => {
            let s = null;
            n === C.Eu4.TIER_1 ? s = C.Qqv.TIER_1 : n === C.Eu4.TIER_2 ? s = C.Qqv.TIER_2 : n === C.Eu4.TIER_3 && (s = C.Qqv.TIER_3), (0, _.Z)({
                analyticsLocations: L,
                analyticsLocation: {
                    page: C.ZY5.GUILD_SETTINGS,
                    section: C.jXE.GUILD_SETTINGS_STICKERS,
                    object: C.qAy.BOOST_LEVEL_UPSELL_BUTTON,
                    objectType: s
                },
                guildId: t.id,
                totalNumberOfSlotsToAssign: e
            });
        }, j = [
            {
                tier: C.Eu4.NONE,
                title: (0, s.jsx)(f, {
                    guildStickers: I,
                    currentGuildTier: M,
                    tier: C.Eu4.NONE,
                    children: x.Z.Messages.GUILD_SETTINGS_STICKERS_FREE_SLOTS_HEADER
                })
            },
            {
                tier: C.Eu4.TIER_1,
                title: (0, s.jsx)(f, {
                    guildStickers: I,
                    currentGuildTier: M,
                    tier: C.Eu4.TIER_1,
                    children: x.Z.Messages.PREMIUM_GUILD_TIER_1
                })
            },
            {
                tier: C.Eu4.TIER_2,
                title: (0, s.jsx)(f, {
                    guildStickers: I,
                    currentGuildTier: M,
                    tier: C.Eu4.TIER_2,
                    children: x.Z.Messages.PREMIUM_GUILD_TIER_2
                })
            },
            {
                tier: C.Eu4.TIER_3,
                title: (0, s.jsx)(f, {
                    guildStickers: I,
                    currentGuildTier: M,
                    tier: C.Eu4.TIER_3,
                    children: x.Z.Messages.PREMIUM_GUILD_TIER_3
                })
            }
        ];
    return (0, s.jsx)(S.Z, {
        tiers: j,
        renderTier: e => {
            let a, {
                    isAnimatedTo: i,
                    onSetRef: l,
                    tier: c,
                    tiers: d,
                    tierIndex: _
                } = e, {
                    canCreateExpressions: m,
                    canManageGuildExpression: N
                } = (0, E.Gw)(t), S = d[_ - 1], f = null != S ? (0, T.A3)(S.tier) : 0, L = (0, T.A3)(c.tier), j = (0, T.ig)(c.tier), Z = I.slice(f, L), b = Z.length > 0, U = M < c.tier, G = R(I.length), P = m && !U && G === c.tier && L !== Z.length, B = P || Z.length > 0, y = L - f, F = n(872732), k = j - Z.length, w = P ? Math.min(5 - (Z.length + 0) % 5, k) : 0, H = [];
            for (let e = 0; e < w; e++)
                H.push((0, s.jsx)(O, {}, 'placeholder-'.concat(e)));
            let V = G === _ + 1 && G > M, Y = P || V || _ > M;
            return V ? a = (0, s.jsx)(u.Z, {
                guild: t,
                size: o.Button.Sizes.SMALL,
                color: o.Button.Colors.GREEN,
                buttonText: x.Z.Messages.GUILD_STICKER_SETTINGS_UNLOCK_SLOTS,
                targetBoostedGuildTier: M + 1,
                analyticsLocation: {
                    page: C.ZY5.GUILD_SETTINGS,
                    section: C.jXE.GUILD_SETTINGS_STICKERS,
                    object: C.qAy.BOOST_UPSELL_NEXT_LEVEL_HEADER,
                    objectType: (0, T.ge)(c.tier)
                }
            }) : P && (a = (0, s.jsx)(A, { guild: t })), (0, s.jsxs)(h.Z, {
                subscriptionCount: v,
                tier: c,
                onSetRef: l,
                isAnimatedTo: i,
                hasBottomMargin: _ !== d.length - 1,
                withCardBody: !B,
                headerButton: a,
                showHeaderLockStatus: Y,
                guildId: t.id,
                children: [
                    B && (0, s.jsxs)('div', {
                        className: p.grid,
                        children: [
                            Z.map(e => (0, s.jsx)(g.Z, {
                                isDisabled: U,
                                sticker: e,
                                canManageSticker: N(e)
                            }, e.id)),
                            H
                        ]
                    }),
                    !U && !P && 0 === Z.length && (0, s.jsx)('div', {
                        className: r()(p.emptyTierWrapper, p.unusedTierWrapper),
                        children: (0, s.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: x.Z.Messages.GUILD_STICKER_UNUSED_TIER
                        })
                    }),
                    U && !b && (0, s.jsxs)('div', {
                        className: p.emptyTierWrapper,
                        children: [
                            (0, s.jsx)('img', {
                                alt: x.Z.Messages.GUILD_STICKER_SETTINGS_ICON_ALT_TEXT,
                                className: p.emptyTierImage,
                                src: F
                            }),
                            (0, s.jsx)(o.Text, {
                                className: p.unlockTierCtaHeading,
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                children: c.tier === C.Eu4.TIER_1 ? x.Z.Messages.GUILD_STICKER_SETTINGS_ADDITIONAL_SLOTS_WITHOUT_TOTAL.format({ numAdditional: y }) : x.Z.Messages.GUILD_STICKER_SETTINGS_ADDITIONAL_SLOTS.format({
                                    numAdditional: y,
                                    numTotal: L
                                })
                            }),
                            (0, s.jsx)(o.Button, {
                                color: o.Button.Colors.GREEN,
                                onClick: () => D((0, T.vn)(t.id)[c.tier] - t.premiumSubscriberCount, c.tier),
                                children: x.Z.Messages.GUILD_STICKER_SETTINGS_BUY_LEVEL
                            })
                        ]
                    })
                ]
            }, c.tier);
        }
    });
};
