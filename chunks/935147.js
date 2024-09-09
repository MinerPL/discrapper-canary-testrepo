t.d(s, {
    Z: function () {
        return F;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(809206),
    d = t(634894),
    _ = t(100527),
    u = t(906732),
    E = t(175756),
    T = t(104494),
    S = t(639119),
    I = t(81245),
    N = t(53691),
    m = t(165583),
    C = t(197115),
    A = t(267717),
    g = t(350327),
    h = t(996073),
    O = t(25990),
    p = t(626135),
    R = t(74538),
    x = t(296810),
    f = t(433411),
    M = t(532432),
    D = t(504983),
    P = t(134795),
    L = t(513901),
    b = t(451392),
    Z = t(649700),
    v = t(981631),
    j = t(474936),
    B = t(526761),
    U = t(689938),
    G = t(772058);
function F(e) {
    var s, t;
    let { user: i } = e,
        F = R.ZP.isPremium(i),
        {
            pendingAvatar: y,
            pendingThemeColors: V,
            tryItOutThemeColors: Y,
            tryItOutAvatar: w,
            tryItOutBanner: k,
            tryItOutProfileEffectId: H
        } = (0, o.cj)([O.Z], () => {
            let e = O.Z.getAllPending(),
                s = O.Z.getErrors(),
                t = O.Z.getAllTryItOut();
            return {
                ...e,
                ...t,
                errors: s
            };
        }),
        W = (0, E.Z)(H),
        K = a.useRef(null);
    (0, h.Z)(K, B.Y_.TRY_IT_OUT);
    let { analyticsLocations: z, sourceAnalyticsLocations: Q } = (0, u.ZP)(_.Z.USER_SETTINGS_TRY_OUT_PREMIUM);
    a.useEffect(() => {
        p.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
            type: j.cd.PREMIUM_PROFILE_TRY_IT_OUT,
            location: { page: v.ZY5.USER_SETTINGS },
            location_stack: Q
        });
    }, [Q, i]);
    let X = (null === (t = (0, S.N)()) || void 0 === t ? void 0 : null === (s = t.subscription_trial) || void 0 === s ? void 0 : s.sku_id) === j.Si.TIER_2,
        q = (0, T.Ng)(),
        J = (0, T.Wp)(q, j.Si.TIER_2),
        $ = 'TryOutPremiumSection';
    (0, d.j)({
        location: $ + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: $ + ' auto off',
            autoTrackExposure: !1
        });
    let ee = (0, I.Mu)('TryOutPremiumSection');
    return (0, n.jsx)(u.Gt, {
        value: z,
        children: (0, n.jsxs)(D.Z, {
            ref: K,
            className: G.tryItOutSection,
            type: D.Y.PREMIUM,
            isShown: !0,
            hasBackground: !0,
            children: [
                (0, n.jsx)(x.Z, {
                    layoutClassName: G.tryItOutLayout,
                    previewTitle: (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(l.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: G.premiumIcon
                            }),
                            U.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW
                        ]
                    }),
                    profilePreview: (0, n.jsx)(Z.Z, { user: i }),
                    children: (0, n.jsxs)('div', {
                        className: G.editor,
                        children: [
                            (0, n.jsxs)('div', {
                                children: [
                                    (0, n.jsx)(l.Heading, {
                                        variant: 'heading-xl/extrabold',
                                        children: U.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
                                    }),
                                    (0, n.jsx)(l.Text, {
                                        className: G.description,
                                        variant: 'text-sm/normal',
                                        children: U.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
                                    })
                                ]
                            }),
                            (0, n.jsx)(b.Z, {
                                className: G.customizationSection,
                                user: i,
                                pendingAvatar: null != w ? w : y,
                                pendingColors: null != Y ? Y : V,
                                onThemeColorsChange: g.rf,
                                showPremiumIcon: !1,
                                preventDisabled: !0
                            }),
                            (0, n.jsx)(P.Z, {
                                className: G.customizationSection,
                                isTryItOutFlow: !0,
                                showRemoveBannerButton: null != k,
                                onBannerChange: g.f4,
                                showPremiumIcon: !1
                            }),
                            (0, n.jsx)(M.Z, {
                                className: G.customizationSection,
                                isTryItOutFlow: !0,
                                onAvatarChange: g.c_,
                                showRemoveAvatarButton: !1,
                                changeAvatarButtonText: U.Z.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
                                sectionTitle: U.Z.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
                            }),
                            (0, n.jsx)(
                                f.Z,
                                {
                                    isTryItOutFlow: !0,
                                    className: G.customizationSection,
                                    user: i,
                                    sectionTitle: U.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
                                },
                                'decoration'
                            ),
                            (0, n.jsx)(
                                L.Z,
                                {
                                    className: G.customizationSection,
                                    isTryItOutFlow: !0,
                                    initialSelectedEffectId: W,
                                    user: i,
                                    sectionTitle: U.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
                                },
                                'effect'
                            ),
                            !X &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            className: r()({ [G.premiumPerksListTitle]: !ee }),
                                            children: U.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
                                        }),
                                        !ee &&
                                            (0, n.jsx)(C.Z, {
                                                onSubscribeModalClose: (e) => {
                                                    e && ((0, c.I5)(w), (0, g.g_)(k), (0, g.z5)(Y));
                                                },
                                                subscriptionTier: j.Si.TIER_2,
                                                className: G.premiumSubscribeButton,
                                                size: l.Button.Sizes.MEDIUM,
                                                buttonText: F ? U.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : J ? U.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: null == q ? void 0 : q.discount.amount }) : U.Z.Messages.PREMIUM_UPSELL_GET_NITRO
                                            })
                                    ]
                                })
                        ]
                    })
                }),
                X &&
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)('div', { className: G.premiumTier2Divider }),
                            (0, n.jsx)(m.ZP, {
                                type: j.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                subscriptionTier: j.Si.TIER_2
                            })
                        ]
                    }),
                ee &&
                    (0, n.jsx)(N.p, {
                        className: G.floatingUpsell,
                        showUpsell: !0,
                        text: U.Z.Messages.PREMIUM_UPSELL_PROFILE_TRY_IT_OUT_UPSELL.format({ onClick: A.openPremiumTryItOutProfileUpsell }),
                        button: U.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                        position: 'inline',
                        showShadow: !1
                    })
            ]
        })
    });
}
