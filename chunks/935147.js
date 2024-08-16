t.d(s, {
    Z: function () {
        return j;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(809206),
    l = t(634894),
    c = t(100527),
    d = t(906732),
    _ = t(588126),
    E = t(175756),
    u = t(104494),
    I = t(639119),
    T = t(165583),
    S = t(197115),
    N = t(350327),
    C = t(996073),
    m = t(25990),
    A = t(626135),
    O = t(74538),
    g = t(296810),
    h = t(921813),
    p = t(433411),
    R = t(532432),
    x = t(504983),
    M = t(134795),
    f = t(513901),
    D = t(451392),
    P = t(981631),
    L = t(474936),
    b = t(526761),
    Z = t(689938),
    v = t(772058);
function j(e) {
    var s, j, B;
    let { user: U } = e,
        { reducedMotion: G } = a.useContext(r.AccessibilityPreferencesContext),
        F = O.ZP.isPremium(U),
        {
            pendingAvatar: y,
            pendingBanner: V,
            pendingThemeColors: Y,
            pendingPronouns: w,
            pendingBio: k,
            tryItOutThemeColors: H,
            tryItOutAvatar: W,
            tryItOutBanner: K,
            tryItOutAvatarDecoration: z,
            tryItOutProfileEffectId: Q
        } = (0, i.cj)([m.Z], () => {
            let e = m.Z.getAllPending(),
                s = m.Z.getErrors(),
                t = m.Z.getAllTryItOut();
            return {
                ...e,
                ...t,
                errors: s
            };
        }),
        X = (0, _.Z)(z),
        q = (0, E.Z)(Q),
        J = a.useRef(null);
    (0, C.Z)(J, b.Y_.TRY_IT_OUT);
    let { analyticsLocations: $, sourceAnalyticsLocations: ee } = (0, d.ZP)(c.Z.USER_SETTINGS_TRY_OUT_PREMIUM);
    a.useEffect(() => {
        A.default.track(P.rMx.PREMIUM_UPSELL_VIEWED, {
            type: L.cd.PREMIUM_PROFILE_TRY_IT_OUT,
            location: { page: P.ZY5.USER_SETTINGS },
            location_stack: ee
        });
    }, [ee, U]);
    let es = (null === (j = (0, I.N)()) || void 0 === j ? void 0 : null === (s = j.subscription_trial) || void 0 === s ? void 0 : s.sku_id) === L.Si.TIER_2,
        et = (0, u.Ng)(),
        en = (0, u.Wp)(et, L.Si.TIER_2),
        ea = 'TryOutPremiumSection';
    return (
        (0, l.j)({
            location: ea + ' auto on',
            autoTrackExposure: !0
        }),
        (0, l.j)({
            location: ea + ' auto off',
            autoTrackExposure: !1
        }),
        (0, n.jsx)(d.Gt, {
            value: $,
            children: (0, n.jsxs)(x.Z, {
                ref: J,
                className: v.tryItOutSection,
                type: x.Y.PREMIUM,
                isShown: !0,
                hasBackground: !0,
                children: [
                    (0, n.jsx)(g.Z, {
                        layoutClassName: v.tryItOutLayout,
                        previewTitle: (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(r.NitroWheelIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: v.premiumIcon
                                }),
                                Z.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW
                            ]
                        }),
                        profilePreview: (0, n.jsx)(h.Z, {
                            user: U,
                            pendingPronouns: w,
                            pendingBio: k,
                            pendingBanner: null !== (B = null != K ? K : V) && void 0 !== B ? B : t(466045),
                            pendingAvatar: null != W ? W : y,
                            pendingThemeColors: null != H ? H : Y,
                            pendingAvatarDecoration: X,
                            pendingProfileEffectId: q,
                            avatarClassName: null != W || null != y || G.enabled ? void 0 : v.spinningAvatar,
                            canUsePremiumCustomization: !0,
                            isTryItOutFlow: !0,
                            hideExampleButton: !0
                        }),
                        children: (0, n.jsxs)('div', {
                            className: v.editor,
                            children: [
                                (0, n.jsxs)('div', {
                                    children: [
                                        (0, n.jsx)(r.Heading, {
                                            variant: 'heading-xl/extrabold',
                                            children: Z.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
                                        }),
                                        (0, n.jsx)(r.Text, {
                                            className: v.description,
                                            variant: 'text-sm/normal',
                                            children: Z.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
                                        })
                                    ]
                                }),
                                (0, n.jsx)(D.Z, {
                                    className: v.customizationSection,
                                    user: U,
                                    pendingAvatar: null != W ? W : y,
                                    pendingColors: null != H ? H : Y,
                                    onThemeColorsChange: N.rf,
                                    showPremiumIcon: !1,
                                    preventDisabled: !0
                                }),
                                (0, n.jsx)(M.Z, {
                                    className: v.customizationSection,
                                    isTryItOutFlow: !0,
                                    showRemoveBannerButton: null != K,
                                    onBannerChange: N.f4,
                                    showPremiumIcon: !1
                                }),
                                (0, n.jsx)(R.Z, {
                                    className: v.customizationSection,
                                    isTryItOutFlow: !0,
                                    onAvatarChange: N.c_,
                                    showRemoveAvatarButton: !1,
                                    changeAvatarButtonText: Z.Z.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
                                    sectionTitle: Z.Z.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
                                }),
                                (0, n.jsx)(
                                    p.Z,
                                    {
                                        isTryItOutFlow: !0,
                                        className: v.customizationSection,
                                        user: U,
                                        sectionTitle: Z.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
                                    },
                                    'decoration'
                                ),
                                (0, n.jsx)(
                                    f.Z,
                                    {
                                        className: v.customizationSection,
                                        isTryItOutFlow: !0,
                                        initialSelectedEffectId: q,
                                        user: U,
                                        sectionTitle: Z.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
                                    },
                                    'effect'
                                ),
                                !es &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(r.Text, {
                                                variant: 'text-sm/normal',
                                                className: v.premiumPerksListTitle,
                                                children: Z.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
                                            }),
                                            (0, n.jsx)(S.Z, {
                                                onSubscribeModalClose: (e) => {
                                                    e && ((0, o.I5)(W), (0, N.g_)(K), (0, N.z5)(H));
                                                },
                                                subscriptionTier: L.Si.TIER_2,
                                                className: v.premiumSubscribeButton,
                                                size: r.Button.Sizes.MEDIUM,
                                                buttonText: F ? Z.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : en ? Z.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: null == et ? void 0 : et.discount.amount }) : Z.Z.Messages.PREMIUM_UPSELL_GET_NITRO
                                            })
                                        ]
                                    })
                            ]
                        })
                    }),
                    es &&
                        (0, n.jsxs)('div', {
                            children: [
                                (0, n.jsx)('div', { className: v.premiumTier2Divider }),
                                (0, n.jsx)(T.ZP, {
                                    type: L.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                    subscriptionTier: L.Si.TIER_2
                                })
                            ]
                        })
                ]
            })
        })
    );
}
