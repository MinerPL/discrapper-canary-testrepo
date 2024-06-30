n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(442837), l = n(481060), u = n(355467), c = n(100527), d = n(906732), _ = n(678558), E = n(626135), f = n(74538), h = n(357355), p = n(104494), m = n(639119), I = n(165583), T = n(197115), g = n(302945), S = n(631771), A = n(474936), N = n(981631), v = n(689938), O = n(935777), R = n(769860);
function C(e) {
    var t, n, a;
    let {
            title: C,
            type: y,
            guildBoostProps: D,
            analyticsSource: L,
            analyticsLocation: b,
            body: M,
            context: P,
            glowUp: U,
            modalClassName: w,
            artContainerClassName: x,
            headerClassName: G,
            bodyClassName: k,
            transitionState: B,
            onClose: F,
            onSubscribeClick: V,
            onSecondaryClick: H,
            secondaryCTA: Z,
            subscribeButtonText: Y,
            showNewBadge: j = !1,
            enableArtBoxShadow: W = !0,
            subscriptionTier: K = A.Si.TIER_2,
            isLoading: z = !1,
            hideBackButton: q,
            backButtonText: Q,
            showEnhancedUpsell: X,
            children: $,
            ...J
        } = e, ee = null != D, et = (0, m.N)(), en = (0, p.Ng)(), er = ((null == et ? void 0 : null === (t = et.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === K || (0, p.Wp)(en, K)) && !ee, {analyticsLocations: ei} = (0, d.ZP)(c.Z.PREMIUM_UPSELL_MODAL);
    i.useEffect(() => {
        !z && (ee ? E.default.track(N.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
            type: ''.concat(y, ' - Tier ').concat(D.boostedGuildTier),
            guild_id: D.guild.id,
            channel_id: D.channelId,
            location: b,
            location_stack: ei
        }) : E.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
            type: y,
            source: L,
            location: b,
            location_stack: ei,
            sku_id: (0, f.Wz)(K)
        }));
    }, [
        ee,
        K,
        z
    ]);
    let ea = (0, s.e7)([h.Z], () => h.Z.affinities), eo = ea.length > 1 && (0, S.YN)(y), es = (0, s.e7)([h.Z], () => h.Z.hasFetched);
    i.useEffect(() => {
        !es && u.MH();
    }, [es]);
    let el = W ? o()(O.artContainer, O.artContainerBoxShadow, x) : o()(O.artContainer, x), eu = null;
    return eu = 'artURL' in J ? (0, r.jsx)('img', {
        className: O.art,
        alt: '',
        src: J.artURL
    }) : J.artElement, (0, r.jsxs)(l.ModalRoot, {
        className: o()(O.root, w),
        'aria-label': C,
        transitionState: B,
        children: [
            (0, r.jsxs)('div', {
                className: el,
                children: [
                    eu,
                    j ? (0, r.jsx)('img', {
                        className: O.sparkleBadge,
                        alt: '',
                        src: R
                    }) : null
                ]
            }),
            X ? (0, r.jsx)(l.ModalCloseButton, {
                onClick: F,
                className: O.closeButton
            }) : null,
            (0, r.jsx)(l.ModalContent, {
                scrollbarType: 'none',
                className: X ? O.enhancedContent : O.content,
                children: z ? (0, r.jsx)(l.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                    children: er ? (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(I.ZP, {
                            onClose: F,
                            type: y,
                            subscriptionTier: null !== (a = null == et ? void 0 : null === (n = et.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : A.Si.TIER_2,
                            headingText: C,
                            context: P,
                            analyticsLocationObject: b,
                            discountOffer: en,
                            trialOffer: et,
                            children: U
                        })
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(l.Heading, {
                                className: o()(O.header, { [O.enhancedHeader]: X }, G),
                                variant: 'heading-xl/bold',
                                children: C
                            }),
                            eo ? (0, r.jsx)(g.Z, { affinities: ea }) : void 0,
                            $,
                            (0, r.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                className: o()(k, O.subHeader),
                                children: M
                            })
                        ]
                    })
                })
            }),
            (0, r.jsxs)(l.ModalFooter, {
                className: o()(O.footer, { [O.enhancedFooter]: X }),
                children: [
                    (0, r.jsxs)('div', {
                        className: o()(O.primaryActions, { [O.enhancedPrimaryActions]: X }),
                        children: [
                            null != Z ? (0, r.jsx)(l.Button, {
                                className: o()(O.secondaryAction, { [O.enhancedSecondaryAction]: X }),
                                onClick: H,
                                size: l.Button.Sizes.SMALL,
                                color: X ? l.Button.Colors.CUSTOM : l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: Z
                            }) : null,
                            (() => {
                                let e;
                                if (ee)
                                    return (0, r.jsx)(_.Z, {
                                        analyticsLocation: b,
                                        guild: D.guild,
                                        onClose: F
                                    });
                                let t = X ? v.Z.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
                                if (er) {
                                    if (null != et) {
                                        var n, i;
                                        t = (0, f.Rt)({
                                            intervalType: null == et ? void 0 : null === (n = et.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                            intervalCount: null == et ? void 0 : null === (i = et.subscription_trial) || void 0 === i ? void 0 : i.interval_count
                                        }), e = null == et ? void 0 : et.trial_id;
                                    } else
                                        null != en && (t = v.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: en.discount.amount }));
                                }
                                return (0, r.jsx)(T.Z, {
                                    showGradient: X,
                                    premiumModalAnalyticsLocation: b,
                                    subscriptionTier: K,
                                    trialId: e,
                                    size: l.Button.Sizes.SMALL,
                                    color: X ? l.Button.Colors.CUSTOM : l.Button.Colors.GREEN,
                                    onClick: () => {
                                        null == V || V(), F();
                                    },
                                    buttonText: null != Y ? Y : t
                                });
                            })()
                        ]
                    }),
                    !q && !X && (0, r.jsx)(l.Button, {
                        onClick: F,
                        size: l.Button.Sizes.SMALL,
                        color: l.Button.Colors.PRIMARY,
                        look: l.Button.Looks.LINK,
                        children: null != Q ? Q : v.Z.Messages.BACK
                    })
                ]
            })
        ]
    });
}
