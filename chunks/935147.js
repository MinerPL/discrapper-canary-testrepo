s.d(t, {
    Z: function () {
        return j;
    }
});
var n = s(735250), a = s(470079), i = s(442837), r = s(481060), o = s(809206), l = s(634894), c = s(100527), d = s(906732), _ = s(588126), E = s(175756), u = s(104494), T = s(639119), I = s(165583), S = s(197115), N = s(350327), C = s(996073), m = s(25990), A = s(626135), h = s(74538), g = s(296810), O = s(921813), p = s(433411), R = s(532432), x = s(504983), M = s(134795), D = s(513901), f = s(451392), P = s(981631), L = s(474936), Z = s(526761), b = s(689938), v = s(460247);
function j(e) {
    var t, j, B;
    let {user: U} = e, {reducedMotion: G} = a.useContext(r.AccessibilityPreferencesContext), F = h.ZP.isPremium(U), {
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
            let e = m.Z.getAllPending(), t = m.Z.getErrors(), s = m.Z.getAllTryItOut();
            return {
                ...e,
                ...s,
                errors: t
            };
        }), X = (0, _.Z)(z), q = (0, E.Z)(Q), J = a.useRef(null);
    (0, C.Z)(J, Z.Y_.TRY_IT_OUT);
    let {
        analyticsLocations: $,
        sourceAnalyticsLocations: ee
    } = (0, d.ZP)(c.Z.USER_SETTINGS_TRY_OUT_PREMIUM);
    a.useEffect(() => {
        A.default.track(P.rMx.PREMIUM_UPSELL_VIEWED, {
            type: L.cd.PREMIUM_PROFILE_TRY_IT_OUT,
            location: { page: P.ZY5.USER_SETTINGS },
            location_stack: ee
        });
    }, [
        ee,
        U
    ]);
    let et = (null === (j = (0, T.N)()) || void 0 === j ? void 0 : null === (t = j.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === L.Si.TIER_2, es = (0, u.Ng)(), en = (0, u.Wp)(es, L.Si.TIER_2), ea = 'TryOutPremiumSection';
    return (0, l.j)({
        location: ea + ' auto on',
        autoTrackExposure: !0
    }), (0, l.j)({
        location: ea + ' auto off',
        autoTrackExposure: !1
    }), (0, n.jsx)(d.Gt, {
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
                            b.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW
                        ]
                    }),
                    profilePreview: (0, n.jsx)(O.Z, {
                        user: U,
                        pendingPronouns: w,
                        pendingBio: k,
                        pendingBanner: null !== (B = null != K ? K : V) && void 0 !== B ? B : s(466045),
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
                                        children: b.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
                                    }),
                                    (0, n.jsx)(r.Text, {
                                        className: v.description,
                                        variant: 'text-sm/normal',
                                        children: b.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
                                    })
                                ]
                            }),
                            (0, n.jsx)(f.Z, {
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
                                changeAvatarButtonText: b.Z.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
                                sectionTitle: b.Z.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
                            }),
                            (0, n.jsx)(p.Z, {
                                isTryItOutFlow: !0,
                                className: v.customizationSection,
                                user: U,
                                sectionTitle: b.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
                            }, 'decoration'),
                            (0, n.jsx)(D.Z, {
                                className: v.customizationSection,
                                isTryItOutFlow: !0,
                                initialSelectedEffectId: q,
                                user: U,
                                sectionTitle: b.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
                            }, 'effect'),
                            !et && (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(r.Text, {
                                        variant: 'text-sm/normal',
                                        className: v.premiumPerksListTitle,
                                        children: b.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
                                    }),
                                    (0, n.jsx)(S.Z, {
                                        onSubscribeModalClose: e => {
                                            e && ((0, o.I5)(W), (0, N.g_)(K), (0, N.z5)(H));
                                        },
                                        subscriptionTier: L.Si.TIER_2,
                                        className: v.premiumSubscribeButton,
                                        size: r.Button.Sizes.MEDIUM,
                                        buttonText: F ? b.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : en ? b.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: null == es ? void 0 : es.discount.amount }) : b.Z.Messages.PREMIUM_UPSELL_GET_NITRO
                                    })
                                ]
                            })
                        ]
                    })
                }),
                et && (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsx)('div', { className: v.premiumTier2Divider }),
                        (0, n.jsx)(I.ZP, {
                            type: L.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                            subscriptionTier: L.Si.TIER_2
                        })
                    ]
                })
            ]
        })
    });
}
