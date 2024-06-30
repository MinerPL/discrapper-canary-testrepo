n.d(t, {
    c: function () {
        return D;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(442837), o = n(481060), c = n(131388), d = n(160404), u = n(351402), _ = n(153124), E = n(768581), m = n(817460), I = n(584825), T = n(290348), h = n(934826), N = n(768318), f = n(570533), p = n(971792), C = n(629262), g = n(761966), S = n(893729), A = n(838940), x = n(882101), O = n(11705), R = n(81273), M = n(293810), v = n(981631), L = n(689938), Z = n(359158);
let P = e => {
        let {
                benefits: t,
                header: n,
                guildId: s
            } = e, [l, r] = a.useState(!1), c = l ? t : t.slice(0, 5), d = t.length > 5, u = t.length - 5, E = L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format({ numTruncated: u }), I = (0, _.Dt)();
        return 0 === t.length ? null : (0, i.jsxs)('div', {
            className: Z.benefitsSection,
            children: [
                (0, i.jsx)(o.Heading, {
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    className: Z.sectionHeader,
                    id: I,
                    children: n
                }),
                (0, i.jsx)(o.Spacer, { size: 12 }),
                (0, i.jsx)('ul', {
                    className: Z.benefitsList,
                    'aria-labelledby': I,
                    children: c.map((e, t) => (0, i.jsx)('li', {
                        children: (0, i.jsx)(A.Z, {
                            guildId: s,
                            benefit: e
                        }, (0, m.ab)(e))
                    }, t))
                }),
                d && (0, i.jsx)(j, {
                    isViewAll: l,
                    onToggle: () => r(e => !e),
                    showMoreText: E
                })
            ]
        });
    }, b = e => {
        let {
                guildId: t,
                listingId: n
            } = e, a = (0, f.Z)(t), [s] = T.XZ(n, t), l = a.filter(e => s.has(e.id));
        return 0 === l.length ? null : (0, i.jsxs)('div', {
            className: Z.benefitsSection,
            children: [
                (0, i.jsx)(o.Heading, {
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    className: Z.sectionHeader,
                    children: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EMOJI_SECTION_TITLE.format({ count: l.length })
                }),
                (0, i.jsx)(o.Spacer, { size: 12 }),
                (0, i.jsx)('div', {
                    className: Z.emojiList,
                    children: l.map((e, t) => {
                        var n;
                        return (0, i.jsx)(o.Tooltip, {
                            text: e.name,
                            'aria-label': !1,
                            children: t => {
                                var n;
                                return (0, i.jsx)('img', {
                                    ...t,
                                    className: Z.emojiListEmoji,
                                    src: (n = e, E.ZP.getEmojiURL({
                                        id: n.id,
                                        animated: n.animated,
                                        size: 24
                                    })),
                                    width: 24,
                                    height: 24,
                                    alt: e.name
                                });
                            }
                        }, null !== (n = e.id) && void 0 !== n ? n : t);
                    })
                })
            ]
        });
    }, D = e => {
        let {
                listingId: t,
                guildId: n,
                className: a
            } = e, s = (0, p.Z)(n, t), [r] = T.UE(t), c = (0, C.Z)(r), [d] = T.R7(t), u = T.qs(t, n), [_] = T.XZ(t, n);
        return null == s && 0 === c.length && 0 === d.length && 0 === _.size ? null : (0, i.jsxs)('div', {
            className: l()(Z.subscriptionPerks, a),
            children: [
                null != s && (0, i.jsxs)(o.HeadingLevel, {
                    component: (0, i.jsx)(o.Heading, {
                        variant: 'text-xs/bold',
                        color: 'header-secondary',
                        className: Z.sectionHeader,
                        children: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_MEMBER_PREVIEW
                    }),
                    children: [
                        (0, i.jsx)(o.Spacer, { size: 8 }),
                        (0, i.jsx)(S.Z, {
                            role: u,
                            guildId: n,
                            className: Z.roleMessagePreview
                        })
                    ]
                }),
                (0, i.jsx)(P, {
                    header: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EXCLUSIVE_CHANNELS_SECTION_TITLE,
                    benefits: c,
                    guildId: n
                }),
                (0, i.jsx)(P, {
                    header: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
                    benefits: d,
                    guildId: n
                }),
                (0, i.jsx)(b, {
                    guildId: n,
                    listingId: t
                })
            ]
        });
    }, j = e => {
        let t, {
                onToggle: n,
                isViewAll: a,
                showMoreText: s
            } = e;
        return t = a ? (0, i.jsxs)(i.Fragment, {
            children: [
                L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_LESS_DESCRIPTION,
                (0, i.jsx)(o.ChevronSmallUpIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: Z.toggleTruncationButtonIcon
                })
            ]
        }) : (0, i.jsxs)(i.Fragment, {
            children: [
                s,
                (0, i.jsx)(o.ChevronSmallDownIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: Z.toggleTruncationButtonIcon
                })
            ]
        }), (0, i.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.NONE,
            className: Z.toggleTruncationButton,
            innerClassName: Z.toggleTruncationButtonInner,
            onClick: n,
            children: t
        });
    };
