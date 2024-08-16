t.d(n, {
    Z: function () {
        return v;
    }
});
var o = t(735250),
    r = t(470079),
    a = t(120356),
    i = t.n(a),
    c = t(442837),
    l = t(780384),
    s = t(481060),
    u = t(100527),
    d = t(906732),
    p = t(600164),
    _ = t(963249),
    f = t(639119),
    m = t(165583),
    h = t(263954),
    S = t(706454),
    g = t(709586),
    b = t(626135),
    E = t(930153),
    I = t(74538),
    P = t(937615),
    y = t(981631),
    x = t(474936),
    T = t(689938),
    M = t(668166);
function C(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, c.e7)([S.default], () => S.default.locale);
    return (0, o.jsxs)('div', {
        className: M.perksList,
        children: [
            (0, o.jsx)(h.Z, {
                icon: g.Z,
                iconClassName: M.perkIconGuild,
                description: T.Z.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format({ numFreeGuildSubscriptions: x.cb })
            }),
            (0, o.jsx)(h.Z, {
                icon: g.Z,
                iconClassName: M.perkIconGuild,
                description: T.Z.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format({ percent: (0, E.T3)(t, x.Rr / 100) })
            }),
            n
                ? (0, o.jsx)(h.Z, {
                      icon: s.ReactionIcon,
                      iconClassName: M.perkIconChatPerks,
                      description: T.Z.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS
                  })
                : null,
            (0, o.jsx)(h.Z, {
                icon: s.ScreenArrowIcon,
                iconClassName: M.perkIconStream,
                description: T.Z.Messages.PREMIUM_UPSELL_FEATURE_STREAM
            }),
            (0, o.jsx)(h.Z, {
                icon: s.UploadIcon,
                iconClassName: M.perkIconUpload,
                description: T.Z.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD
            })
        ]
    });
}
function v(e) {
    var n;
    let { premiumSubscriptionPlan: t, onClose: a, onBack: c, onSkip: h, onSubscriptionConfirmation: S, analyticsLocation: g, analyticsSourceLocation: E, priceOptions: v } = e,
        { analyticsLocations: N, sourceAnalyticsLocations: A } = (0, d.ZP)(u.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: R } = (0, s.useThemeContext)(),
        L = (0, l.ap)(R) ? s.Button.Colors.PRIMARY : s.Button.Colors.WHITE,
        k = null == t || null == t.premiumSubscriptionType,
        O = I.ZP.getPrice(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, v),
        B = (0, P.T4)(O.amount, O.currency),
        w = (0, f.N)(),
        U = null == w ? void 0 : w.trial_id,
        D = (null == w ? void 0 : null === (n = w.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === x.Si.TIER_2;
    return (
        r.useEffect(() => {
            b.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
                type: x.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: A
            });
        }, [A]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)(s.ModalContent, {
                    className: M.content,
                    children: [
                        (0, o.jsx)(s.ModalCloseButton, {
                            onClick: a,
                            className: M.closeButton
                        }),
                        D && (0, o.jsx)(m.dz, { className: M.premiumTrialBadge }),
                        (0, o.jsx)('div', { className: i()(M.upsellImage, { [M.upsellImageWithTrialOffer]: D }) }),
                        (0, o.jsx)('div', {
                            className: M.bodyText,
                            children: null != U ? T.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT : T.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format({ monthlyPrice: B })
                        }),
                        (0, o.jsx)(C, { shouldUpsellFromNoneTier: k })
                    ]
                }),
                (0, o.jsxs)(s.ModalFooter, {
                    align: p.Z.Align.CENTER,
                    justify: p.Z.Justify.END,
                    children: [
                        (0, o.jsxs)('div', {
                            className: M.footerRight,
                            children: [
                                (0, o.jsx)(s.Button, {
                                    look: s.Button.Looks.LINK,
                                    color: L,
                                    onClick: h,
                                    children: T.Z.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS
                                }),
                                (0, o.jsx)(s.Button, {
                                    color: s.Button.Colors.GREEN,
                                    type: 'submit',
                                    onClick: () => {
                                        a(),
                                            (0, _.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: x.Si.TIER_2,
                                                analyticsLocations: N,
                                                analyticsObject: {
                                                    ...g,
                                                    section: y.jXE.PREMIUM_GUILD_PURCHASE_MODAL
                                                },
                                                analyticsSourceLocation: E,
                                                onSubscriptionConfirmation: S,
                                                trialId: U
                                            });
                                    },
                                    children: null != U ? T.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : T.Z.Messages.PREMIUM_UPSELL_UPGRADE
                                })
                            ]
                        }),
                        (0, o.jsx)('div', {
                            className: M.backStep,
                            children: (0, o.jsx)(s.Button, {
                                color: L,
                                look: s.Button.Looks.LINK,
                                size: s.Button.Sizes.NONE,
                                onClick: () => c(),
                                children: T.Z.Messages.BACK
                            })
                        })
                    ]
                })
            ]
        })
    );
}
