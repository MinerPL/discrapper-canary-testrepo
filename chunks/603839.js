n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(392711),
    o = n(567526),
    c = n(442837),
    d = n(481060),
    u = n(207796),
    _ = n(889711),
    h = n(931240),
    E = n(970606),
    m = n(650461),
    I = n(35313),
    g = n(284019),
    p = n(672775),
    T = n(601463),
    S = n(192565),
    f = n(641037),
    C = n(689938),
    N = n(629209);
let A = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
function v(e) {
    let { guildId: t, onClose: n } = e,
        s = (0, m.Wg)(),
        {
            progress: v,
            errors: Z,
            submitting: L
        } = (0, c.cj)([m.ZP], () => {
            var e, n, i, a;
            return {
                progress: null !== (a = null === (e = m.ZP.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== a ? a : s,
                errors: null === (n = m.ZP.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
                submitting: null === (i = m.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : i.submitting
            };
        }),
        O = a.useMemo(() => (0, f.G)(Z), [Z]),
        [R, x] = a.useState(!1),
        [b, P] = a.useState(window.innerWidth),
        [M, D] = a.useState(1),
        [y, j] = a.useState(!0),
        U = (0, I.f)(),
        G = (0, d.useSpring)({
            opacity: M,
            config: A,
            onStart: () => j(!0),
            onRest: () => j(1 === M)
        }),
        k = (0, d.useSpring)(
            {
                transform: 'translateX('.concat(1 === M ? 0 : (-1 * (b - 380)) / 2 + 47.5, 'px)'),
                config: A
            },
            'respect-motion-settings'
        ),
        w = (0, d.useTransition)(0 === M, {
            from: { opacity: 0 },
            enter: {
                opacity: 1,
                delay: 500
            },
            config: A
        }),
        B = (0, d.useTransition)(0 === M, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: A
        }),
        H = a.useCallback(
            (e) => {
                if (e === O.length) D(0), (0, E.Lp)(t, 'signature');
                else if (0 === M) D(1);
                else {
                    var n;
                    h._9(t, {
                        currentStep: e,
                        furthestStep: Math.max(null !== (n = v.furthestStep) && void 0 !== n ? n : 0, e)
                    });
                }
            },
            [M, t, v.furthestStep, O.length]
        );
    a.useEffect(() => {
        (0, E.Lp)(t, (0, E.Qh)(v.currentStep));
    }, [t, v.currentStep]),
        a.useEffect(() => {
            let e = (0, _.pP)((0, l.debounce)(() => P(window.innerWidth), 250));
            return (0, _.YP)(e, document.body), () => (0, _.UC)(e, document.body);
        }, [M, y]);
    let V = a.useMemo(() => null != Z && Object.values(Z).some((e) => null != e), [Z]),
        F = a.useMemo(() => (null != Z && Object.values(Z).length > 0 ? (0, f.G)(Z).find((e) => e.hasError) : null), [Z]),
        Y = a.useCallback(() => {
            D(1), h._9(t, { currentStep: null == F ? void 0 : F.index });
        }, [null == F ? void 0 : F.index, t]),
        W = a.useCallback(() => {
            (0, u.fH)(u.v0.ADMIN_UPSELL);
        }, []),
        z = a.useCallback(() => {
            (0, f.V)({
                guildId: t,
                onSuccess: () => {
                    W(), n();
                },
                progress: v
            });
        }, [t, v, W, n]),
        K = a.useRef(null),
        q =
            null != F
                ? (0, i.jsxs)('div', {
                      className: N.tooltipContents,
                      children: [
                          (0, i.jsx)(d.WarningIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: N.errorIcon
                          }),
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-primary',
                                      children: C.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
                                  }),
                                  (0, i.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: C.Z.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
                                          backHook: (e, t) =>
                                              (0, i.jsx)(
                                                  d.Anchor,
                                                  {
                                                      className: N.errorLink,
                                                      onClick: Y,
                                                      children: e
                                                  },
                                                  t
                                              )
                                      })
                                  })
                              ]
                          })
                      ]
                  })
                : null;
    return (0, i.jsx)(o.animated.div, {
        ref: K,
        style: U,
        className: N.modal,
        children: (0, i.jsxs)(d.FocusRingScope, {
            containerRef: K,
            children: [
                (0, i.jsx)(d.Button, {
                    className: N.close,
                    look: d.Button.Looks.OUTLINED,
                    size: d.Button.Sizes.MEDIUM,
                    color: d.Button.Colors.PRIMARY,
                    onClick: n,
                    children: C.Z.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
                }),
                (0, i.jsxs)('div', {
                    className: N.content,
                    children: [
                        (0, i.jsxs)('div', {
                            className: N.panel,
                            children: [
                                (0, i.jsx)(o.animated.div, {
                                    style: G,
                                    className: r()(N.stepsContainer, { [N.hidden]: !y }),
                                    children: (0, i.jsx)(S.Z, { guildId: t })
                                }),
                                (0, i.jsx)('div', {
                                    className: r()(N.navigationContainer, { [N.elevatedNavigationContainer]: !y }),
                                    children: (0, i.jsx)(p.Z, {
                                        steps: O,
                                        progress: v,
                                        updateCurrentStep: H,
                                        animationStyle: G,
                                        animationClassName: r()({ [N.hidden]: !y })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(o.animated.div, {
                            style: G,
                            className: r()(N.divider, {
                                [N.hidden]: !y,
                                [N.dividerResponsive]: y
                            })
                        }),
                        (0, i.jsx)(o.animated.div, {
                            style: k,
                            className: r()(N.sidebar, { [N.sidebarResponsive]: y }),
                            children: (0, i.jsx)(T.Z, {
                                guildId: t,
                                signed: R,
                                setSigned: y ? void 0 : x,
                                sidebarWidth: 380,
                                windowWidth: b,
                                transition: w,
                                brandPrimaryColor: v.brandPrimaryColor
                            })
                        })
                    ]
                }),
                B(
                    (e, t) =>
                        t &&
                        (0, i.jsx)(o.animated.div, {
                            style: e,
                            className: N.submit,
                            children: (0, i.jsx)(d.Tooltip, {
                                color: d.Tooltip.Colors.GREY,
                                tooltipClassName: N.tooltip,
                                text: q,
                                'aria-label': null != F ? C.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
                                shouldShow: null != F,
                                forceOpen: null != F,
                                children: (e) =>
                                    (0, i.jsx)(g.Z, {
                                        ...e,
                                        themeColor: v.brandPrimaryColor,
                                        disabled: !R || V,
                                        submitting: L,
                                        look: d.Button.Looks.FILLED,
                                        size: d.Button.Sizes.MEDIUM,
                                        color: d.Button.Colors.BRAND,
                                        onClick: z,
                                        children: C.Z.Messages.FINISH
                                    })
                            })
                        })
                )
            ]
        })
    });
}