t.Z = e => {
    var t;
    let {
            listingId: n,
            guildId: s,
            groupListingId: _,
            analyticsLocation: E
        } = e, f = (0, I.jO)(n), {
            openModal: p,
            canOpenModal: C,
            cannotOpenReason: S,
            isCheckingTrialEligibility: A
        } = (0, R.Z)(f, s, _, E), P = (0, r.e7)([u.Z], () => u.Z.isSyncing), {
            activeSubscription: b,
            activeSubscriptionListing: U
        } = (0, h.Z)(_), y = (null == U ? void 0 : U.id) === n, B = (null == b ? void 0 : b.status) === v.O0b.CANCELED, [k, G] = a.useState(!1), [F, w] = a.useState(!1), V = a.useCallback(e => {
            let t = !1;
            null != e && (t = e.scrollHeight - e.clientHeight > 1), w(t);
        }, []), [H] = T._T(n), [Y] = T.PK(n), [W] = T.TT(n), [z] = T.F2(n), K = (0, N.Z)(s, n), Q = null != W && null == b && K, q = (0, c.Z)(M.iP), [X, J] = a.useState(!1), $ = X || !q, ee = (0, r.e7)([d.Z], () => d.Z.isViewingServerShop(s)), et = (null == f ? void 0 : f.published) === !0, en = (null == f ? void 0 : f.soft_deleted) === !0, ei = L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
    return (et || ee) && !en ? (0, i.jsxs)('article', {
        className: Z.container,
        'aria-label': H,
        children: [
            Q && (0, i.jsxs)('div', {
                className: l()(Z.tierTrialIndicator, Z.tierTopIndicator),
                children: [
                    L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
                        trialPeriodDuration: (0, m.iG)({
                            interval: W.interval,
                            interval_count: W.interval_count
                        })
                    }),
                    (0, i.jsx)(o.Tooltip, {
                        clickableOnMobile: !0,
                        text: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format({ activeTrialUserLimit: null != z ? z : 0 }),
                        children: e => (0, i.jsx)(o.CircleInformationIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: Z.tierTrialIndicatorIcon,
                            ...e
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: Q ? void 0 : Z.cardContainerWithoutTopIndicator,
                children: [
                    (0, i.jsxs)('div', {
                        className: Z.tierInfoContainer,
                        children: [
                            q ? (0, i.jsx)(O.e, {
                                listingId: n,
                                isListingPublished: et,
                                expanded: $,
                                onToggleExpanded: () => J(e => !e)
                            }) : (0, i.jsx)(x.xv, {
                                listingId: n,
                                isListingPublished: et
                            }),
                            $ && (0, i.jsxs)(i.Fragment, {
                                children: [
                                    q && (0, i.jsx)('div', { className: Z.divider }),
                                    y ? (0, i.jsx)(o.Button, {
                                        fullWidth: !0,
                                        look: o.Button.Looks.OUTLINED,
                                        color: o.Button.Colors.PRIMARY,
                                        disabled: !0,
                                        children: B ? L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL
                                    }) : (0, i.jsx)(o.Tooltip, {
                                        text: C ? null : S,
                                        'aria-label': null !== (t = C && S) && void 0 !== t && t,
                                        children: e => (0, i.jsx)(g.Z, {
                                            ...e,
                                            fullWidth: !0,
                                            disabled: !C || P,
                                            submitting: A,
                                            onClick: p,
                                            onlyShineOnHover: !0,
                                            children: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                                        })
                                    }),
                                    (0, i.jsx)(o.Spacer, { size: 16 }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        className: l()((!F || !k) && Z.tierDescriptionTruncate),
                                        children: (0, i.jsx)('div', {
                                            ref: V,
                                            children: Y
                                        })
                                    }),
                                    F && (0, i.jsx)(j, {
                                        isViewAll: k,
                                        onToggle: () => G(e => !e),
                                        showMoreText: ei
                                    })
                                ]
                            })
                        ]
                    }),
                    $ && (0, i.jsx)(o.HeadingLevel, {
                        children: (0, i.jsx)(D, {
                            listingId: n,
                            guildId: s
                        })
                    })
                ]
            })
        ]
    }) : null;
};
