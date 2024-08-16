n.d(t, {
    p: function () {
        return i;
    }
}),
    n(47120);
var i,
    a,
    s = n(735250),
    l = n(470079),
    r = n(120356),
    o = n.n(r),
    c = n(338545),
    u = n(442837),
    d = n(481060),
    h = n(393238),
    m = n(434650),
    p = n(607070),
    _ = n(594174),
    f = n(5192),
    E = n(603368),
    g = n(856682),
    C = n(284019),
    I = n(689938),
    x = n(556070);
((a = i || (i = {})).LEFT = 'left'), (a.RIGHT = 'right');
t.Z = l.memo(function (e) {
    let { guildId: t, primaryColor: n, children: i, canSignCharter: a = !0, signed: r, onSignCharter: T, animationDelayMs: N = 1000, signHintButtonText: v, signHintHelperText: S, signHintPosition: Z = 'left', className: A, fullHeight: M, showDisclaimer: b } = e,
        R = l.useRef(null),
        j = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null == T || T(!r);
            },
            [T, r]
        ),
        [L, P] = l.useState(!1),
        [O, y] = l.useState(!1),
        D = l.useRef(null),
        k = l.useCallback(
            (e) => {
                e &&
                    (D.current = setTimeout(() => {
                        y(!0);
                    }, N));
            },
            [N]
        ),
        U = (0, m.O)(k),
        w = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
        B = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
        [H, G] = (0, d.useSpring)(() => {
            var e, t;
            return (
                (e = Z),
                (t = w),
                'left' === e
                    ? {
                          right: t ? 68 : 0,
                          config: c.config.stiff
                      }
                    : {
                          left: t ? 68 : 0,
                          config: c.config.stiff
                      }
            );
        }),
        [V, F] = (0, d.useSpring)(() => ({
            opacity: 0,
            top: -24,
            onRest: () => {
                r && P(!0);
            }
        }));
    l.useEffect(() => {
        if (O)
            G({
                ...('left' === Z
                    ? {
                          right: 68,
                          config: c.config.stiff
                      }
                    : {
                          left: 280,
                          config: c.config.stiff
                      })
            }),
                F({
                    opacity: 1,
                    top: -24
                });
        O &&
            r &&
            F({
                opacity: 0,
                top: 0
            });
    }, [O, r, Z]),
        l.useEffect(
            () => () => {
                null != D.current && clearTimeout(D.current);
            },
            []
        );
    let W = o()(x.signHintAnimationContainer, L && x.noDisplay, 'left' === Z ? x.signTextLeft : x.signTextRight),
        z = (0, d.useToken)(d.tokens.colors.BG_SURFACE_OVERLAY),
        Y = (0, d.useToken)(d.tokens.colors.BG_BRAND),
        K = null != n ? n : Y.hex(),
        q = (0, E.j1)(K, z.hex()),
        { height: X = 87, ref: Q } = (0, h.Z)(a),
        J = (0, d.useTransition)(a, {
            from: {
                opacity: 0,
                translateY: X
            },
            enter: {
                opacity: 1,
                translateY: 0
            },
            config: c.config.stiff
        });
    return (0, s.jsx)('div', {
        className: o()(x.container, A),
        ref: U,
        children: (0, s.jsx)(g.Z, {
            fullHeight: M,
            children: (0, s.jsxs)('div', {
                className: o()(x.overviewSidebarWrapper, M && x.fullHeight),
                children: [
                    (0, s.jsx)(d.ScrollerNone, {
                        fade: !0,
                        className: x.overviewSidebarContent,
                        children: (0, s.jsx)('div', {
                            className: x.scrollContentContainer,
                            children: i
                        })
                    }),
                    J(
                        (e, n) =>
                            n &&
                            (0, s.jsx)(c.animated.div, {
                                className: x.signatureBlockContainer,
                                style: e,
                                children: (0, s.jsx)('div', {
                                    ref: Q,
                                    children: (0, s.jsxs)('div', {
                                        className: x.signatureBlock,
                                        children: [
                                            (0, s.jsx)('div', {
                                                ref: R,
                                                className: x.signHintContainer,
                                                children: (0, s.jsxs)(c.animated.div, {
                                                    className: W,
                                                    style: {
                                                        ...H,
                                                        ...V
                                                    },
                                                    children: [
                                                        (0, s.jsx)('div', {
                                                            className: x.signContainerButton,
                                                            children: (0, s.jsxs)(C.Z, {
                                                                themeColor: K,
                                                                className: x.signButton,
                                                                size: d.Button.Sizes.SMALL,
                                                                onClick: (e) => {
                                                                    var t;
                                                                    null === (t = R.current) || void 0 === t || t.scrollIntoView({ behavior: 'smooth' }), j(e);
                                                                },
                                                                children: [
                                                                    (0, s.jsx)('div', {
                                                                        className: o()(x.signCarot, { [x.signCarotCustomColors]: null != q }),
                                                                        style: null != q ? q : { borderColor: K }
                                                                    }),
                                                                    null != v ? v : I.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
                                                                ]
                                                            })
                                                        }),
                                                        (0, s.jsx)(d.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'text-muted',
                                                            className: x.signHintHelperText,
                                                            children: null != S ? v : I.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_HELP
                                                        }),
                                                        b &&
                                                            (0, s.jsx)(d.Text, {
                                                                variant: 'text-xs/normal',
                                                                color: 'text-muted',
                                                                className: x.signHintHelperText,
                                                                children: I.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_DISCLAIMER.format()
                                                            })
                                                    ]
                                                })
                                            }),
                                            (0, s.jsxs)(d.Clickable, {
                                                onClick: j,
                                                className: o()(x.signatureContainer, { [x.clickable]: null != T }),
                                                children: [
                                                    (0, s.jsx)(d.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'none',
                                                        children: 'x'
                                                    }),
                                                    r
                                                        ? (0, s.jsx)(d.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'header-primary',
                                                              className: x.signatureText,
                                                              children: f.ZP.getName(t, null, B)
                                                          })
                                                        : (0, s.jsx)(d.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'none',
                                                              className: x.signatureText,
                                                              children: I.Z.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
                                                          })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                    )
                ]
            })
        })
    });
});
