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
    R = n(876298),
    v = n(769860);
function C(e) {
    var t, n, a;
    let { title: C, type: y, guildBoostProps: L, analyticsSource: D, analyticsLocation: b, body: M, context: P, glowUp: U, modalClassName: w, modalContentClassName: x, artContainerClassName: G, headerClassName: k, bodyClassName: B, transitionState: F, onClose: V, onSubscribeClick: H, onSecondaryClick: Z, secondaryCTA: Y, subscribeButtonText: j, showNewBadge: W = !1, enableArtBoxShadow: K = !0, subscriptionTier: z = A.Si.TIER_2, isLoading: q = !1, hideBackButton: Q, backButtonText: X, showEnhancedUpsell: $, useSubscribeButtonGradient: J, subscribeButtonClassname: ee, hidePremiumOfferUpsell: et, children: en, LeadingComponent: er, ...ei } = e,
        ea = null != L,
        es = (0, I.N)(),
        eo = (0, p.Ng)(),
        el = !et && ((null == es ? void 0 : null === (t = es.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === z || (0, p.Wp)(eo, z)) && !ea,
        { analyticsLocations: eu } = (0, d.ZP)(c.Z.PREMIUM_UPSELL_MODAL);
    i.useEffect(() => {
        !q &&
            (ea
                ? E.default.track(N.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: ''.concat(y, ' - Tier ').concat(L.boostedGuildTier),
                      guild_id: L.guild.id,
                      channel_id: L.channelId,
                      location: b,
                      location_stack: eu
                  })
                : E.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: y,
                      source: D,
                      location: b,
                      location_stack: eu,
                      sku_id: (0, f.Wz)(z)
                  }));
    }, [ea, z, q]);
    let ec = (0, o.e7)([h.Z], () => h.Z.affinities),
        ed = ec.length > 1 && (0, g.YN)(y),
        e_ = (0, o.e7)([h.Z], () => h.Z.hasFetched);
    i.useEffect(() => {
        !e_ && u.MH();
    }, [e_]);
    let eE = K ? s()(R.artContainer, R.artContainerBoxShadow, G) : s()(R.artContainer, G),
        ef = null;
    return (
        null != ei.artURL
            ? (ef = (0, r.jsx)('img', {
                  className: R.art,
                  alt: '',
                  src: ei.artURL
              }))
            : null != ei.artElement && (ef = ei.artElement),
        (0, r.jsxs)(l.ModalRoot, {
            className: s()(R.root, w),
            'aria-label': C,
            transitionState: F,
            children: [
                null != ef &&
                    (0, r.jsxs)('div', {
                        className: eE,
                        children: [
                            ef,
                            W
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
                    className: s()($ ? R.enhancedContent : R.content, x),
                    children: q
                        ? (0, r.jsx)(l.Spinner, {})
                        : (0, r.jsx)(r.Fragment, {
                              children: el
                                  ? (0, r.jsx)(r.Fragment, {
                                        children: (0, r.jsx)(m.ZP, {
                                            onClose: V,
                                            type: y,
                                            subscriptionTier: null !== (a = null == es ? void 0 : null === (n = es.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : A.Si.TIER_2,
                                            headingText: C,
                                            context: P,
                                            analyticsLocationObject: b,
                                            discountOffer: eo,
                                            trialOffer: es,
                                            children: U
                                        })
                                    })
                                  : (0, r.jsxs)('div', {
                                        className: R.contentContainer,
                                        children: [
                                            er,
                                            (0, r.jsxs)('div', {
                                                className: R.bodyContent,
                                                children: [
                                                    (0, r.jsx)(l.Heading, {
                                                        className: s()(R.header, { [R.enhancedHeader]: $ }, k),
                                                        variant: 'heading-xl/bold',
                                                        children: C
                                                    }),
                                                    ed ? (0, r.jsx)(S.Z, { affinities: ec }) : void 0,
                                                    en,
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
                    className: s()(R.footer, { [R.enhancedFooter]: $ }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: s()(R.primaryActions, { [R.enhancedPrimaryActions]: $ }),
                            children: [
                                null != Y
                                    ? (0, r.jsx)(l.Button, {
                                          className: s()(R.secondaryAction, { [R.enhancedSecondaryAction]: $ }),
                                          onClick: Z,
                                          size: l.Button.Sizes.SMALL,
                                          color: $ ? l.Button.Colors.CUSTOM : l.Button.Colors.PRIMARY,
                                          look: l.Button.Looks.LINK,
                                          children: Y
                                      })
                                    : null,
                                (() => {
                                    if (ea)
                                        return (0, r.jsx)(_.Z, {
                                            analyticsLocation: b,
                                            guild: L.guild,
                                            onClose: V
                                        });
                                    let e = $ ? O.Z.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
                                    if (el) {
                                        if (null != es) {
                                            var t, n;
                                            e = (0, f.Rt)({
                                                intervalType: null == es ? void 0 : null === (t = es.subscription_trial) || void 0 === t ? void 0 : t.interval,
                                                intervalCount: null == es ? void 0 : null === (n = es.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                                            });
                                        } else null != eo && (e = O.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: eo.discount.amount }));
                                    }
                                    return (0, r.jsx)(T.Z, {
                                        className: ee,
                                        showGradient: $ || J,
                                        premiumModalAnalyticsLocation: b,
                                        subscriptionTier: z,
                                        size: l.Button.Sizes.SMALL,
                                        color: $ || J ? l.Button.Colors.CUSTOM : l.Button.Colors.GREEN,
                                        onClick: () => {
                                            null == H || H(), V();
                                        },
                                        buttonText: null != j ? j : e
                                    });
                                })()
                            ]
                        }),
                        !Q &&
                            !$ &&
                            (0, r.jsx)(l.Button, {
                                onClick: V,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: null != X ? X : O.Z.Messages.BACK
                            })
                    ]
                }),
                $
                    ? (0, r.jsx)(l.ModalCloseButton, {
                          onClick: V,
                          className: R.closeButton
                      })
                    : null
            ]
        })
    );
}
