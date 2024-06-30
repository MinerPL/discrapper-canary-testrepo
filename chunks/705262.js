n.d(t, {
    Yk: function () {
        return Z;
    },
    yH: function () {
        return r;
    }
}), n(627341), n(47120);
var r, i, a = n(735250), o = n(470079), s = n(120356), l = n.n(s), u = n(278074), c = n(442837), d = n(524437), _ = n(481060), E = n(153867), f = n(607070), h = n(100527), p = n(906732), m = n(540059), I = n(605236), T = n(837741), g = n(98278), S = n(639119), A = n(165583), N = n(587446), v = n(781391), O = n(210887), R = n(740492), C = n(153124), y = n(626135), D = n(238302), L = n(514361), b = n(583901), M = n(469115), P = n(981631), U = n(921944), w = n(474936), x = n(874893), G = n(526761), k = n(231338), B = n(689938), F = n(758219);
(i = r || (r = {})).EDITOR = 'EDITOR', i.SETTINGS = 'SETTINGS';
let V = Object.freeze({
        EDITOR: G.fy.SLOW_USER_ACTION,
        SETTINGS: G.fy.INFREQUENT_USER_ACTION
    }), H = o.createContext({}), Z = e => {
        let {
            isPersisted: t,
            themeName: n,
            analyticsLocations: r
        } = e;
        y.default.track(P.rMx.CLIENT_THEME_UPDATED, {
            feature_name: w.QP.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r
        });
    }, Y = e => {
        let {
                type: t,
                isPreview: n,
                isCoachmark: r
            } = e, i = (0, u.EQ)({
                type: t,
                isPreview: n,
                isCoachmark: r
            }).with({
                type: 'EDITOR',
                isCoachmark: !0,
                isPreview: !0
            }, () => B.Z.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
                type: 'EDITOR',
                isCoachmark: !0
            }, () => B.Z.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => B.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
        return (0, a.jsxs)('div', {
            className: F.title,
            children: [
                (0, a.jsx)(_.Heading, {
                    'aria-label': i,
                    variant: 'text-md/medium',
                    children: i
                }),
                (0, a.jsx)(N.Z, { className: F.premiumIcon })
            ]
        });
    }, j = e => {
        var t, n;
        let {
            type: r,
            isPreview: i,
            isCoachmark: o
        } = e;
        if ((null === (n = (0, S.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === w.Si.TIER_2 && i)
            return null;
        let s = (0, u.EQ)({
            type: r,
            isPreview: i,
            isCoachmark: o
        }).with({
            type: 'EDITOR',
            isPreview: !0
        }, () => B.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({ onPremiumClick: g.z })).with({
            type: 'EDITOR',
            isCoachmark: !0
        }, () => B.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
            type: 'EDITOR',
            isPreview: !1
        }, () => B.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({ isPreview: !0 }, () => B.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({ onPremiumClick: g.z })).otherwise(() => B.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
        return (0, a.jsx)(_.Heading, {
            variant: 'text-sm/normal',
            children: s
        });
    }, W = e => {
        let {
                type: t,
                children: n
            } = e, r = (0, C.Dt)(), i = (0, _.useRadioGroup)({
                orientation: 'horizontal',
                labelledBy: r
            }), s = o.useMemo(() => ({
                type: t,
                delay: V[t]
            }), [t]);
        return (0, a.jsx)(H.Provider, {
            value: s,
            children: (0, a.jsx)('div', {
                ...i,
                className: F.__invalid_container,
                children: n
            })
        });
    };
W.Basic = e => {
    let {className: t} = e, {delay: n} = o.useContext(H), {analyticsLocations: r} = (0, p.ZP)(h.Z.CLIENT_THEMES_THEME_SELECTOR), [i, s, u] = (0, c.Wu)([
            O.Z,
            R.ZP,
            L.Z
        ], () => [
            O.Z.theme,
            null == L.Z.gradientPreset,
            R.ZP.useSystemTheme === x.K.ON
        ]), d = e => {
            (0, D.xs)(), Z({
                isPersisted: !0,
                analyticsLocations: r,
                themeName: 'default '.concat(e)
            }), (0, E.ZI)({ theme: e }, n);
        }, _ = (0, m.Q)('appearance_settings');
    return (0, a.jsxs)('section', {
        className: l()(F.presets, t),
        children: [
            (0, a.jsx)(b.bD, {
                theme: k.BR.LIGHT,
                isSelected: s && !u && i === k.BR.LIGHT,
                onSelect: () => d(k.BR.LIGHT)
            }),
            (0, a.jsx)(b.bD, {
                theme: k.BR.DARK,
                isSelected: s && !u && i === k.BR.DARK,
                onSelect: () => d(k.BR.DARK)
            }),
            _ && (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(b.bD, {
                        theme: k.BR.DARKER,
                        isSelected: s && !u && i === k.BR.DARKER,
                        onSelect: () => d(k.BR.DARKER)
                    }),
                    (0, a.jsx)(b.bD, {
                        theme: k.BR.MIDNIGHT,
                        isSelected: s && !u && i === k.BR.MIDNIGHT,
                        onSelect: () => d(k.BR.MIDNIGHT)
                    })
                ]
            }),
            (0, a.jsx)(b.bD, {
                theme: 'system',
                isSelected: s && u,
                onSelect: () => d('system')
            })
        ]
    });
}, W.Gradient = e => {
    var t, r;
    let {
            className: i,
            renderCTAButtons: s,
            disabled: l = !1
        } = e, {
            type: u,
            delay: m
        } = o.useContext(H), {analyticsLocations: N} = (0, p.ZP)(h.Z.CLIENT_THEMES_THEME_SELECTOR), [O, R, C] = (0, c.Wu)([L.Z], () => {
            var e;
            return [
                L.Z.isPreview,
                L.Z.isCoachmark,
                null === (e = L.Z.gradientPreset) || void 0 === e ? void 0 : e.id
            ];
        }), [y, P] = o.useState(!1), [G, k] = o.useState(-1), V = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), {enabled: W} = (0, T.J)({ location: 'GradientSelectors' }), K = (null === (r = (0, S.N)()) || void 0 === r ? void 0 : null === (t = r.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === w.Si.TIER_2, z = o.useMemo(() => e => {
            let t = M.sJ.get(e.id), n = null != t && !(0, I.un)(t);
            return l && n && setTimeout(() => (0, I.EW)(t, { dismissAction: U.L.AUTO_DISMISS }), 5000), n;
        }, [l]);
    o.useEffect(() => {
        (G === M.XV.length - (W ? 2 : 3) && 'EDITOR' === u || C === d.Us.EASTER_EGG) && P(!0);
    }, [
        G,
        u,
        C,
        W
    ]);
    let q = (e, t) => {
        (0, D.zO)(e.id), Z({
            isPersisted: !O,
            analyticsLocations: N,
            themeName: d.Us[e.id]
        });
        let n = M.sJ.get(e.id);
        if (null != n && !(0, I.un)(n) && (0, I.EW)(n, { dismissAction: U.L.TAKE_ACTION }), O) {
            (0, v.hi)(x.K.OFF);
            return;
        }
        if ((0, E.ZI)({
                backgroundGradientPresetId: e.id,
                theme: e.theme
            }, m), null != t) {
            if (y && P(!1), t <= G || 0 === t) {
                k(0);
                return;
            }
            k(e => e + 1);
        }
    };
    return (0, a.jsxs)('section', {
        className: i,
        children: [
            'EDITOR' === u && O && K ? (0, a.jsx)(A.ZP, {
                type: w.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                subscriptionTier: w.Si.TIER_2,
                children: B.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({ onPremiumClick: g.z })
            }) : (0, a.jsxs)('div', {
                className: F.header,
                children: [
                    (0, a.jsxs)('div', {
                        className: F.headings,
                        children: [
                            (0, a.jsx)(Y, {
                                type: u,
                                isPreview: O,
                                isCoachmark: R
                            }),
                            (0, a.jsx)(j, {
                                type: u,
                                isPreview: O,
                                isCoachmark: R
                            })
                        ]
                    }),
                    null == s ? void 0 : s()
                ]
            }),
            (0, a.jsxs)('div', {
                className: F.presets,
                children: [
                    M.XV.filter(e => {
                        let {id: t} = e;
                        return t !== d.Us.EASTER_EGG && (t !== d.Us.BLURPLE_TWILIGHT || W);
                    }).map((e, t) => (0, a.jsx)(b.DR, {
                        preset: e,
                        isSelected: C === e.id,
                        onSelect: () => q(e, t),
                        disabled: l,
                        tabIndex: 0 !== t || l ? void 0 : 0,
                        showBadge: z(e)
                    }, e.id)),
                    (() => {
                        if (!y)
                            return null;
                        let e = M.qt[d.Us.EASTER_EGG];
                        if (null == e)
                            return null;
                        async function t() {
                            let {default: e} = await n.e('5217').then(n.t.bind(n, 801048, 19));
                            return e;
                        }
                        return (0, a.jsxs)('div', {
                            className: F.easterEggSelection,
                            children: [
                                (0, a.jsx)(b.DR, {
                                    preset: e,
                                    isSelected: C === d.Us.EASTER_EGG,
                                    onSelect: () => q(e)
                                }),
                                (0, a.jsx)(_.LottieAnimation, {
                                    importData: t,
                                    shouldAnimate: !V,
                                    className: F.sparkles
                                })
                            ]
                        });
                    })()
                ]
            })
        ]
    });
}, t.ZP = W;
