t.d(s, {
    Z: function () {
        return w;
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
    E = t(597688),
    T = t(1870),
    S = t(884697),
    I = t(175756),
    N = t(104494),
    A = t(639119),
    C = t(31590),
    m = t(81245),
    g = t(629654),
    h = t(53691),
    O = t(165583),
    p = t(197115),
    R = t(267717),
    x = t(350327),
    M = t(996073),
    f = t(25990),
    D = t(626135),
    L = t(74538),
    P = t(296810),
    b = t(433411),
    Z = t(532432),
    v = t(504983),
    j = t(134795),
    B = t(513901),
    U = t(451392),
    G = t(649700),
    F = t(981631),
    y = t(474936),
    V = t(526761),
    Y = t(689938),
    k = t(232335);
function w(e) {
    var s, t;
    let { user: i } = e,
        w = L.ZP.isPremium(i),
        {
            pendingAvatar: H,
            pendingThemeColors: W,
            tryItOutThemeColors: K,
            tryItOutAvatar: z,
            tryItOutBanner: Q,
            tryItOutProfileEffectId: X,
            tryItOutAvatarDecoration: q
        } = (0, o.cj)([f.Z], () => {
            let e = f.Z.getAllPending(),
                s = f.Z.getErrors(),
                t = f.Z.getAllTryItOut();
            return {
                ...e,
                ...t,
                errors: s
            };
        }),
        J = (0, I.Z)(X),
        $ = a.useRef(null);
    (0, M.Z)($, V.Y_.TRY_IT_OUT);
    let { analyticsLocations: ee, sourceAnalyticsLocations: es } = (0, u.ZP)(_.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        et = (e) => {
            if (e && ((0, c.I5)(z), (0, x.z5)(K), (0, x.ho)(Q), null != q)) {
                let e = E.Z.getProduct(q.skuId);
                ((0, S.G1)(e) || null != T.Z.getPurchase(q.skuId)) && (0, c.cV)(q);
            }
        };
    a.useEffect(() => {
        D.default.track(F.rMx.PREMIUM_UPSELL_VIEWED, {
            type: y.cd.PREMIUM_PROFILE_TRY_IT_OUT,
            location: { page: F.ZY5.USER_SETTINGS },
            location_stack: es
        });
    }, [es, i]);
    let en = (null === (t = (0, A.N)()) || void 0 === t ? void 0 : null === (s = t.subscription_trial) || void 0 === s ? void 0 : s.sku_id) === y.Si.TIER_2,
        ea = (0, N.Ng)(),
        ei = (0, N.Wp)(ea, y.Si.TIER_2),
        er = 'TryOutPremiumSection';
    (0, d.j)({
        location: er + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: er + ' auto off',
            autoTrackExposure: !1
        });
    let eo = (0, m.Mu)('TryOutPremiumSection'),
        { enabled: el } = C.Z.useExperiment({ location: 'UserSettingsProfileCustomization' }, { autoTrackExposure: !1 });
    return (0, n.jsx)(u.Gt, {
        value: ee,
        children: (0, n.jsxs)(v.Z, {
            ref: $,
            className: k.tryItOutSection,
            type: v.Y.PREMIUM,
            isShown: !0,
            hasBackground: !0,
            children: [
                (0, n.jsx)(P.Z, {
                    layoutClassName: k.tryItOutLayout,
                    previewTitle: (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(l.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: k.premiumIcon
                            }),
                            Y.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW
                        ]
                    }),
                    profilePreview: (0, n.jsxs)(n.Fragment, {
                        children: [el && (0, n.jsx)(g.Z, {}), (0, n.jsx)(G.Z, { user: i })]
                    }),
                    children: (0, n.jsxs)('div', {
                        className: k.editor,
                        children: [
                            (0, n.jsxs)('div', {
                                children: [
                                    (0, n.jsx)(l.Heading, {
                                        variant: 'heading-xl/extrabold',
                                        children: Y.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
                                    }),
                                    (0, n.jsx)(l.Text, {
                                        className: k.description,
                                        variant: 'text-sm/normal',
                                        children: Y.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
                                    })
                                ]
                            }),
                            (0, n.jsx)(U.Z, {
                                className: k.customizationSection,
                                user: i,
                                pendingAvatar: null != z ? z : H,
                                pendingColors: null != K ? K : W,
                                onThemeColorsChange: x.rf,
                                showPremiumIcon: !1,
                                preventDisabled: !0
                            }),
                            (0, n.jsx)(j.Z, {
                                className: k.customizationSection,
                                isTryItOutFlow: !0,
                                showRemoveBannerButton: null != Q,
                                onBannerChange: x.f4,
                                showPremiumIcon: !1
                            }),
                            (0, n.jsx)(Z.Z, {
                                className: k.customizationSection,
                                isTryItOutFlow: !0,
                                onAvatarChange: x.c_,
                                showRemoveAvatarButton: !1,
                                changeAvatarButtonText: Y.Z.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
                                sectionTitle: Y.Z.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
                            }),
                            (0, n.jsx)(
                                b.Z,
                                {
                                    isTryItOutFlow: !0,
                                    className: k.customizationSection,
                                    user: i,
                                    sectionTitle: Y.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
                                },
                                'decoration'
                            ),
                            (0, n.jsx)(
                                B.Z,
                                {
                                    className: k.customizationSection,
                                    isTryItOutFlow: !0,
                                    initialSelectedEffectId: J,
                                    user: i,
                                    sectionTitle: Y.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
                                },
                                'effect'
                            ),
                            !en &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            className: r()({ [k.premiumPerksListTitle]: !eo }),
                                            children: Y.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
                                        }),
                                        !eo &&
                                            (0, n.jsx)(p.Z, {
                                                onSubscribeModalClose: et,
                                                subscriptionTier: y.Si.TIER_2,
                                                className: k.premiumSubscribeButton,
                                                size: l.Button.Sizes.MEDIUM,
                                                buttonText: w ? Y.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : ei ? Y.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: null == ea ? void 0 : ea.discount.amount }) : Y.Z.Messages.PREMIUM_UPSELL_GET_NITRO
                                            })
                                    ]
                                })
                        ]
                    })
                }),
                eo &&
                    (0, n.jsx)(h.p, {
                        onSubscribeModalClose: et,
                        className: k.floatingUpsell,
                        showUpsell: !0,
                        text: Y.Z.Messages.PREMIUM_UPSELL_PROFILE_TRY_IT_OUT_UPSELL.format({ onClick: () => (0, R.openPremiumTryItOutProfileUpsell)(et) }),
                        button: Y.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                        position: 'inline',
                        showShadow: !1
                    }),
                en &&
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)('div', { className: k.premiumTier2Divider }),
                            (0, n.jsx)(O.ZP, {
                                type: y.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                subscriptionTier: y.Si.TIER_2
                            })
                        ]
                    })
            ]
        })
    });
}
