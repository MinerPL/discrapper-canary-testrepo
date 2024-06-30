n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(442837), l = n(481060), u = n(355467), c = n(37234), d = n(100527), _ = n(906732), E = n(28546), f = n(174609), h = n(357355), p = n(98278), m = n(104494), I = n(639119), T = n(165583), g = n(197115), S = n(302945), A = n(631771), N = n(703656), v = n(210887), O = n(626135), R = n(176354), C = n(74538), y = n(543241), D = n(149203), L = n(981631), b = n(185923), M = n(474936), P = n(689938), U = n(538100);
t.Z = e => {
    var t, a;
    let {
            onLearnMore: w,
            onClose: x,
            channel: G,
            emojiDescriptor: k,
            pickerIntention: B,
            analyticsLocation: F,
            containerContextClassName: V
        } = e, H = (0, s.e7)([v.Z], () => v.Z.theme) === L.BRd.LIGHT ? 'light' : 'dark', [Z, Y] = i.useState(!1), j = () => {
            (0, y.A3)(G), (0, p.z)(), w();
        }, W = n(577391)('./img_premium_emoji_'.concat(H, '.svg')), K = 'https://cdn.discordapp.com/assets/premium/roadblocks/emoji_'.concat(H, '.png'), z = (0, I.N)(), q = (0, m.Ng)(), Q = null != z || null != q, X = (0, E.Iu)(e => e.searchQuery), {analyticsLocations: $} = (0, _.ZP)(d.Z.EMOJI_PICKER), {
            enabled: J,
            addSocialProof: ee
        } = A.Gi.useExperiment({ location: 'Premium Emoji Roadblock' }, {
            autoTrackExposure: !Q,
            disable: Q
        });
    i.useEffect(() => {
        let e;
        e = B === b.Hz.REACTION ? M.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : null == k ? M.cd.EMOJI_PICKER_FLOATING_UPSELL : k.subCategory === D.t0.TOP_GUILD_EMOJI ? M.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : k.subCategory === D.t0.NEWLY_ADDED_EMOJI ? M.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : M.cd.EMOJI_PICKER_EMOJI_CLICKED;
        let t = null != k ? k.emoji : void 0, n = null != t && t.animated, r = null != t && !R.ZP.isInternalEmojiForGuildId(t, null == G ? void 0 : G.getGuildId()), i = null != t ? L.qAy.EMOJI : L.qAy.EMOJI_PICKER_FLOATING_UPSELL;
        O.default.track(L.rMx.PREMIUM_UPSELL_VIEWED, {
            type: e,
            is_animated: n,
            is_external: r,
            has_search_query: null != X && '' !== X,
            location: {
                ...F,
                object: i
            },
            location_stack: $,
            sku_id: (0, C.Wz)(C.ZP.getSkuIdForPremiumType(M.p9.TIER_2))
        });
    }, [
        k,
        G,
        F,
        $,
        B,
        X
    ]);
    let et = () => {
            (0, f.Z)(), x(), w(), O.default.track(L.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: L.jXE.EMOJI_UPSELL_POPOUT,
                location_object: L.qAy.NAVIGATION_LINK
            }), (0, c.xf)(), (0, N.uL)(L.Z5c.APPLICATION_STORE);
        }, en = (0, s.e7)([h.Z], () => h.Z.affinities), er = (0, s.e7)([h.Z], () => h.Z.hasFetched);
    i.useEffect(() => {
        !er && u.MH();
    }, [er]);
    let ei = en.length > 1 && ee, ea = () => (0, r.jsx)(g.Z, {
            showGradient: !0,
            premiumModalAnalyticsLocation: F,
            subscriptionTier: M.Si.TIER_2,
            size: l.Button.Sizes.SMALL,
            color: l.Button.Colors.CUSTOM,
            onClick: () => {
                x();
            },
            buttonText: P.Z.Messages.PREMIUM_UPSELL_GET_NITRO
        });
    return J ? (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Backdrop, {
                backdropStyle: l.BackdropStyles.DARK,
                onClose: x,
                'aria-label': P.Z.Messages.CLOSE,
                isVisible: !0
            }),
            (0, r.jsxs)('div', {
                className: o()(U.container, V),
                children: [
                    (0, r.jsx)(l.ModalCloseButton, {
                        onClick: x,
                        className: U.upsellClose
                    }),
                    (0, r.jsxs)('div', {
                        className: U.contentContainer,
                        children: [
                            (0, r.jsx)('img', {
                                className: U.upsellArt,
                                alt: 'Custom Emoji Nitro Perk',
                                src: K
                            }),
                            (0, r.jsx)(l.Heading, {
                                className: o()(U.upsellTitle, { [U.upsellTitleNoSocialProof]: !ei }),
                                variant: 'heading-xl/bold',
                                children: P.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE_V2
                            }),
                            ei ? (0, r.jsx)(S.Z, { affinities: en }) : void 0,
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                className: U.upsellBody,
                                children: P.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_DESCRIPTION_V2
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: U.upsellCTAContainer,
                        children: [
                            (0, r.jsx)(l.Button, {
                                className: U.upsellSecondaryCTA,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.CUSTOM,
                                look: l.Button.Looks.LINK,
                                onClick: et,
                                children: P.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA
                            }),
                            ea()
                        ]
                    })
                ]
            })
        ]
    }) : (0, r.jsxs)('div', {
        className: o()(U.premiumPromo, { [U.unifyTrialUpsell]: Q }),
        children: [
            (0, r.jsx)(l.Clickable, {
                className: U.premiumPromoClose,
                onClick: x,
                children: P.Z.Messages.CLOSE
            }),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    Q ? (0, r.jsx)(T.ZP, {
                        type: M.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                        subscriptionTier: null !== (a = null == z ? void 0 : null === (t = z.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== a ? a : M.Si.TIER_2,
                        onClose: x,
                        trialOffer: z,
                        discountOffer: q,
                        children: P.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({ onClick: j })
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                className: U.premiumPromoImage,
                                src: W
                            }),
                            (0, r.jsx)('div', {
                                className: U.premiumPromoTitle,
                                children: P.Z.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                            }),
                            (0, r.jsx)('div', {
                                className: U.premiumPromoDescription,
                                children: P.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({ onClick: j })
                            })
                        ]
                    }),
                    !Q && (0, r.jsx)(g.Z, {
                        subscriptionTier: M.Si.TIER_2,
                        submitting: Z,
                        premiumModalAnalyticsLocation: {
                            section: L.jXE.EMOJI_PICKER_POPOUT,
                            object: L.qAy.BUTTON_CTA
                        },
                        size: l.Button.Sizes.SMALL,
                        color: l.Button.Colors.GREEN,
                        onClick: () => {
                            Y(!0);
                        },
                        onSubscribeModalClose: e => {
                            Y(!1), e && x();
                        },
                        buttonText: Q ? P.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : P.Z.Messages.PREMIUM_REQUIRED_GET_NITRO
                    })
                ]
            })
        ]
    });
};
