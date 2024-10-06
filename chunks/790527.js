n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(355467),
    c = n(100527),
    d = n(906732),
    _ = n(678558),
    E = n(626135),
    f = n(74538),
    h = n(357355),
    p = n(104494),
    I = n(639119),
    m = n(165583),
    T = n(197115),
    S = n(302945),
    g = n(631771),
    A = n(474936),
    N = n(981631),
    O = n(689938),
    R = n(569548),
    v = n(769860);
function C(e) {
    var t, n, a;
    let { title: C, type: L, guildBoostProps: y, analyticsSource: D, analyticsLocation: b, body: M, context: P, glowUp: U, modalClassName: w, modalContentClassName: x, artContainerClassName: G, headerClassName: k, bodyClassName: B, transitionState: F, onClose: V, onSubscribeClick: H, onSubscribeFinish: Z, onSecondaryClick: Y, secondaryCTA: j, subscribeButtonText: W, showNewBadge: K = !1, enableArtBoxShadow: z = !0, subscriptionTier: q = A.Si.TIER_2, isLoading: Q = !1, hideBackButton: X, backButtonText: $, showEnhancedUpsell: J, useSubscribeButtonGradient: ee, subscribeButtonClassname: et, hidePremiumOfferUpsell: en, children: er, LeadingComponent: ei, ...ea } = e,
        es = null != y,
        eo = (0, I.N)(),
        el = (0, p.Ng)(),
        eu = !en && ((null == eo ? void 0 : null === (t = eo.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === q || (0, p.Wp)(el, q)) && !es,
        { analyticsLocations: ec } = (0, d.ZP)(c.Z.PREMIUM_UPSELL_MODAL);
    i.useEffect(() => {
        !Q &&
            (es
                ? E.default.track(N.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: ''.concat(L, ' - Tier ').concat(y.boostedGuildTier),
                      guild_id: y.guild.id,
                      channel_id: y.channelId,
                      location: b,
                      location_stack: ec
                  })
                : E.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: L,
                      source: D,
                      location: b,
                      location_stack: ec,
                      sku_id: (0, f.Wz)(q)
                  }));
    }, [es, q, Q]);
    let ed = (0, o.e7)([h.Z], () => h.Z.affinities),
        e_ = ed.length > 1 && (0, g.YN)(L),
        eE = (0, o.e7)([h.Z], () => h.Z.hasFetched);
    i.useEffect(() => {
        !eE && u.MH();
    }, [eE]);
    let ef = z ? s()(R.artContainer, R.artContainerBoxShadow, G) : s()(R.artContainer, G),
        eh = null;
    return (
        null != ea.artURL
            ? (eh = (0, r.jsx)('img', {
                  className: R.art,
                  alt: '',
                  src: ea.artURL
              }))
            : null != ea.artElement && (eh = ea.artElement),
        (0, r.jsxs)(l.ModalRoot, {
            className: s()(R.root, !eu && w),
            'aria-label': C,
            transitionState: F,
            children: [
                null != eh &&
                    (0, r.jsxs)('div', {
                        className: ef,
                        children: [
                            eh,
                            K
                                ? (0, r.jsx)('img', {
                                      className: R.sparkleBadge,
                                      alt: '',
                                      src: v
                                  })
                                : null
                        ]
                    }),
                (0, r.jsx)(l.ModalContent, {
                    scrollbarType: 'none',
                    className: s()(J ? R.enhancedContent : R.content, !eu && x),
                    children: Q
                        ? (0, r.jsx)(l.Spinner, {})
                        : (0, r.jsx)(r.Fragment, {
                              children: eu
                                  ? (0, r.jsx)(r.Fragment, {
                                        children: (0, r.jsx)(m.ZP, {
                                            onClose: V,
                                            type: L,
                                            subscriptionTier: null !== (a = null == eo ? void 0 : null === (n = eo.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : A.Si.TIER_2,
                                            headingText: C,
                                            context: P,
                                            analyticsLocationObject: b,
                                            discountOffer: el,
                                            trialOffer: eo,
                                            children: U
                                        })
                                    })
                                  : (0, r.jsxs)('div', {
                                        className: R.contentContainer,
                                        children: [
                                            ei,
                                            (0, r.jsxs)('div', {
                                                className: R.bodyContent,
                                                children: [
                                                    (0, r.jsx)(l.Heading, {
                                                        className: s()(R.header, { [R.enhancedHeader]: J }, k),
                                                        variant: 'heading-xl/bold',
                                                        children: C
                                                    }),
                                                    e_ ? (0, r.jsx)(S.Z, { affinities: ed }) : void 0,
                                                    er,
                                                    (0, r.jsx)(l.Text, {
                                                        variant: 'text-md/normal',
                                                        className: s()(B, R.subHeader),
                                                        children: M
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                          })
                }),
                (0, r.jsxs)(l.ModalFooter, {
                    className: s()(R.footer, { [R.enhancedFooter]: J }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: s()(R.primaryActions, { [R.enhancedPrimaryActions]: J }),
                            children: [
                                null != j
                                    ? (0, r.jsx)(l.Button, {
                                          className: s()(R.secondaryAction, { [R.enhancedSecondaryAction]: J }),
                                          onClick: Y,
                                          size: l.Button.Sizes.SMALL,
                                          color: J ? l.Button.Colors.CUSTOM : l.Button.Colors.PRIMARY,
                                          look: l.Button.Looks.LINK,
                                          children: j
                                      })
                                    : null,
                                (() => {
                                    if (es)
                                        return (0, r.jsx)(_.Z, {
                                            analyticsLocation: b,
                                            guild: y.guild,
                                            onClose: V
                                        });
                                    let e = J ? O.Z.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
                                    if (eu) {
                                        if (null != eo) {
                                            var t, n;
                                            e = (0, f.Rt)({
                                                intervalType: null == eo ? void 0 : null === (t = eo.subscription_trial) || void 0 === t ? void 0 : t.interval,
                                                intervalCount: null == eo ? void 0 : null === (n = eo.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                                            });
                                        } else null != el && (e = O.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: el.discount.amount }));
                                    }
                                    return (0, r.jsx)(T.Z, {
                                        className: et,
                                        showGradient: J || ee,
                                        premiumModalAnalyticsLocation: b,
                                        subscriptionTier: q,
                                        size: l.Button.Sizes.SMALL,
                                        color: J || ee ? l.Button.Colors.CUSTOM : l.Button.Colors.GREEN,
                                        onClick: () => {
                                            null == H || H(), V();
                                        },
                                        onSubscribeModalClose: Z,
                                        buttonText: null != W ? W : e
                                    });
                                })()
                            ]
                        }),
                        !X &&
                            !J &&
                            (0, r.jsx)(l.Button, {
                                onClick: V,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: null != $ ? $ : O.Z.Messages.BACK
                            })
                    ]
                }),
                J
                    ? (0, r.jsx)(l.ModalCloseButton, {
                          onClick: V,
                          className: R.closeButton
                      })
                    : null
            ]
        })
    );
}
