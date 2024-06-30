n.d(t, {
    Z: function () {
        return G;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(920906), o = n(442837), c = n(692547), d = n(215569), u = n(780384), _ = n(481060), E = n(410030), I = n(607070), T = n(367907), m = n(996753), N = n(626135), S = n(585483), h = n(999382), g = n(743475), C = n(983135), x = n(8426), p = n(969632), R = n(570961), f = n(208665), L = n(359191), O = n(84658), A = n(142961), M = n(232764), v = n(729311), D = n(850864), j = n(966301), Z = n(981631), b = n(689938), U = n(869251);
function G() {
    let e = (0, o.e7)([h.Z], () => h.Z.getGuild());
    return null == e ? null : (0, s.jsx)(P, { guild: e });
}
function P(e) {
    let {guild: t} = e, i = t.id, h = (0, o.e7)([L.Z], () => L.Z.getCurrentPage()), G = (0, A.Z)(i), {
            hasChanges: P,
            hasConfiguredAnythingForCurrentStep: B,
            hasErrors: y
        } = (0, o.cj)([L.Z], () => ({
            hasChanges: L.Z.hasChanges(),
            hasConfiguredAnythingForCurrentStep: L.Z.hasConfiguredAnythingForCurrentStep(),
            hasErrors: L.Z.hasErrors()
        })), F = (0, o.e7)([L.Z], () => {
            let e = (0, O.lg)(h);
            return null != e && !L.Z.isEducationUpsellDismissed(e);
        }), k = (0, o.e7)([I.Z], () => I.Z.useReducedMotion), w = (0, E.ZP)(), H = a.useRef(null), [{spring: V}, Y] = (0, l.useSpring)(() => ({ spring: 0 }));
    a.useEffect(() => {
        function e() {
            Y({
                spring: 1,
                config: l.config.gentle
            }), Y({
                spring: 0,
                config: l.config.gentle,
                delay: 1000
            });
        }
        return S.S.subscribe(Z.CkL.EMPHASIZE_NOTICE, e), () => {
            S.S.unsubscribe(Z.CkL.EMPHASIZE_NOTICE, e);
        };
    }, [Y]);
    let W = (0, _.useToken)(c.Z.colors.BACKGROUND_FLOATING).hex(), z = (0, _.useToken)(c.Z.unsafe_rawColors.PRIMARY_160).hex(), K = (0, u.wj)(w) ? W : z, q = V.to({
            range: [
                0,
                1
            ],
            output: [
                (0, _.useToken)(c.Z.unsafe_rawColors.WHITE_500).hex(),
                (0, _.useToken)(c.Z.colors.TEXT_NORMAL).hex()
            ]
        }), X = V.to({
            range: [
                0,
                1
            ],
            output: [
                K,
                (0, _.useToken)(c.Z.colors.STATUS_DANGER).hex()
            ]
        });
    if (G) {
        if (h === O.PG.DEFAULT_CHANNELS)
            return (0, s.jsx)(v.j, {});
        if (h === O.PG.CUSTOMIZATION_QUESTIONS)
            return (0, s.jsx)(j.Zm, {});
        else if (h === O.PG.HOME_SETTINGS)
            return (0, s.jsx)(D.T, {});
    }
    let Q = h === O.xh[O.xh.length - 1], J = async () => {
            let e = f.Z.advancedMode;
            if (P)
                try {
                    if (h === O.PG.DEFAULT_CHANNELS)
                        await (0, g.DO)(t).then(() => e ? (0, R.rS)(t, { ignoreDefaultPrompt: !0 }) : Promise.resolve());
                    else if (h === O.PG.CUSTOMIZATION_QUESTIONS)
                        await (0, R.rS)(t, { ignoreDefaultPrompt: !0 });
                    else if (h === O.PG.HOME_SETTINGS) {
                        let e = p.Z.getSettings();
                        await (0, x.oo)(t.id, e);
                    }
                } catch {
                    return !1;
                }
            return !0;
        }, $ = async () => {
            N.default.track(Z.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                ...(0, T.hH)(i),
                step: O.PG[h],
                back: !1,
                skip: !P
            }), (0, C.Nb)((0, O.lg)(h)), await J() && (0, C.IG)(i, h);
        }, ee = async () => {
            N.default.track(Z.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                ...(0, T.hH)(i),
                step: O.PG[h],
                back: !0,
                skip: !1
            }), await J() && (0, C.Wy)(i, h);
        }, et = null;
    F && (h === O.PG.SAFETY_CHECK ? et = (0, s.jsx)(M.j7, {}) : h === O.PG.DEFAULT_CHANNELS ? et = (0, s.jsx)(M.Io, {}) : h === O.PG.CUSTOMIZATION_QUESTIONS ? et = (0, s.jsx)(M.cZ, {}) : h === O.PG.HOME_SETTINGS && (et = (0, s.jsx)(M.g6, {})));
    let en = (0, s.jsx)(_.Button, {
            className: r()(U.button, { [U.hidden]: F }),
            color: _.Button.Colors.PRIMARY,
            look: _.Button.Looks.OUTLINED,
            size: _.Button.Sizes.SMALL,
            onClick: ee,
            disabled: F || y,
            children: (0, s.jsxs)('span', {
                className: U.button,
                children: [
                    (0, s.jsx)(m.Z, {
                        className: U.arrow,
                        direction: m.Z.Directions.LEFT
                    }),
                    b.Z.Messages.BACK
                ]
            })
        }), es = (0, s.jsx)(_.Button, {
            className: U.button,
            color: B ? _.Button.Colors.BRAND : _.Button.Colors.PRIMARY,
            look: _.Button.Looks.FILLED,
            size: _.Button.Sizes.SMALL,
            onClick: $,
            disabled: F || y,
            children: (0, s.jsxs)(l.animated.span, {
                className: U.button,
                style: { color: q },
                children: [
                    B ? b.Z.Messages.NEXT : b.Z.Messages.SKIP,
                    (0, s.jsx)(m.Z, {
                        className: U.arrow,
                        direction: m.Z.Directions.RIGHT
                    })
                ]
            })
        });
    return (0, s.jsx)(d.W, {
        component: 'div',
        children: (0, s.jsx)(_.SlideIn, {
            className: r()(U.noticeRegion),
            children: (0, s.jsx)(l.animated.div, {
                className: U.container,
                style: { backgroundColor: X },
                children: (0, s.jsxs)('div', {
                    className: U.flexContainer,
                    ref: H,
                    children: [
                        F ? (0, s.jsxs)('div', {
                            className: U.educationUpsellRoot,
                            children: [
                                (0, s.jsx)('img', {
                                    className: r()(U.wumpus, { [U.animated]: !k }),
                                    src: n(33631),
                                    alt: 'wumpus'
                                }),
                                (0, s.jsxs)('div', {
                                    className: U.educationUpsell,
                                    children: [
                                        et,
                                        (0, s.jsx)('div', { className: U.educationUpsellArrow })
                                    ]
                                })
                            ]
                        }) : null,
                        (0, s.jsx)(_.FocusRingScope, {
                            containerRef: H,
                            children: (0, s.jsxs)('div', {
                                className: U.actions,
                                children: [
                                    en,
                                    (0, s.jsxs)('div', {
                                        className: U.next,
                                        children: [
                                            y ? (0, s.jsx)(_.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'status-warning',
                                                children: b.Z.Messages.ONBOARDING_PROMPTS_INCOMPLETE
                                            }) : null,
                                            Q ? null : es
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
}
