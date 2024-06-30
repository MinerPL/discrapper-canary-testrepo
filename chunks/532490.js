n.d(t, {
    p: function () {
        return i;
    }
}), n(47120);
var i, a, l = n(735250), s = n(470079), r = n(120356), o = n.n(r), c = n(920906), u = n(442837), d = n(481060), h = n(393238), p = n(434650), m = n(607070), _ = n(594174), f = n(5192), E = n(603368), C = n(856682), g = n(284019), I = n(689938), x = n(544954);
(a = i || (i = {})).LEFT = 'left', a.RIGHT = 'right';
t.Z = s.memo(function (e) {
    let {
            guildId: t,
            primaryColor: n,
            children: i,
            canSignCharter: a = !0,
            onSignCharter: r,
            animationDelayMs: T = 1000,
            signHintButtonText: N,
            signHintHelperText: v,
            signHintPosition: S = 'left',
            className: Z,
            fullHeight: A
        } = e, M = s.useRef(null), [b, R] = s.useState(!1), j = s.useCallback(e => {
            e.preventDefault(), e.stopPropagation(), null == r || r(), R(!0);
        }, [r]), [L, P] = s.useState(!1), [O, y] = s.useState(!1), D = s.useRef(null), k = s.useCallback(e => {
            e && (D.current = setTimeout(() => {
                y(!0);
            }, T));
        }, [T]), U = (0, p.O)(k), w = (0, u.e7)([m.Z], () => m.Z.useReducedMotion), B = (0, u.e7)([_.default], () => _.default.getCurrentUser()), [H, G] = (0, c.useSpring)(() => {
            var e, t;
            return e = S, t = w, 'left' === e ? {
                right: t ? 68 : 0,
                config: c.config.stiff
            } : {
                left: t ? 68 : 0,
                config: c.config.stiff
            };
        }), [V, F] = (0, c.useSpring)(() => ({
            opacity: 0,
            top: -24,
            onRest: () => {
                b && P(!0);
            }
        }));
    s.useEffect(() => {
        if (O)
            G({
                ...'left' === S ? {
                    right: 68,
                    config: c.config.stiff
                } : {
                    left: 280,
                    config: c.config.stiff
                }
            }), F({
                opacity: 1,
                top: -24
            });
        O && b && F({
            opacity: 0,
            top: 0
        });
    }, [
        O,
        b,
        S
    ]), s.useEffect(() => () => {
        null != D.current && clearTimeout(D.current);
    }, []);
    let W = o()(x.signHintAnimationContainer, L && x.noDisplay, 'left' === S ? x.signTextLeft : x.signTextRight), z = (0, d.useToken)(d.tokens.colors.BG_SURFACE_OVERLAY), Y = (0, d.useToken)(d.tokens.colors.BG_BRAND), K = null != n ? n : Y.hex(), q = (0, E.j1)(K, z.hex()), {
            height: X = 87,
            ref: Q
        } = (0, h.Z)(a), J = (0, c.useTransition)(a, {
            from: {
                opacity: 0,
                height: 0
            },
            enter: {
                opacity: 1,
                height: null != X ? X : 87
            },
            config: c.config.stiff,
            immediate: w
        });
    return (0, l.jsx)('div', {
        className: o()(x.container, Z),
        ref: U,
        children: (0, l.jsx)(C.Z, {
            fullHeight: A,
            children: (0, l.jsxs)('div', {
                className: o()(x.overviewSidebarWrapper, A && x.fullHeight),
                children: [
                    (0, l.jsx)(d.ScrollerNone, {
                        fade: !0,
                        className: x.overviewSidebarContent,
                        children: (0, l.jsx)('div', {
                            className: x.scrollContentContainer,
                            children: i
                        })
                    }),
                    J((e, n) => n && (0, l.jsx)(c.animated.div, {
                        className: x.signatureBlockContainer,
                        style: e,
                        children: (0, l.jsx)('div', {
                            ref: Q,
                            children: (0, l.jsxs)(d.Clickable, {
                                onClick: j,
                                className: o()(x.signatureBlock, { [x.clickable]: null != r }),
                                children: [
                                    (0, l.jsx)('div', {
                                        ref: M,
                                        className: x.signHintContainer,
                                        children: (0, l.jsxs)(c.animated.div, {
                                            className: W,
                                            style: {
                                                ...H,
                                                ...V
                                            },
                                            children: [
                                                (0, l.jsx)('div', {
                                                    className: x.signContainerButton,
                                                    children: (0, l.jsxs)(g.Z, {
                                                        themeColor: K,
                                                        className: x.signButton,
                                                        size: d.Button.Sizes.SMALL,
                                                        onClick: e => {
                                                            var t;
                                                            null === (t = M.current) || void 0 === t || t.scrollIntoView({ behavior: 'smooth' }), j(e);
                                                        },
                                                        children: [
                                                            (0, l.jsx)('div', {
                                                                className: o()(x.signCarot, { [x.signCarotCustomColors]: null != q }),
                                                                style: null != q ? q : { borderColor: K }
                                                            }),
                                                            null != N ? N : I.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
                                                        ]
                                                    })
                                                }),
                                                (0, l.jsx)(d.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    className: x.signHintHelperText,
                                                    children: null != v ? N : I.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_HELP
                                                })
                                            ]
                                        })
                                    }),
                                    (0, l.jsx)(d.Text, {
                                        variant: 'text-md/normal',
                                        color: 'none',
                                        children: 'x'
                                    }),
                                    b ? (0, l.jsx)(d.Text, {
                                        variant: 'text-lg/normal',
                                        color: 'header-primary',
                                        className: x.signatureText,
                                        children: f.ZP.getName(t, null, B)
                                    }) : (0, l.jsx)(d.Text, {
                                        variant: 'text-lg/normal',
                                        color: 'none',
                                        className: x.signatureText,
                                        children: I.Z.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
                                    })
                                ]
                            })
                        })
                    }))
                ]
            })
        })
    });
});
